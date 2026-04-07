"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        style?: Record<string, string | number | boolean>;
        createOrder: () => Promise<string>;
        onApprove: (data: { orderID: string }) => Promise<void>;
        onError: (error: unknown) => void;
      }) => { render: (selector: HTMLElement) => Promise<void> };
    };
  }
}

type PayPalCheckoutButtonProps = {
  productId: string;
  disabled?: boolean;
};

function getPayPalClientId() {
  return process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
}

function ensurePayPalScript(clientId: string) {
  return new Promise<void>((resolve, reject) => {
    if (window.paypal) {
      resolve();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>('script[data-paypal-sdk="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("PayPal SDK failed to load")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&currency=EUR&intent=capture&components=buttons`;
    script.async = true;
    script.dataset.paypalSdk = "true";
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error("PayPal SDK failed to load")), { once: true });
    document.head.appendChild(script);
  });
}

export function PayPalCheckoutButton({ productId, disabled = false }: PayPalCheckoutButtonProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const clientId = getPayPalClientId();

  useEffect(() => {
    if (!containerRef.current || disabled || !clientId) {
      return;
    }

    let mounted = true;
    const activeClientId = clientId;

    async function setup() {
      try {
        setStatus("loading");
        await ensurePayPalScript(activeClientId);

        if (!mounted || !containerRef.current || !window.paypal) {
          return;
        }

        containerRef.current.innerHTML = "";

        await window.paypal
          .Buttons({
            style: {
              layout: "vertical",
              shape: "pill",
              label: "paypal",
              height: 46,
              tagline: "false",
            },
            createOrder: async () => {
              const response = await fetch("/api/paypal/create-order", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ productId }),
              });

              const result = (await response.json()) as { id?: string; error?: string };

              if (!response.ok || !result.id) {
                throw new Error(result.error || "Unable to create PayPal order");
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

              if (!response.ok) {
                throw new Error("Unable to capture PayPal order");
              }

              window.location.href = `/tickets?paypal=success&product=${encodeURIComponent(productId)}`;
            },
            onError: (error) => {
              console.error(error);
              setStatus("error");
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
        }
      }
    }

    void setup();

    return () => {
      mounted = false;
    };
  }, [clientId, disabled, productId]);

  if (!clientId) {
    return (
      <div className="paypal-shell paypal-shell--pending">
        <button type="button" className="paypal-fallback-button" disabled aria-disabled="true">
          <span className="paypal-fallback-button__brand">
            <span className="paypal-fallback-button__paypal">Pay</span>
            <span className="paypal-fallback-button__pal">Pal</span>
          </span>
          <span className="paypal-fallback-button__text">Paga con PayPal</span>
          <span className="paypal-fallback-button__state">Configura chiavi</span>
        </button>
      </div>
    );
  }

  if (disabled) {
    return (
      <div className="paypal-shell paypal-shell--pending">
        <button type="button" className="paypal-fallback-button" disabled aria-disabled="true">
          <span className="paypal-fallback-button__brand">
            <span className="paypal-fallback-button__paypal">Pay</span>
            <span className="paypal-fallback-button__pal">Pal</span>
          </span>
          <span className="paypal-fallback-button__text">Paga con PayPal</span>
          <span className="paypal-fallback-button__state">Prodotto non attivo</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`paypal-shell ${status === "error" ? "paypal-shell--error" : ""}`}>
      <div ref={containerRef} />
      {status === "loading" ? <p className="paypal-shell__message">Carico PayPal…</p> : null}
      {status === "error" ? <p className="paypal-shell__message">PayPal non disponibile. Riprova tra poco.</p> : null}
    </div>
  );
}
