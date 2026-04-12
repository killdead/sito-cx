import Image from "next/image";
import { Button } from "@/components/ui/Button";

type ActivityItem = {
  title: string;
  category: string;
  description: string;
  imageSrc?: string;
  section: "main" | "workshop" | "competition" | "community";
  place: string;
  moment: string;
  access: string;
};

const activityItems: ActivityItem[] = [
  {
    title: "Highline Festival",
    category: "Highline",
    description:
      "Linee aperte per tutto il weekend, dalla 58 alla 1350. Spot diversi, livelli diversi, stesso gaso.",
    imageSrc: "/activities/highline/Highline attività.jpg",
    section: "main",
    place: "Pareti e linee festival",
    moment: "Per tutto il weekend",
    access: "Per praticanti",
  },
  {
    title: "Street Boulder",
    category: "Climbing",
    description:
      "Vicoli, muri e piazze di Trentinara diventano un campo gara diffuso, con passaggi e atmosfera da festival.",
    imageSrc: "/activities/climbing/Climbing attività.jpg",
    section: "main",
    place: "Centro storico di Trentinara",
    moment: "Nel cuore del weekend",
    access: "Open + gara",
  },
  {
    title: "Attivita di avvicinamento al parapendio",
    category: "Volo",
    description:
      "Un primo contatto con il parapendio per capire da vicino attrezzatura, decollo, condizioni e logica del volo.",
    imageSrc: "/activities/fly/fly- avvicinamento al parapendio.jpeg",
    section: "community",
    place: "Area volo festival",
    moment: "Sessioni dedicate",
    access: "Per curiosi e beginner",
  },
  {
    title: "Parapendio",
    category: "Volo",
    description:
      "Volo libero nel cuore del festival, con tre decolli in zona e un contesto perfetto per vivere davvero la disciplina tra spot, piloti e condizioni diverse.",
    imageSrc: "/parapendio.jpg",
    section: "main",
    place: "Area volo del festival",
    moment: "Per tutto il weekend",
    access: "Per piloti",
  },
  {
    title: "Arrampicata in falesia",
    category: "Climbing",
    description:
      "Dal campeggio parti a piedi e sei subito sulle vie: una falesia vera, vicina, perfetta per scalare tra un'attivita e l'altra.",
    imageSrc: "/activities/climbing/Arrampicata in falesia.jpeg",
    section: "community",
    place: "Valle di Trentinara",
    moment: "Quando vuoi nel weekend",
    access: "Open",
  },
  {
    title: "ZipLine",
    category: "Open activity",
    description:
      "Valle sotto i piedi, vento in faccia e un minuto e mezzo di puro impatto. Esperienza separata dal ticket festival.",
    imageSrc: "/activities/Cilentoinvolo1.jpg",
    section: "community",
    place: "Cilento in Volo",
    moment: "Su prenotazione",
    access: "Ticket separato",
  },
  {
    title: "Workshop di chiodatura dal basso",
    category: "Workshop",
    description:
      "Una sessione tecnica con Rolando Larcher per ragionare su lettura della linea, protezioni e scelte sul terreno.",
    imageSrc: "/Rolando Larcher.jpeg",
    section: "workshop",
    place: "Settore workshop climbing",
    moment: "Stage dedicato",
    access: "Posti limitati",
  },
  {
    title: "Workshop Hike & Fly / Cross Country",
    category: "Workshop",
    description:
      "Due giorni con Moreno Parmesan per lavorare su strategia, dislivello, termiche e costruzione del volo.",
    imageSrc: "/activities/fly/hike-and-fly.jpeg",
    section: "workshop",
    place: "Area hike & fly",
    moment: "Due giorni",
    access: "Posti limitati",
  },
  {
    title: "Workshop Rescue e prove di recupero Highline",
    category: "Workshop",
    description:
      "Tecniche di recupero, gestione delle manovre e pratica ragionata per chi vuole stare sulla highline con piu consapevolezza.",
    imageSrc: "/activities/highline/Rescue highline.jpg",
    section: "workshop",
    place: "Area highline",
    moment: "Sessione tecnica",
    access: "Per praticanti",
  },
  {
    title: "Competizione Speedline Highline",
    category: "Competizione",
    description:
      "Una gara secca, veloce e molto visiva. Tensione alta, pubblico vicino e ritmo che cambia completamente la percezione della linea.",
    imageSrc: "/speedmaka.jpeg",
    section: "competition",
    place: "Spot speedline",
    moment: "Slot gara",
    access: "Da vedere e seguire",
  },
  {
    title: "Gara di StreetBoulder",
    category: "Competizione",
    description:
      "Il paese si trasforma in campo gara: passaggi, pubblico, finali e un'atmosfera che rende lo street boulder uno dei momenti piu tesi del weekend.",
    imageSrc: "/gara-streetboulder.jpg",
    section: "competition",
    place: "Trentinara e Giungano",
    moment: "Slot gara e finali",
    access: "Da vedere e seguire",
  },
  {
    title: "Gara XC parapendio",
    category: "Competizione",
    description:
      "La parte piu ampia del volo: lettura delle condizioni, scelta della traiettoria e chiusura finale con premiazione.",
    imageSrc: "/activities/fly/gara-cx.jpeg",
    section: "competition",
    place: "Area XC / atterraggio",
    moment: "Weekend + chiusura finale",
    access: "Per piloti e pubblico",
  },
  {
    title: "Arrampicata bambini",
    category: "Climbing",
    description:
      "Uno spazio semplice e sicuro per far provare l'arrampicata anche ai piu piccoli, senza togliere energia al resto del festival.",
    imageSrc: "/activities/climbing/Climbing-bimbi.jpeg",
    section: "community",
    place: "Area family",
    moment: "Domenica pomeriggio",
    access: "Per bambini",
  },
  {
    title: "Spettacolo e live",
    category: "Serata",
    description:
      "Quando finiscono gare e workshop, il festival continua con musica, show e una community che resta accesa fino a tardi.",
    imageSrc: "/spettacoli.jpeg",
    section: "community",
    place: "Main area festival",
    moment: "La sera",
    access: "Per tutti",
  },
];

