'use client';

import { useApp } from '../providers';

export function ProblemSolution() {
  const { lang } = useApp();

  const t = {
    fr: {
      title: 'Le problème et la solution',
      problem: 'Le problème des commerçants',
      problemDesc: 'Sans système de gestion intégré, vous perdez du temps à jongler entre plusieurs applications, vous risquez des erreurs de stock et vous n\'avez aucune visibilité sur vos ventes en temps réel.',
      solution: 'SellXY : votre solution',
      solutionDesc: 'Un seul endroit pour gérer votre inventaire, traiter les ventes, suivre les commandes et analyser vos performances. Tout depuis votre téléphone, sans équipement coûteux.',
    },
    en: {
      title: 'The problem and the solution',
      problem: 'The merchant\'s challenge',
      problemDesc: 'Without an integrated management system, you waste time juggling multiple apps, risk inventory errors, and have no real-time visibility into your sales.',
      solution: 'SellXY: Your solution',
      solutionDesc: 'One place to manage your inventory, process sales, track orders, and analyze performance. All from your phone, without expensive equipment.',
    },
  };

  const tx = t[lang];

  return (
    <section style={{
      position: 'relative',
      background: 'var(--bg)',
      overflow: 'hidden',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'stretch',
    }}>
      {/* Problem side - Violet gradient */}
      <div style={{
        flex: 1,
        background: 'var(--gradient-purple)',
        padding: 'var(--space-12) var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: 'white',
        clipPath: 'polygon(0 0, 85% 0, 75% 100%, 0 100%)',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ fontSize: '60px', marginBottom: 'var(--space-4)' }}>⚠️</div>
        <h2 style={{
          fontSize: 'var(--text-4xl)',
          fontWeight: 800,
          margin: '0 0 var(--space-4)',
          lineHeight: 1.2,
        }}>
          {tx.problem}
        </h2>
        <p style={{
          fontSize: 'var(--text-lg)',
          lineHeight: 1.8,
          margin: 0,
          maxWidth: '500px',
          opacity: 0.95,
        }}>
          {tx.problemDesc}
        </p>
      </div>

      {/* Solution side - Orange gradient */}
      <div style={{
        flex: 1,
        background: 'var(--gradient-orange)',
        padding: 'var(--space-12) var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: 'white',
        clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 25% 100%)',
        boxShadow: 'var(--shadow-primary)',
      }}>
        <div style={{ fontSize: '60px', marginBottom: 'var(--space-4)' }}>✅</div>
        <h2 style={{
          fontSize: 'var(--text-4xl)',
          fontWeight: 800,
          margin: '0 0 var(--space-4)',
          lineHeight: 1.2,
        }}>
          {tx.solution}
        </h2>
        <p style={{
          fontSize: 'var(--text-lg)',
          lineHeight: 1.8,
          margin: 0,
          maxWidth: '500px',
          opacity: 0.95,
        }}>
          {tx.solutionDesc}
        </p>
      </div>

      {/* Animated divider line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        width: '2px',
        height: '100%',
        background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.5), transparent)',
        animation: 'pulse 3s ease-in-out infinite',
      }} />
    </section>
  );
}
