import { Button } from "@/components/ui/Button";

const passes = [
  {
    title: "Full Pass",
    eyebrow: "Festival ticket",
    description:
      "Il pass completo per vivere tutte le anime di Cilento Extreme.",
    includes: [
      "Highline Festival",
      "Climbing Festival",
      "Fly Fest",
      "Camping",
      "Live, serate e spettacoli",
      "Workshop",
    ],
    cta: "Buy full pass",
  },
  {
    title: "Festival Pass",
    eyebrow: "Festival ticket",
    description:
      "La versione piu leggera per entrare nel festival e stare dentro al weekend, senza prendere il pacchetto completo.",
    includes: [
      "Accesso al festival",
      "Accesso a serate e programma generale",
      "Ticket separato dal Full Pass",
      "Non include highline e attivita collegate",
      "Non include i workshop premium",
    ],
    cta: "Buy festival pass",
  },
];

const workshops = [
  {
    title: "Workshop Hike & Fly / Cross Country",
    author: "Moreno Parmesan",
    description:
      "Workshop premium di due giorni dedicato a hike & fly e cross country, tra teoria e pratica.",
    cta: "Buy workshop",
  },
  {
    title: "Workshop di chiodatura dal basso",
    author: "Rolando Larcher",
    description:
      "Workshop premium dedicato alla chiodatura dal basso con Rolando Larcher.",
    cta: "Buy workshop",
  },
];

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
            {passes.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-brand-ink/12 bg-white p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">{item.eyebrow}</p>
                <h3 className="mt-3 text-3xl font-semibold leading-tight text-brand-ink md:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-[48ch] text-sm leading-6 text-brand-ink/74 md:text-base">{item.description}</p>
                <div className="mt-6 space-y-3">
                  {item.includes.map((point) => (
                    <p key={point} className="border-l-4 border-brand-red pl-4 text-sm leading-6 text-brand-ink/76">
                      {point}
                    </p>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/contatti">{item.cta}</Button>
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
            {workshops.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-brand-ink/12 bg-white p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">{item.author}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-brand-ink md:text-3xl">{item.title}</h3>
                <p className="mt-4 max-w-[48ch] text-sm leading-6 text-brand-ink/74 md:text-base">{item.description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/contatti">{item.cta}</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
