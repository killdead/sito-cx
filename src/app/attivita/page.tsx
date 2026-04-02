import Image from "next/image";
import { Button } from "@/components/ui/Button";

type ActivityItem = {
  title: string;
  category: string;
  description: string;
  imageSrc?: string;
};

const activityItems: ActivityItem[] = [
  {
    title: "Highline Festival",
    category: "Highline",
    description:
      "Linee aperte per tutto il weekend, dalla 58 alla 1350. Tra spot, community e linee fighissime.",
    imageSrc: "/activities/highline/Highline attività.jpg",
  },
  {
    title: "Street Boulder",
    category: "Climbing",
    description:
      "Trentinara e la parete. Vicoli, muri, piazze. Tutto e scalabile.",
    imageSrc: "/activities/climbing/Climbing attività.jpg",
  },
  {
    title: "Arrampicata in falesia",
    category: "Climbing",
    description:
      "Dal campeggio un sentiero porta alle prime vie della valle: oltre 100 vie di arrampicata sportiva a pochi minuti dal festival.",
    imageSrc: "/activities/climbing/Arrampicata in falesia.jpeg",
  },
  {
    title: "ZipLine",
    category: "Open activity",
    description:
      "Il vento in faccia, la valle sotto, il mare all'orizzonte. Un minuto e mezzo di volo puro a 120 km/h sopra il Cilento. Prenotazione e biglietto separati.",
    imageSrc: "/activities/Cilentoinvolo1.jpg",
  },
  {
    title: "Voli in Tandem",
    category: "Volo",
    description:
      "Un volo in tandem per chi non pratica, con possibilita di farlo in volo libero o a motore.",
  },
  {
    title: "Attivita di avvicinamento al parapendio",
    category: "Volo",
    description:
      "Momenti introduttivi per capire da vicino come funziona il parapendio e come si entra in questa disciplina.",
    imageSrc: "/activities/fly/fly- avvicinamento al parapendio.jpeg",
  },
  {
    title: "Workshop di chiodatura dal basso - Rolando Larcher",
    category: "Workshop",
    description:
      "Un workshop tecnico dedicato alla chiodatura dal basso, guidato da Rolando Larcher.",
    imageSrc: "/Rolando Larcher.jpeg",
  },
  {
    title: "Workshop Hike & Fly / Cross Country - Moreno Parmesan",
    category: "Workshop",
    description:
      "Un workshop di due giorni con Moreno Parmesan per approfondire hike & fly e cross country. Teoria e pratica.",
  },
  {
    title: "Workshop Nodi",
    category: "Workshop",
    description:
      "Sessione pratica sui nodi, pensata per lavorare su una base tecnica essenziale.",
  },
  {
    title: "Workshop Rescue e prove di recupero Highline",
    category: "Workshop",
    description:
      "Workshop dedicato alle manovre di recupero in highline, con prove pratiche e attenzione alla sicurezza.",
    imageSrc: "/activities/highline/Rescue highline.jpg",
  },
  {
    title: "Competizione Speedline Highline",
    category: "Competizione",
    description:
      "La gara speedline del festival, con prove e finali concentrate nei momenti piu intensi del weekend.",
    imageSrc: "/speedmaka.jpeg",
  },
  {
    title: "Gara XC parapendio",
    category: "Competizione",
    description:
      "La competizione dedicata al cross country, con chiusura finale e premio per il miglior volo del weekend.",
  },
  {
    title: "Arrampicata bambini",
    category: "Climbing",
    description:
      "Uno spazio dedicato ai piu piccoli per provare l'arrampicata in modo semplice e sicuro.",
    imageSrc: "/activities/climbing/Climbing-bimbi.jpeg",
  },
  {
    title: "Spettacolo e live",
    category: "Serata",
    description:
      "Dopo giornate a spingere forte, la sera continua con il gaso tra spettacoli, live e DJ set.",
    imageSrc: "/spettacoli.jpeg",
  },
];

export default function ActivitiesPage() {
  return (
    <main className="pb-12">
      <section className="section-space pt-8">
        <div className="container-shell grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">Attivita</p>
            <h1 className="mt-3 max-w-[12ch] font-display text-5xl uppercase leading-[0.9] text-brand-ink md:text-7xl lg:text-8xl">
              Quello che trovi davvero
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-brand-ink/76 md:text-lg">
              Non solo le tre discipline principali, ma tutte le attivita vere del weekend: linee, gare, falesia, workshop, zipline, tandem e serata.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/programma">Guarda programma completo</Button>
              <Button href="/info" variant="secondary">
                Apri info utili
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-6 md:px-6">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {activityItems.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.5rem] border border-brand-ink/12 bg-white"
              >
                {item.imageSrc ? (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                ) : null}
                <div className="px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
                    {item.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-brand-ink">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-brand-ink/72 md:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
