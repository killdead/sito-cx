type MediaPlaceholderProps = {
  label: string;
  mediaType: "Immagine" | "Video" | "Mappa" | "Logo";
  searchHint: string;
  className?: string;
  tone?: "sky" | "sun" | "green" | "red";
};

const toneClasses = {
  sky: "bg-brand-sky/28",
  sun: "bg-brand-sun/52",
  green: "bg-brand-green/16",
  red: "bg-brand-peach/72",
};

export function MediaPlaceholder({
  label,
  mediaType,
  searchHint,
  className = "",
  tone = "sky",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`festival-frame overflow-hidden p-5 ${toneClasses[tone]} ${className}`}
    >
      <div className="flex h-full min-h-56 flex-col justify-between rounded-[1.4rem] border border-dashed border-brand-ink/25 bg-white/68 p-5">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
            Placeholder
          </p>
          <h3 className="text-2xl font-semibold text-brand-ink">{label}</h3>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/62">
            {mediaType}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/62">
            Immagine da cercare
          </p>
          <p className="mt-2 text-sm leading-6 text-brand-ink/78">{searchHint}</p>
        </div>
      </div>
    </div>
  );
}
