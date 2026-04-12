import { ACTIVITIES } from "./activities";

export const NAV_ITEMS = [
  { href: "/", label: "Festival" },
  { href: "/attivita", label: "Attivita" },
  { href: "/programma", label: "Programma" },
  { href: "/info", label: "Info" },
  { href: "/alloggi", label: "Alloggi" },
  { href: "/contatti", label: "Contatti" },
];

export const QUICK_ACTIONS = [
  {
    title: "Tickets",
    description: "Pass festival e workshop premium acquistabili separatamente.",
    href: "/tickets",
    cta: "Buy ticket",
    placeholder: "[ILLUSTRAZIONE_OMINO_X]",
  },
  {
    title: "Attivita",
    description: "Highline, volo, arrampicata e format pensati per livelli ed energie diverse.",
    href: "/attivita",
    cta: "Esplora le discipline",
    placeholder: "[ILLUSTRAZIONE_OMINO_X]",
  },
];

export const STATS = [
  { value: "150+", label: "atleti e performer coinvolti" },
  { value: "1300+", label: "presenze attese tra festival e village" },
  { value: "3 giorni", label: "di sport, talk e vita all'aperto" },
  { value: "4 format", label: "tra discipline, camp life e community" },
];

export const EXPERIENCE_ITEMS = [
  {
    title: "Camping",
    description: "Svegliarti nel festival significa allungare l'esperienza oltre gli eventi in programma.",
    image: "Area tende ordinata e viva, luce bella, persone presenti ma non caotiche.",
    placeholder: "[IMMAGINE_CAMPING]",
  },
  {
    title: "People",
    description: "Crew, sportivi, curiosi, volontari. L'energia giusta nasce da chi lo vive insieme.",
    image: "Gruppo di persone del festival, community autentica, sorrisi reali, energia collettiva.",
    placeholder: "[IMMAGINE_PEOPLE]",
  },
  {
    title: "Food",
    description: "Area food semplice ma curata, pause vere e momenti sociali senza frizioni.",
    image: "Food area outdoor semplice ma curata, tavoli, piatti, socialità e luce naturale.",
    placeholder: "[IMMAGINE_FOOD]",
  },
];

export const GALLERY_ITEMS = [
  { type: "image", src: "Momento highline iconico, frame molto forte, adatto a stampa e social.", label: "[GALLERY_IMAGE_1]" },
  { type: "image", src: "Scena community o pubblico nel festival, taglio editoriale, non da reportage casuale.", label: "[GALLERY_IMAGE_2]" },
  { type: "image", src: "Dettaglio arrampicata o sport action nel borgo, con identità visiva territoriale.", label: "[GALLERY_IMAGE_3]" },
  { type: "video", src: "Video breve hero del festival con movimento pulito, highline o volo, 5-10 secondi.", label: "[VIDEO_REEL]" },
];

export const SPONSOR_LOGOS = [
  "[LOGO_SPONSOR_1]",
  "[LOGO_SPONSOR_2]",
  "Comune di Giungano",
  "Comune di Trentinara",
];

export const FAQ_ITEMS = [
  {
    question: "Serve essere atleti esperti?",
    answer: "No. Alcune attivita sono tecniche, ma il festival include momenti introduttivi, talk, community experience e format accessibili.",
  },
  {
    question: "Posso dormire in area festival?",
    answer: "Si, l'area camping e il supporto logistico sono pensati per trasformare la visita in un weekend completo.",
  },
  {
    question: "Come posso diventare partner o volontario?",
    answer: "Scrivi direttamente dai contatti del festival per collaborazioni, volontariato o richieste di partecipazione al progetto.",
  },
];

export const FEATURED_ACTIVITIES = ACTIVITIES.slice(0, 3);
