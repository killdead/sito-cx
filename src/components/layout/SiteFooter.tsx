import Link from "next/link";
import { NAV_ITEMS } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-brand-ink/10 bg-white pb-28 pt-10 md:pb-12">
      <div className="container-shell">
        <div className="grid gap-10 border-b border-brand-ink/10 pb-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <p className="font-display text-4xl uppercase leading-none text-brand-ink md:text-5xl">
              CilentoXtreme
            </p>
            <p className="mt-4 max-w-md text-sm leading-6 text-brand-ink/72 md:text-base">
              Festival outdoor nel cuore del Cilento tra highline, volo, street boulder, camping e community.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
              Navigazione
            </p>
            <div className="grid gap-3">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-brand-ink/78 hover:text-brand-red">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
              Contatti
            </p>
            <div className="space-y-3 text-sm text-brand-ink/78">
              <p>cilentoxtreme@gmail.com</p>
              <p>+39 339 179 6572</p>
              <p>Giungano · Trentinara · Capaccio Paestum</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs uppercase tracking-[0.16em] text-brand-ink/52 md:flex-row md:items-center md:justify-between">
          <p>CilentoXtreme 2026</p>
          <p>Outdoor festival nel Cilento</p>
        </div>
      </div>
    </footer>
  );
}
