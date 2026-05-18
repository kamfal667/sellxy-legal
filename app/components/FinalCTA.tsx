'use client';

import { useApp } from '../providers';

export function FinalCTA() {
  const { lang } = useApp();

  const t = {
    fr: {
      title: 'Prêt à transformer votre commerce ?',
      subtitle: 'Rejoignez SellXY et commencez gratuitement. Aucune carte de crédit requise.',
      cta: 'Télécharger maintenant',
    },
    en: {
      title: 'Ready to transform your business?',
      subtitle: 'Join SellXY and start free. No credit card required.',
      cta: 'Download now',
    },
  };

  const tx = t[lang];

  return (
    <section style={{
      padding: 'var(--space-16) var(--space-3)',
      background: 'var(--bg)',
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
          padding: 'var(--space-3) var(--space-6)',
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--border-radius)',
          fontSize: 'var(--text-base)',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          {tx.cta}
        </button>
      </div>
    </section>
  );
}
