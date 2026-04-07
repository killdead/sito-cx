const currencyFormatter = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
});

function formatPrice(amountCents: number | null) {
  if (!amountCents) {
    return "Prezzo da definire";
  }

  return currencyFormatter.format(amountCents / 100);
}

export type TicketProduct = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  shortDescription?: string;
  includes?: string[];
  author?: string;
  amountCents: number | null;
  currency: "eur";
  priceLabel: string;
  checkoutEnabled: boolean;
  paypalFallbackEnabled: boolean;
};

function createProduct(
  config: Omit<TicketProduct, "priceLabel" | "checkoutEnabled">,
): TicketProduct {
  return {
    id: config.id,
    title: config.title,
    eyebrow: config.eyebrow,
    description: config.description,
    shortDescription: config.shortDescription,
    includes: config.includes,
    author: config.author,
    currency: config.currency,
    paypalFallbackEnabled: config.paypalFallbackEnabled,
    amountCents: config.amountCents,
    priceLabel: formatPrice(config.amountCents),
    checkoutEnabled: config.amountCents !== null,
  };
}

export const PASSES: TicketProduct[] = [
  createProduct({
    id: "full-pass",
    title: "Full Pass",
    eyebrow: "Festival ticket",
    description:
      "Il pass piu completo del weekend. Entri in tutto il festival e resti coperto anche su attivita, workshop e camping.",
    shortDescription: "Tutto il festival, senza esclusioni.",
    includes: [
      "Weekend completo",
      "Highline",
      "Street Boulder",
      "Parapendio",
      "Workshop",
      "Attivita",
      "Camping",
    ],
    amountCents: 5000,
    currency: "eur",
    paypalFallbackEnabled: true,
  }),
  createProduct({
    id: "festival-pass",
    title: "Festival Pass",
    eyebrow: "Festival ticket",
    description:
      "Il pass base per vivere il festival, entrare nell'atmosfera del weekend e partecipare alla parte generale dell'evento.",
    shortDescription: "Ingresso festival e programma generale.",
    includes: [
      "Ingresso festival",
      "Serate e programma generale",
      "Area community",
      "Camping escluso",
      "Workshop esclusi",
    ],
    amountCents: 3000,
    currency: "eur",
    paypalFallbackEnabled: true,
  }),
];

export const WORKSHOPS: TicketProduct[] = [
  createProduct({
    id: "workshop-hike-fly",
    title: "Workshop Hike & Fly / Cross Country",
    author: "Moreno Parmesan",
    eyebrow: "Workshop premium",
    description:
      "Workshop premium dedicato a hike & fly e cross country, pensato per chi vuole lavorare davvero su tecnica e lettura del volo.",
    shortDescription: "Workshop avanzato con Moreno Parmesan.",
    amountCents: 15000,
    currency: "eur",
    paypalFallbackEnabled: true,
  }),
  createProduct({
    id: "workshop-chiodatura",
    title: "Workshop di chiodatura dal basso",
    author: "Rolando Larcher",
    eyebrow: "Workshop premium",
    description:
      "Workshop premium con Rolando Larcher dedicato alla chiodatura dal basso, tra tecnica, metodo e pratica sul campo.",
    shortDescription: "Workshop tecnico con Rolando Larcher.",
    amountCents: 15000,
    currency: "eur",
    paypalFallbackEnabled: true,
  }),
];

export const TICKET_PRODUCTS = [...PASSES, ...WORKSHOPS];

export function getTicketProduct(productId: string) {
  return TICKET_PRODUCTS.find((product) => product.id === productId);
}
