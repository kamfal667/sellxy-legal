'use client';

import { useApp } from '../providers';
import { Navbar } from '../components/Navbar';

const content = {
  fr: {
    title: 'Conditions d\'utilisation — SellXY Stocks',
    updated: 'Dernière mise à jour : 11 mai 2026',
    back: '← Retour',
    prev: '← Politique de confidentialité',
    sections: [
      { title: '1. Acceptation', body: 'En téléchargeant, installant ou utilisant SellXY Stocks ("l\'Application"), vous acceptez ces Conditions d\'utilisation. Si vous n\'acceptez pas, n\'utilisez pas l\'Application.' },
      { title: '2. Description du service', items: ['Gestion des stocks (produits, catégories, suivi)', 'Caisse point de vente (POS)', 'Historique des ventes et tableau de bord analytique', 'Gestion clients et commandes', 'Accès multi-utilisateurs avec rôles (propriétaire / employé)'] },
      { title: '3. Inscription', items: ['Vous devez fournir des informations exactes', 'Vous êtes responsable de la sécurité de vos identifiants', 'Vous ne devez pas partager vos identifiants', 'Vous êtes responsable de toute activité sur votre compte', 'Vous devez avoir au moins 18 ans'] },
      { title: '4. Utilisation acceptable', items: ['Pas d\'activités illégales ou transactions frauduleuses', 'Pas de tentative de décompilation ou modification de l\'Application', 'Pas de téléchargement de contenu malveillant', 'Pas de violation des droits de tiers', 'Pas d\'accès non autorisé aux données d\'autres utilisateurs'] },
      { title: '5. Propriété des données', body: 'Vos données métier vous appartiennent. Produits, ventes, clients — tout ce que vous saisissez reste votre propriété. Vous accordez à SellXY une licence limitée pour stocker et traiter ces données uniquement pour fournir le service.', highlight: 'Nous ne revendiquons pas la propriété de vos données métier.' },
      { title: '6. Abonnement et tarification', items: ['L\'Application peut proposer des formules gratuites et payantes', 'Les abonnements sont facturés à l\'avance mensuellement ou annuellement', 'Remboursements au cas par cas — contact sous 7 jours : support@sellxy.app', 'Nous nous réservons le droit de modifier les tarifs avec 30 jours de préavis'] },
      { title: '7. Disponibilité du service', items: ['Nous visons une haute disponibilité mais ne garantissons pas 100% de disponibilité', 'Des maintenances peuvent interrompre temporairement le service', 'Nous ne sommes pas responsables des pertes dues à des interruptions hors de notre contrôle'] },
      { title: '8. Propriété intellectuelle', items: ['L\'Application, son design, logo et code source sont la propriété de SellXY', 'Vous ne pouvez pas copier, modifier ou distribuer sans autorisation écrite', '"SellXY" et "SellXY Stocks" sont des marques déposées de SellXY'] },
      { title: '9. Limitation de responsabilité', items: ['SellXY n\'est pas responsable des dommages indirects ou consécutifs', 'Notre responsabilité totale est limitée aux montants payés les 3 mois précédents', 'Nous ne garantissons pas que l\'Application sera sans erreur'], highlight: '⚠️ Conservez toujours vos propres sauvegardes de données critiques.' },
      { title: '10. Indemnisation', body: 'Vous acceptez d\'indemniser SellXY contre toute réclamation découlant de votre utilisation de l\'Application en violation de ces Conditions, de votre violation de toute loi applicable, ou du contenu que vous soumettez.' },
      { title: '11. Résiliation', items: ['Vous pouvez supprimer votre compte à tout moment dans l\'Application', 'Nous pouvons suspendre votre compte en cas de violation', 'Après résiliation, vos données seront supprimées sous 30 jours'] },
      { title: '12. Droit applicable', body: 'Ces Conditions sont régies par le droit applicable. Les litiges seront résolus à l\'amiable, et si nécessaire par arbitrage contraignant.' },
      { title: '13. Modifications', body: 'Nous pouvons mettre à jour ces Conditions. Nous vous informerons des changements importants via l\'Application ou par e-mail au moins 15 jours avant leur entrée en vigueur.' },
      { title: '14. Contact', body: 'SellXY — support@sellxy.app — https://sellxy.app' },
    ],
  },
  en: {
    title: 'Terms of Service — SellXY Stocks',
    updated: 'Last updated: May 11, 2026',
    back: '← Back',
    prev: '← Privacy Policy',
    sections: [
      { title: '1. Acceptance', body: 'By downloading, installing, or using SellXY Stocks ("the App"), you agree to these Terms of Service. If you do not agree, do not use the App.' },
      { title: '2. Description of Service', items: ['Inventory management (products, categories, stock tracking)', 'Point-of-sale (POS) functionality', 'Sales history and analytics dashboard', 'Customer and order management', 'Multi-user access with role-based permissions (owner / employee)'] },
      { title: '3. Account Registration', items: ['You must provide accurate information', 'You are responsible for maintaining the security of your credentials', 'You must not share login credentials', 'You are responsible for all activity under your account', 'You must be at least 18 years old'] },
      { title: '4. Acceptable Use', items: ['No illegal activities or fraudulent transactions', 'No reverse-engineering or tampering with the App', 'No uploading of malicious content or viruses', 'No violation of third-party rights', 'No unauthorized access to other users\' data'] },
      { title: '5. Data Ownership', body: 'Your business data belongs to you. Products, sales, customers — all data you enter remains your property. You grant SellXY a limited license to store and process this data solely to provide the service.', highlight: 'We do not claim ownership of your business data.' },
      { title: '6. Subscription & Pricing', items: ['The App may offer free and paid tiers', 'Subscriptions are billed in advance monthly or annually', 'Refunds handled case-by-case — contact within 7 days: support@sellxy.app', 'We reserve the right to change pricing with 30 days\' prior notice'] },
      { title: '7. Service Availability', items: ['We strive for high availability but do not guarantee 100% uptime', 'Maintenance may temporarily interrupt service', 'We are not liable for losses caused by interruptions beyond our control'] },
      { title: '8. Intellectual Property', items: ['The App, design, logo, and codebase are the intellectual property of SellXY', 'You may not copy, modify, or distribute without written permission', '"SellXY" and "SellXY Stocks" are trademarks of SellXY'] },
      { title: '9. Limitation of Liability', items: ['SellXY is not liable for indirect or consequential damages', 'Our total liability is limited to amounts paid in the preceding 3 months', 'We do not guarantee the App will be error-free'], highlight: '⚠️ Always maintain your own backups of critical business data.' },
      { title: '10. Indemnification', body: 'You agree to indemnify and hold SellXY harmless from claims arising from your use of the App in violation of these Terms, your violation of applicable law, or content you submit.' },
      { title: '11. Termination', items: ['You may delete your account at any time from within the App', 'We may suspend your account for violations', 'Upon termination, your data will be deleted within 30 days'] },
      { title: '12. Governing Law', body: 'These Terms are governed by applicable law. Disputes will be resolved through good-faith negotiation, and if necessary, binding arbitration.' },
      { title: '13. Changes', body: 'We may update these Terms. We will notify you of material changes at least 15 days before they take effect via the App or email.' },
      { title: '14. Contact', body: 'SellXY — support@sellxy.app — https://sellxy.app' },
    ],
  },
};

