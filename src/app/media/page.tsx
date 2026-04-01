import { readdir } from "node:fs/promises";
import path from "node:path";

import Image from "next/image";

import { MediaUploadForm } from "@/components/media/MediaUploadForm";

const TARGETS = [
  { key: "highline", label: "Highline" },
  { key: "fly", label: "Volo" },
  { key: "climbing", label: "Street Boulder" },
  { key: "camp-life", label: "Camp Life" },
];

async function getFiles(target: string) {
  const dir = path.join(process.cwd(), "public", "activities", target);
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b));
  } catch {
    return [];
  }
}

export default async function MediaPage() {
  const sections = await Promise.all(
    TARGETS.map(async (target) => ({
      ...target,
      files: await getFiles(target.key),
    })),
  );

  return (
    <main className="pb-12">
      <section className="section-space pt-8">
        <div className="container-shell grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">Media</p>
            <h1 className="mt-3 max-w-[10ch] font-display text-5xl uppercase leading-[0.9] text-brand-ink md:text-7xl lg:text-8xl">
              Carica foto
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-brand-ink/76 md:text-lg">
              Pagina interna per caricare immagini nelle cartelle delle attivita. I file vengono salvati direttamente dentro `public/activities/...`.
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

              <MediaUploadForm target={section.key} label={section.label} />

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
