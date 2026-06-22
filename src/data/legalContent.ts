import { Language } from './translations';

// NOTE: This is a sensible starting template, not legal advice. Have it reviewed
// by counsel and set a real contact address before a public launch (see Sprint 02 S02-09).
const CONTACT_EMAIL = 'contact@karatou.academy';

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export const privacyPolicy: Record<Language, LegalDoc> = {
  fr: {
    title: 'Politique de confidentialité',
    updated: 'Mise à jour : 16 juin 2026',
    intro:
      'Karatou Academy respecte votre vie privée. Cette politique explique quelles données nous collectons, pourquoi, et quels sont vos droits.',
    sections: [
      {
        heading: 'Données que nous collectons',
        body: [
          'Lors de la création de votre compte et de votre apprentissage, nous collectons : votre nom, votre adresse email, votre pays, votre progression dans les modules et les certificats que vous obtenez.',
          'Nous ne collectons pas de données de paiement ni de données sensibles non nécessaires au service.',
        ],
      },
      {
        heading: 'Pourquoi nous utilisons ces données',
        body: [
          'Vos données servent uniquement à : créer et sécuriser votre compte, fournir les cours, suivre votre progression, et émettre des certificats vérifiables.',
          "Pour les apprenants rattachés à une organisation partenaire, l'organisation peut voir la progression et les certificats de ses membres.",
        ],
      },
      {
        heading: 'Hébergement et sous-traitants',
        body: [
          "L'authentification et la base de données sont fournies par Supabase. Vos données sont stockées de manière sécurisée et l'accès est protégé par des règles de sécurité au niveau des lignes (RLS).",
        ],
      },
      {
        heading: 'Conservation des données',
        body: [
          "Nous conservons vos données tant que votre compte est actif. Vous pouvez demander la suppression de votre compte et de vos données à tout moment ; les certificats déjà émis peuvent être conservés de manière anonymisée à des fins de vérification.",
        ],
      },
      {
        heading: 'Vos droits',
        body: [
          "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous.",
        ],
      },
      {
        heading: 'Contact',
        body: [`Pour toute question relative à vos données : ${CONTACT_EMAIL}.`],
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: June 16, 2026',
    intro:
      'Karatou Academy respects your privacy. This policy explains what data we collect, why, and what your rights are.',
    sections: [
      {
        heading: 'Data we collect',
        body: [
          'When you create an account and learn, we collect: your name, email address, country, your progress through modules, and the certificates you earn.',
          'We do not collect payment data or sensitive data that is not necessary for the service.',
        ],
      },
      {
        heading: 'Why we use this data',
        body: [
          'Your data is used only to: create and secure your account, deliver courses, track your progress, and issue verifiable certificates.',
          'For learners attached to a partner organization, the organization can see its members’ progress and certificates.',
        ],
      },
      {
        heading: 'Hosting and processors',
        body: [
          'Authentication and the database are provided by Supabase. Your data is stored securely and access is protected by row-level security (RLS).',
        ],
      },
      {
        heading: 'Data retention',
        body: [
          'We keep your data while your account is active. You can request deletion of your account and data at any time; already-issued certificates may be retained in anonymized form for verification.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'You have the right to access, correct, and delete your personal data. To exercise these rights, contact us.',
        ],
      },
      {
        heading: 'Contact',
        body: [`For any question about your data: ${CONTACT_EMAIL}.`],
      },
    ],
  },
  ha: {
    title: 'Manufar Sirri',
    updated: 'An sabunta: 16 ga Yuni 2026',
    intro:
      'Karatou Academy yana mutunta sirrinka. Wannan manufar tana bayyana wadanne bayanai muke tarawa, dalili, da hakkokinka.',
    sections: [
      {
        heading: 'Bayanan da muke tarawa',
        body: [
          'Lokacin da ka kirkiri asusu kuma kake karatu, muna tara: sunanka, imel, kasa, ci gabanka a darussa, da takardun shaida da ka samu.',
          'Ba ma tara bayanan biya ko bayanai masu mahimmanci da ba a bukata ba.',
        ],
      },
      {
        heading: 'Dalilin amfani da bayanai',
        body: [
          'Ana amfani da bayananka ne kawai don: kirkira da kare asusunka, bayar da darussa, bibiyar ci gabanka, da fitar da takardun shaida da za a iya tabbatarwa.',
          'Ga daliban da ke da alaka da kungiya, kungiyar tana iya ganin ci gaba da takardun mambobinta.',
        ],
      },
      {
        heading: 'Masaukin bayanai',
        body: [
          'Supabase ne ke bayar da tabbatarwa da bayanai. Ana adana bayananka cikin aminci kuma ana kare shiga da dokokin tsaro na layi (RLS).',
        ],
      },
      {
        heading: 'Adana bayanai',
        body: [
          'Muna adana bayananka muddin asusunka yana aiki. Kana iya neman a share asusunka da bayananka a kowane lokaci; takardun da aka riga aka fitar ana iya ajiye su ba tare da suna ba don tabbatarwa.',
        ],
      },
      {
        heading: 'Hakkokinka',
        body: [
          'Kana da hakkin ganin, gyara, da share bayananka. Don amfani da wadannan hakkoki, tuntube mu.',
        ],
      },
      {
        heading: 'Tuntuba',
        body: [`Don kowace tambaya game da bayananka: ${CONTACT_EMAIL}.`],
      },
    ],
  },
};

export const termsOfService: Record<Language, LegalDoc> = {
  fr: {
    title: "Conditions d'utilisation",
    updated: 'Mise à jour : 16 juin 2026',
    intro:
      "En utilisant Karatou Academy, vous acceptez les conditions suivantes. Merci de les lire attentivement.",
    sections: [
      {
        heading: 'Acceptation',
        body: ["L'utilisation de la plateforme implique l'acceptation de ces conditions. Si vous n'êtes pas d'accord, n'utilisez pas le service."],
      },
      {
        heading: 'Comptes et sécurité',
        body: [
          'Vous êtes responsable de la confidentialité de vos identifiants et de toute activité sur votre compte. Utilisez un mot de passe robuste et signalez tout accès non autorisé.',
        ],
      },
      {
        heading: 'Utilisation acceptable',
        body: [
          "Vous vous engagez à ne pas détourner la plateforme, à ne pas tenter d'accéder à des données d'autres utilisateurs, et à respecter les lois applicables.",
        ],
      },
      {
        heading: 'Certificats',
        body: [
          "Les certificats sont émis après validation d'un module et sont vérifiables publiquement par leur identifiant. Un certificat peut être révoqué en cas de fraude ou d'erreur.",
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        body: [
          'Les contenus de cours restent la propriété de Karatou Academy ou de ses partenaires. Ils sont fournis pour votre apprentissage personnel.',
        ],
      },
      {
        heading: 'Responsabilité et contact',
        body: [
          'Le service est fourni « en l\'état ». Dans les limites permises par la loi, Karatou Academy ne saurait être tenue responsable des dommages indirects.',
          `Contact : ${CONTACT_EMAIL}.`,
        ],
      },
    ],
  },
  en: {
    title: 'Terms of Service',
    updated: 'Last updated: June 16, 2026',
    intro: 'By using Karatou Academy, you agree to the following terms. Please read them carefully.',
    sections: [
      {
        heading: 'Acceptance',
        body: ['Using the platform means you accept these terms. If you do not agree, do not use the service.'],
      },
      {
        heading: 'Accounts and security',
        body: [
          'You are responsible for keeping your credentials confidential and for all activity on your account. Use a strong password and report any unauthorized access.',
        ],
      },
      {
        heading: 'Acceptable use',
        body: [
          'You agree not to misuse the platform, not to attempt to access other users’ data, and to comply with applicable laws.',
        ],
      },
      {
        heading: 'Certificates',
        body: [
          'Certificates are issued after completing a module and are publicly verifiable by their identifier. A certificate may be revoked in case of fraud or error.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'Course content remains the property of Karatou Academy or its partners. It is provided for your personal learning.',
        ],
      },
      {
        heading: 'Liability and contact',
        body: [
          'The service is provided "as is". To the extent permitted by law, Karatou Academy is not liable for indirect damages.',
          `Contact: ${CONTACT_EMAIL}.`,
        ],
      },
    ],
  },
  ha: {
    title: 'Sharudan Amfani',
    updated: 'An sabunta: 16 ga Yuni 2026',
    intro: 'Ta hanyar amfani da Karatou Academy, ka yarda da sharudan da ke kasa. Da fatan ka karanta su sosai.',
    sections: [
      {
        heading: 'Yarda',
        body: ['Amfani da dandamali yana nufin ka yarda da wadannan sharuda. Idan ba ka yarda ba, kada ka yi amfani da sabis din.'],
      },
      {
        heading: 'Asusu da tsaro',
        body: [
          'Kai ke da alhakin kiyaye sirrin shaidarka da duk wani aiki a asusunka. Yi amfani da kalmar sirri mai karfi kuma ka sanar da duk wani shiga ba bisa ka’ida ba.',
        ],
      },
      {
        heading: 'Amfani da ya dace',
        body: [
          'Ka yarda ba za ka cuci dandamali ba, ba za ka yi kokarin shiga bayanan wasu masu amfani ba, kuma za ka bi dokokin da suka dace.',
        ],
      },
      {
        heading: 'Takardun shaida',
        body: [
          'Ana fitar da takardun shaida bayan kammala module kuma ana iya tabbatar da su a fili ta hanyar lambar su. Ana iya soke takarda idan an sami zamba ko kuskure.',
        ],
      },
      {
        heading: 'Hakkin mallaka',
        body: [
          'Abun cikin darussa ya kasance mallakar Karatou Academy ko abokan hadin gwiwarta. Ana bayar da shi don karatunka na kanka.',
        ],
      },
      {
        heading: 'Alhaki da tuntuba',
        body: [
          'Ana bayar da sabis din "kamar yadda yake". Cikin iyakar da doka ta yarda, Karatou Academy ba ta da alhakin barnar da ba kai tsaye ba.',
          `Tuntuba: ${CONTACT_EMAIL}.`,
        ],
      },
    ],
  },
};
