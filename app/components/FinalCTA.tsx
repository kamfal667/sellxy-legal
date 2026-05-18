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
      position: 'relative',
      background: 'var(--bg)',
      overflow: 'hidden',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Left side - Orange/Pink gradient */}
      <div style={{
        flex: 1,
        background: 'var(--gradient-sunset)',
        padding: 'var(--space-12) var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: 'white',
        clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
        position: 'relative',
        zIndex: 1,
      }}>
        <h2 style={{
          fontSize: 'var(--text-4xl)',
          fontWeight: 800,
          margin: '0 0 var(--space-4)',
          lineHeight: 1.2,
          maxWidth: '500px',
        }}>
          {tx.title}
        </h2>
        <p style={{
          fontSize: 'var(--text-lg)',
          lineHeight: 1.8,
          margin: '0 0 var(--space-6)',
          maxWidth: '450px',
          opacity: 0.95,
        }}>
          {tx.subtitle}
        </p>
      </div>

      {/* Right side - Purple/Blue gradient */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
        padding: 'var(--space-12) var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
      }}>
        <button style={{
          padding: '16px 40px',
          background: 'white',
          color: 'var(--primary)',
          border: 'none',
          borderRadius: 'var(--radius-lg)',
          fontSize: 'var(--text-base)',
          fontWeight: 700,
          cursor: 'pointer',
          marginBottom: 'var(--space-6)',
          boxShadow: 'var(--shadow-lg)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 16px 64px rgba(0, 0, 0, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        }}
        >
          {tx.cta} →
        </button>

        {/* Benefits */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-2)',
          fontSize: 'var(--text-sm)',
          opacity: 0.9,
        }}>
          <div>{tx.benefit1}</div>
          <div>{tx.benefit2}</div>
          <div>{tx.benefit3}</div>
        </div>
      </div>

      {/* Animated divider */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        width: '2px',
        height: '100%',
        background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.3), transparent)',
        animation: 'pulse 3s ease-in-out infinite',
      }} />
    </section>
  );
}
