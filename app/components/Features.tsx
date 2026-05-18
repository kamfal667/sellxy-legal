'use client';

import { useApp } from '../providers';

export function Features() {
  const { lang } = useApp();

  const t = {
    fr: {
      title: 'Fonctionnalités principales',
      subtitle: 'Tout ce dont vous avez besoin pour gérer votre commerce',
      features: [
        {
          icon: '📦',
          title: 'Gestion de stock',
          desc: 'Ajoutez, modifiez et suivez vos produits avec photos et variantes',
        },
        {
          icon: '💳',
          title: 'Caisse POS',
          desc: 'Vendez rapidement avec interface intuitive, remises et paiements flexibles',
        },
        {
          icon: '📊',
          title: 'Statistiques',
          desc: 'Visualisez vos ventes en temps réel avec graphiques et rapports',
        },
        {
          icon: '🚚',
          title: 'Commandes',
          desc: 'Suivez les livraisons de la commande à la livraison',
        },
        {
          icon: '👥',
          title: 'Multi-utilisateurs',
          desc: 'Gérez vos employés avec rôles (Propriétaire, Caissier)',
        },
        {
          icon: '🌍',
          title: 'International',
          desc: 'Disponible en français et anglais avec devises locales',
        },
      ],
    },
    en: {
      title: 'Main features',
      subtitle: 'Everything you need to manage your business',
      features: [
        {
          icon: '📦',
          title: 'Inventory Management',
          desc: 'Add, edit and track products with photos and variants',
        },
        {
          icon: '💳',
          title: 'POS Checkout',
          desc: 'Sell quickly with intuitive interface and flexible payments',
        },
        {
          icon: '📊',
          title: 'Real-time Analytics',
          desc: 'Visualize your sales with charts and detailed reports',
        },
        {
          icon: '🚚',
          title: 'Order Tracking',
          desc: 'Track deliveries from order placement to delivery',
        },
        {
          icon: '👥',
          title: 'Multi-user',
          desc: 'Manage employees with role-based access control',
        },
        {
          icon: '🌍',
          title: 'International',
          desc: 'Available in English and French with local currencies',
        },
      ],
    },
  };

  const tx = t[lang];

  return (
    <section style={{
      padding: '80px 20px',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 800,
            color: 'var(--text)',
            margin: '0 0 16px',
          }}>
            {tx.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-muted)',
            margin: 0,
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            {tx.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {tx.features.map((feature, idx) => (
            <div key={idx} style={{
              padding: '32px 24px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              transition: 'all 0.3s',
              cursor: 'pointer',
            }} onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--text)',
                margin: '0 0 12px',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                margin: 0,
                lineHeight: 1.6,
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
