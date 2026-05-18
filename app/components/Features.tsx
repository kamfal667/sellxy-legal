'use client';

import { useApp } from '../providers';

export function Features() {
  const { lang } = useApp();

  const t = {
    fr: {
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

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-3)',
        }}>
          {tx.features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                padding: 'var(--space-6)',
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
                fontSize: '40px',
                marginBottom: 'var(--space-3)',
              }}>
                {feature.icon}
              </div>

              <h3 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 600,
                color: 'var(--text)',
                margin: '0 0 var(--space-2)',
              }}>
                {feature.title}
              </h3>

              <p style={{
                fontSize: 'var(--text-sm)',
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
