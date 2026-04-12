import Image from "next/image";
import { MEDIA_SECTIONS } from "@/data/media";

const TARGETS = [
  { key: "highline", label: "Highline" },
  { key: "fly", label: "Volo" },
  { key: "climbing", label: "Street Boulder" },
  { key: "camp-life", label: "Camp Life" },
];

export default function MediaPage() {
  const sections = TARGETS.map((target) => ({
    ...target,
    files: MEDIA_SECTIONS[target.key] ?? [],
  }));

  return (
    <main className="pb-12">
      <section className="section-space pt-8">
        <div className="container-shell page-head">
          <div className="page-head__intro">
            <p className="page-head__eyebrow">Media</p>
            <h1 className="page-head__title">Carica foto</h1>
          </div>
          <div className="page-head__side">
            <p className="page-head__description">
              Su GitHub Pages questa sezione e solo consultabile: le immagini sono pubblicate dal repository e non possono essere caricate online tramite API o filesystem.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 py-6 md:px-6">
        <div className="mx-auto grid max-w-[1240px] gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.key} className="surface-card rounded-[2rem] p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">{section.label}</p>
              <p className="mt-2 text-sm leading-6 text-brand-ink/70">Cartella: `/public/activities/{section.key}`</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {section.files.length > 0 ? (
                  section.files.map((file) => (
                    <div key={file} className="overflow-hidden rounded-[1.25rem] border border-brand-ink/12 bg-white">
                      <div className="relative aspect-[4/3] bg-brand-paper">
                        <Image
                          src={`/activities/${section.key}/${file}`}
                          alt={file}
                          fill
                          className="object-cover"
                          sizes="(min-width: 768px) 25vw, 100vw"
                        />
                      </div>
                      <div className="border-t border-brand-ink/10 px-3 py-3">
                        <p className="truncate text-xs font-semibold uppercase tracking-[0.08em] text-brand-ink/64">{file}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-[1.25rem] border border-brand-ink/12 bg-brand-paper px-4 py-4 text-sm leading-6 text-brand-ink/62">
                    Nessuna immagine caricata.
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