type TermsSection = {
  title: string;
  body?: string;
  items?: string[];
  highlight?: string;
};

export default function TermsPage() {
  const { lang } = useApp();
  const tx = content[lang];

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: 'calc(100vh - 60px)', padding: '40px 16px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', background: 'var(--bg-card)', borderRadius: '16px', padding: '48px', boxShadow: 'var(--shadow)', border: '1px solid var(--border)' }}>
          <a href="/" style={{ display: 'inline-block', marginBottom: '24px', color: 'var(--primary)', fontSize: '14px', fontWeight: 500 }}>
            {tx.back}
          </a>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text)', margin: '0 0 8px' }}>{tx.title}</h1>
          <p style={{ fontSize: '13px', color: 'var(--text-light)', margin: '0 0 40px' }}>
            {tx.updated} · <a href="mailto:support@sellxy.app" style={{ color: 'var(--primary)' }}>support@sellxy.app</a>
          </p>

          {tx.sections.map((s: TermsSection) => (
            <section key={s.title} style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text)', borderBottom: '2px solid var(--primary)', paddingBottom: '8px', marginBottom: '16px' }}>
                {s.title}
              </h2>
              {s.body && <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7 }}>{s.body}</p>}
              {s.items && (
                <ul style={{ paddingLeft: '20px', margin: '8px 0', lineHeight: '1.9', color: 'var(--text-muted)', fontSize: '15px' }}>
                  {s.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {s.highlight && (
                <p style={{ background: 'var(--primary-light)', border: '1px solid var(--primary-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--text)', fontSize: '14px', margin: '16px 0', fontWeight: 500 }}>
                  {s.highlight}
                </p>
              )}
            </section>
          ))}

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', marginTop: '40px', textAlign: 'center' }}>
            <a href="/privacy" style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: 500 }}>{tx.prev}</a>
          </div>
        </div>
      </main>
    </>
  );
}
