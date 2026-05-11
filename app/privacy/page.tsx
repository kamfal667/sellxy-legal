'use client';

import { useApp } from '../providers';
import { Navbar } from '../components/Navbar';

const content = {
  fr: {
    title: 'Politique de confidentialité — SellXY Stocks',
    updated: 'Dernière mise à jour : 11 mai 2026',
    back: '← Retour',
    next: 'Conditions d\'utilisation →',
    sections: [
      {
        title: '1. Introduction',
        body: 'SellXY Stocks ("l\'Application", "nous") est une application mobile de gestion de stock et de caisse. Cette politique explique quelles données nous collectons, comment nous les utilisons et vos droits. En utilisant l\'Application, vous acceptez les pratiques décrites ici.',
      },
      {
        title: '2. Données collectées',
        subsections: [
          { subtitle: '2.1 Données de compte', items: ['Nom complet et adresse e-mail', 'Numéro de téléphone (optionnel)', 'Nom et localisation de l\'entreprise'] },
          { subtitle: '2.2 Données métier', items: ['Produits, catégories, niveaux de stock', 'Historique des ventes et transactions', 'Informations clients (si renseignées)', 'Données de commandes'] },
          { subtitle: '2.3 Données techniques', items: ['Type d\'appareil et système d\'exploitation', 'Rapports de plantage via Sentry', 'Analyses anonymes via PostHog', 'Adresse IP (collectée par Supabase)'] },
          { subtitle: '2.4 Médias', items: ['Photos sélectionnées depuis la galerie pour les images de produits et catégories'] },
        ],
      },
      {
        title: '3. Utilisation des données',
        table: [
          ['Finalité', 'Base légale'],
          ['Fournir et gérer l\'Application', 'Exécution du contrat'],
          ['Synchroniser vos données entre appareils', 'Exécution du contrat'],
          ['Corriger les bugs et améliorer la stabilité', 'Intérêt légitime'],
          ['Analyser l\'utilisation (anonymisé)', 'Intérêt légitime'],
          ['Envoyer des notifications de compte', 'Exécution du contrat'],
        ],
        highlight: 'Nous ne vendons pas vos données à des tiers. Nous n\'utilisons pas vos données à des fins publicitaires.',
      },
      {
        title: '4. Stockage et sécurité',
        items: [
          'Données stockées sur Supabase (PostgreSQL) hébergé sur AWS sécurisé',
          'Protection par Row-Level Security (RLS) : vous accédez uniquement à vos propres données',
          'Images dans Supabase Storage avec politiques de bucket privées',
          'Toutes les communications utilisent le chiffrement TLS/HTTPS',
          'Les mots de passe sont hashés et jamais stockés en clair',
        ],
      },
      {
        title: '5. Services tiers',
        table: [
          ['Service', 'Finalité'],
          ['Supabase', 'Base de données et authentification'],
          ['Sentry', 'Rapports de plantage'],
          ['PostHog', 'Analyses anonymes'],
          ['Google (OAuth)', 'Connexion optionnelle'],
          ['Expo / EAS', 'Distribution de l\'app'],
        ],
      },
      {
        title: '6. Conservation des données',
        items: [
          'Vos données sont conservées tant que votre compte est actif',
          'Vous pouvez demander la suppression à tout moment via support@sellxy.app',
          'Après suppression, les données sont définitivement effacées sous 30 jours',
        ],
      },
      {
        title: '7. Vos droits',
        body: 'Selon votre pays, vous pouvez avoir le droit d\'accéder, corriger, supprimer, exporter vos données ou retirer votre consentement. Contactez-nous : support@sellxy.app',
      },
      {
        title: '8. Enfants',
        body: 'L\'Application n\'est pas destinée aux enfants de moins de 13 ans. Nous ne collectons pas sciemment de données sur les moins de 13 ans.',
      },
      {
        title: '9. Modifications',
        body: 'Nous pouvons mettre à jour cette politique. Nous vous informerons des changements importants via l\'Application ou par e-mail.',
      },
      {
        title: '10. Contact',
        body: 'SellXY — support@sellxy.app — https://sellxy.app',
      },
    ],
  },
  en: {
    title: 'Privacy Policy — SellXY Stocks',
    updated: 'Last updated: May 11, 2026',
    back: '← Back',
    next: 'Terms of Service →',
    sections: [
      {
        title: '1. Introduction',
        body: 'SellXY Stocks ("the App", "we") is a mobile inventory and point-of-sale management app. This policy explains what data we collect, how we use it, and your rights. By using the App, you agree to these practices.',
      },
      {
        title: '2. Data We Collect',
        subsections: [
          { subtitle: '2.1 Account Data', items: ['Full name and email address', 'Phone number (optional)', 'Business name and location'] },
          { subtitle: '2.2 Business Data', items: ['Products, categories, stock levels', 'Sales records and transaction history', 'Customer information (if entered)', 'Order data'] },
          { subtitle: '2.3 Technical Data', items: ['Device type and OS', 'Crash reports via Sentry', 'Anonymous analytics via PostHog', 'IP address (collected by Supabase)'] },
          { subtitle: '2.4 Media', items: ['Photos from your gallery for product and category images'] },
        ],
      },
      {
        title: '3. How We Use Your Data',
        table: [
          ['Purpose', 'Legal Basis'],
          ['Provide and run the App', 'Contract performance'],
          ['Sync your data across devices', 'Contract performance'],
          ['Fix bugs and improve stability', 'Legitimate interest'],
          ['Analyze usage (anonymized)', 'Legitimate interest'],
          ['Send account notifications', 'Contract performance'],
        ],
        highlight: 'We do not sell your data to third parties. We do not use your data for advertising.',
      },
      {
        title: '4. Data Storage & Security',
        items: [
          'Data stored on Supabase (PostgreSQL) on secured AWS infrastructure',
          'Protected by Row-Level Security (RLS): you only access your own data',
          'Images stored in Supabase Storage with private bucket policies',
          'All communications use TLS/HTTPS encryption',
          'Passwords are hashed and never stored in plain text',
        ],
      },
      {
        title: '5. Third-Party Services',
        table: [
          ['Service', 'Purpose'],
          ['Supabase', 'Database & authentication'],
          ['Sentry', 'Crash reporting'],
          ['PostHog', 'Anonymous analytics'],
          ['Google (OAuth)', 'Optional sign-in'],
          ['Expo / EAS', 'App delivery'],
        ],
      },
      {
        title: '6. Data Retention',
        items: [
          'Your data is retained as long as your account is active',
          'Request deletion anytime: support@sellxy.app',
          'After deletion, data is permanently removed within 30 days',
        ],
      },
      {
        title: '7. Your Rights',
        body: 'Depending on your country, you may have the right to access, correct, delete, or export your data, or withdraw consent. Contact us: support@sellxy.app',
      },
      {
        title: '8. Children\'s Privacy',
        body: 'The App is not intended for children under 13. We do not knowingly collect data from children under 13.',
      },
      {
        title: '9. Changes',
        body: 'We may update this policy. We will notify you of significant changes through the App or by email.',
      },
      {
        title: '10. Contact',
        body: 'SellXY — support@sellxy.app — https://sellxy.app',
      },
    ],
  },
};

