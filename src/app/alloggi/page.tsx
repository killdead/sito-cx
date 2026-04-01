import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { getGoogleMapsLink, INFO_POINTS } from "@/data/infoPoints";

type Stay = {
  name: string;
  area: string;
  note: string;
  href: string;
  imageSrc?: string;
};

const campingPoint = INFO_POINTS.find((point) => point.id === "camping");

const stays: Stay[] = [
  {
    name: "Paolino 848",
    area: "Trentinara",
    note: "Una delle prime soluzioni da guardare a Trentinara se vuoi stare vicino alla parte alta del festival.",
    href: "https://www.paolino848.it/site/index",
    imageSrc: "/lodging/trentinara/paolino/Paolino letto.jpeg",
  },
  {
    name: "San Nicola ospitalita diffusa",
    area: "Trentinara",
    note: "Ospitalita diffusa nel centro di Trentinara, utile se vuoi stare dentro al paese e vicino alla parte alta del festival.",
    href: "https://sannicola.org/",
    imageSrc: "/lodging/trentinara/san-nicola-ospitalita-diffusa/Snic.jpg",
  },
  {
    name: "Porta Soprana",
    area: "Trentinara",
    note: "Una soluzione in centro a Trentinara da tenere in lista se vuoi stare vicino alla parte alta del festival.",
    href: "https://www.booking.com/hotel/it/b-amp-b-porta-soprana.it.html",
  },
  {
    name: "B&B Belvedere",
    area: "Trentinara",
    note: "Da completare con dettagli e immagini.",
    href: "/contatti",
  },
];

const areaNotes = [
  {
    title: "Giungano",
    text: "La scelta piu naturale se vuoi stare vicino a camping, paese e parte boulder.",
  },
  {
    title: "Trentinara",
    text: "La zona piu comoda se vuoi tenerti vicino a highline e parte alta del festival.",
  },
  {
    title: "Capaccio Paestum",
    text: "La zona piu sensata se guardi soprattutto alla parte volo e all'area dei templi.",
  },
];

export default function LodgingPage() {
  return (
    <main className="pb-12">
      <section className="section-space pt-8">
        <div className="container-shell grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">Alloggi</p>
            <h1 className="mt-3 max-w-[10ch] font-display text-5xl uppercase leading-[0.9] text-brand-ink md:text-7xl lg:text-8xl">
              Dove dormire
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-brand-ink/76 md:text-lg">
              Se vuoi restare nel mezzo del festival, il camping e la scelta piu diretta. Se preferisci una struttura, qui trovi le soluzioni da guardare per prime.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/info">Torna alle info</Button>
              <Button href="/" variant="secondary">
                Partecipa
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-6 md:px-6">
        <div className="mx-auto max-w-[1240px] rounded-[2rem] border border-brand-ink/12 bg-white/88 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Camping festival</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-[0.92] text-brand-ink md:text-6xl">
            La base piu semplice
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-brand-ink/74 md:text-lg">
            Se vuoi stare dentro al weekend senza spezzarlo, il camping resta la soluzione piu semplice: arrivi, monti la tenda e resti nel mezzo della situazione.
          </p>
          <div className="mt-6">
            <Button href={campingPoint ? getGoogleMapsLink(campingPoint) : "/info"}>Apri camping</Button>
          </div>
        </div>
      </section>

      <section className="px-3 py-6 md:px-6">
        <div className="mx-auto max-w-[1240px] rounded-[2rem] border border-brand-ink/12 bg-white/88 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Strutture in zona</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-[0.92] text-brand-ink md:text-6xl">
            Le prime da guardare
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stays.map((stay) => (
              <article
                key={stay.name}
                className="overflow-hidden rounded-[1.5rem] border border-brand-ink/12 bg-white"
              >
                <div className="relative aspect-[4/3] bg-brand-paper">
                  {stay.imageSrc ? (
                    <Image
                      src={stay.imageSrc}
                      alt={stay.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 24vw, (min-width: 768px) 48vw, 100vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center px-4 text-center text-sm leading-6 text-brand-ink/46">
                      Immagine in arrivo
                    </div>
                  )}
                </div>

                <div className="space-y-4 p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">{stay.area}</p>
                    <h3 className="mt-2 text-2xl font-semibold leading-tight text-brand-ink">{stay.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-brand-ink/72">{stay.note}</p>
                  </div>
                  <Button href={stay.href} className="w-full justify-center">
                    Apri
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 py-6 md:px-6">
        <div className="mx-auto max-w-[1240px] rounded-[2rem] border border-brand-ink/12 bg-white/88 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Zone utili</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-[0.92] text-brand-ink md:text-6xl">
            Dove conviene stare
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {areaNotes.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-brand-ink/12 bg-white px-4 py-4">
                <h3 className="text-lg font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-ink/72">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
