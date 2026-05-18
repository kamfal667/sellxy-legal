'use client';

import { useApp } from '../providers';

export function Hero() {
  const { lang } = useApp();

  const t = {
    fr: {
      headline: 'Gérez votre commerce en toute simplicité',
      subheadline: 'SellXY centralise votre inventaire, vos ventes et vos statistiques dans une seule app mobile.',
      cta: 'Download the app',
      demo: 'Watch demo',
      badge: 'Coming soon',
    },
    en: {
      headline: 'Manage your business effortlessly',
      subheadline: 'SellXY centralizes your inventory, sales, and analytics in a single mobile app.',
      cta: 'Download the app',
      demo: 'Watch demo',
      badge: 'Coming soon',
    },
  };

  const tx = t[lang];

  return (
    <section style={{
      padding: 'var(--space-20) var(--space-3)',
      textAlign: 'center',
      background: 'var(--bg)',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          padding: '4px 12px',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          fontSize: 'var(--text-xs)',
          fontWeight: 500,
          color: 'var(--text-muted)',
          marginBottom: 'var(--space-4)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {tx.badge}
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'var(--text-7xl)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: 'var(--text)',
          margin: '0 0 var(--space-4)',
          letterSpacing: '-0.02em',
        }}>
          {tx.headline}
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 'var(--text-xl)',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          margin: '0 0 var(--space-6)',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          {tx.subheadline}
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: 'var(--space-2)',
          justifyContent: 'center',
          marginBottom: 'var(--space-12)',
          flexWrap: 'wrap',
        }}>
          <button style={{
            padding: '12px 24px',
            background: 'var(--text)',
            color: 'var(--bg)',
            border: 'none',
            borderRadius: 'var(--border-radius)',
            fontSize: 'var(--text-base)',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            {tx.cta} →
          </button>

          <button style={{
            padding: '12px 24px',
            background: 'transparent',
            color: 'var(--text)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--border-radius)',
            fontSize: 'var(--text-base)',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--text)';
            e.currentTarget.style.background = 'var(--border)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.background = 'transparent';
          }}
          >
            {tx.demo}
          </button>
        </div>

        {/* Screenshot */}
        <div style={{
          border: '1px solid var(--border)',
          borderRadius: 'var(--border-radius)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow)',
        }}>
          <img
            src="/screenshot-dashboard.png"
            alt="SellXY Dashboard"
            style={{
              width: '100%',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
}
