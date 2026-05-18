'use client';

import { useApp } from '../providers';

export function Features() {
  const { lang } = useApp();

  const t = {
    fr: {
      title: 'Fonctionnalités puissantes',
      subtitle: 'Tout ce dont vous avez besoin pour gérer votre commerce',
      features: [
        {
          icon: '📦',
          title: 'Gestion d\'inventaire',
          desc: 'Suivez vos produits avec photos et variantes',
          gradient: 'var(--gradient-orange)',
        },
        {
          icon: '💳',
          title: 'Caisse enregistreuse',
          desc: 'Traitement des paiements rapide et flexible',
          gradient: 'var(--gradient-purple)',
        },
        {
          icon: '📊',
          title: 'Analyses en temps réel',
          desc: 'Visualisez vos ventes avec graphiques et rapports',
          gradient: 'var(--gradient-blue)',
        },
        {
          icon: '🚚',
          title: 'Suivi des commandes',
          desc: 'Suivez les livraisons de la commande à la livraison',
          gradient: 'var(--gradient-pink-purple)',
        },
        {
          icon: '👥',
          title: 'Multi-utilisateurs',
          desc: 'Gérez vos employés avec accès basé sur les rôles',
          gradient: 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)',
        },
        {
          icon: '🌍',
          title: 'International',
          desc: 'Disponible en français et anglais',
          gradient: 'var(--gradient-sunset)',
        },
      ],
    },
    en: {
      title: 'Powerful features',
      subtitle: 'Everything you need to manage your business',
      features: [
        {
          icon: '📦',
          title: 'Inventory Management',
          desc: 'Track products with photos and variants',
          gradient: 'var(--gradient-orange)',
        },
        {
          icon: '💳',
          title: 'POS Checkout',
          desc: 'Fast and flexible payment processing',
          gradient: 'var(--gradient-purple)',
        },
        {
          icon: '📊',
          title: 'Real-time Analytics',
          desc: 'Visualize sales with charts and reports',
          gradient: 'var(--gradient-blue)',
        },
        {
          icon: '🚚',
          title: 'Order Tracking',
          desc: 'Track deliveries from order to delivery',
          gradient: 'var(--gradient-pink-purple)',
        },
        {
          icon: '👥',
          title: 'Multi-user',
          desc: 'Manage employees with role-based access',
          gradient: 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)',
        },
        {
          icon: '🌍',
          title: 'International',
          desc: 'Available in French and English',
          gradient: 'var(--gradient-sunset)',
        },
      ],
    },
  };

  const tx = t[lang];

  return (
    <section id="features" style={{
      padding: 'var(--space-16) var(--space-3)',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--space-12)',
        }}>
          <h2 style={{
            fontSize: 'var(--text-5xl)',
            fontWeight: 800,
            background: 'var(--gradient-sunset)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0 0 var(--space-3)',
          }}>
            {tx.title}
          </h2>
          <p style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-muted)',
            margin: 0,
          }}>
            {tx.subtitle}
          </p>
        </div>

        {/* Bento Grid - Asymmetric */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 240px)',
          gap: 'var(--space-4)',
        }}>
          {/* Card 1 - 1x1 */}
          <div
            style={{
              gridArea: '1 / 1 / 2 / 2',
              background: tx.features[0].gradient,
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              color: 'white',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: 'var(--space-3)' }}>{tx.features[0].icon}</div>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, margin: '0 0 var(--space-2)' }}>
              {tx.features[0].title}
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', margin: 0, opacity: 0.9 }}>{tx.features[0].desc}</p>
          </div>

          {/* Card 2 - 2x2 (centered, bigger) */}
          <div
            style={{
              gridArea: '1 / 2 / 3 / 3',
              background: tx.features[1].gradient,
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-8)',
              color: 'white',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
              e.currentTarget.style.boxShadow = 'var(--shadow-purple)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
            }}
          >
            <div style={{ fontSize: '56px', marginBottom: 'var(--space-4)' }}>{tx.features[1].icon}</div>
            <h3 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, margin: '0 0 var(--space-3)' }}>
              {tx.features[1].title}
            </h3>
            <p style={{ fontSize: 'var(--text-base)', margin: 0, opacity: 0.9 }}>{tx.features[1].desc}</p>
          </div>

          {/* Card 3 - 1x1 */}
          <div
            style={{
              gridArea: '1 / 3 / 2 / 4',
              background: tx.features[2].gradient,
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              color: 'white',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-blue)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: 'var(--space-3)' }}>{tx.features[2].icon}</div>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, margin: '0 0 var(--space-2)' }}>
              {tx.features[2].title}
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', margin: 0, opacity: 0.9 }}>{tx.features[2].desc}</p>
          </div>

          {/* Card 4 - 2x1 */}
          <div
            style={{
              gridArea: '2 / 1 / 3 / 3',
              background: tx.features[3].gradient,
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              color: 'white',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-pink)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: 'var(--space-3)' }}>{tx.features[3].icon}</div>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, margin: '0 0 var(--space-2)' }}>
              {tx.features[3].title}
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', margin: 0, opacity: 0.9 }}>{tx.features[3].desc}</p>
          </div>

          {/* Card 5 - 1x1 */}
          <div
            style={{
              gridArea: '2 / 3 / 3 / 4',
              background: tx.features[4].gradient,
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              color: 'white',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: 'var(--space-3)' }}>{tx.features[4].icon}</div>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, margin: '0 0 var(--space-2)' }}>
              {tx.features[4].title}
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', margin: 0, opacity: 0.9 }}>{tx.features[4].desc}</p>
          </div>

          {/* Card 6 - Full width */}
          <div
            style={{
              gridArea: '3 / 1 / 4 / 4',
              background: tx.features[5].gradient,
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              color: 'white',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: 'var(--space-3)' }}>{tx.features[5].icon}</div>
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, margin: '0 0 var(--space-2)' }}>
              {tx.features[5].title}
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', margin: 0, opacity: 0.9 }}>{tx.features[5].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
