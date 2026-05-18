'use client';

import { useApp } from '../providers';

export function Pricing() {
  const { lang } = useApp();

  const t = {
    fr: {
      title: 'Simple pricing',
      subtitle: 'Choose the plan that fits you',
      plans: [
        {
          name: 'Free',
          price: '0',
          period: ' FCFA/month',
          description: 'Get started',
          features: ['100 products', '1 user', 'Unlimited sales', 'Basic stats'],
          cta: 'Get started',
        },
        {
          name: 'Pro',
          price: '20 000',
          period: ' FCFA/month',
          description: 'Most popular',
          popular: true,
          features: ['Unlimited products', '5 users', 'Advanced analytics', 'CSV export', 'Priority support'],
          cta: 'Try free for 30 days',
        },
        {
          name: 'Enterprise',
          price: '40 000',
          period: ' FCFA/month',
          description: 'For large volumes',
          features: ['Everything in Pro', 'Multi-store', 'API access', 'Custom integrations', 'Dedicated support'],
          cta: 'Contact us',
        },
      ],
    },
    en: {
      title: 'Simple pricing',
      subtitle: 'Choose the plan that fits you',
      plans: [
        {
          name: 'Free',
          price: '0',
          period: ' FCFA/month',
          description: 'Get started',
          features: ['100 products', '1 user', 'Unlimited sales', 'Basic stats'],
          cta: 'Get started',
        },
        {
          name: 'Pro',
          price: '20 000',
          period: ' FCFA/month',
          description: 'Most popular',
          popular: true,
          features: ['Unlimited products', '5 users', 'Advanced analytics', 'CSV export', 'Priority support'],
          cta: 'Try free for 30 days',
        },
        {
          name: 'Enterprise',
          price: '40 000',
          period: ' FCFA/month',
          description: 'For large volumes',
          features: ['Everything in Pro', 'Multi-store', 'API access', 'Custom integrations', 'Dedicated support'],
          cta: 'Contact us',
        },
      ],
    },
  };

  const tx = t[lang];

  return (
    <section id="pricing" style={{
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-3)',
        }}>
          {tx.plans.map((plan, idx) => (
            <div
              key={idx}
              style={{
                padding: 'var(--space-6)',
                border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border)',
                borderRadius: 'var(--border-radius)',
                position: 'relative',
              }}
            >
              {/* Badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-3)',
                  right: 'var(--space-3)',
                  padding: '2px 8px',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '4px',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                }}>
                  Popular
                </div>
              )}

              {/* Plan name */}
              <div style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                color: 'var(--text-muted)',
                marginBottom: 'var(--space-2)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {plan.name}
              </div>

              {/* Price */}
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <span style={{
                  fontSize: 'var(--text-5xl)',
                  fontWeight: 700,
                  color: 'var(--text)',
                }}>
                  {plan.price}
                </span>
                <span style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-muted)',
                  marginLeft: 'var(--space-1)',
                }}>
                  {plan.period}
                </span>
              </div>

              {/* CTA */}
              <button style={{
                width: '100%',
                padding: '12px',
                background: plan.popular ? 'var(--primary)' : 'transparent',
                color: plan.popular ? 'white' : 'var(--text)',
                border: plan.popular ? 'none' : '1px solid var(--border)',
                borderRadius: 'var(--border-radius)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                cursor: 'pointer',
                marginBottom: 'var(--space-4)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (plan.popular) {
                  e.currentTarget.style.opacity = '0.9';
                } else {
                  e.currentTarget.style.background = 'rgba(249, 115, 22, 0.05)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (plan.popular) {
                  e.currentTarget.style.opacity = '1';
                } else {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }
              }}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
              }}>
                {plan.features.map((feature, fidx) => (
                  <div
                    key={fidx}
                    style={{
                      display: 'flex',
                      gap: 'var(--space-2)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text)',
                    }}
                  >
                    <span style={{ color: 'var(--primary)' }}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
