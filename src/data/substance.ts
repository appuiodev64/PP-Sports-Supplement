import { OFFICIAL_SOURCES } from "@/data/officialSources";

export type Substance = {
  slug: string;
  nom: string;
  alias?: string[];
  definition: string;
  effetsMedicaux: string[];
  effetsRecherches: string[];
  risques: { categorie: string; items: string[] }[];
  legalite: string[];
  sources: string[];
};

export const SUBSTANCES: Substance[] = [
  {
    slug: "testosterone",
    nom: "Testostérone",
    alias: ["Testosterone"],
    definition:
      "La testostérone est une hormone stéroïdienne produite naturellement par les testicules. Elle existe aussi sous forme médicale prescrite pour certains troubles hormonaux.",
    effetsMedicaux: [
      "Participe au développement des caractères sexuels masculins.",
      "Contribue au maintien de la masse musculaire.",
      "Joue un rôle dans la production de globules rouges.",
      "Contribue au maintien de la santé osseuse.",
    ],
    effetsRecherches: [
      "Augmentation de la masse musculaire.",
      "Gain de force.",
      "Récupération musculaire plus rapide.",
      "Amélioration de la densité osseuse.",
    ],
    risques: [
      {
        categorie: "Cardiovasculaires",
        items: [
          "Hypertension.",
          "Augmentation des globules rouges.",
          "Risque cardiovasculaire accru.",
        ],
      },
      {
        categorie: "Hormonaux",
        items: [
          "Baisse de la production naturelle de testostérone.",
          "Atrophie testiculaire.",
          "Infertilité.",
          "Gynécomastie.",
        ],
      },
      {
        categorie: "Psychologiques",
        items: ["Irritabilité.", "Agressivité."],
      },
    ],
    legalite: [
      "Au Canada et aux États-Unis, la testostérone est un médicament soumis à prescription.",
      "Elle est interdite en compétition sportive selon les règles antidopage.",
    ],
    sources: [
      OFFICIAL_SOURCES.medlineplusTestosterone,
      OFFICIAL_SOURCES.wadaProhibitedList,
      OFFICIAL_SOURCES.wadaListPdf2025,
      OFFICIAL_SOURCES.canadaControlledDrugsAct,
    ],
  },

  {
    slug: "nandrolone",
    nom: "Nandrolone",
    alias: ["Deca", "Nandrolone Decanoate"],
    definition:
      "La nandrolone est un stéroïde anabolisant dérivé de la testostérone. Elle a existé dans certains usages médicaux selon les pays et les époques pour la perte de masse.",
    effetsMedicaux: [
      "Peut être associée à une amélioration de certains marqueurs liés à l’anémie",
      "Peut contribuer à limiter une perte de masse",
    ],
    effetsRecherches: [
      "Gain de masse musculaire.",
      "Augmentation de la force.",
      "Récupérationplus rapide.",
      "Effet anabolisant (Organisme construit plus de tissu musculaire).",
    ],
    risques: [
      {
        categorie: "Hormonaux",
        items: [
          "Baisse de la production naturelle de testostérone.",
          "Atrophie testiculaire. (Baisse de la taille des testicules)",
          "Infertilité.",
          "Troubles de la fonction sexuelle.",
          "Gynécomastie.",
        ],
      },
      {
        categorie: "Cardiovasculaires",
        items: [
          "Baisse du HDL.",
          "Hypertension.",
          "Risque cardiovasculaire accru.",
        ],
      },
      {
        categorie: "Autres",
        items: ["Irritabilité.", "Acné.", "Rétention d’eau.", "Douleurs articulaires."],
      },
    ],
    legalite: [
      "Substance contrôlée, avec usage médical encadré selon la réglementation.",
      "Interdite en compétition sportive selon les règles antidopage.",
    ],
    sources: [
      OFFICIAL_SOURCES.canadaAnabolicSteroidsFactsheet,
      OFFICIAL_SOURCES.wadaProhibitedList,
      OFFICIAL_SOURCES.wadaListPdf2025,
      OFFICIAL_SOURCES.canadaControlledDrugsAct,
    ],
  },

  {
    slug: "stanozolol",
    nom: "Stanozolol",
    alias: ["Winstrol"],
    definition:
      "Le stanozolol est un stéroïde anabolisant dérivé de la dihydrotestostérone. Il a été utilisé dans certains contextes médicaux et il est connu pour un usage détourné dans le dopage.",
    effetsMedicaux: [
      "A été utilisé dans certains contextes médicaux",
      "Les effets et la sécurité dépendent du cadre clinique et des indications.",
    ],
    effetsRecherches: [
      "Apparence plus sèche et plus définie.",
      "Gain de force sans prise de poids importante.",
      "Réduction de la rétention d’eau.",
    ],
    risques: [
      {
        categorie: "Hépatiques (Foie)",
        items: [
          "Risque d’atteinte hépatique",
          "Augmentation des enzymes hépatiques.",
        ],
      },
      {
        categorie: "Cardiovasculaires",
        items: [
          "Baisse du HDL.",
          "Hypertension.",
          "Risque cardiovasculaire accru.",
        ],
      },
      {
        categorie: "Hormonaux",
        items: [
          "Baisse de la production naturelle de testostérone.",
          "Infertilité.",
          "Atrophie testiculaire.",
          "Gynécomastie.",
        ],
      },
      {
        categorie: "Autres",
        items: ["Irritabilité.", "Douleurs articulaires.", "Chute de cheveux."],
      },
    ],
    legalite: [
      "Substance contrôlée avec usage médical encadré selon la réglementation.",
      "Interdite en compétition sportive selon les règles antidopage.",
    ],
    sources: [
      OFFICIAL_SOURCES.canadaAnabolicSteroidsFactsheet,
      OFFICIAL_SOURCES.wadaProhibitedList,
      OFFICIAL_SOURCES.wadaListPdf2025,
      OFFICIAL_SOURCES.canadaControlledDrugsAct,
    ],
  },

  {
    slug: "oxandrolone",
    nom: "Oxandrolone",
    alias: ["Anavar"],
    definition:
      "L’oxandrolone est un stéroïde anabolisant dérivé de la dihydrotestostérone. Elle a été utilisée en médecine pour aider à la reprise de poids dans certains contextes.",
    effetsMedicaux: [
      "Peut être utilisée pour aider à reprendre du poids.",
      "Peut contribuer à limiter une perte de masse.",
    ],
    effetsRecherches: [
      "Gain de masse avec une rétention d’eau généralement plus faible.",
      "Augmentation de la force.",
      "Apparence plus définie.",
    ],
    risques: [
      {
        categorie: "Hépatiques (Foie)",
        items: ["Augmentation possible des enzymes du foie.", "Risque de trouble du foie."],
      },
      {
        categorie: "Cardiovasculaires",
        items: ["Altération du profil lipidique.", "Risque cardiovasculaire accru."],
      },
      {
        categorie: "Hormonaux",
        items: [
          "Baisse de la production naturelle de testostérone.",
          "Infertilité.",
          "Atrophie testiculaire.",
          "Perturbations hormonales possibles.",
        ],
      },
      {
        categorie: "Autres",
        items: ["Acné.", "Crampes.", "Chute de cheveux.", "Irritabilité."],
      },
    ],
    legalite: [
      "Médicament soumis à prescription selon la réglementation.",
      "Interdite en compétition sportive selon les règles antidopage.",
    ],
    sources: [
      OFFICIAL_SOURCES.fdaOxandroloneLabel,
      OFFICIAL_SOURCES.wadaProhibitedList,
      OFFICIAL_SOURCES.wadaListPdf2025,
      OFFICIAL_SOURCES.canadaControlledDrugsAct,
    ],
  },

  {
    slug: "trenbolone",
    nom: "Trenbolone",
    alias: ["Trenbolone Acetate", "Trenbolone Enanthate"],
    definition:
      "Le trenbolone est un stéroïde anabolisant très puissant associé à un usage vétérinaire. Il n’est pas approuvé pour un usage humain.",
    effetsMedicaux: [],
    effetsRecherches: [
      "Gain de masse musculaire très marqué.",
      "Augmentation importante de la force.",
      "Perte de graisse et aspect plus sec.",
    ],
    risques: [
      {
        categorie: "Cardiovasculaires",
        items: [
          "Altération importante du profil lipidique.",
          "Hypertension.",
          "Risque cardiovasculaire élevé.",
        ],
      },
      {
        categorie: "Hormonaux",
        items: [
          "Baisse de la production naturelle de testostérone.",
          "Atrophie testiculaire.",
          "Infertilité.",
          "Gynécomastie.",
        ],
      },
      {
        categorie: "Autres",
        items: [
          "Irritabilité.",
          "Troubles du sommeil.",
          "Transpiration nocturne.",
          "Acné.",
          "Risque de dommage aux reins",
          "Chute de cheveux.",
        ],
      },
    ],
    legalite: [
      "Usage humain non approuvé. Cadre légal variable selon le pays.",
      "Interdit en compétition sportive selon les règles antidopage.",
    ],
    sources: [
      OFFICIAL_SOURCES.canadaAnabolicSteroidsFactsheet,
      OFFICIAL_SOURCES.wadaProhibitedList,
      OFFICIAL_SOURCES.wadaListPdf2025,
      OFFICIAL_SOURCES.canadaControlledDrugsAct,
    ],
  },

  {
    slug: "boldenone",
    nom: "Equipoise",
    alias: ["Boldenone", "Boldenone Undecylenate"],
    definition:
      "La boldénone est un stéroïde anabolisant associé à un usage vétérinaire. Elle a été développée pour améliorer l’appétit et la condition physique chez certains animaux.",
    effetsMedicaux: ["Usage vétérinaire dans certains contextes."],
    effetsRecherches: [
      "Gain de masse musculaire progressif.",
      "Augmentation de la force.",
      "Appétit souvent augmenté.",
    ],
    risques: [
      {
        categorie: "Cardiovasculaires",
        items: ["Altération du profil lipidique.", "Hypertension.", "Risque cardiovasculaire accru."],
      },
      {
        categorie: "Hormonaux",
        items: ["Baisse de la production naturelle de testostérone.", "Infertilité.", "Gynécomastie."],
      },
      {
        categorie: "Autres",
        items: ["Acné.", "Irritabilité.", "Rétention d’eau.", "Chute de cheveux."],
      },
    ],
    legalite: [
      "Usage humain non approuvé. Usage vétérinaire selon le cadre légal.",
      "Interdite en compétition sportive selon les règles antidopage.",
    ],
    sources: [
      OFFICIAL_SOURCES.canadaAnabolicSteroidsFactsheet,
      OFFICIAL_SOURCES.wadaProhibitedList,
      OFFICIAL_SOURCES.wadaListPdf2025,
      OFFICIAL_SOURCES.canadaControlledDrugsAct,
    ],
  },

  {
    slug: "methandienone",
    nom: "Methandienone",
    alias: ["Dianabol"],
    definition:
      "Le methandienone est un stéroïde anabolisant oral historiquement connu. Il est souvent reputé pour causer prise de masse rapide mais il n’est plus approuvé médicalement dans de nombreux pays.",
    effetsMedicaux: [],
    effetsRecherches: ["Gain de masse musculaire rapide.", "Augmentation de la force."],
    risques: [
      {
        categorie: "Général",
        items: [
          "Risque hépatique associé à certains stéroïdes oraux.",
          "Altération du profil lipidique et risque cardiovasculaire accru.",
          "Baisse de la production naturelle de testostérone.",
        ],
      },
    ],
    legalite: [
      "Substance contrôlée selon la réglementation du pays.",
      "Interdit en compétition sportive selon les règles antidopage.",
    ],
    sources: [
      OFFICIAL_SOURCES.canadaAnabolicSteroidsFactsheet,
      OFFICIAL_SOURCES.wadaProhibitedList,
      OFFICIAL_SOURCES.wadaListPdf2025,
      OFFICIAL_SOURCES.canadaControlledDrugsAct,
    ],
  },

  {
    slug: "clenbuterol",
    nom: "Clenbutérol",
    alias: ["Clenbuterol"],
    definition:
      "Le clenbutérol est un agoniste bêta-2 adrénergique connu pour son effet bronchodilatateur et stimulant. Il est surtout associé à des usages vétérinaires et il est fréquemment employé dans le dopage.",
    effetsMedicaux: ["Bronchodilatation (Dilatation des bronches)"],
    effetsRecherches: ["Effet stimulant.", "Augmentation du métabolisme.", "Perte de graisse rapportée."],
    risques: [
      {
        categorie: "Cardiovasculaires",
        items: ["Tachycardie (Rythme cardiaque anormalement élevé au repos).", "Hypertension.", "Arythmies.", "Risque cardiaque accru."],
      },
      {
        categorie: "Neurologiques",
        items: ["Anxiété.", "Tremblements.", "Insomnie."],
      },
    ],
    legalite: [
      "Statut légal variable selon le pays.",
      "Interdit en compétition sportive selon les règles antidopage.",
    ],
    sources: [OFFICIAL_SOURCES.wadaProhibitedList, OFFICIAL_SOURCES.wadaListPdf2025],
  },

  {
    slug: "ibutamoren",
    nom: "Ibutamoren",
    alias: ["MK-677"],
    definition:
      "L’ibutamoren est présenté comme un composé chimique stimulant la sécrétion d’hormone de croissance et d’IGF-1. Sa situation réglementaire et ses usages varient selon les pays.",
    effetsMedicaux: [],
    effetsRecherches: ["Appétit souvent augmenté.", "Augmentation de GH et IGF-1 rapportée."],
    risques: [
      {
        categorie: "Métaboliques",
        items: ["Rétention d’eau.", "Effets d'accélération métaboliques."],
      },
    ],
    legalite: [
      "Statut légal variable selon le pays.",
      "Interdit en compétition sportive selon les règles antidopage.",
    ],
    sources: [OFFICIAL_SOURCES.wadaProhibitedList, OFFICIAL_SOURCES.wadaListPdf2025],
  },

  {
    slug: "turinabol",
    nom: "Turinabol",
    alias: ["T-Bol"],
    definition:
      "Le turinabol est un stéroïde oral reconnu historiquement de le monde du dopage. Il provoque un gains de force avec une rétention d’eau plus faible.",
    effetsMedicaux: [],
    effetsRecherches: ["Gains de force.", "Rétention d’eau souvent plus faible."],
    risques: [
      {
        categorie: "Hépatiques",
        items: ["Risque hépatique associé aux stéroïdes oraux."],
      },
      {
        categorie: "Hormonaux",
        items: ["Baisse de la production naturelle de testostérone."],
      },
    ],
    legalite: [
      "Substance contrôlée selon la réglementation du pays.",
      "Interdit en compétition sportive selon les règles antidopage.",
    ],
    sources: [
      OFFICIAL_SOURCES.canadaAnabolicSteroidsFactsheet,
      OFFICIAL_SOURCES.wadaProhibitedList,
      OFFICIAL_SOURCES.wadaListPdf2025,
      OFFICIAL_SOURCES.canadaControlledDrugsAct,
    ],
  },
];

export function getSubstance(slug: string) {
  return SUBSTANCES.find((s) => s.slug === slug);
}