type Section = {
  title: string;
  body?: string;
  items?: string[];
  subsections?: { subtitle: string; items: string[] }[];
  table?: string[][];
  highlight?: string;
};

export default function PrivacyPage() {
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

          {tx.sections.map((s: Section) => (
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
              {s.subsections && s.subsections.map((sub) => (
                <div key={sub.subtitle}>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', margin: '16px 0 8px' }}>{sub.subtitle}</h3>
                  <ul style={{ paddingLeft: '20px', lineHeight: '1.9', color: 'var(--text-muted)', fontSize: '14px' }}>
                    {sub.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
              {s.table && (
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', margin: '12px 0' }}>
                  <thead>
                    <tr>
                      {s.table[0].map((h) => (
                        <th key={h} style={{ background: 'var(--th-bg)', padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: 'var(--th-text)', border: '1px solid var(--border)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.slice(1).map((row, i) => (
                      <tr key={i}>
                        {row.map((cell) => (
                          <td key={cell} style={{ padding: '10px 14px', color: 'var(--text-muted)', border: '1px solid var(--border)', verticalAlign: 'top' }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {s.highlight && (
                <p style={{ background: 'var(--primary-light)', border: '1px solid var(--primary-border)', borderRadius: '8px', padding: '12px 16px', color: 'var(--text)', fontSize: '14px', margin: '16px 0', fontWeight: 500 }}>
                  ✅ {s.highlight}
                </p>
              )}
            </section>
          ))}

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', marginTop: '40px', textAlign: 'center' }}>
            <a href="/terms" style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: 500 }}>{tx.next}</a>
          </div>
        </div>
      </main>
    </>
  );
}
