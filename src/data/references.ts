export type MediaRef = {
  auteur: string; // auteur OU organisme
  titreSite: string; // sera affiché en italique
  datePublication?: string; // optionnel (si tu l’as)
  support: "[En ligne]";
  url: string;
  consulteLe: string; // ex: "25 janvier 2026"
};

export const MEDIAGRAPHIE: MediaRef[] = [
  {
    auteur: "GOUVERNEMENT DU CANADA, Ministère de la Défense nationale",
    titreSite: "Anabolic Steroids",
    support: "[En ligne]",
    url: "https://www.canada.ca/content/dam/dnd-mdn/documents/health/nutrition/supplement-fact-sheet-anabolic-steroids.pdf",
    consulteLe: "25 janvier 2026",
  },
  {
    auteur: "CLEVELAND CLINIC",
    titreSite: "Anabolic Steroids: What They Are, Uses, Side Effects & Risks",
    datePublication: "7 février 2023",
    support: "[En ligne]",
    url: "https://my.clevelandclinic.org/health/treatments/5521-anabolic-steroids",
    consulteLe: "25 janvier 2026",
  },
  {
    auteur: "CLEVELAND CLINIC",
    titreSite: "Nandrolone",
    datePublication: "27 avril 2023",
    support: "[En ligne]",
    url: "https://my.clevelandclinic.org/health/drugs/24940-nandrolone",
    consulteLe: "25 janvier 2026",
  },
  {
    auteur: "MEDLINEPLUS",
    titreSite: "Testosterone Levels Test",
    datePublication: "5 juin 2025",
    support: "[En ligne]",
    url: "https://medlineplus.gov/lab-tests/testosterone-levels-test/",
    consulteLe: "25 janvier 2026",
  },
  {
    auteur: "MEDLINEPLUS",
    titreSite: "Testosterone Topical: MedlinePlus Drug Information",
    datePublication: "15 mai 2025",
    support: "[En ligne]",
    url: "https://medlineplus.gov/druginfo/meds/a605020.html",
    consulteLe: "25 janvier 2026",
  },
  {
    auteur: "U.S. FOOD AND DRUG ADMINISTRATION",
    titreSite: "Animal Drugs @ FDA",
    support: "[En ligne]",
    url: "https://animaldrugsatfda.fda.gov/adafda/views/",
    consulteLe: "25 janvier 2026",
  },
  {
    auteur: "U.S. FOOD AND DRUG ADMINISTRATION",
    titreSite: "Trenbolone Acetate and Estradiol",
    support: "[En ligne]",
    url: "https://animaldrugsatfda.fda.gov/adafda/app/search/public/document/downloadFoi/830",
    consulteLe: "25 janvier 2026",
  },
  {
    auteur: "MERCK ANIMAL HEALTH CANADA",
    titreSite: "Revalor®-100",
    support: "[En ligne]",
    url: "https://www.merck-animal-health.ca/downloads/revalor-100/",
    consulteLe: "25 janvier 2026",
  },
  {
    auteur: "UNITED STATES ANTI-DOPING AGENCY",
    titreSite: "Anabolic Agents and Meat Contamination",
    support: "[En ligne]",
    url: "https://www.usada.org/spirit-of-sport/anabolic-agents-meat-contamination/",
    consulteLe: "25 janvier 2026",
  },
  {
    auteur: "UNITED STATES ANTI-DOPING AGENCY",
    titreSite: "World Anti-Doping Agency (WADA) Prohibited List",
    support: "[En ligne]",
    url: "https://www.usada.org/substances/prohibited-list/",
    consulteLe: "25 janvier 2026",
  },
  {
    auteur: "WORLD ANTI-DOPING AGENCY",
    titreSite: "International Standard for Prohibited List (2024)",
    support: "[En ligne]",
    url: "https://www.wada-ama.org/sites/default/files/2023-09/2024list_en_final_22_september_2023.pdf",
    consulteLe: "25 janvier 2026",
  },
];
