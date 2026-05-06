export type Partner = {
  id: string;
  name: string;
  logo: string;
  url?: string;
};

export type PartnerCategory = {
  id: string;
  title: string;
  description?: string;
  partners: Partner[];
};

export const PARTNERS_DATA: PartnerCategory[] = [
  {
    id: "organizers",
    title: "Le Associazioni",
    description: "Le realtà che ideano e organizzano CilentoXtreme",
    partners: [
      { id: "cilentoxtreme", name: "CilentoXtreme", logo: "/partners/cilentoxtreme.png" },
      { id: "cultura-selvatica", name: "Cultura Selvatica", logo: "/partners/CulturaSelvatica.png" },
      { id: "seleplayn", name: "Seleplayn", logo: "/partners/Seleplayn.png" },
      { id: "tappeti-volanti", name: "I Tappeti Volanti", logo: "/partners/TappetiVolanti.png" },
      { id: "cilento-paramotor", name: "Cilento Paramotor", logo: "/partners/CilentoParamotor.png" },
    ],
  },
  {
    id: "federations",
    title: "Federazioni & Riconoscimenti Ufficiali",
    partners: [
      { id: "fivl", name: "FIVL", logo: "/partners/FIVL.png", url: "https://www.fivl.it" },
      { id: "uisp", name: "UISP", logo: "/partners/Logo_UISP.png", url: "https://www.uisp.it" },
      { id: "isa", name: "ISA", logo: "/partners/ISA.png" },
      { id: "iamas", name: "IAMAS", logo: "/partners/Iamas.jpg" },
    ],
  },
  {
    id: "institutions",
    title: "Istituzioni & Enti Pubblici",
    partners: [
      { id: "trentinara", name: "Comune di Trentinara", logo: "/partners/trentinara.png" },
      { id: "parco-cilento", name: "Parco Nazionale del Cilento", logo: "/partners/Parco Nazionale del Cilento.png", url: "https://www.cilentovaledidiano.it" },
    ],
  },
  {
    id: "sponsors",
    title: "Sponsor & Partner",
    partners: [
      { id: "e9", name: "E9", logo: "/partners/E9.png" },
      { id: "spider-slackline", name: "Spider Slackline", logo: "/partners/Spider Slackline.png" },
      { id: "chiusky", name: "Chiusky", logo: "/partners/Chiusky.png" },
      { id: "raumer", name: "Raumer", logo: "/partners/Raumer.png" },
      { id: "dueggi-sport", name: "Dueggi Sport", logo: "/partners/Dueggi sport.jpg" },
      { id: "porta-soprana", name: "Porta Soprana", logo: "/partners/PortaSoprana.jpg" },
      { id: "cilentoinvolo", name: "Cilentoinvolo", logo: "/partners/Cilentoinvolo.png" },
      { id: "paolino848", name: "Paolino 848", logo: "/partners/Paolino848.jpg" },
    ],
  },
];
