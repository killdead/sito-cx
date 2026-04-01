export type Activity = {
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  description: string;
  detailTitle: string;
  detailBody: string;
  audiencePoints: string[];
  includePoints: string[];
  whyHere: string;
  level: string;
  targetAudience: string;
  location: string;
  image: string;
  imageSrc?: string;
  illustration: string;
  tags: string[];
  ctaLabel?: string;
};

export const ACTIVITIES: Activity[] = [
  {
    slug: "highline",
    title: "Highline",
    eyebrow: "Esposizione e presenza",
    shortDescription:
      "Esposizione, equilibrio e presenza. Per chi cerca altezza vera e un contesto che abbia senso per la slackline.",
    description:
      "Highline non è solo una disciplina nel programma. È un modo preciso di stare dentro al festival, con il suo ritmo, il suo spazio e il suo tipo di attenzione.",
    detailTitle: "Highline tra esposizione e presenza",
    detailBody:
      "Qui l’altezza non è scenografia. È il punto in cui equilibrio, respirazione e attenzione smettono di essere teoria e diventano gesto.",
    audiencePoints: [
      "Per chi pratica già e cerca un contesto credibile in cui spot e cultura slackline contano davvero.",
      "Per chi vuole osservare da vicino e capire cosa succede dentro una disciplina fatta di presenza e controllo.",
      "Per chi riconosce il valore dello spot, non solo della linea.",
    ],
    includePoints: [
      "Sessioni, momenti dedicati e una presenza slackline reale dentro il programma festival.",
      "Uno spazio coerente con la disciplina, non un riempitivo messo in scaletta.",
      "Un contesto umano e fisico che aiuta a entrare nel ritmo giusto.",
    ],
    whyHere:
      "Perché lo spot conta quanto la linea. E quando il contesto è giusto, cambia tutto.",
    level: "Intermedio / avanzato, con momenti introduttivi",
    targetAudience: "Praticanti slackline, atleti, pubblico che vuole capire da vicino",
    location: "Trentinara",
    image: "Highline molto scenica nel canyon, cielo aperto, atleta sospeso, composizione pulita senza folla.",
    imageSrc: "/activities/highline/Highline.jpg",
    illustration: "[ILLUSTRAZIONE_HIGHLINE]",
    tags: ["Spot", "Slackline", "Presenza"],
    ctaLabel: "Capisci come partecipare",
  },
  {
    slug: "fly",
    title: "Parapendio",
    eyebrow: "Aria e controllo",
    shortDescription:
      "Aria, lettura e controllo. Per chi vuole il lato più aereo del festival dentro uno scenario che non è solo panoramico, ma praticabile.",
    description:
      "Parapendio non è solo una disciplina nel programma. È un modo preciso di stare dentro al festival, con il suo ritmo, il suo spazio e il suo tipo di attenzione.",
    detailTitle: "Il lato più aereo del festival",
    detailBody:
      "Non solo panorama, ma lettura, controllo e rapporto diretto tra corpo, aria e spazio.",
    audiencePoints: [
      "Per chi pratica già e cerca un contesto credibile in cui il volo non faccia da decorazione.",
      "Per chi vuole osservare da vicino e capire davvero cosa succede quando il corpo legge aria e spazio.",
      "Per chi riconosce il valore del contesto, non solo dell’esperienza scenica.",
    ],
    includePoints: [
      "Sessioni, momenti dedicati e una presenza volo coerente dentro il programma festival.",
      "Uno spazio che parla davvero alla disciplina, non un’aggiunta messa per fare numero.",
      "Un contesto umano e fisico che aiuta a entrare nel ritmo giusto.",
    ],
    whyHere:
      "Perché il volo ha senso solo quando il contesto non è decorativo, ma vivo e leggibile.",
    level: "Open, con attività guidate",
    targetAudience: "Praticanti volo, curiosi che vogliono capire il contesto, community aerea",
    location: "Capaccio / Giungano",
    image: "Volo libero o parapendio con panorama Cilento, orizzonte largo, sensazione di aria e spazio.",
    illustration: "[ILLUSTRAZIONE_PARAPENDIO]",
    tags: ["Aria", "Lettura", "Controllo"],
    ctaLabel: "Vai al programma",
  },
  {
    slug: "climbing",
    title: "Street Boulder",
    eyebrow: "Movimento e lettura",
    shortDescription:
      "Movimento, lettura e ritmo. Per chi ama arrampicare in un contesto aperto, urbano e vivo.",
    description:
      "Street boulder non è solo una disciplina nel programma. È un modo preciso di stare dentro al festival, con il suo ritmo, il suo spazio e il suo tipo di attenzione.",
    detailTitle: "Muoversi nel borgo, restare nel gesto",
    detailBody:
      "Il paese smette di fare da sfondo e diventa terreno di lettura, ritmo e movimento.",
    audiencePoints: [
      "Per chi pratica già e cerca un contesto credibile in cui il gesto abbia ancora peso.",
      "Per chi vuole osservare da vicino e capire come cambia l’arrampicata quando il borgo entra davvero in gioco.",
      "Per chi riconosce il valore dello spazio, non solo della disciplina in astratto.",
    ],
    includePoints: [
      "Sessioni e momenti dedicati dentro il programma festival.",
      "Uno spazio coerente con la disciplina, non una scenografia appoggiata al weekend.",
      "Un contesto umano e fisico che aiuta a entrare nel ritmo giusto.",
    ],
    whyHere:
      "Perché arrampicare in un contesto aperto cambia il modo in cui guardi linee, corpi e spazio.",
    level: "Open, da beginner a climber evoluto",
    targetAudience: "Climber, praticanti urbani, curiosi che vogliono leggere il contesto",
    location: "Giungano / Trentinara",
    image: "Climber su roccia o street boulder nel borgo, gesto leggibile, sfondo non confuso.",
    illustration: "[ILLUSTRAZIONE_BOULDER]",
    tags: ["Borgo", "Ritmo", "Gesto"],
    ctaLabel: "Guarda quando",
  },
  {
    slug: "camp-life",
    title: "Camp Life",
    eyebrow: "Camping e ritmo",
    shortDescription:
      "Camping, incontri e tempo condiviso. Per chi vuole restare dentro al weekend senza spezzarlo.",
    description:
      "Camp life non è un contorno. È il modo in cui il festival tiene insieme pratica, presenza e tempo condiviso.",
    detailTitle: "Restare dentro al weekend",
    detailBody:
      "Camping, village e tempo condiviso: tutto quello che serve per non uscire dal ritmo tra una disciplina e l’altra.",
    audiencePoints: [
      "Per chi vuole vivere il festival da dentro, anche fuori dai momenti strettamente sportivi.",
      "Per chi cerca un contesto umano credibile, non un’area hospitality scollegata dal resto.",
      "Per chi sa che stare bene nel flusso del weekend cambia tutta l’esperienza.",
    ],
    includePoints: [
      "Camping, servizi essenziali e momenti condivisi distribuiti nei tre giorni.",
      "Un camping che tiene insieme presenza, incontri e continuità.",
      "Uno spazio coerente con il ritmo del festival, non separato da ciò che conta davvero.",
    ],
    whyHere:
      "Perché il festival non si vive solo durante le attività. Si decide anche da come resti, incontri e ti muovi nel resto del tempo.",
    level: "Per tutti",
    targetAudience: "Partecipanti, crew, volontari, partner e praticanti che restano sul posto",
    location: "Area festival",
    image: "Camping festival o people area outdoor, atmosfera reale, community viva, nessuna posa artificiale.",
    illustration: "[ILLUSTRAZIONE_DECORATIVA]",
    tags: ["Camping", "Festival village", "Ritmo"],
    ctaLabel: "Apri info utili",
  },
];
