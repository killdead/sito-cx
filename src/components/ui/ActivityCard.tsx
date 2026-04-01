import Link from "next/link";
import { Activity } from "@/data/activities";
import { InfoPill } from "./InfoPill";
import { PlaceholderBadge } from "./PlaceholderBadge";
import { MediaPlaceholder } from "./MediaPlaceholder";

type ActivityCardProps = {
  activity: Activity;
};

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Link
      href={`/attivita/${activity.slug}`}
      className="group overflow-hidden rounded-[2rem] border border-brand-border bg-white shadow-[0_15px_40px_rgba(23,50,77,0.10)] transition-transform hover:-translate-y-1"
    >
      <div className="relative">
        <MediaPlaceholder
          label={activity.title}
          mediaType="Immagine"
          searchHint={activity.image}
          tone="sun"
          className="min-h-[16rem] rounded-none border-0 shadow-none"
        />
        <div className="absolute left-4 top-4">
          <PlaceholderBadge label={activity.illustration} />
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap gap-2">
          {activity.tags.map((tag) => (
            <InfoPill key={tag} tone="sun">
              {tag}
            </InfoPill>
          ))}
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">
            {activity.eyebrow}
          </p>
          <h3 className="mt-2 text-3xl font-semibold text-brand-ink">{activity.title}</h3>
          <p className="mt-3 text-sm leading-6 text-brand-ink/72">{activity.shortDescription}</p>
        </div>
        <span className="inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-brand-red">
          Apri
        </span>
      </div>
    </Link>
  );
}
