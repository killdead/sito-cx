import { ProgramExplorer } from "@/components/programma/ProgramExplorer";

export default function ProgramPage() {
  return (
    <main className="pb-12">
      <section className="section-space pt-8">
        <div className="container-shell grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">Programma</p>
            <h1 className="mt-3 max-w-[11ch] font-display text-5xl uppercase leading-[0.9] text-brand-ink md:text-7xl lg:text-8xl">
              Tre giorni pieni davvero
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-brand-ink/76 md:text-lg">
              Gare, workshop, linee, volo, arrampicata e serata. Qui sotto trovi tutto diviso meglio per giorno, senza perderti in una lista infinita.
            </p>
          </div>
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
