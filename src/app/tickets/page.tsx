import { Button } from "@/components/ui/Button";
import { PASSES, WORKSHOPS } from "@/lib/tickets";

function getTicketHref(stripePaymentLink?: string) {
  return stripePaymentLink || "/contatti";
}

export default function TicketsPage() {
  return (
    <main className="pb-12">
      <section className="section-space pt-8">
        <div className="container-shell ticket-hero">
          <p className="ticket-hero__eyebrow">Tickets</p>
          <h1 className="ticket-hero__title">Scegli il pass giusto</h1>
          <p className="ticket-hero__text">
            <strong>Full Gaso Pass</strong> include tutto. <strong>Gaso Light Pass</strong> include quasi tutto, con una sola esclusione: le highline.
          </p>
          <div className="ticket-hero__actions">
            <Button href={getTicketHref(PASSES[0]?.stripePaymentLink)}>Compra Full Gaso Pass</Button>
            <Button href="/programma" variant="secondary">
              Guarda programma
            </Button>
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

          <div className="ticket-pass-grid">
            {PASSES.map((item) => (
              <article key={item.title} className="ticket-pass-card">
                <div className="ticket-pass-card__top">
                  <div>
                    <p className="ticket-pass-card__eyebrow">{item.eyebrow}</p>
                    <h3 className="ticket-pass-card__title">{item.title}</h3>
                    <p className="ticket-pass-card__summary">{item.shortDescription ?? item.description}</p>
                  </div>
                  <div className="ticket-pass-card__price-wrap">
                    <p className="ticket-pass-card__price-label">Prezzo</p>
                    <p className="ticket-pass-card__price">{item.priceLabel}</p>
                  </div>
                </div>

                {item.includes ? (
                  <div className="ticket-pass-card__list">
                    {item.includes.slice(0, 5).map((point) => (
                      <p key={point} className="ticket-pass-card__list-item">
                        {point}
                      </p>
                    ))}
                  </div>
                ) : null}

                <div className="ticket-pass-card__footer">
                  <Button href={getTicketHref(item.stripePaymentLink)} className="w-full justify-center">
                    {item.stripePaymentLink ? `Compra ${item.title}` : "Richiedi info"}
                  </Button>
                </div>
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

          <div className="ticket-workshop-grid">
            {WORKSHOPS.map((item) => (
              <article key={item.title} className="ticket-workshop-card">
                <div className="ticket-workshop-card__top">
                  <div>
                    <p className="ticket-workshop-card__author">{item.author}</p>
                    <h3 className="ticket-workshop-card__title">{item.title}</h3>
                  </div>
                  <div className="ticket-workshop-card__price-wrap">
                    <p className="ticket-workshop-card__price-label">Prezzo</p>
                    <p className="ticket-workshop-card__price">{item.priceLabel}</p>
                  </div>
                </div>
                <p className="ticket-workshop-card__summary">{item.shortDescription ?? item.description}</p>
                <p className="ticket-workshop-card__note">Dettagli e modalita di accesso ai workshop verranno comunicati separatamente.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
