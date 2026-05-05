import { PartnerCategory } from "@/data/partners";
import { PartnerLogo } from "@/components/ui/PartnerLogo";

interface PartnersSectionProps {
  category: PartnerCategory;
}

export function PartnersSection({ category }: PartnersSectionProps) {
  return (
    <section className="px-3 py-10 md:px-6">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-8 border-t border-brand-ink/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red mb-2">
            {category.id === "federations" && "Riconoscimenti"}
            {category.id === "institutions" && "Istituzioni"}
            {category.id === "sponsors" && "Partner"}
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase text-brand-ink">
            {category.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">
          {category.partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center">
              <PartnerLogo name={partner.name} logo={partner.logo} url={partner.url} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
