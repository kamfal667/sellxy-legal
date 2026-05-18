'use client';

import { useApp } from '../providers';

export function Hero() {
  const { lang } = useApp();

  const t = {
    fr: {
      headline: 'Gérez votre commerce en toute simplicité',
      subheadline: 'SellXY centralise votre inventaire, vos ventes et vos statistiques dans une seule app mobile.',
      cta: 'Télécharger l\'app',
      demo: 'En savoir plus',
      badge: 'Bientôt disponible',
      feature1: 'Inventaire complet',
      feature2: 'Paiements rapides',
      feature3: 'Analyses en temps réel',
    },
    en: {
      headline: 'Manage your business effortlessly',
      subheadline: 'SellXY centralizes your inventory, sales, and analytics in a single mobile app.',
      cta: 'Download the app',
      demo: 'Learn more',
      badge: 'Coming soon',
      feature1: 'Full Inventory',
      feature2: 'Fast Payments',
      feature3: 'Real-time Analytics',
    },
  };

  const tx = t[lang];

  return (
    <section style={{
      padding: 'var(--space-20) var(--space-3)',
      background: 'var(--bg)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-8)',
          alignItems: 'center',
        }}>
          {/* Left: Headline + CTAs */}
          <div>
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
            }}>
              {tx.subheadline}
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              gap: 'var(--space-2)',
              flexWrap: 'wrap',
            }}>
              <button style={{
                padding: '12px 24px',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--border-radius)',
                fontSize: 'var(--text-base)',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
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
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.background = 'rgba(249, 115, 22, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'transparent';
              }}
              >
                {tx.demo}
              </button>
            </div>
          </div>

          {/* Right: Feature cards stacked */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
          }}>
            <div style={{
              padding: 'var(--space-4)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--border-radius)',
              display: 'flex',
              gap: 'var(--space-3)',
              alignItems: 'center',
            }}>
              <div style={{
                fontSize: '32px',
                minWidth: '40px',
              }}>📦</div>
              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
              }}>
                {tx.feature1}
              </div>
            </div>

            <div style={{
              padding: 'var(--space-4)',
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--border-radius)',
              display: 'flex',
              gap: 'var(--space-3)',
              alignItems: 'center',
            }}>
              <div style={{
                fontSize: '32px',
                minWidth: '40px',
              }}>💳</div>
              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
              }}>
                {tx.feature2}
              </div>
            </div>

            <div style={{
              padding: 'var(--space-4)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--border-radius)',
              display: 'flex',
              gap: 'var(--space-3)',
              alignItems: 'center',
            }}>
              <div style={{
                fontSize: '32px',
                minWidth: '40px',
              }}>📊</div>
              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
              }}>
                {tx.feature3}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
