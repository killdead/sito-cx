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
      "Linee festival aperte per tutto il weekend, piu la linea da 1 km e la speed line come momenti centrali della parte highline.",
    imageSrc: "/activities/highline/Highline attività.jpg",
  },
  {
    title: "Street Boulder",
    category: "Climbing",
    description:
      "Gara e blocchi distribuiti tra Trentinara e Giungano, con il paese che diventa terreno di gioco per tutta la parte boulder.",
    imageSrc: "/activities/climbing/Climbing attività.jpg",
  },
  {
    title: "Arrampicata in falesia",
    category: "Climbing",
    description:
      "Una parte del festival dedicata alla falesia, per chi vuole uscire dal borgo e stare sulla roccia vera.",
    imageSrc: "/activities/climbing/Arrampicata in falesia.jpeg",
  },
  {
    title: "ZipLine",
    category: "Open activity",
    description:
      "Una delle attivita aperte da vivere sul posto, dentro il ritmo del weekend e non come semplice riempitivo.",
    imageSrc: "/activities/Cilentoinvolo1.jpg",
  },
  {
    title: "Voli in Tandem",
    category: "Volo",
    description:
      "Il modo piu diretto per entrare nella parte volo se non pratichi in autonomia ma vuoi stare davvero in aria.",
  },
  {
    title: "Attivita di avvicinamento al parapendio",
    category: "Volo",
    description:
      "Momenti pensati per avvicinarsi al parapendio, capire come funziona e stare piu vicini alla parte volo del festival.",
    imageSrc: "/activities/fly/fly- avvicinamento al parapendio.jpeg",
  },
  {
    title: "Workshop di chiodatura dal basso - Rolando Larcher",
    category: "Workshop",
    description:
      "Uno dei workshop piu forti della parte climbing, dedicato a una pratica precisa e non a una dimostrazione generica.",
  },
  {
    title: "Workshop Hike & Fly / Cross Country - Moreno Parmesan",
    category: "Workshop",
    description:
      "Workshop dedicato al lato piu tecnico, mobile e leggibile del volo, per chi vuole stare dentro quella disciplina sul serio.",
  },
  {
    title: "Workshop Nodi",
    category: "Workshop",
    description:
      "Una parte tecnica e pratica legata alla highline, pensata per chi vuole affinare una base che conta davvero.",
  },
  {
    title: "Workshop Rescue e prove di recupero Highline",
    category: "Workshop",
    description:
      "Versione dedicata alla highline, centrata sulla parte sicurezza e gestione delle situazioni reali.",
    imageSrc: "/activities/highline/Rescue highline.jpg",
  },
  {
    title: "Competizione Speedline Highline",
    category: "Competizione",
    description:
      "La parte piu dura della highline nel weekend, con prove libere, finali e un impatto forte su tutta la scena del festival.",
  },
  {
    title: "Gara XC parapendio",
    category: "Competizione",
    description:
      "La competizione legata al volo durante il festival, con chiusura finale e premio per il miglior volo del weekend.",
  },
  {
    title: "Arrampicata bambini",
    category: "Climbing",
    description:
      "Uno spazio piu accessibile dedicato ai piu piccoli dentro la parte arrampicata del festival.",
    imageSrc: "/activities/climbing/Climbing-bimbi.jpeg",
  },
  {
    title: "Spettacolo e live",
    category: "Serata",
    description:
      "Spettacolo, live sound e DJ set come parte serale del weekend, quando si esce dagli spot ma non dal ritmo del festival.",
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
