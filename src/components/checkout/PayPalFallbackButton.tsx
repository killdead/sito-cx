"use client";

import { useEffect, useRef, useState } from "react";

type PayPalFallbackButtonProps = {
  amount: number;
  currency: "eur";
  description: string;
  productId: string;
  onSuccess: () => void;
  onError: (message: string) => void;
};

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        style?: Record<string, string | number | boolean>;
        createOrder: () => Promise<string>;
        onApprove: (data: { orderID: string }) => Promise<void>;
        onError: (error: unknown) => void;
      }) => { render: (target: HTMLElement) => Promise<void> };
    };
  }
}

function loadPayPalSdk(clientId: string) {
  return new Promise<void>((resolve, reject) => {
    if (window.paypal) {
      resolve();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>('script[data-paypal-sdk="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("PayPal SDK unavailable")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&currency=EUR&intent=capture&components=buttons`;
    script.async = true;
    script.dataset.paypalSdk = "true";
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error("PayPal SDK unavailable")), { once: true });
    document.head.appendChild(script);
  });
}

export function PayPalFallbackButton({
  amount,
  currency,
  description,
  productId,
  onSuccess,
  onError,
}: PayPalFallbackButtonProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    if (!clientId || !containerRef.current) {
      return;
    }

    let mounted = true;
    const activeClientId = clientId;

    async function mountButtons() {
      try {
        setStatus("loading");
        await loadPayPalSdk(activeClientId);

        if (!mounted || !containerRef.current || !window.paypal) {
          return;
        }

        containerRef.current.innerHTML = "";

        await window.paypal
          .Buttons({
            style: {
              layout: "vertical",
              shape: "pill",
              color: "gold",
              label: "paypal",
              height: 50,
            },
            createOrder: async () => {
              const response = await fetch("/api/paypal/create-order", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  amount,
                  currency,
                  description,
                  productId,
                }),
              });

              const result = (await response.json()) as { id?: string; error?: string };

              if (!response.ok || !result.id) {
                throw new Error(result.error || "PayPal non disponibile in questo momento.");
              }

              return result.id;
            },
            onApprove: async ({ orderID }) => {
              const response = await fetch("/api/paypal/capture-order", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ orderId: orderID }),
              });

              const result = (await response.json()) as { error?: string };

              if (!response.ok) {
                throw new Error(result.error || "Il pagamento PayPal non è stato confermato.");
              }

              onSuccess();
            },
            onError: () => {
              setStatus("error");
              onError("PayPal non è disponibile adesso. Riprova tra poco o usa la carta.");
            },
          })
          .render(containerRef.current);

        if (mounted) {
          setStatus("ready");
        }
      } catch (error) {
        console.error(error);
        if (mounted) {
          setStatus("error");
          onError("PayPal non è disponibile adesso. Riprova tra poco o usa la carta.");
        }
      }
    }

    void mountButtons();

    return () => {
      mounted = false;
    };
  }, [amount, currency, description, onError, onSuccess, productId]);

  if (!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID) {
    return null;
  }

  return (
    <div className="paypal-fallback-wrap">
      <div ref={containerRef} />
      {status === "loading" ? <p className="checkout-helper">Carico PayPal…</p> : null}
    </div>
  );
}
