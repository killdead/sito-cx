import { Button } from "@/components/ui/Button";

const contactItems = [
  { label: "Email", value: "cilentoxtreme@gmail.com", href: "mailto:cilentoxtreme@gmail.com" },
  { label: "Telefono", value: "+39 339 179 6572", href: "tel:+393391796572" },
  { label: "Instagram", value: "@cilentoxtreme", href: "https://instagram.com/cilentoxtreme" },
];

const directPaths = [
  { title: "Tickets", text: "Per vedere i pass festival e i workshop acquistabili separatamente.", href: "/tickets", cta: "Apri tickets" },
  { title: "Info utili", text: "Per arrivare, dormire e orientarti nel modo più semplice.", href: "/info", cta: "Apri info" },
];

export default function ContactsPage() {
  return (
    <main className="pb-12">
      <section className="px-3 pb-8 pt-6 md:px-6 md:pt-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="surface-card rounded-[2rem] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Contatti</p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl uppercase leading-[0.92] text-brand-ink md:text-6xl">
              Contatti diretti, senza form vuoti
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-brand-ink/76 md:text-lg">
              Se devi scrivere al team, qui trovi i canali giusti. Se invece devi decidere se partecipare, è meglio partire dalla pagina festival.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/tickets">Buy ticket</Button>
              <Button href="mailto:cilentoxtreme@gmail.com" variant="secondary">
                Scrivi al team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-8 md:px-6">
        <div className="mx-auto max-w-[1180px] grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <article className="surface-card rounded-[2rem] p-6">
            <h2 className="text-3xl font-semibold text-brand-ink">Contatti diretti</h2>
            <div className="mt-5 space-y-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("https") ? "_blank" : undefined}
                  rel={item.href.startsWith("https") ? "noreferrer" : undefined}
                  className="block rounded-[1.35rem] border border-brand-border/70 bg-white/82 px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">{item.label}</p>
                  <p className="mt-2 text-base text-brand-ink/78">{item.value}</p>
                </a>
              ))}
            </div>
          </article>

          <div className="grid gap-4">
            {directPaths.map((item) => (
              <article key={item.title} className="surface-card rounded-[1.5rem] p-5">
                <h3 className="text-xl font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-ink/72">{item.text}</p>
                <div className="mt-4">
                  <Button href={item.href} variant="secondary">
                    {item.cta}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
