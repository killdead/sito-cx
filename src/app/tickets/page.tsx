import { PayPalCheckoutButton } from "@/components/tickets/PayPalCheckoutButton";
import { Button } from "@/components/ui/Button";
import { PASSES, WORKSHOPS, type TicketProduct } from "@/lib/tickets";

function PaymentActions({ item }: { item: TicketProduct }) {
  const paypalConfigured = Boolean(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID);

  return (
    <div className="payment-rail mt-7">
      <div className="payment-rail__header">
        <div>
          <p className="payment-rail__eyebrow">Checkout</p>
          <p className="payment-rail__price">{item.priceLabel}</p>
        </div>
        <p className="payment-rail__note">Checkout pulito: Stripe come primaria, PayPal ufficiale come alternativa</p>
      </div>
      <div className="checkout-stack">
        <div className="checkout-stack__primary">
          <div className="checkout-stack__copy">
            <p className="checkout-stack__title">Carta e wallet</p>
            <p className="checkout-stack__subcopy">Vai al checkout Stripe e completa il pagamento in pochi passaggi.</p>
          </div>
          <Button href={item.stripeHref} className="checkout-stack__cta">
            <span className="payment-action__label">Vai al checkout</span>
            <span className="payment-action__meta">Carta, Apple Pay o metodi supportati da Stripe</span>
          </Button>
        </div>

        <div className="checkout-stack__separator">
          <span>oppure</span>
        </div>

        <div className="checkout-stack__secondary">
          <div className="checkout-stack__copy">
            <p className="checkout-stack__title">PayPal</p>
            <p className="checkout-stack__subcopy">
              {paypalConfigured
                ? "Checkout PayPal ufficiale integrato nella scheda ticket."
                : "Serve configurare le chiavi PayPal locali per vedere il bottone ufficiale."}
            </p>
          </div>
          <PayPalCheckoutButton productId={item.id} disabled={!item.paypalEnabled} />
        </div>
      </div>
    </div>
  );
}

export default function TicketsPage() {
  return (
    <main className="pb-12">
      <section className="section-space pt-8">
        <div className="container-shell grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">Tickets</p>
            <h1 className="mt-3 max-w-[10ch] font-display text-5xl uppercase leading-[0.9] text-brand-ink md:text-7xl lg:text-8xl">
              Buy ticket
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-brand-ink/76 md:text-lg">
              Due ticket festival e due workshop premium acquistabili separatamente, con il Full Pass che apre l'esperienza completa del weekend.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/programma">Guarda programma</Button>
              <Button href="/info" variant="secondary">
                Apri info utili
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-6 md:px-6">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Festival passes</p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-[0.92] text-brand-ink md:text-6xl">
              Scegli il pass
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {PASSES.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-brand-ink/12 bg-white p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">{item.eyebrow}</p>
                <h3 className="mt-3 text-3xl font-semibold leading-tight text-brand-ink md:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-[48ch] text-sm leading-6 text-brand-ink/74 md:text-base">{item.description}</p>
                {item.includes ? (
                  <div className="mt-6 space-y-3">
                    {item.includes.map((point) => (
                      <p key={point} className="border-l-4 border-brand-red pl-4 text-sm leading-6 text-brand-ink/76">
                        {point}
                      </p>
                    ))}
                  </div>
                ) : null}
                <PaymentActions item={item} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/56 px-3 py-8 md:px-6">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Workshop premium</p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-[0.92] text-brand-ink md:text-6xl">
              Add-on separati
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {WORKSHOPS.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-brand-ink/12 bg-white p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">{item.author}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-brand-ink md:text-3xl">{item.title}</h3>
                <p className="mt-4 max-w-[48ch] text-sm leading-6 text-brand-ink/74 md:text-base">{item.description}</p>
                <PaymentActions item={item} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
