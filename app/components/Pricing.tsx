'use client';

import { useApp } from '../providers';

export function Pricing() {
  const { lang } = useApp();

  const t = {
    fr: {
      title: 'Tarification transparente',
      subtitle: 'Choisissez le forfait qui vous convient',
      popular: 'Le plus populaire',
      plans: [
        {
          name: 'Gratuit',
          price: '0',
          period: ' FCFA/mois',
          description: 'Commencer',
          features: ['100 produits', '1 utilisateur', 'Ventes illimitées', 'Statistiques basiques'],
          cta: 'Commencer',
          gradient: 'var(--gradient-blue)',
        },
        {
          name: 'Pro',
          price: '20 000',
          period: ' FCFA/mois',
          description: 'Le plus populaire',
          popular: true,
          features: ['Produits illimités', '5 utilisateurs', 'Analyses avancées', 'Export CSV', 'Support prioritaire'],
          cta: 'Essayez gratuitement',
          gradient: 'var(--gradient-sunset)',
        },
        {
          name: 'Entreprise',
          price: '40 000',
          period: ' FCFA/mois',
          description: 'Pour gros volumes',
          features: ['Tout dans Pro', 'Multi-magasins', 'Accès API', 'Intégrations personnalisées', 'Support dédié'],
          cta: 'Contactez-nous',
          gradient: 'var(--gradient-purple)',
        },
      ],
    },
    en: {
      title: 'Transparent pricing',
      subtitle: 'Choose the plan that fits you',
      popular: 'Most popular',
      plans: [
        {
          name: 'Free',
          price: '0',
          period: ' FCFA/month',
          description: 'Get started',
          features: ['100 products', '1 user', 'Unlimited sales', 'Basic stats'],
          cta: 'Get started',
          gradient: 'var(--gradient-blue)',
        },
        {
          name: 'Pro',
          price: '20 000',
          period: ' FCFA/month',
          description: 'Most popular',
          popular: true,
          features: ['Unlimited products', '5 users', 'Advanced analytics', 'CSV export', 'Priority support'],
          cta: 'Try free for 30 days',
          gradient: 'var(--gradient-sunset)',
        },
        {
          name: 'Enterprise',
          price: '40 000',
          period: ' FCFA/month',
          description: 'For large volumes',
          features: ['Everything in Pro', 'Multi-store', 'API access', 'Custom integrations', 'Dedicated support'],
          cta: 'Contact us',
          gradient: 'var(--gradient-purple)',
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

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-4)',
        }}>
          {tx.plans.map((plan, idx) => (
            <div
              key={idx}
              style={{
                padding: 'var(--space-8)',
                background: 'white',
                border: plan.popular ? '3px solid transparent' : '1px solid var(--border)',
                borderImage: plan.popular ? `${plan.gradient} 1` : undefined,
                borderRadius: 'var(--radius-lg)',
                position: 'relative',
                transform: plan.popular ? 'translateY(-20px) scale(1.05)' : 'translateY(0)',
                boxShadow: plan.popular ? `0 20px 60px rgba(0,0,0,0.15), ${plan.gradient === 'var(--gradient-sunset)' ? '0 0 40px rgba(249, 115, 22, 0.3)' : '0 0 40px rgba(59, 130, 246, 0.3)'}` : 'var(--shadow-md)',
                transition: 'all 0.3s ease',
                animation: plan.popular ? 'glow-pulse 3s ease-in-out infinite' : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = plan.popular ? 'translateY(-24px) scale(1.05)' : 'translateY(-8px)';
                e.currentTarget.style.boxShadow = plan.popular ? `0 24px 80px rgba(0,0,0,0.2)` : 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = plan.popular ? 'translateY(-20px) scale(1.05)' : 'translateY(0)';
                e.currentTarget.style.boxShadow = plan.popular ? `0 20px 60px rgba(0,0,0,0.15)` : 'var(--shadow-md)';
              }}
            >
              {/* Badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: `linear-gradient(135deg, #F97316, #EC4899)`,
                  color: 'white',
                  padding: '4px 16px',
                  borderRadius: '20px',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  boxShadow: 'var(--shadow-primary)',
                }}>
                  {tx.popular}
                </div>
              )}

              {/* Plan Name */}
              <div style={{
                fontSize: 'var(--text-sm)',
                fontWeight: 700,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 'var(--space-3)',
              }}>
                {plan.name}
              </div>

              {/* Price */}
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <span style={{
                  fontSize: '48px',
                  fontWeight: 800,
                  background: plan.gradient,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {plan.price}
                </span>
                <span style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-muted)',
                  marginLeft: 'var(--space-1)',
                }}>
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                margin: '0 0 var(--space-6)',
              }}>
                {plan.description}
              </p>

              {/* CTA Button */}
              <button style={{
                width: '100%',
                padding: '12px 24px',
                background: plan.popular ? plan.gradient : 'transparent',
                color: plan.popular ? 'white' : 'var(--text)',
                border: plan.popular ? 'none' : `2px solid var(--primary)`,
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                cursor: 'pointer',
                marginBottom: 'var(--space-6)',
                transition: 'all 0.3s ease',
                boxShadow: plan.popular ? 'var(--shadow-primary)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (plan.popular) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                } else {
                  e.currentTarget.style.background = 'rgba(249, 115, 22, 0.1)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                if (!plan.popular) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
              >
                {plan.cta}
              </button>

              {/* Features List */}
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
                      alignItems: 'flex-start',
                    }}
                  >
                    <span style={{
                      color: 'var(--primary)',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      lineHeight: 1,
                    }}>
                      ✓
                    </span>
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
