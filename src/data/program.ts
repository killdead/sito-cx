export type ProgramDay = "Venerdi" | "Sabato" | "Domenica";
export type ProgramType =
  | "Highline"
  | "Volo"
  | "Climbing"
  | "Workshop"
  | "Kids"
  | "Show"
  | "Music";
export type ProgramCategory =
  | "Attivita"
  | "Competizione"
  | "Workshop"
  | "Spettacolo"
  | "Logistica";

export type ProgramItem = {
  day: ProgramDay;
  time: string;
  title: string;
  type: ProgramType;
  category: ProgramCategory;
  location: string;
};

export const PROGRAM_ITEMS: ProgramItem[] = [
  {
    day: "Venerdi",
    time: "08:30",
    title: "Briefing sicurezza e controlli tecnici Highline",
    type: "Highline",
    category: "Logistica",
    location: "Trentinara",
  },
  {
    day: "Venerdi",
    time: "09:00",
    title: "Apertura linee Highline Festival",
    type: "Highline",
    category: "Attivita",
    location: "Trentinara",
  },
  {
    day: "Venerdi",
    time: "09:00",
    title: "Apertura decollo parapendio",
    type: "Volo",
    category: "Attivita",
    location: "Volo",
  },
  {
    day: "Venerdi",
    time: "09:00",
    title: "Inizio gara XC parapendio",
    type: "Volo",
    category: "Competizione",
    location: "Volo",
  },
  {
    day: "Venerdi",
    time: "09:00",
    title: "Arrampicata in falesia",
    type: "Climbing",
    category: "Attivita",
    location: "Falesia",
  },
  {
    day: "Venerdi",
    time: "14:00 - 18:00",
    title: "Workshop di chiodatura dal basso - Rolando Larcher",
    type: "Workshop",
    category: "Workshop",
    location: "Climbing area",
  },
  {
    day: "Venerdi",
    time: "14:00 - 18:00",
    title: "Arrampicata bambini",
    type: "Kids",
    category: "Attivita",
    location: "Climbing area",
  },
  {
    day: "Venerdi",
    time: "16:00 - 17:30",
    title: "Workshop Rescue e prove di recupero Highline",
    type: "Workshop",
    category: "Workshop",
    location: "Highline area",
  },
  {
    day: "Venerdi",
    time: "18:30",
    title: "Chiusura linea speedline",
    type: "Highline",
    category: "Logistica",
    location: "Trentinara",
  },
  {
    day: "Venerdi",
    time: "18:30",
    title: "Chiusura attivita di volo",
    type: "Volo",
    category: "Logistica",
    location: "Volo",
  },
  {
    day: "Venerdi",
    time: "19:00",
    title: "Chiusura linee Festival",
    type: "Highline",
    category: "Logistica",
    location: "Trentinara",
  },
  {
    day: "Venerdi",
    time: "20:00",
    title: "Contest: Spacca pulegge",
    type: "Show",
    category: "Spettacolo",
    location: "Campeggio",
  },
  {
    day: "Venerdi",
    time: "21:00",
    title: "Concerto in campeggio",
    type: "Music",
    category: "Spettacolo",
    location: "Campeggio",
  },
  {
    day: "Sabato",
    time: "07:30",
    title: "Apertura linee Highline e controlli tecnici",
    type: "Highline",
    category: "Attivita",
    location: "Trentinara",
  },
  {
    day: "Sabato",
    time: "08:30",
    title: "Apertura linee Highline Festival",
    type: "Highline",
    category: "Attivita",
    location: "Trentinara",
  },
  {
    day: "Sabato",
    time: "09:00",
    title: "Apertura decollo parapendio",
    type: "Volo",
    category: "Attivita",
    location: "Volo",
  },
  {
    day: "Sabato",
    time: "09:30",
    title: "Iscrizioni gara di StreetBoulder - Trentinara",
    type: "Climbing",
    category: "Competizione",
    location: "Trentinara",
  },
  {
    day: "Sabato",
    time: "10:00 - 15:30",
    title: "Workshop Hike & Fly / Cross Country - Moreno Parmesan",
    type: "Workshop",
    category: "Workshop",
    location: "Volo",
  },
  {
    day: "Sabato",
    time: "10:30",
    title: "Inizio Street Boulder - Trentinara",
    type: "Climbing",
    category: "Competizione",
    location: "Trentinara",
  },
  {
    day: "Sabato",
    time: "16:00",
    title: "Chiusura Street Boulder - Trentinara",
    type: "Climbing",
    category: "Logistica",
    location: "Trentinara",
  },
  {
    day: "Sabato",
    time: "16:30",
    title: "Finale StreetBoulder",
    type: "Climbing",
    category: "Competizione",
    location: "Trentinara",
  },
  {
    day: "Sabato",
    time: "18:30",
    title: "Chiusura attivita di volo",
    type: "Volo",
    category: "Logistica",
    location: "Volo",
  },
  {
    day: "Sabato",
    time: "19:00",
    title: "Chiusura linee Highline Festival",
    type: "Highline",
    category: "Logistica",
    location: "Trentinara",
  },
  {
    day: "Sabato",
    time: "20:00",
    title: "Spettacolo",
    type: "Show",
    category: "Spettacolo",
    location: "Main stage",
  },
  {
    day: "Sabato",
    time: "21:00",
    title: "Live sound / DJ set",
    type: "Music",
    category: "Spettacolo",
    location: "Main stage",
  },
  {
    day: "Domenica",
    time: "07:30",
    title: "Apertura linee Highline e controlli tecnici",
    type: "Highline",
    category: "Attivita",
    location: "Trentinara",
  },
  {
    day: "Domenica",
    time: "08:30",
    title: "Apertura linee Highline Festival",
    type: "Highline",
    category: "Attivita",
    location: "Trentinara",
  },
  {
    day: "Domenica",
    time: "09:00",
    title: "Apertura decollo parapendio",
    type: "Volo",
    category: "Attivita",
    location: "Volo",
  },
  {
    day: "Domenica",
    time: "10:00",
    title: "Apertura iscrizioni Street Boulder - Giungano",
    type: "Climbing",
    category: "Competizione",
    location: "Giungano",
  },
  {
    day: "Domenica",
    time: "10:00 - 13:00",
    title: "Attivita di avvicinamento al parapendio",
    type: "Volo",
    category: "Attivita",
    location: "Volo",
  },
  {
    day: "Domenica",
    time: "10:00 - 18:30",
    title: "Workshop Hike & Fly / Cross Country - Moreno Parmesan",
    type: "Workshop",
    category: "Workshop",
    location: "Volo",
  },
  {
    day: "Domenica",
    time: "10:30",
    title: "Inizio Street Boulder - Giungano",
    type: "Climbing",
    category: "Competizione",
    location: "Giungano",
  },
  {
    day: "Domenica",
    time: "11:00 - 12:30",
    title: "Workshop Nodi",
    type: "Workshop",
    category: "Workshop",
    location: "Highline area",
  },
  {
    day: "Domenica",
    time: "16:00",
    title: "Gara Speedline",
    type: "Highline",
    category: "Competizione",
    location: "Trentinara",
  },
  {
    day: "Domenica",
    time: "16:00",
    title: "Chiusura gara XC parapendio",
    type: "Volo",
    category: "Competizione",
    location: "Volo",
  },
  {
    day: "Domenica",
    time: "16:00",
    title: "Workshop di avvicinamento al parapendio",
    type: "Workshop",
    category: "Workshop",
    location: "Volo",
  },
  {
    day: "Domenica",
    time: "17:00",
    title: 'Premiazione "Miglior volo del weekend"',
    type: "Volo",
    category: "Competizione",
    location: "Main stage",
  },
  {
    day: "Domenica",
    time: "18:30",
    title: "Chiusura linea speedline",
    type: "Highline",
    category: "Logistica",
    location: "Trentinara",
  },
  {
    day: "Domenica",
    time: "19:00",
    title: "Chiusura linee Festival e premiazioni finali",
    type: "Highline",
    category: "Spettacolo",
    location: "Main stage",
  },
];

export const PROGRAM_DAYS = ["Venerdi", "Sabato", "Domenica"] as const;
export const PROGRAM_TYPES = [
  "Tutti",
  "Highline",
  "Volo",
  "Climbing",
  "Workshop",
  "Kids",
  "Show",
  "Music",
] as const;
export const PROGRAM_LOCATIONS = [
  "Tutte",
  "Trentinara",
  "Giungano",
  "Volo",
  "Falesia",
  "Campeggio",
  "Climbing area",
  "Highline area",
  "Main stage",
] as const;
