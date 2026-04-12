"use client";

import { useMemo, useState } from "react";
import {
  PROGRAM_DAYS,
  PROGRAM_ITEMS,
  PROGRAM_LOCATIONS,
  PROGRAM_TYPES,
} from "@/data/program";
import { InfoPill } from "@/components/ui/InfoPill";

type DayFilter = (typeof PROGRAM_DAYS)[number] | "Tutti";

const TONE_BY_TYPE: Record<(typeof PROGRAM_TYPES)[number], "red" | "sun" | "green"> = {
  Tutti: "sun",
  Highline: "red",
  Volo: "sun",
  Climbing: "green",
  Workshop: "sun",
  Kids: "green",
  Show: "red",
  Music: "red",
};

export function ProgramExplorer() {
  const [day, setDay] = useState<DayFilter>("Tutti");
  const [type, setType] = useState<(typeof PROGRAM_TYPES)[number]>("Tutti");
  const [location, setLocation] = useState<(typeof PROGRAM_LOCATIONS)[number]>("Tutte");

  const filteredItems = useMemo(() => {
    return PROGRAM_ITEMS.filter((item) => {
      const dayMatch = day === "Tutti" || item.day === day;
      const typeMatch = type === "Tutti" || item.type === type;
      const locationMatch = location === "Tutte" || item.location === location;
      return dayMatch && typeMatch && locationMatch;
    });
  }, [day, type, location]);

  const groupedItems = useMemo(() => {
    const visibleDays = day === "Tutti" ? PROGRAM_DAYS : [day];
    return visibleDays
      .map((currentDay) => ({
        day: currentDay,
        items: filteredItems.filter((item) => item.day === currentDay),
      }))
      .filter((group) => group.items.length > 0);
  }, [day, filteredItems]);

  return (
    <div className="space-y-8">
      <div className="programma-filter-card rounded-[2rem] p-5 md:p-6">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">Filtra il weekend</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-brand-ink/62">
              Parti dal giorno, poi stringi per disciplina o punto se vuoi leggere solo quello che ti interessa davvero.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setDay("Tutti")}
                className={`min-h-11 rounded-full px-4 text-sm font-semibold uppercase tracking-[0.08em] transition-colors ${
                  day === "Tutti"
                    ? "bg-brand-red text-white"
                    : "border border-brand-border bg-white text-brand-ink hover:border-brand-red hover:text-brand-red"
                }`}
              >
                Tutti
              </button>
              {PROGRAM_DAYS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setDay(item)}
                  className={`min-h-11 rounded-full px-4 text-sm font-semibold uppercase tracking-[0.08em] transition-colors ${
                    day === item
                      ? "bg-brand-red text-white"
                      : "border border-brand-border bg-white text-brand-ink hover:border-brand-red hover:text-brand-red"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-brand-ink">
              Tipo
              <select
                className="min-h-12 rounded-2xl border border-brand-border bg-white px-4"
                value={type}
                onChange={(event) => setType(event.target.value as (typeof PROGRAM_TYPES)[number])}
              >
                {PROGRAM_TYPES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-brand-ink">
              Punto
              <select
                className="min-h-12 rounded-2xl border border-brand-border bg-white px-4"
                value={location}
                onChange={(event) => setLocation(event.target.value as (typeof PROGRAM_LOCATIONS)[number])}
              >
                {PROGRAM_LOCATIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>

      {groupedItems.length > 0 ? (
        <div className="space-y-8">
          {groupedItems.map((group) => (
            <section key={group.day} className="space-y-4">
              <div className="programma-day-header">
                <h2 className="font-display text-4xl uppercase leading-none text-brand-ink md:text-5xl">
                  {group.day}
                </h2>
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-ink/54">
                  {group.items.length} voci
                </p>
              </div>

              <div className="grid gap-3">
                {group.items.map((item) => {
                  const isTimeRange = item.time.includes("-");

                  return (
                  <article
                    key={`${item.day}-${item.time}-${item.title}`}
                    className="programma-item-card rounded-[1.5rem] px-4 py-4 md:px-5"
                  >
                    <div className="grid gap-3 md:grid-cols-[190px_1fr_auto] md:items-center md:gap-5">
                      <div className="programma-item-card__meta">
                        <p
                          className={`programma-item-card__time${isTimeRange ? " programma-item-card__time--range" : ""}`}
                        >
                          {item.time}
                        </p>
                        <p className="programma-item-card__location">
                          {item.location}
                        </p>
                      </div>

                      <div className="programma-item-card__content">
                        <h3 className="programma-item-card__title">{item.title}</h3>
                      </div>

                      <div className="flex flex-wrap gap-2 md:justify-end">
                        <InfoPill tone={TONE_BY_TYPE[item.type]}>{item.type}</InfoPill>
                        <InfoPill tone="green">{item.category}</InfoPill>
                      </div>
                    </div>
                  </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <article className="surface-card rounded-[1.75rem] p-5">
          <p className="text-base leading-7 text-brand-ink/72">
            Nessun elemento trovato con questi filtri.
          </p>
        </article>
      )}
    </div>
  );
}
