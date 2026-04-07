import Image from "next/image";
import { Button } from "@/components/ui/Button";

const proofItems = [
  { title: "3 giorni pieni", text: "Tra attivita, workshop e tempo insieme." },
  { title: "3 spot", text: "Giungano, Trentinara e Capaccio Paestum, tutti collegati." },
  { title: "Camping", text: "Arrivi, monti la tenda e resti nel flow del weekend." },
];

const audienceItems = [
  "Per chi si muove tra roccia, fettucce e termiche.",
  "Per chi cerca lo spot, la situazione e il divertimento.",
  "Per chi preferisce fare piuttosto che stare a guardare.",
];

const includeItems = [
  {
    id: "01",
    title: "Tre competizioni",
    text: "Street boulder, speed line e contest del miglior volo del weekend.",
  },
  {
    id: "02",
    title: "Workshop",
    text: "Per chi sa gia perche viene, e vuole uscire dai tre giorni con qualcosa in piu.",
  },
  {
    id: "03",
    title: "Spettacoli e vita di festival",
    text: "Musica live, dj set, spettacoli e momenti serali distribuiti lungo tutto il weekend.",
  },
];

const activityCards = [
  {
    title: "Highline",
    description: "Camminare sospesi nel vuoto. Si parte da 60 metri e si arriva al mostro da 1350.",
    href: "/attivita/highline",
    image: "/highline.jpg",
  },
  {
    title: "Parapendio",
    description: "Sui templi di Paestum a motore, sopra la valle in libero. Due modi diversi di stare in aria.",
    href: "/attivita/fly",
    image: "/parapendio.jpg",
  },
  {
    title: "Street Boulder",
    description: "Per chi ama muoversi, leggere il contesto e restare dentro al gesto senza filtri.",
    href: "/attivita/climbing",
    image: "/streetboulder.jpg",
  },
];

