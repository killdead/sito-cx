export type InfoPointCategory = "sport" | "logistica";

export type InfoPoint = {
  id: string;
  title: string;
  area: string;
  category: InfoPointCategory;
  description: string;
  lat: number;
  lng: number;
};

export const INFO_POINTS: InfoPoint[] = [
  {
    id: "camping",
    title: "Camping festival",
    area: "Giungano",
    category: "logistica",
    description: "Il punto base per dormire, ritrovarsi e partire verso il resto del weekend.",
    lat: 40.40024985050282,
    lng: 15.093740213019363,
  },
  {
    id: "street-boulder",
    title: "Street Boulder",
    area: "Giungano",
    category: "sport",
    description: "Il paese e le aree in cui si muove la parte boulder del festival.",
    lat: 40.39755,
    lng: 15.10825,
  },
  {
    id: "parcheggio-giungano",
    title: "Parcheggio Giungano",
    area: "Giungano",
    category: "logistica",
    description: "Accesso utile per il centro del paese e per chi si muove verso camping e boulder.",
    lat: 40.39595,
    lng: 15.10545,
  },
  {
    id: "highline",
    title: "Highline",
    area: "Trentinara",
    category: "sport",
    description: "Area linee e punto di riferimento per la parte highline del weekend.",
    lat: 40.40015,
    lng: 15.11485,
  },
  {
    id: "parcheggio-trentinara",
    title: "Parcheggio Trentinara",
    area: "Trentinara",
    category: "logistica",
    description: "Parcheggio comodo per muoversi verso le linee e la parte alta del festival.",
    lat: 40.39816611035559,
    lng: 15.1155008671356,
  },
  {
    id: "volo-libero",
    title: "Volo libero",
    area: "Vesole / Trentinara",
    category: "sport",
    description: "Punto di riferimento per il volo libero sopra la valle.",
    lat: 40.4088,
    lng: 15.1415,
  },
  {
    id: "volo-motore",
    title: "Volo a motore",
    area: "Capaccio / Paestum",
    category: "sport",
    description: "Area di riferimento per il volo a motore verso i templi di Paestum.",
    lat: 40.4246,
    lng: 15.0452,
  },
];

export function getGoogleMapsLink(point: Pick<InfoPoint, "lat" | "lng">) {
  return `https://www.google.com/maps?q=${point.lat},${point.lng}`;
}
