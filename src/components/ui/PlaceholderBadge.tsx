type PlaceholderBadgeProps = {
  label: string;
  className?: string;
};

export function PlaceholderBadge({ label, className = "" }: PlaceholderBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border border-dashed border-brand-ink/25 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-ink/70 ${className}`}
    >
      {label}
    </span>
  );
}
