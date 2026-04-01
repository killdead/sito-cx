"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-ink/10 bg-white/88 backdrop-blur-xl">
      <div className="container-shell flex min-h-16 items-center justify-between gap-4 py-2.5">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <div className="relative h-[125px] w-[125px]">
            <Image
              src="/brand/sole-giallo-transparent.png"
              alt="CilentoXtreme"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  active ? "text-brand-red" : "text-brand-ink/74 hover:text-brand-red"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/">Partecipa</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-border text-brand-ink lg:hidden"
          aria-expanded={open}
          aria-label="Apri menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-brand-ink/10 bg-white/96 lg:hidden">
          <nav className="container-shell flex flex-col gap-2 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand-ink hover:bg-brand-paper"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/" className="mt-2 w-full justify-center">
              Partecipa
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
