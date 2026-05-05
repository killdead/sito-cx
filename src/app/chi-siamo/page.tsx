import { PARTNERS_DATA } from "@/data/partners";
import { PartnersSection } from "@/components/partners/PartnersSection";

export default function ChiSiamoPage() {
  return (
    <main>
      {/* Hero section */}
      <section className="section-space pt-8">
        <div className="container-shell">
          <div className="space-y-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
              Il Progetto
            </p>
            <h1 className="font-display text-5xl md:text-7xl uppercase text-brand-ink">
              Chi Siamo
            </h1>
            <p className="text-base leading-7 text-brand-ink/74">
              CilentoXtreme è un festival che unisce sport verticale, comunità e territorio.
              Esiste grazie a una rete di partner che credono in questo progetto e lo supportano con energia, risorse e visione condivisa.
            </p>
          </div>
        </div>
      </section>

      {/* Partners sections */}
      {PARTNERS_DATA.map((category) => (
        <PartnersSection key={category.id} category={category} />
      ))}

      {/* Closing section */}
      <section className="px-3 py-12 md:px-6">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-center text-base leading-7 text-brand-ink/74">
            Vuoi supportare CilentoXtreme?
            <a href="/contatti" className="ml-1 font-semibold text-brand-red hover:underline">
              Contattaci
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
