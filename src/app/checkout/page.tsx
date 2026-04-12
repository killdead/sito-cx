import Link from "next/link";
import { notFound } from "next/navigation";

import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { Button } from "@/components/ui/Button";
import { getTicketProduct } from "@/lib/tickets";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product: requestedProduct } = await searchParams;
  const productId = requestedProduct || "full-pass";
  const product = getTicketProduct(productId);

  if (!product) {
    notFound();
  }

  if (!product.checkoutEnabled || !product.amountCents) {
    return (
      <main className="section-space">
        <div className="container-shell">
          <div className="checkout-shell">
            <div className="checkout-intro">
              <p className="checkout-badge">Checkout</p>
              <h1 className="checkout-title">Partecipa al CilentoXtreme</h1>
              <p className="checkout-subtitle">Completa la registrazione in meno di 1 minuto</p>
            </div>
            <div className="checkout-card">
              <p className="checkout-feedback checkout-feedback--error">
                Questo ticket non è ancora configurato per il pagamento online.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/tickets">Torna ai ticket</Button>
                <Button href="/contatti" variant="secondary">
                  Contattaci
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section-space">
      <div className="container-shell">
        <CheckoutForm
          amount={product.amountCents}
          currency={product.currency}
          productId={product.id}
          productTitle={product.title}
          productDescription={product.shortDescription ?? product.description}
          productIncludes={product.includes}
          priceLabel={product.priceLabel}
          paypalFallbackEnabled={product.paypalFallbackEnabled}
          stripePaymentLink={product.stripePaymentLink}
        />
        <p className="mt-6 text-center text-sm text-brand-ink/58">
          Hai cambiato idea? <Link className="font-semibold text-brand-red" href="/tickets">Torna alla lista ticket</Link>
        </p>
      </div>
    </main>
  );
}
