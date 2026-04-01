import Image from "next/image";
import { getGoogleMapsLink, INFO_POINTS } from "@/data/infoPoints";

const parkingPoint = INFO_POINTS.find((point) => point.id === "parcheggio-trentinara");
const highlinePoint = INFO_POINTS.find((point) => point.id === "highline");
const streetBoulderPoint = INFO_POINTS.find((point) => point.id === "street-boulder");
const freeFlightPoint = INFO_POINTS.find((point) => point.id === "volo-libero");
const poweredFlightPoint = INFO_POINTS.find((point) => point.id === "volo-motore");

const utilityLinks = [
  {
    group: "Logistica",
    items: [
      {
        title: "Alloggi",
        text: "Camping festival e strutture in zona.",
        href: "/alloggi",
      },
      {
        title: "Parcheggi e accessi",
        text: "Il punto piu rapido per arrivare e orientarti.",
        href: parkingPoint ? getGoogleMapsLink(parkingPoint) : "#",
      },
      {
        title: "Mappa completa",
        text: "Vista generale del territorio su Google Earth.",
        href: "https://earth.google.com/earth/d/1yBLl8ylLjBQD-FevtGEdGulqJfskflq1?usp=sharing",
      },
    ],
  },
  {
    group: "Sport",
    items: [
      {
        title: "Highline",
        text: "Apri il punto highline.",
        href: highlinePoint ? getGoogleMapsLink(highlinePoint) : "#",
      },
      {
        title: "Street Boulder",
        text: "Apri il centro della parte climbing.",
        href: streetBoulderPoint ? getGoogleMapsLink(streetBoulderPoint) : "#",
      },
      {
        title: "Volo",
        text: "Templi di Paestum a motore, valle e Vesole in libero.",
        href: poweredFlightPoint ? getGoogleMapsLink(poweredFlightPoint) : freeFlightPoint ? getGoogleMapsLink(freeFlightPoint) : "#",
      },
    ],
  },
];

export default function InfoPage() {
  return (
    <main className="pb-12">
      <section className="px-3 pb-6 pt-6 md:px-6 md:pt-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="rounded-[2rem] border border-brand-ink/12 bg-white/88 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Info utili</p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl uppercase leading-[0.92] text-brand-ink md:text-6xl">
              Orientati prima di partire
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-brand-ink/76 md:text-lg">
              Mappa generale, accessi, alloggi e punti sportivi. Il minimo utile per non perdere tempo.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 py-6 md:px-6">
        <div className="mx-auto max-w-[1180px]">
          <div className="rounded-[2rem] border border-brand-ink/12 bg-white/88 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Mappa del festival</p>
                <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] text-brand-ink md:text-5xl">
                  Vista generale
                </h2>
              </div>
              <a
                href="https://earth.google.com/earth/d/1yBLl8ylLjBQD-FevtGEdGulqJfskflq1?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-brand-border bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-brand-ink transition-colors hover:border-brand-red hover:bg-brand-peach/40 hover:text-brand-red"
              >
                Apri su Google Earth
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-brand-ink/12 bg-white">
              <Image
                src="/info/mappa-festival.jpg.png"
                alt="Vista generale del festival tra Giungano, Trentinara e Capaccio Paestum"
                width={1855}
                height={561}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-6 md:px-6">
        <div className="mx-auto max-w-[1180px] rounded-[2rem] border border-brand-ink/12 bg-white/88 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-red">Punti utili</p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] text-brand-ink md:text-5xl">
            Apri quello che ti serve
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {utilityLinks.map((group) => (
              <div key={group.group}>
                <h3 className="text-xl font-semibold text-brand-ink">{group.group}</h3>
                <div className="mt-4 space-y-4">
                  {group.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="block border-b border-brand-ink/12 pb-4 transition-colors hover:text-brand-red"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-brand-ink">{item.title}</h4>
                          <p className="mt-1 text-sm leading-6 text-brand-ink/70">{item.text}</p>
                        </div>
                        <span className="pt-1 text-sm font-semibold uppercase tracking-[0.08em] text-brand-red">
                          Apri
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
