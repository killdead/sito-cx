import { Button } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  placeholderLabel: string;
  placeholderHint: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  placeholderLabel,
  placeholderHint,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="section-space pt-8">
      <div className="container-shell grid items-center gap-8 lg:grid-cols-[1fr_0.92fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">{eyebrow}</p>
          <h1 className="font-display text-6xl uppercase leading-none text-brand-ink md:text-8xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg leading-8 text-brand-ink/74">{description}</p>
          <div className="flex flex-wrap gap-3">
            {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="secondary" shape="cloud-pill" cloudTone="cream">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>

        <div className="surface-card overflow-hidden rounded-[2rem] p-3">
          <MediaPlaceholder
            label={placeholderLabel}
            mediaType="Immagine"
            searchHint={placeholderHint}
            tone="sky"
            className="min-h-[22rem]"
          />
        </div>
      </div>
    </section>
  );
}
