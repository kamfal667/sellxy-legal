'use client';

import { useApp } from '../providers';

export function Hero() {
  const { lang } = useApp();

  const t = {
    fr: {
      headline: 'Gérez votre commerce en toute simplicité',
      subheadline: 'SellXY centralise votre inventaire, vos ventes et vos statistiques dans une seule app mobile. Disponible bientôt sur iOS et Android.',
      cta: 'Télécharger l\'app',
      demo: 'Voir la démo',
      badge: 'Bientôt disponible',
    },
    en: {
      headline: 'Manage your business effortlessly',
      subheadline: 'SellXY centralizes your inventory, sales, and analytics in a single mobile app. Coming soon to iOS and Android.',
      cta: 'Download the app',
      demo: 'Watch demo',
      badge: 'Coming soon',
    },
  };

  const tx = t[lang];

  return (
    <section style={{
      padding: '120px 20px 80px',
      textAlign: 'center',
      background: 'var(--bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background gradient layers */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '600px',
        background: 'var(--gradient-hero)',
        zIndex: 0,
      }} />

      {/* Decorative floating orbs */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.15), transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(234,88,12,0.12), transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-block',
          padding: '10px 20px',
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '24px',
          marginBottom: '32px',
          border: '1px solid rgba(249,115,22,0.2)',
          boxShadow: 'var(--shadow-md), inset 0 1px 0 rgba(255,255,255,0.5)',
        }}>
          <span style={{
            fontSize: '13px',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #F97316, #EA580C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            {tx.badge}
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, var(--text) 0%, #F97316 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          margin: '0 0 28px',
          lineHeight: 1.1,
          textShadow: '0 2px 40px rgba(249,115,22,0.15)',
          letterSpacing: '-0.02em',
        }}>
          {tx.headline}
        </h1>

        <p style={{
          fontSize: '18px',
          color: 'var(--text-muted)',
          margin: '0 0 40px',
          lineHeight: 1.6,
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          {tx.subheadline}
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '60px',
        }}>
          <a href="#" style={{
            padding: '16px 40px',
            background: 'linear-gradient(135deg, #F97316, #EA580C)',
            backgroundSize: '200% 200%',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '14px',
            fontWeight: 700,
            fontSize: '17px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: 'var(--shadow-primary), inset 0 1px 0 rgba(255,255,255,0.2)',
            position: 'relative',
            overflow: 'hidden',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
            e.currentTarget.style.boxShadow = 'var(--shadow-primary-lg), inset 0 1px 0 rgba(255,255,255,0.2)';
            e.currentTarget.style.backgroundPosition = '100% 50%';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'var(--shadow-primary), inset 0 1px 0 rgba(255,255,255,0.2)';
            e.currentTarget.style.backgroundPosition = '0% 50%';
          }}>
            {tx.cta}
            <span style={{ marginLeft: '8px', display: 'inline-block' }}>→</span>
          </a>

          <a href="#" style={{
            padding: '16px 36px',
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            color: 'var(--text)',
            textDecoration: 'none',
            borderRadius: '14px',
            fontWeight: 600,
            fontSize: '16px',
            border: '1px solid rgba(249,115,22,0.2)',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: 'var(--shadow-md)',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(249,115,22,0.1)';
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
            e.currentTarget.style.borderColor = 'rgba(249,115,22,0.2)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}>
            {tx.demo}
          </a>
        </div>

        {/* Mockup avec vraie image et glassmorphism */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '24px',
          padding: '8px',
          boxShadow: 'var(--shadow-2xl), inset 0 1px 0 rgba(255,255,255,0.5)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <img
            src="/screenshot-dashboard.png"
            alt="SellXY Dashboard"
            style={{
              width: '100%',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-xl)',
              display: 'block',
            }}
          />

          {/* Gradient overlay for depth */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(249,115,22,0.05), transparent)',
            pointerEvents: 'none',
          }} />
        </div>
      </div>
    </section>
  );
}
