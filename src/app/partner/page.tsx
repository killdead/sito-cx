import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const corePartners = [
  "CilentoXtreme",
  "Culturaelvatica",
  "Seleplayn",
  "I Tappeti Volanti",
  "Cilento Paramotor",
  "FIVL",
  "ISA",
] as const;

const sponsorSlots = [
  "Sponsor 01",
  "Sponsor 02",
  "Sponsor 03",
  "Sponsor 04",
] as const;

const institutionSlots = [
  "Istituzione 01",
  "Istituzione 02",
  "Istituzione 03",
] as const;

const mediaSlots = [
  "Media partner 01",
  "Media partner 02",
  "Media partner 03",
  "Media partner 04",
] as const;

function LogoGrid({
  items,
  columns = "sm:grid-cols-2 xl:grid-cols-4",
}: {
  items: readonly string[];
  columns?: string;
}) {
  return (
    <div className={`mt-8 grid gap-4 ${columns}`}>
      {items.map((name) => (
        <article
          key={name}
          className="surface-card flex min-h-28 items-center justify-center rounded-[1.5rem] px-5 py-5 text-center"
        >
          <p className="text-lg font-semibold leading-tight text-brand-ink">{name}</p>
        </article>
      ))}
    </div>
  );
}

export default function PartnerPage() {
  return (
    <main className="pb-12">
      <section className="section-space pt-8">
        <div className="container-shell grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">Partner</p>
            <h1 className="mt-3 max-w-[11ch] font-display text-5xl uppercase leading-[0.9] text-brand-ink md:text-7xl lg:text-8xl">
              Chi costruisce e sostiene il festival
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-brand-ink/76 md:text-lg">
              CilentoXtreme esiste perche dietro ci sono associazioni, partner e realta che tengono insieme spot, persone, territorio e tutto quello che fa stare in piedi il weekend.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contatti">Parla con noi</Button>
              <Button href="/contatti" variant="secondary">
                Proponi una collaborazione
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Perche esserci", "Un festival con identita forte, comunita reale e contenuti che vivono prima, durante e dopo il weekend."],
            ["Pubblico", "Praticanti, sportivi, community verticali e persone che arrivano perche parlano gia quella lingua."],
            ["Visibilita", "Presenza sul posto, contenuti, attivazioni, materiali e tutto quello che resta quando il festival finisce."],
            ["Collaborazioni", "Sponsor, associazioni, istituzioni e media partner dentro una struttura leggibile e non improvvisata."],
          ].map(([title, text]) => (
            <article key={title} className="surface-card rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold text-brand-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-brand-ink/72">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Core partner"
            title="Chi costruisce il festival"
            description="Le realta che tengono in piedi CilentoXtreme e ne costruiscono davvero contenuti, pratica e territorio."
          />
          <LogoGrid items={corePartners} />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-10 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <SectionHeading
              eyebrow="Sponsor"
              title="Sponsor"
              description="Brand e realta che scelgono di essere presenti dentro il festival."
            />
            <LogoGrid items={sponsorSlots} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>

          <div>
            <SectionHeading
              eyebrow="Istituzioni"
              title="Istituzioni"
              description="Enti e realta territoriali che sostengono il festival."
            />
            <LogoGrid items={institutionSlots} columns="sm:grid-cols-2 xl:grid-cols-1" />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Media"
            title="Media partner"
            description="Le realta che raccontano e amplificano il festival."
          />
          <LogoGrid items={mediaSlots} />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="surface-card rounded-[2rem] px-6 py-8 md:px-8">
            <SectionHeading
              eyebrow="Contatti"
              title="Vuoi esserci dentro"
              description="Se vuoi entrare come sponsor, partner o realta coinvolta nel festival, questo e il punto da cui partire."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contatti">Apri contatti</Button>
              <Button href="/contatti" variant="secondary">
                Scrivici
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
