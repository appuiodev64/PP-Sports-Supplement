export type GlossaryTerm = {
  slug: string;
  terme: string;
  definition: string;
  sources: string[];
  tags?: string[];
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: "anabolique",
    terme: "Anabolique",
    definition:
      "Qui favorise la construction de tissus dans l’organisme, en particulier la synthèse de protéines et le développement de la masse musculaire.",
    sources: ["https://medlineplus.gov/ency/article/002223.htm"],
    tags: ["muscle", "protéines"],
  },
  {
    slug: "androgene",
    terme: "Androgène",
    definition:
      "Terme lié aux hormones sexuelles masculines et à leurs effets sur le corps, comme la pilosité, la voix ou certaines caractéristiques sexuelles.",
    sources: ["https://medlineplus.gov/ency/article/002219.htm"],
    tags: ["hormones", "testostérone"],
  },
  {
    slug: "steroide-anabolisant",
    terme: "Stéroïde anabolisant",
    definition:
      "Substance de type stéroïde dérivée de la testostérone qui augmente la synthèse des protéines et la masse musculaire. Ceux-ci présente des risques importants pour la santé.",
    sources: [
      "https://my.clevelandclinic.org/health/treatments/5521-anabolic-steroids",
      "https://www.canada.ca/content/dam/dnd-mdn/documents/health/nutrition/supplement-fact-sheet-anabolic-steroids.pdf",
    ],
    tags: ["dopage", "testostérone"],
  },
  {
    slug: "dht",
    terme: "DHT (dihydrotestostérone)",
    definition:
      "Hormone produite à partir de la testostérone. Elle est plus puissante sur certains tissus et peut causé de l’acné ou la calivite chez certaines personnes.",
    sources: ["https://medlineplus.gov/ency/article/003707.htm"],
    tags: ["hormones", "testostérone"],
  },
  {
    slug: "hpt-axis",
    terme: "Axe HPT",
    definition:
      "Système de régulation hormonal qui relie l’hypothalamus, l’hypophyse et les testicules. Il contrôle la production naturelle de testostérone a partir des signaux du cerveau.",
    sources: ["https://medlineplus.gov/lab-tests/testosterone-levels-test/"],
    tags: ["hormones"],
  },
  {
    slug: "suppression-hormonale",
    terme: "Suppression hormonale",
    definition:
      "Diminution de la production naturelle d’hormones par le corps lorsqu’une autre hormone est apportée de l’extérieur.",
    sources: ["https://medlineplus.gov/lab-tests/testosterone-levels-test/"],
    tags: ["hormones"],
  },
  {
    slug: "hdl-ldl",
    terme: "HDL / LDL",
    definition:
      "Le HDL est souvent appelé le bon cholestérol et le LDL le mauvais cholestérol. Un déséquilibre entre ces deux types peut augmenter le risque cardiovasculaire.",
    sources: ["https://medlineplus.gov/cholesterol.html"],
    tags: ["cardio", "lipides"],
  },
  {
    slug: "hepatotoxique",
    terme: "Hépatotoxique",
    definition:
      "Qui peut endommager le foie. Certains médicaments ou substances peuvent augmenter les enzymes du foie ou provoquer des dommages importants au foie.",
    sources: ["https://medlineplus.gov/lab-tests/liver-function-tests/"],
    tags: ["foie"],
  },
  {
    slug: "17aa",
    terme: "17-alpha alkylé (17α-alkylé)",
    definition:
      "Modification chimique utilisée sur certains stéroïdes pris  à l'oral pour survivre au passage par le foie, ce qui peut augmenter le stress hépatique.",
    sources: ["https://my.clevelandclinic.org/health/treatments/5521-anabolic-steroids"],
    tags: ["foie", "oral"],
  },
  {
    slug: "liste-interdictions-wada",
    terme: "Liste des interdictions (WADA)",
    definition:
      "Document officiel qui classe les substances et méthodes de dopage interdites dasns le sport compétitif. Il  est mis à jour régulièrement par l’Agence mondiale d'antidopage.",
    sources: ["https://www.wada-ama.org/en/prohibited-list"],
    tags: ["sport", "dopage"],
  },
  {
    slug: "agoniste-beta2",
    terme: "Agoniste bêta-2",
    definition:
      "Substance qui stimule les récepteurs bêta-2, qui se situe dans les bronches des poumons. Certaines les utilisent pour dilater les bronches pour faciliter la respiration.",
    sources: ["https://medlineplus.gov/asthmamedicines.html"],
    tags: ["respiration"],
  },
];