const featuredActivities = activityItems.filter((item) => item.section === "main");

const sectionGroups = [
  {
    key: "competition",
    eyebrow: "Competizioni",
    title: "I momenti con piu tensione",
    text: "Le attivita che spostano davvero il ritmo del weekend e attirano pubblico.",
  },
  {
    key: "festival-life",
    eyebrow: "Extra",
    title: "Tutto quello che rende vivo il festival",
    text: "Workshop, stage mirati, falesia, family area, zipline, serata e tutto il resto che tiene acceso il festival anche fuori dalle discipline principali.",
  },
] as const;

export default function ActivitiesPage() {
  return (
    <main className="pb-12">
      <section className="section-space pt-8">
        <div className="container-shell page-head">
          <div className="page-head__intro">
            <p className="page-head__eyebrow">Attivita</p>
            <h1 className="page-head__title">Quello che trovi davvero</h1>
          </div>
          <div className="page-head__side">
            <p className="page-head__description">
              Le tre discipline principali vengono prima. Sotto trovi workshop, gare e tutto quello che rende il weekend vivo davvero, senza effetto catalogo.
            </p>
            <div className="page-head__actions">
              <Button href="/programma">Guarda programma completo</Button>
              <Button href="/tickets" variant="secondary">
                Vai ai pass
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-4 md:px-6">
        <div className="mx-auto max-w-[1240px]">
          <div className="activities-section-head">
            <div>
              <p className="activities-section-head__eyebrow">Discipline principali</p>
              <h2 className="activities-section-head__title">Le tre anime del festival</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {featuredActivities.map((item) => (
              <article key={item.title} className="activities-card">
                {item.imageSrc ? (
                  <div className="activities-card__media">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                ) : null}
                <div className="activities-card__body">
                  <p className="activities-card__category">{item.category}</p>
                  <h2 className="activities-card__title">{item.title}</h2>
                  <div className="activities-chip-row">
                    <span className="activities-chip">{item.place}</span>
                    <span className="activities-chip">{item.moment}</span>
                    <span className="activities-chip">{item.access}</span>
                  </div>
                  <p className="activities-card__text">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {sectionGroups.map((group) => {
        const items =
          group.key === "festival-life"
            ? activityItems.filter((item) => item.section === "workshop" || item.section === "community")
            : activityItems.filter((item) => item.section === group.key);

        return (
          <section key={group.key} className="px-3 py-5 md:px-6">
            <div className="mx-auto max-w-[1240px]">
              <div className="activities-section-head">
                <div>
                  <p className="activities-section-head__eyebrow">{group.eyebrow}</p>
                  <h2 className="activities-section-head__title">{group.title}</h2>
                </div>
              </div>

              <div className="activities-grid">
                {items.map((item) => (
                  <article key={item.title} className="activities-card">
                    {item.imageSrc ? (
                      <div className="activities-card__media">
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                      </div>
                    ) : null}
                    <div className="activities-card__body">
                      <p className="activities-card__category">{item.category}</p>
                      <h3 className="activities-card__title">{item.title}</h3>
                      <div className="activities-chip-row">
                        <span className="activities-chip">{item.place}</span>
                        <span className="activities-chip">{item.moment}</span>
                        <span className="activities-chip">{item.access}</span>
                      </div>
                      <p className="activities-card__text">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
