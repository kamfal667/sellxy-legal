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
            <div
              key={idx}
              style={{
                padding: '40px 32px',
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(249,115,22,0.15)',
                borderRadius: '20px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl), var(--glow-primary)';
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(249,115,22,0.15)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              {/* Gradient hover effect overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.05), transparent)',
                transition: 'left 0.5s',
                pointerEvents: 'none',
              }} />

              {/* Icon with gradient background */}
              <div style={{
                fontSize: '48px',
                marginBottom: '20px',
                display: 'inline-block',
                padding: '16px',
                background: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(234,88,12,0.10))',
                borderRadius: '16px',
                boxShadow: 'inset 0 2px 8px rgba(249,115,22,0.1)',
              }}>
                {feature.icon}
              </div>

              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--text)',
                margin: '0 0 12px',
                letterSpacing: '-0.01em',
              }}>
                {feature.title}
              </h3>

              <p style={{
                fontSize: '15px',
                color: 'var(--text-muted)',
                margin: 0,
                lineHeight: 1.7,
              }}>
                {feature.desc}
              </p>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                opacity: 0,
                transition: 'opacity 0.3s',
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
