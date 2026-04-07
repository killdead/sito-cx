"use client";

import {
  Elements,
  ExpressCheckoutElement,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { PayPalFallbackButton } from "@/components/checkout/PayPalFallbackButton";

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

type CheckoutFormProps = {
  amount: number;
  currency: "eur";
  productId: string;
  productTitle: string;
  productDescription: string;
  productIncludes?: string[];
  priceLabel: string;
  paypalFallbackEnabled: boolean;
};

type PaymentState = "idle" | "loading" | "success" | "error";

type IntentResponse = {
  clientSecret?: string;
  error?: string;
};

function getFriendlyMessage(message?: string) {
  if (!message) {
    return "Qualcosa non ha funzionato. Controlla i dati e riprova.";
  }

  const normalized = message.toLowerCase();

  if (normalized.includes("card was declined") || normalized.includes("declined")) {
    return "La carta è stata rifiutata. Prova con un altro metodo di pagamento.";
  }

  if (normalized.includes("network")) {
    return "Connessione instabile. Riprova tra qualche secondo.";
  }

  if (normalized.includes("client secret")) {
    return "Il checkout non è pronto. Ricarica la pagina e riprova.";
  }

  if (normalized.includes("incomplete")) {
    return "Compila tutti i campi richiesti prima di continuare.";
  }

  return "Pagamento non completato. Riprova oppure usa un metodo diverso.";
}

function EmbeddedCheckout({
  amount,
  productId,
  productTitle,
  productDescription,
  productIncludes,
  priceLabel,
  paypalFallbackEnabled,
}: Omit<CheckoutFormProps, "currency">) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [paymentState, setPaymentState] = useState<PaymentState>("idle");
  const [message, setMessage] = useState<string>("");
  const [paypalInExpress, setPaypalInExpress] = useState(false);
  const [expressReady, setExpressReady] = useState(false);

  const returnUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return "/checkout/success";
    }

    return `${window.location.origin}/checkout/success?product=${encodeURIComponent(productId)}`;
  }, [productId]);

  const handleSuccess = useCallback(() => {
    setPaymentState("success");
    setMessage("Pagamento completato. Ti stiamo reindirizzando.");
    router.push(`/checkout/success?product=${encodeURIComponent(productId)}`);
  }, [productId, router]);

  const confirmWithStripe = useCallback(async () => {
    if (!stripe || !elements) {
      setPaymentState("error");
      setMessage("Il checkout non è ancora pronto. Ricarica la pagina.");
      return;
    }

    setPaymentState("loading");
    setMessage("");

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: returnUrl,
      },
      redirect: "if_required",
    });

    if (result.error) {
      setPaymentState("error");
      setMessage(getFriendlyMessage(result.error.message));
      return;
    }

    const status = result.paymentIntent?.status;

    if (status === "succeeded" || status === "processing") {
      handleSuccess();
      return;
    }

    setPaymentState("error");
    setMessage("Il pagamento non è stato completato. Riprova oppure usa un altro metodo.");
  }, [elements, handleSuccess, returnUrl, stripe]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await confirmWithStripe();
  };

  const handleExpressReady = (event: { availablePaymentMethods?: Record<string, unknown> | null }) => {
    const paypalAvailable = Boolean(event.availablePaymentMethods?.paypal);
    setPaypalInExpress(paypalAvailable);
    setExpressReady(true);
  };

  const showPaypalFallback = paypalFallbackEnabled && expressReady && !paypalInExpress;

  return (
    <div className="checkout-shell">
      <div className="checkout-intro">
        <p className="checkout-badge">Checkout</p>
        <h1 className="checkout-title">Partecipa al CilentoXtreme</h1>
        <p className="checkout-subtitle">Completa la registrazione in meno di 1 minuto</p>
        <div className="checkout-product">
          <div>
            <p className="checkout-product__eyebrow">Stai acquistando</p>
            <p className="checkout-product__title">{productTitle}</p>
            <p className="checkout-product__summary">{productDescription}</p>
          </div>
          <p className="checkout-product__price">{priceLabel}</p>
        </div>
        {productIncludes?.length ? (
          <div className="checkout-highlights">
            {productIncludes.slice(0, 4).map((item) => (
              <p key={item} className="checkout-highlights__item">
                {item}
              </p>
            ))}
          </div>
        ) : null}
      </div>

      <div className="checkout-card">
        <div className="checkout-section">
          <ExpressCheckoutElement
            options={{
              buttonHeight: 52,
              paymentMethodOrder: ["apple_pay", "google_pay", "link", "paypal"],
            }}
            onReady={handleExpressReady}
            onConfirm={confirmWithStripe}
          />
        </div>

        <div className="checkout-divider">
          <span>oppure paga con carta</span>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="checkout-field">
            <label className="checkout-label">Email</label>
            <LinkAuthenticationElement
              options={{
                defaultValues: {
                  email: "",
                },
              }}
            />
          </div>

          <div className="checkout-field">
            <label className="checkout-label">Pagamento</label>
            <PaymentElement
              options={{
                layout: "accordion",
                business: {
                  name: "CilentoXtreme",
                },
              }}
            />
          </div>

          <button
            type="submit"
            className="checkout-submit"
            disabled={!stripe || !elements || paymentState === "loading"}
          >
            {paymentState === "loading" ? "Pagamento in corso…" : "Completa pagamento"}
          </button>
        </form>

        {showPaypalFallback ? (
          <div className="checkout-paypal-fallback">
            <p className="checkout-fallback-title">Oppure paga con PayPal</p>
            <PayPalFallbackButton
              amount={amount}
              currency="eur"
              description={productTitle}
              productId={productId}
              onSuccess={handleSuccess}
              onError={(nextMessage) => {
                setPaymentState("error");
                setMessage(nextMessage);
              }}
            />
          </div>
        ) : null}

        {paymentState === "error" ? <p className="checkout-feedback checkout-feedback--error">{message}</p> : null}
        {paymentState === "success" ? <p className="checkout-feedback checkout-feedback--success">{message}</p> : null}
      </div>
    </div>
  );
}

