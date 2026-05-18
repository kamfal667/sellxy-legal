'use client';

import { useApp } from '../providers';
import { useState } from 'react';

export function FAQ() {
  const { lang } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const t = {
    fr: {
      title: 'Questions fréquemment posées',
      items: [
        {
          q: 'Combien de temps pour commencer ?',
          a: 'Vous pouvez commencer en moins de 5 minutes. Téléchargez l\'application, créez un compte et vous êtes prêt à traiter vos premières ventes.',
        },
        {
          q: 'Mes données sont-elles sécurisées ?',
          a: 'Oui, toutes vos données sont cryptées et stockées sur des serveurs sécurisés conformes au RGPD.',
        },
        {
          q: 'Puis-je annuler mon abonnement ?',
          a: 'Bien sûr, vous pouvez annuler à tout moment sans frais supplémentaires.',
        },
        {
          q: 'Fonctionne-t-il hors ligne ?',
          a: 'Oui, SellXY fonctionne partiellement hors ligne. Vos données se synchronisent automatiquement.',
        },
        {
          q: 'Quel support recevez-vous ?',
          a: 'Nous proposons un support par email 24/7, et les clients Pro bénéficient d\'une réponse prioritaire.',
        },
        {
          q: 'Puis-je exporter mes données ?',
          a: 'Oui, vous pouvez exporter vos données en CSV à tout moment.',
        },
      ],
    },
    en: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'How long to get started?',
          a: 'You can start in less than 5 minutes. Download the app, create an account and you\'re ready to process your first sales.',
        },
        {
          q: 'Are my data secure?',
          a: 'Yes, all your data is encrypted and stored on secure servers compliant with GDPR.',
        },
        {
          q: 'Can I cancel my subscription?',
          a: 'Of course, you can cancel anytime with no extra charges.',
        },
        {
          q: 'Does it work offline?',
          a: 'Yes, SellXY works partially offline. Your data syncs automatically.',
        },
        {
          q: 'What support do you offer?',
          a: 'We offer 24/7 email support, and Pro customers get priority response.',
        },
        {
          q: 'Can I export my data?',
          a: 'Yes, you can export your data as CSV anytime.',
        },
      ],
    },
  };

  const tx = t[lang];

  return (
    <section style={{
      padding: 'var(--space-16) var(--space-3)',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'var(--text-4xl)',
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: 'var(--space-12)',
          textAlign: 'center',
        }}>
          {tx.title}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          {tx.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: idx % 2 === 0 ? 'var(--bg)' : 'var(--bg-secondary)',
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
                  background: 'transparent',
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
                  gap: 'var(--space-3)',
                }}
              >
                <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flex: 1 }}>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    minWidth: '30px',
                  }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{item.q}</span>
                </div>
                <span
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--primary)',
                    minWidth: '20px',
                    textAlign: 'right',
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
      </div>
    </section>
  );
}
