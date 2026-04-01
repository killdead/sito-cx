import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { InfoPill } from "@/components/ui/InfoPill";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { ACTIVITIES } from "@/data/activities";

export function generateStaticParams() {
  return ACTIVITIES.map((activity) => ({ slug: activity.slug }));
}

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = ACTIVITIES.find((item) => item.slug === slug);

  if (!activity) {
    notFound();
  }

  return (
    <main className="pb-12">
      <section className="section-space pt-8">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
              {activity.title}
            </p>
            <h1 className="max-w-[12ch] font-display text-5xl uppercase leading-[0.9] text-brand-ink md:text-7xl lg:text-8xl">
              {activity.detailTitle}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-brand-ink/74">{activity.detailBody}</p>
            <div className="flex flex-wrap gap-2">
              {activity.tags.map((tag, index) => (
                <InfoPill key={tag} tone={index === 0 ? "red" : index === 1 ? "sun" : "green"}>
                  {tag}
                </InfoPill>
              ))}
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="surface-card rounded-[1.5rem] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Livello</p>
                <p className="mt-2 text-base leading-7 text-brand-ink">{activity.level}</p>
              </div>
              <div className="surface-card rounded-[1.5rem] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Per chi è
                </p>
                <p className="mt-2 text-base leading-7 text-brand-ink">{activity.targetAudience}</p>
              </div>
            </div>
            <div className="surface-card rounded-[1.5rem] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Dove</p>
              <p className="mt-2 text-base leading-7 text-brand-ink">{activity.location}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/programma">Vai al programma</Button>
              <Button href="/info" variant="secondary">
                Apri info utili
              </Button>
            </div>
          </div>

          <div className="surface-card relative overflow-hidden rounded-[2rem] p-3">
            {activity.imageSrc ? (
              <div className="relative min-h-[30rem] overflow-hidden rounded-[1.5rem] bg-brand-paper">
                <Image
                  src={activity.imageSrc}
                  alt={activity.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  priority
                />
              </div>
            ) : (
              <>
                <MediaPlaceholder
                  label={activity.title}
                  mediaType="Immagine"
                  searchHint={activity.image}
                  tone="green"
                  className="min-h-[30rem]"
                />
                <div className="absolute left-6 top-6">
                  <PlaceholderBadge label={activity.illustration} />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="px-3 py-8 md:px-6">
        <div className="mx-auto grid max-w-[1240px] gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="surface-card rounded-[2rem] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Per chi è</p>
            <div className="mt-5 space-y-4">
              {activity.audiencePoints.map((item) => (
                <p key={item} className="rounded-[1.35rem] border border-brand-border/70 bg-white/80 px-4 py-4 text-sm leading-6 text-brand-ink/76 md:text-base">
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="surface-card rounded-[2rem] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Cosa trovi</p>
            <div className="mt-5 space-y-4">
              {activity.includePoints.map((item) => (
                <div key={item} className="rounded-[1.35rem] bg-brand-paper px-4 py-4 text-sm leading-6 text-brand-ink/76 md:text-base">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="px-3 py-8 md:px-6">
        <div className="mx-auto max-w-[1240px]">
          <article className="surface-card rounded-[2rem] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Perché qui</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase leading-[0.92] text-brand-ink md:text-6xl">
              {activity.title} ha senso quando il contesto conta davvero
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-brand-ink/76 md:text-lg">
              {activity.whyHere}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/programma">Guarda quando</Button>
              <Button href="/" variant="secondary">
                Capisci come partecipare
              </Button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
