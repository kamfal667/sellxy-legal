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
      padding: '80px 20px',
      textAlign: 'center',
      background: 'var(--bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '400px',
        background: 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(234,88,12,0.05) 100%)',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 16px',
          background: 'var(--primary-light)',
          borderRadius: '20px',
          marginBottom: '24px',
          border: '1px solid var(--primary-border)',
        }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase' }}>
            {tx.badge}
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(32px, 6vw, 56px)',
          fontWeight: 800,
          color: 'var(--text)',
          margin: '0 0 24px',
          lineHeight: 1.2,
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
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #F97316, #EA580C)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 8px 24px rgba(249,115,22,0.3)',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(249,115,22,0.4)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(249,115,22,0.3)';
          }}>
            {tx.cta}
          </a>
          <a href="#" style={{
            padding: '14px 32px',
            background: 'var(--bg-card)',
            color: 'var(--text)',
            textDecoration: 'none',
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: '16px',
            border: '1px solid var(--border)',
            cursor: 'pointer',
            transition: 'all 0.3s',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.background = 'var(--primary-light)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.background = 'var(--bg-card)';
          }}>
            {tx.demo}
          </a>
        </div>

        {/* Placeholder for mockup */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '40px',
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-muted)',
          fontSize: '16px',
        }}>
          📱 {lang === 'fr' ? 'Mockup de l\'application' : 'App mockup'}
        </div>
      </div>
    </section>
  );
}