const logistics = [
  {
    title: "Dove",
    text: "Tra Giungano, Trentinara e Capaccio Paestum, con spot e punti chiave distribuiti ma ben collegati.",
  },
  {
    title: "Dormire",
    text: "Puoi scegliere camping o strutture in zona, in base a come vuoi vivere il weekend.",
  },
  {
    title: "Come partecipare",
    text: "Vai alla pagina festival per capire cosa include l'esperienza e come organizzarti.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden pb-12">
      <section className="px-3 pb-12 pt-4 md:px-6 md:pt-6">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative overflow-hidden rounded-[2.2rem] bg-brand-ink">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/8]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/hero.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,50,77,0.08)_0%,rgba(23,50,77,0.02)_40%,rgba(23,50,77,0.54)_100%)]" />

              <div className="absolute inset-x-0 top-0 z-10 hidden px-6 pt-6 sm:block md:px-8 md:pt-8 lg:pt-10">
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex rounded-full border border-white/16 bg-brand-sun px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                    22-23-24 maggio 2026
                  </span>
                  <span className="inline-flex rounded-full border border-white/16 bg-white/92 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-ink">
                    Giungano · Trentinara · Capaccio Paestum
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 hidden px-6 pb-14 sm:block md:px-8 lg:pb-16">
                <div className="max-w-[44rem]">
                  <h1 className="mt-6 max-w-[10ch] font-display text-[2.5rem] uppercase leading-[0.9] text-white md:text-[4rem] lg:text-[4.3rem]">
                    CilentoXtreme
                  </h1>
                  <p className="mt-4 max-w-[42ch] text-sm font-semibold uppercase tracking-[0.16em] text-brand-sun md:text-base">
                    Highline, volo e street boulder in tre giorni di pratica, camping e gaso.
                  </p>
                  <p className="mt-4 max-w-[24ch] text-sm leading-6 text-white md:text-base md:leading-7">
                    Si cammina sulle linee
                    <br />
                    Si scala in mezzo al paese
                    <br />
                    Si vola sopra la valle
                    <br />
                    <br />
                    E tutto quello che succede tra una cosa e l'altra
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button href="/tickets">Buy ticket</Button>
                    <Button href="/attivita" variant="secondary">
                      Scopri le attivita
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-1 pt-5 sm:hidden">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-brand-sun px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                  22-23-24 maggio 2026
                </span>
                <span className="inline-flex rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink">
                  Giungano · Trentinara · Capaccio Paestum
                </span>
              </div>
              <h1 className="mt-4 max-w-[10ch] font-display text-[2.25rem] uppercase leading-[0.92] text-brand-ink">
                CilentoXtreme
              </h1>
              <p className="mt-3 max-w-[30ch] text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
                Highline, volo e street boulder in tre giorni di pratica, camping e gaso.
              </p>
              <p className="mt-4 max-w-[24ch] text-sm leading-6 text-brand-ink">
                Si cammina sulle linee
                <br />
                Si scala in mezzo al paese
                <br />
                Si vola sopra la valle
                <br />
                <br />
                E tutto quello che succede tra una cosa e l'altra
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Button href="/tickets" className="justify-center">
                  Buy ticket
                </Button>
                <Button href="/attivita" variant="secondary" className="justify-center">
                  Scopri le attivita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-6 md:px-6">
        <div className="mx-auto max-w-[1240px] border-y border-brand-ink/12">
          <div className="grid gap-0 md:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr]">
            {proofItems.map((item, index) => (
              <article
                key={item.title}
                className={`border-b border-brand-ink/12 py-6 md:px-7 lg:border-b-0 ${
                  index < proofItems.length - 1 ? "lg:border-r lg:border-brand-ink/12" : ""
                } ${index === 0 ? "md:px-8" : ""}`}
              >
                <p
                  className={`font-display uppercase leading-none text-brand-ink ${
                    index === 0 ? "text-4xl md:text-[3.2rem]" : "text-[1.9rem] md:text-[2.35rem]"
                  }`}
                >
                  {item.title}
                </p>
                <p className="mt-3 max-w-[23ch] text-sm leading-6 text-brand-ink/72">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 py-10 md:px-6">
        <div className="mx-auto grid max-w-[1240px] gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Per chi</p>
            <h2 className="mt-3 max-w-[12ch] font-display text-4xl uppercase leading-[0.9] text-brand-ink md:text-6xl">
              Per chi vuole il contesto giusto
            </h2>
          </div>
          <div className="space-y-4 pt-2 lg:pt-10">
            {audienceItems.map((point) => (
              <p key={point} className="border-l-4 border-brand-red pl-4 text-sm leading-6 text-brand-ink/76 md:text-base">
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/56 px-3 py-10 md:px-6">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Cosa succede</p>
            <h2 className="mt-3 max-w-[11ch] font-display text-4xl uppercase leading-[0.9] text-brand-ink md:text-6xl">
              Tre giorni pieni davvero
            </h2>
          </div>
          <div>
            <div className="grid gap-5">
              {includeItems.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-2 border-b border-brand-ink/12 pb-5 last:border-b-0 last:pb-0 md:grid-cols-[72px_1fr]"
                >
                  <p className="font-display text-[2.1rem] uppercase leading-none text-brand-red md:text-[2.4rem]">
                    {item.id}
                  </p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/62">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-brand-ink/76 md:text-base">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-10 md:px-6">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Discipline</p>
              <h2 className="mt-2 font-display text-5xl uppercase leading-none text-brand-ink md:text-7xl">
                Le attivita che definiscono il festival
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {activityCards.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1rem] border border-brand-ink/12 bg-white">
                <div className="relative aspect-[4/3.05] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,50,77,0.02)_0%,rgba(23,50,77,0.28)_100%)]" />
                </div>
                <div className="p-5 md:px-5 md:pb-5 md:pt-4">
                  <h3 className="text-[1.72rem] font-semibold leading-tight text-brand-ink">{item.title}</h3>
                  <p className="mt-5 max-w-[28ch] text-sm leading-6 text-brand-ink/72">{item.description}</p>
                  <div className="mt-4">
                    <Button href={item.href} variant="secondary" className="min-h-10 px-4 text-sm">
                      Scopri
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 py-10 md:px-6">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Logistica</p>
            <h2 className="mt-3 max-w-[12ch] font-display text-4xl uppercase leading-[0.9] text-brand-ink md:text-6xl">
              Prima di decidere devi capire se e facile esserci
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/info" variant="secondary">
                Vai alle info
              </Button>
              <Button href="/tickets">Buy ticket</Button>
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-brand-ink/12 bg-white px-5 py-5 md:px-6">
            <div className="grid gap-4">
              {logistics.map((item) => (
                <div key={item.title} className="border-b border-brand-ink/12 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-red">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-brand-ink/76 md:text-base">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
