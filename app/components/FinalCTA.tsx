'use client';

import { useApp } from '../providers';

export function FinalCTA() {
  const { lang } = useApp();

  const t = {
    fr: {
      title: 'Prêt à transformer votre commerce ?',
      subtitle: 'Rejoignez SellXY et commencez gratuitement. Aucune carte de crédit requise.',
      cta: 'Télécharger maintenant',
      benefit1: '✓ Gratuit pendant 30 jours',
      benefit2: '✓ Aucune carte requise',
      benefit3: '✓ Support 24/7',
    },
    en: {
      title: 'Ready to transform your business?',
      subtitle: 'Join SellXY and start free. No credit card required.',
      cta: 'Download now',
      benefit1: '✓ Free for 30 days',
      benefit2: '✓ No card required',
      benefit3: '✓ 24/7 support',
    },
  };

  const tx = t[lang];

  return (
    <section style={{
      padding: 'var(--space-16) var(--space-3)',
      background: 'var(--bg-secondary)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'var(--text-4xl)',
          fontWeight: 700,
          color: 'var(--text)',
          margin: '0 0 var(--space-3)',
        }}>
          {tx.title}
        </h2>

        <p style={{
          fontSize: 'var(--text-lg)',
          color: 'var(--text-muted)',
          margin: '0 0 var(--space-6)',
          lineHeight: 1.6,
        }}>
          {tx.subtitle}
        </p>

        <button style={{
          padding: 'var(--space-4) var(--space-8)',
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--border-radius)',
          fontSize: 'var(--text-lg)',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          {tx.cta}
        </button>

        {/* Benefits */}
        <div style={{
          display: 'flex',
          gap: 'var(--space-6)',
          justifyContent: 'center',
          marginTop: 'var(--space-6)',
          fontSize: 'var(--text-sm)',
          color: 'var(--text-muted)',
        }}>
          <div>{tx.benefit1}</div>
          <div>{tx.benefit2}</div>
          <div>{tx.benefit3}</div>
        </div>
      </div>
    </section>
  );
}
