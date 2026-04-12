import { ProgramExplorer } from "@/components/programma/ProgramExplorer";

const dayPreview = [
  {
    day: "Venerdi",
    title: "Si apre il weekend",
    text: "Linee, volo, falesia, workshop tecnici e prima serata in campeggio.",
  },
  {
    day: "Sabato",
    title: "Il giorno piu pieno",
    text: "Street Boulder, finali, spettacolo e il cuore del festival tutto insieme.",
  },
  {
    day: "Domenica",
    title: "Si chiude forte",
    text: "Gare, workshop, premiazioni e ultimi slot per stare dentro al gaso fino alla fine.",
  },
];

export default function ProgramPage() {
  return (
    <main className="pb-12">
      <section className="section-space pt-8">
        <div className="container-shell programma-hero">
          <div className="programma-hero__intro">
            <p className="programma-hero__eyebrow">Programma</p>
            <h1 className="programma-hero__title">Programma del weekend</h1>
          </div>
          <div className="programma-hero__side">
            <p className="programma-hero__description">
              Gare, workshop, linee, volo, arrampicata e serata. Qui sotto trovi tutto diviso per giorno, in modo piu chiaro e meno dispersivo.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 py-2 md:px-6">
        <div className="mx-auto grid max-w-[1240px] gap-4 md:grid-cols-3">
          {dayPreview.map((item) => (
            <article key={item.day} className="programma-day-card">
              <p className="programma-day-card__eyebrow">{item.day}</p>
              <h2 className="programma-day-card__title">{item.title}</h2>
              <p className="programma-day-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <ProgramExplorer />
        </div>
      </section>
    </main>
  );
}
