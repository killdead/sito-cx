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
  stripePaymentLink?: string;
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
    stripePaymentLink: config.stripePaymentLink,
  };
}

export const PASSES: TicketProduct[] = [
  createProduct({
    id: "full-pass",
    title: "Full Gaso Pass",
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
    stripePaymentLink: "https://buy.stripe.com/aFaaEQc0n29paWC4safAc00",
  }),
  createProduct({
    id: "festival-pass",
    title: "Gaso Light Pass",
    eyebrow: "Festival ticket",
    description:
      "Il pass per vivere quasi tutto il festival: include street boulder, volo, workshop, attivita, camping e programma generale. Restano fuori solo le highline.",
    shortDescription: "Quasi tutto il festival, tranne le highline.",
    includes: [
      "Street Boulder",
      "Parapendio",
      "Workshop",
      "Attivita",
      "Camping",
      "Highline escluse",
    ],
    amountCents: 3000,
    currency: "eur",
    paypalFallbackEnabled: true,
    stripePaymentLink: "https://buy.stripe.com/9B6fZac0neWb9Syf6OfAc01",
  }),
];

export const WORKSHOPS: TicketProduct[] = [
  createProduct({
    id: "workshop-hike-fly",
    title: "Workshop Hike & Fly / Cross Country",
    author: "Moreno Parmesan",
    eyebrow: "Workshop premium",
    description:
      "Due giorni di workshop con Moreno Parmesan per entrare davvero nel mondo hike & fly e cross country, tra visione del volo, scelte in aria e approccio alla disciplina.",
    shortDescription: "Due giorni con Moreno Parmesan tra hike & fly e cross country.",
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
      "Una giornata con Rolando Larcher dedicata alla chiodatura dal basso, pensata per chi vuole capire meglio come nasce una linea e come ci si muove in parete con criterio.",
    shortDescription: "Una giornata con Rolando Larcher sulla chiodatura dal basso.",
    amountCents: 15000,
    currency: "eur",
    paypalFallbackEnabled: true,
  }),
];

export const TICKET_PRODUCTS = [...PASSES, ...WORKSHOPS];

export function getTicketProduct(productId: string) {
  return TICKET_PRODUCTS.find((product) => product.id === productId);
}
