type InfoPillProps = {
  children: React.ReactNode;
  tone?: "red" | "sky" | "sun" | "green";
};

const toneClasses = {
  red: "bg-brand-peach text-brand-red",
  sky: "bg-brand-sky/35 text-brand-ink",
  sun: "bg-brand-sun/75 text-brand-ink",
  green: "bg-brand-green/18 text-brand-ink",
};

export function InfoPill({ children, tone = "sky" }: InfoPillProps) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${toneClasses[tone]}`}>
      {children}
    </span>
  );
}
