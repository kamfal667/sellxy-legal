'use client';

import { useApp } from '../providers';

export function Features() {
  const { lang } = useApp();

  const t = {
    fr: {
      title: 'Tout ce dont vous avez besoin',
      subtitle: 'Plateforme tout-en-un pour gérer votre commerce',
      features: [
        {
          icon: '📦',
          title: 'Gestion d\'inventaire',
          desc: 'Suivez vos produits avec photos et variantes',
        },
        {
          icon: '💳',
          title: 'Caisse enregistreuse',
          desc: 'Traitement des paiements rapide et flexible',
        },
        {
          icon: '📊',
          title: 'Analyses en temps réel',
          desc: 'Visualisez vos ventes avec graphiques et rapports',
        },
        {
          icon: '🚚',
          title: 'Suivi des commandes',
          desc: 'Suivez les livraisons de la commande à la livraison',
        },
        {
          icon: '👥',
          title: 'Multi-utilisateurs',
          desc: 'Gérez vos employés avec accès basé sur les rôles',
        },
        {
          icon: '🌍',
          title: 'International',
          desc: 'Disponible en français et anglais',
        },
      ],
    },
    en: {
      title: 'Everything you need',
      subtitle: 'All-in-one platform to manage your business',
      features: [
        {
          icon: '📦',
          title: 'Inventory Management',
          desc: 'Track products with photos and variants',
        },
        {
          icon: '💳',
          title: 'POS Checkout',
          desc: 'Fast and flexible payment processing',
        },
        {
          icon: '📊',
          title: 'Real-time Analytics',
          desc: 'Visualize sales with charts and reports',
        },
        {
          icon: '🚚',
          title: 'Order Tracking',
          desc: 'Track deliveries from order to delivery',
        },
        {
          icon: '👥',
          title: 'Multi-user',
          desc: 'Manage employees with role-based access',
        },
        {
          icon: '🌍',
          title: 'International',
          desc: 'Available in French and English',
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
            fontWeight: 700,
            color: 'var(--text)',
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

        {/* Grid asymétrique: 2 grandes en haut + 4 petites en bas */}
        <div>
          {/* Top 2 features - Larger */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-3)',
          }}>
            {tx.features.slice(0, 2).map((feature, idx) => (
              <div
                key={idx}
                style={{
                  padding: 'var(--space-6)',
                  background: idx % 2 === 0 ? 'var(--bg)' : 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--border-radius)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <div style={{
                  fontSize: '48px',
                  marginBottom: 'var(--space-3)',
                }}>
                  {feature.icon}
                </div>

                <h3 style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 600,
                  color: 'var(--text)',
                  margin: '0 0 var(--space-2)',
                }}>
                  {feature.title}
                </h3>

                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-muted)',
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom 4 features - Smaller */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--space-3)',
          }}>
            {tx.features.slice(2).map((feature, idx) => (
              <div
                key={idx + 2}
                style={{
                  padding: 'var(--space-4)',
                  background: idx % 2 === 0 ? 'var(--bg-secondary)' : 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--border-radius)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <div style={{
                  fontSize: '36px',
                  marginBottom: 'var(--space-2)',
                }}>
                  {feature.icon}
                </div>

                <h3 style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: 'var(--text)',
                  margin: '0 0 var(--space-1)',
                }}>
                  {feature.title}
                </h3>

                <p style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  margin: 0,
                  lineHeight: 1.4,
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
