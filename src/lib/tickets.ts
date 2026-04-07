export type TicketProduct = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  includes?: string[];
  author?: string;
  stripeHref: string;
  priceLabel: string;
  paypalEnabled: boolean;
  paypalAmount: string;
  paypalCurrency: "EUR";
};

export const PASSES: TicketProduct[] = [
  {
    id: "full-pass",
    title: "Full Pass",
    eyebrow: "Festival ticket",
    description:
      "Il pass completo per entrare in tutto il festival senza tagli, tra sport, workshop, attivita e area camping.",
    includes: [
      "Accesso completo per tutto il weekend",
      "Highline",
      "Street Boulder",
      "Parapendio",
      "Workshop",
      "Attivita",
      "Camping",
    ],
    stripeHref: "https://buy.stripe.com/test_00w28sc6xe2e0Zp4BU7N600",
    priceLabel: "Configura prezzo",
    paypalEnabled: true,
    paypalAmount: "0.01",
    paypalCurrency: "EUR",
  },
  {
    id: "festival-pass",
    title: "Festival Pass",
    eyebrow: "Festival ticket",
    description:
      "La versione essenziale per vivere il festival, stare dentro al weekend e muoverti tra programma, serate e atmosfera generale.",
    includes: [
      "Accesso al festival",
      "Serate e programma generale",
      "Area community",
      "Camping separato",
      "Sport e workshop esclusi",
    ],
    stripeHref: "/contatti",
    priceLabel: "Da definire",
    paypalEnabled: false,
    paypalAmount: "0.01",
    paypalCurrency: "EUR",
  },
];

export const WORKSHOPS: TicketProduct[] = [
  {
    id: "workshop-hike-fly",
    title: "Workshop Hike & Fly / Cross Country",
    author: "Moreno Parmesan",
    eyebrow: "Workshop premium",
    description:
      "Workshop premium di due giorni dedicato a hike & fly e cross country, tra teoria e pratica.",
    stripeHref: "/contatti",
    priceLabel: "Da definire",
    paypalEnabled: false,
    paypalAmount: "0.01",
    paypalCurrency: "EUR",
  },
  {
    id: "workshop-chiodatura",
    title: "Workshop di chiodatura dal basso",
    author: "Rolando Larcher",
    eyebrow: "Workshop premium",
    description:
      "Workshop premium dedicato alla chiodatura dal basso con Rolando Larcher.",
    stripeHref: "/contatti",
    priceLabel: "Da definire",
    paypalEnabled: false,
    paypalAmount: "0.01",
    paypalCurrency: "EUR",
  },
];

export const TICKET_PRODUCTS = [...PASSES, ...WORKSHOPS];

export function getTicketProduct(productId: string) {
  return TICKET_PRODUCTS.find((product) => product.id === productId);
}