export function CheckoutForm({
  amount,
  currency,
  productId,
  productTitle,
  productDescription,
  productIncludes,
  priceLabel,
  paypalFallbackEnabled,
}: CheckoutFormProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const requestKeyRef = useRef<string | null>(null);

  const requestKey = `${productId}:${amount}:${currency}`;

  useEffect(() => {
    if (!stripePromise) {
      setLoading(false);
      setError("Configura NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY per attivare il checkout.");
      return;
    }

    if (requestKeyRef.current === requestKey) {
      return;
    }

    requestKeyRef.current = requestKey;

    const controller = new AbortController();

    async function createIntent() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
            currency,
            productId,
          }),
          signal: controller.signal,
        });

        const result = (await response.json()) as IntentResponse;

        if (!response.ok || !result.clientSecret) {
          throw new Error(result.error || "Client secret mancante");
        }

        setClientSecret(result.clientSecret);
      } catch (nextError) {
        if (controller.signal.aborted) {
          return;
        }

        console.error(nextError);
        setError(getFriendlyMessage(nextError instanceof Error ? nextError.message : undefined));
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void createIntent();

    return () => {
      controller.abort();
    };
  }, [amount, currency, productId, requestKey]);

  const options = useMemo(
    () =>
      clientSecret
        ? {
            clientSecret,
            appearance: {
              theme: "stripe" as const,
              variables: {
                colorPrimary: "#ea4336",
                colorText: "#17324d",
                colorBackground: "#ffffff",
                borderRadius: "18px",
              },
            },
            loader: "auto" as const,
          }
        : undefined,
    [clientSecret],
  );

  if (loading) {
    return (
      <div className="checkout-shell">
        <div className="checkout-intro">
          <p className="checkout-badge">Checkout</p>
          <h1 className="checkout-title">Partecipa al CilentoXtreme</h1>
          <p className="checkout-subtitle">Completa la registrazione in meno di 1 minuto</p>
        </div>
        <div className="checkout-card">
          <p className="checkout-feedback">Sto preparando il checkout sicuro…</p>
        </div>
      </div>
    );
  }

  if (error || !clientSecret || !stripePromise || !options) {
    return (
      <div className="checkout-shell">
        <div className="checkout-intro">
          <p className="checkout-badge">Checkout</p>
          <h1 className="checkout-title">Partecipa al CilentoXtreme</h1>
          <p className="checkout-subtitle">Completa la registrazione in meno di 1 minuto</p>
        </div>
        <div className="checkout-card">
          <p className="checkout-feedback checkout-feedback--error">
            {error || "Il checkout non è disponibile adesso. Riprova tra poco."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <EmbeddedCheckout
        amount={amount}
        productId={productId}
        productTitle={productTitle}
        productDescription={productDescription}
        productIncludes={productIncludes}
        priceLabel={priceLabel}
        paypalFallbackEnabled={paypalFallbackEnabled}
      />
    </Elements>
  );
}
