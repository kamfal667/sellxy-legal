// ─── Data (FR only) ─────────────────────────────────────────────────────

export const FEATURES = [
  { icon:'box',   title:'Gestion des stocks',    body:"Suivez votre inventaire en temps réel avec des alertes automatiques de rupture." },
  { icon:'cart',  title:'Caisse POS',            body:"Encaissez vos clients en quelques secondes, même sans réseau." },
  { icon:'chart', title:'Statistiques claires',  body:"Chiffre d'affaires, produits stars, marges — tout sur un écran." },
  { icon:'users', title:'Multi-utilisateurs',    body:"Créez des comptes employés avec des permissions limitées." },
  { icon:'globe', title:"Pensé pour l'Afrique",  body:"FCFA, GHS, NGN, MAD et 20 autres devises supportées nativement." },
  { icon:'lock',  title:'Sécurité',              body:"Données chiffrées et sauvegardées automatiquement chaque jour." },
];

export const STEPS = [
  { n:1, title:"Téléchargez l'app", body:"Apple Store ou Google Play, 12 Mo. Démarre instantanément." },
  { n:2, title:'Ajoutez vos produits', body:"Importez depuis Excel ou scannez les codes-barres avec votre caméra." },
  { n:3, title:'Vendez & suivez tout', body:"La caisse, le stock et les rapports — au même endroit, hors ligne ou non." },
];

export const SCREENS = [
  { key:'dashboard', label:'Tableau de bord',  caption:"Vue d'ensemble : CA, ventes, alertes stock." },
  { key:'products',  label:'Inventaire',       caption:"Tous vos produits, stock à jour, alertes basses." },
  { key:'pos',       label:'Caisse',           caption:"Encaissement rapide en moins de 10 secondes." },
  { key:'reports',   label:'Rapports',         caption:"Tendances, best-sellers, export Excel & PDF." },
];

export const BENEFITS = [
  'Démarrez en moins de 2 minutes',
  'Fonctionne même hors ligne',
  'Support en français et anglais',
  'Aucune carte bancaire requise',
  'Données synchronisées en temps réel',
];

export const COMPARE_ROWS = [
  { feat:'Stock à jour en temps réel',   paper:false, excel:false, app:true  },
  { feat:'Alerte rupture automatique',    paper:false, excel:false, app:true  },
  { feat:'Encaissement en 5 secondes',    paper:false, excel:false, app:true  },
  { feat:'Rapport journalier',            paper:'lent', excel:'lent', app:true },
  { feat:'Plusieurs employés',            paper:false, excel:false, app:true  },
  { feat:'Marche hors ligne',             paper:true,  excel:false, app:true  },
];

export const TESTIMONIALS = [
  { quote:"Avant je notais tout dans un cahier. Maintenant je sais exactement ce qu'il me reste, à la seconde près.", who:'Awa K.',   role:'Épicerie de quartier', city:'Dakar' },
  { quote:"Mes deux employés peuvent encaisser sans que je sois là. Énorme gain de temps tous les jours.",            who:'Kwame O.', role:'Boutique alimentaire', city:'Accra' },
  { quote:"Le rapport de fin de journée m'a fait découvrir mes vrais best-sellers. J'ai ajusté mes commandes.",        who:'Fatima Z.',role:'Mini-marché',           city:'Casablanca' },
];

export const FAQS = [
  { q:"Est-ce vraiment gratuit ?",                         a:"Oui. Toutes les fonctionnalités de base sont gratuites pour toujours, sans carte bancaire." },
  { q:"Ça marche hors ligne ?",                            a:"Oui. Vos ventes se synchronisent automatiquement dès que vous retrouvez du réseau." },
  { q:"Quelles devises sont supportées ?",                  a:"FCFA, GHS, NGN, MAD, EUR, USD et plus de 20 autres devises africaines." },
  { q:"Comment exporter mes données ?",                    a:"Excel ou PDF en un tap depuis l'écran rapports — par jour, semaine ou mois." },
  { q:"Combien d'employés puis-je ajouter ?",              a:"Autant que vous voulez, avec des permissions configurables pour chaque rôle." },
];
