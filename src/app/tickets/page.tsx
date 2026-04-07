import { Button } from "@/components/ui/Button";
import { PASSES, WORKSHOPS } from "@/lib/tickets";

function getTicketHref(productId: string, enabled: boolean) {
  return enabled ? `/checkout?product=${productId}` : "/contatti";
}

export default function TicketsPage() {
  return (
    <main className="pb-12">
      <section className="section-space pt-8">
        <div className="container-shell grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">Tickets</p>
            <h1 className="mt-3 max-w-[10ch] font-display text-5xl uppercase leading-[0.9] text-brand-ink md:text-7xl lg:text-8xl">
              Scegli il tuo accesso
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-brand-ink/76 md:text-lg">
              Prima scegli il ticket giusto. Il pagamento si apre dopo, in una pagina separata, con wallet veloci, carta e PayPal.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/checkout?product=full-pass">Compra Full Pass</Button>
              <Button href="/programma" variant="secondary">
                Guarda programma
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
              <article key={item.title} className="flex h-full flex-col rounded-[1.75rem] border border-brand-ink/12 bg-white p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">{item.eyebrow}</p>
                    <h3 className="mt-3 text-3xl font-semibold leading-tight text-brand-ink md:text-4xl">{item.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand-ink/48">Prezzo</p>
                    <p className="mt-1 text-2xl font-semibold text-brand-ink">{item.priceLabel}</p>
                  </div>
                </div>
                <p className="mt-4 text-base leading-7 text-brand-ink/74">{item.shortDescription ?? item.description}</p>
                {item.includes ? (
                  <div className="mt-6 space-y-3">
                    {item.includes.map((point) => (
                      <p key={point} className="border-l-4 border-brand-red pl-4 text-sm leading-6 text-brand-ink/76">
                        {point}
                      </p>
                    ))}
                  </div>
                ) : null}
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={getTicketHref(item.id, item.checkoutEnabled)}>
                    {item.checkoutEnabled ? `Compra ${item.title}` : "Richiedi info"}
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

          <div className="grid gap-5 lg:grid-cols-2">
            {WORKSHOPS.map((item) => (
              <article key={item.title} className="flex h-full flex-col rounded-[1.75rem] border border-brand-ink/12 bg-white p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">{item.author}</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-brand-ink md:text-3xl">{item.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-brand-ink/48">Prezzo</p>
                    <p className="mt-1 text-2xl font-semibold text-brand-ink">{item.priceLabel}</p>
                  </div>
                </div>
                <p className="mt-4 text-base leading-7 text-brand-ink/74">{item.shortDescription ?? item.description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={getTicketHref(item.id, item.checkoutEnabled)}>
                    {item.checkoutEnabled ? "Prenota workshop" : "Richiedi info"}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
