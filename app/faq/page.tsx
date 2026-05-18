'use client';

import { useApp } from '../providers';
import { useState } from 'react';

type FAQItem = {
  q: string;
  a: string;
};

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--border-radius)',
            overflow: 'hidden',
            transition: 'border-color 0.2s',
            borderColor: openIndex === idx ? 'var(--primary)' : 'var(--border)',
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            style={{
              width: '100%',
              padding: 'var(--space-3)',
              background: 'var(--bg)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'left',
              fontSize: 'var(--text-base)',
              fontWeight: 500,
              color: 'var(--text)',
              transition: 'all 0.2s',
            }}
          >
            <span>{item.q}</span>
            <span
              style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--text-muted)',
              }}
            >
              {openIndex === idx ? '−' : '+'}
            </span>
          </button>

          {openIndex === idx && (
            <div
              style={{
                padding: 'var(--space-3)',
                background: 'var(--bg)',
                borderTop: '1px solid var(--border)',
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
              }}
            >
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  const { lang } = useApp();

  const faqItems = {
    fr: [
      {
        q: 'Qu\'est-ce que SellXY ?',
        a: 'SellXY est une application mobile complète pour la gestion de commerce. Elle vous permet de gérer votre inventaire, traiter les ventes en caisse, suivre les commandes et analyser vos performances en temps réel depuis votre téléphone.',
      },
      {
        q: 'Pour qui est destiné SellXY ?',
        a: 'SellXY est conçu pour les commerçants, petites boutiques, marchands et petites entreprises qui souhaitent gérer leur business depuis leur mobile sans besoin d\'équipement POS coûteux.',
      },
      {
        q: 'Quelles plateformes supportez-vous ?',
        a: 'SellXY est disponible sur iOS (App Store) et Android (Google Play). L\'application fonctionne sur tous les appareils modernes.',
      },
      {
        q: 'SellXY fonctionne-t-il hors ligne ?',
        a: 'Oui, SellXY fonctionne partiellement hors ligne. Vous pouvez créer des ventes, mais elles se synchroniseront automatiquement lorsque vous revenez en ligne.',
      },
      {
        q: 'Mes données sont-elles sécurisées ?',
        a: 'Absolument. Vos données sont cryptées en transit et au repos, stockées sur les serveurs sécurisés de Supabase. Nous respectons la conformité RGPD et ISO 27001.',
      },
      {
        q: 'Puis-je exporter mes données ?',
        a: 'Oui, vous pouvez exporter toutes vos données (produits, ventes, commandes) en CSV directement depuis l\'application dans la section Export.',
      },
      {
        q: 'Combien d\'employés puis-je ajouter ?',
        a: 'Avec le plan Free: 1 utilisateur. Plan Pro: jusqu\'à 5 utilisateurs. Plan Entreprise: utilisateurs illimités.',
      },
      {
        q: 'Quelles devises sont supportées ?',
        a: 'SellXY supporte les principales devises africaines (FCFA, XOF, NAIRA, etc.). Vous pouvez configurer votre devise dans les paramètres.',
      },
      {
        q: 'Comment fonctionne l\'essai gratuit ?',
        a: 'Le plan Pro propose un essai gratuit de 30 jours avec accès complet à toutes les fonctionnalités. Aucune carte de crédit requise pour commencer.',
      },
      {
        q: 'Puis-je changer de plan ?',
        a: 'Oui, vous pouvez passer du plan Free au Pro à tout moment. Les changements prennent effet immédiatement.',
      },
      {
        q: 'Acceptez-vous Wave Money et Orange Money ?',
        a: 'Oui, nous supportons les paiements par Wave Money, Orange Money et autres portefeuilles mobiles selon votre région.',
      },
      {
        q: 'Proposez-vous une garantie de remboursement ?',
        a: 'Oui, nous offrons une garantie de remboursement de 14 jours si vous n\'êtes pas satisfait du plan Pro.',
      },
      {
        q: 'Comment obtenir de l\'aide ?',
        a: 'Vous pouvez contacter notre équipe support à support@sellxy.app ou accéder à la documentation complète dans l\'application.',
      },
      {
        q: 'Quel est le temps de réponse du support ?',
        a: 'Notre équipe répond généralement dans les 24 heures. Les clients Pro bénéficient d\'une réponse prioritaire sous 4 heures.',
      },
      {
        q: 'Proposez-vous une formation ?',
        a: 'Oui, nous proposons des tutoriels vidéo intégrés dans l\'application et une documentation complète pour vous aider à démarrer rapidement.',
      },
    ],
    en: [
      {
        q: 'What is SellXY?',
        a: 'SellXY is a complete mobile commerce management app. It allows you to manage your inventory, process sales at checkout, track orders, and analyze your performance in real-time from your phone.',
      },
      {
        q: 'Who is SellXY for?',
        a: 'SellXY is designed for merchants, small shops, vendors, and small businesses who want to manage their business from their mobile without expensive POS equipment.',
      },
      {
        q: 'Which platforms do you support?',
        a: 'SellXY is available on iOS (App Store) and Android (Google Play). The app works on all modern devices.',
      },
      {
        q: 'Does SellXY work offline?',
        a: 'Yes, SellXY works partially offline. You can create sales, and they will automatically sync when you come back online.',
      },
      {
        q: 'Are my data secure?',
        a: 'Absolutely. Your data is encrypted in transit and at rest, stored on secure Supabase servers. We comply with GDPR and ISO 27001.',
      },
      {
        q: 'Can I export my data?',
        a: 'Yes, you can export all your data (products, sales, orders) as CSV directly from the app in the Export section.',
      },
      {
        q: 'How many employees can I add?',
        a: 'Free plan: 1 user. Pro plan: up to 5 users. Enterprise plan: unlimited users.',
      },
      {
        q: 'Which currencies are supported?',
        a: 'SellXY supports major African currencies (FCFA, XOF, NAIRA, etc.). You can configure your currency in settings.',
      },
      {
        q: 'How does the free trial work?',
        a: 'The Pro plan offers a 30-day free trial with full access to all features. No credit card required to get started.',
      },
      {
        q: 'Can I change my plan?',
        a: 'Yes, you can upgrade from Free to Pro at any time. Changes take effect immediately.',
      },
      {
        q: 'Do you accept Wave Money and Orange Money?',
        a: 'Yes, we support payments via Wave Money, Orange Money, and other mobile wallets depending on your region.',
      },
      {
        q: 'Do you offer a refund guarantee?',
        a: 'Yes, we offer a 14-day refund guarantee if you\'re not satisfied with the Pro plan.',
      },
      {
        q: 'How do I get help?',
        a: 'You can contact our support team at support@sellxy.app or access the complete documentation in the app.',
      },
      {
        q: 'What is your support response time?',
        a: 'Our team typically responds within 24 hours. Pro customers get priority response within 4 hours.',
      },
      {
        q: 'Do you offer training?',
        a: 'Yes, we offer video tutorials built into the app and complete documentation to help you get started quickly.',
      },
    ],
  };

  const t = {
    fr: {
      title: 'Questions Fréquemment Posées',
      subtitle: 'Trouvez les réponses aux questions les plus courantes sur SellXY',
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to the most common questions about SellXY',
    },
  };

  const tx = t[lang];
  const items = faqItems[lang];

  return (
    <>
      <main>
        <section
          style={{
            padding: 'var(--space-20) var(--space-3)',
            background: 'var(--bg)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h1
                style={{
                  fontSize: 'var(--text-5xl)',
                  fontWeight: 700,
                  color: 'var(--text)',
                  margin: '0 0 var(--space-3)',
                }}
              >
                {tx.title}
              </h1>
              <p
                style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-muted)',
                  margin: 0,
                  maxWidth: '600px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {tx.subtitle}
              </p>
            </div>

            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <FAQAccordion items={items} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
