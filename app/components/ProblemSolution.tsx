'use client';

import { useApp } from '../providers';

export function ProblemSolution() {
  const { lang } = useApp();

  const t = {
    fr: {
      title: 'Le problème des commerçants',
      problem: 'Gérer son commerce sans outils adaptés',
      problemDesc: 'Sans système de gestion intégré, vous perdez du temps à jongler entre plusieurs applications, vous risquez des erreurs de stock et vous n\'avez aucune visibilité sur vos ventes en temps réel.',
      solution: 'SellXY : votre assistant commercial complet',
      solutionDesc: 'Un seul endroit pour gérer votre inventaire, traiter les ventes, suivre les commandes et analyser vos performances. Tout depuis votre téléphone, sans équipement coûteux.',
    },
    en: {
      title: 'The merchant\'s problem',
      problem: 'Managing your business without proper tools',
      problemDesc: 'Without an integrated management system, you waste time juggling multiple apps, risk inventory errors, and have no real-time visibility into your sales.',
      solution: 'SellXY: your complete business assistant',
      solutionDesc: 'One place to manage your inventory, process sales, track orders, and analyze performance. All from your phone, without expensive equipment.',
    },
  };

  const tx = t[lang];

  return (
    <section style={{
      padding: 'var(--space-16) var(--space-3)',
      background: 'var(--bg-secondary)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'var(--text-4xl)',
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: 'var(--space-12)',
          textAlign: 'center',
        }}>
          {tx.title}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: 'var(--space-8)',
          alignItems: 'stretch',
        }}>
          {/* Problem */}
          <div style={{
            padding: 'var(--space-6)',
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--border-radius)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: 'var(--space-3)',
            }}>
              ⚠️
            </div>
            <h3 style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 600,
              color: 'var(--text)',
              margin: '0 0 var(--space-3)',
            }}>
              {tx.problem}
            </h3>
            <p style={{
              fontSize: 'var(--text-base)',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              margin: 0,
            }}>
              {tx.problemDesc}
            </p>
          </div>

          {/* Solution */}
          <div style={{
            padding: 'var(--space-6)',
            border: '3px solid var(--primary)',
            borderRadius: 'var(--border-radius)',
            background: 'var(--bg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            position: 'relative',
            top: '-4px',
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: 'var(--space-3)',
            }}>
              ✅
            </div>
            <h3 style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 600,
              color: 'var(--primary)',
              margin: '0 0 var(--space-3)',
            }}>
              {tx.solution}
            </h3>
            <p style={{
              fontSize: 'var(--text-base)',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              margin: 0,
            }}>
              {tx.solutionDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
