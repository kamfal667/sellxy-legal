'use client';

import { useApp } from '../providers';
import { useEffect, useState } from 'react';

export function Hero() {
  const { lang } = useApp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = {
    fr: {
      headline: 'Gérez votre commerce en toute simplicité',
      subheadline: 'SellXY centralise votre inventaire, vos ventes et vos statistiques dans une seule app mobile.',
      cta: 'Télécharger l\'app',
      demo: 'En savoir plus',
      badge: 'Bientôt disponible',
    },
    en: {
      headline: 'Manage your business effortlessly',
      subheadline: 'SellXY centralizes your inventory, sales, and analytics in a single mobile app.',
      cta: 'Download the app',
      demo: 'Learn more',
      badge: 'Coming soon',
    },
  };

  const tx = t[lang];

  if (!mounted) return null;

  return (
    <section style={{
      position: 'relative',
      padding: 'var(--space-20) var(--space-3)',
      background: 'var(--bg)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Geometric decorative shapes */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'var(--gradient-purple)',
        filter: 'blur(80px)',
        opacity: 0.15,
        animation: 'float 6s ease-in-out infinite',
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'var(--gradient-blue)',
        filter: 'blur(100px)',
        opacity: 0.15,
        animation: 'float 8s ease-in-out infinite 1s',
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'var(--gradient-sunset)',
        filter: 'blur(120px)',
        opacity: 0.08,
        animation: 'float 10s ease-in-out infinite 2s',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          padding: '6px 14px',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          fontSize: 'var(--text-xs)',
          fontWeight: 500,
          color: 'var(--text-muted)',
          marginBottom: 'var(--space-4)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {tx.badge}
        </div>

        {/* Headline with gradient text */}
        <h1 style={{
          fontSize: 'var(--text-9xl)',
          fontWeight: 800,
          lineHeight: 1.1,
          margin: '0 0 var(--space-4)',
          letterSpacing: '-0.02em',
          background: 'var(--gradient-sunset)',
          backgroundSize: '200% 200%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradient-shift 6s ease infinite',
        }}>
          {tx.headline}
        </h1>

        {/* Subheadline with glassmorphism effect */}
        <div style={{
          maxWidth: '700px',
          margin: '0 auto var(--space-8)',
        }}>
          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            margin: 0,
            padding: 'var(--space-4)',
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}>
            {tx.subheadline}
          </p>
        </div>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: 'var(--space-3)',
          justifyContent: 'center',
          marginBottom: 'var(--space-20)',
          flexWrap: 'wrap',
        }}>
          <button style={{
            padding: '14px 32px',
            background: 'var(--gradient-orange)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-lg)',
            fontSize: 'var(--text-base)',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: 'var(--shadow-primary)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 48px rgba(249, 115, 22, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'var(--shadow-primary)';
          }}
          >
            {tx.cta} →
          </button>

          <button style={{
            padding: '14px 32px',
            background: 'transparent',
            color: 'var(--text)',
            border: '2px solid var(--primary)',
            borderRadius: 'var(--radius-lg)',
            fontSize: 'var(--text-base)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(249, 115, 22, 0.1)';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            {tx.demo}
          </button>
        </div>

        {/* 3D floating cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-4)',
          perspective: '1000px',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {/* Card 1 - Orange gradient */}
          <div style={{
            padding: 'var(--space-6)',
            background: 'var(--gradient-orange)',
            borderRadius: 'var(--radius-lg)',
            color: 'white',
            boxShadow: 'var(--shadow-primary)',
            transform: 'perspective(1000px) rotateX(8deg) rotateY(-15deg) translateZ(30px)',
            animation: 'float 6s ease-in-out infinite',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(8deg) rotateY(-15deg) translateZ(60px)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(249, 115, 22, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(8deg) rotateY(-15deg) translateZ(30px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-primary)';
          }}
          >
            <div style={{ fontSize: '40px', marginBottom: 'var(--space-2)' }}>📦</div>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Inventaire complet</div>
          </div>

          {/* Card 2 - Purple gradient */}
          <div style={{
            padding: 'var(--space-6)',
            background: 'var(--gradient-purple)',
            borderRadius: 'var(--radius-lg)',
            color: 'white',
            boxShadow: 'var(--shadow-purple)',
            transform: 'perspective(1000px) rotateX(12deg) rotateY(0deg) translateZ(50px) translateY(-20px)',
            animation: 'float 6s ease-in-out infinite 0.2s',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(12deg) rotateY(0deg) translateZ(80px) translateY(-20px)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(139, 92, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(12deg) rotateY(0deg) translateZ(50px) translateY(-20px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-purple)';
          }}
          >
            <div style={{ fontSize: '40px', marginBottom: 'var(--space-2)' }}>💳</div>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Paiements rapides</div>
          </div>

          {/* Card 3 - Blue gradient */}
          <div style={{
            padding: 'var(--space-6)',
            background: 'var(--gradient-blue)',
            borderRadius: 'var(--radius-lg)',
            color: 'white',
            boxShadow: 'var(--shadow-blue)',
            transform: 'perspective(1000px) rotateX(8deg) rotateY(15deg) translateZ(30px)',
            animation: 'float 6s ease-in-out infinite 0.4s',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(8deg) rotateY(15deg) translateZ(60px)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(8deg) rotateY(15deg) translateZ(30px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-blue)';
          }}
          >
            <div style={{ fontSize: '40px', marginBottom: 'var(--space-2)' }}>📊</div>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Analyses en temps réel</div>
          </div>
        </div>
      </div>
    </section>
  );
}
