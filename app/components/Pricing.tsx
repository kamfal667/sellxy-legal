'use client';

import { useApp } from '../providers';

export function Pricing() {
  const { lang } = useApp();

  const t = {
    fr: {
      title: 'Tarification simple',
      subtitle: 'Choisissez le plan qui vous convient',
      plans: [
        {
          name: 'Gratuit',
          price: '0',
          period: '/mois',
          description: 'Pour démarrer',
          features: ['100 produits', '1 utilisateur', 'Ventes illimitées', 'Stats basiques'],
          cta: 'Commencer gratuitement',
        },
        {
          name: 'Pro',
          price: '9,900',
          period: '/mois',
          description: 'Le plus populaire',
          popular: true,
          features: ['Produits illimités', '5 utilisateurs', 'Stats avancées', 'Export CSV', 'Support prioritaire'],
          cta: 'Essayer 30 jours gratuits',
        },
        {
          name: 'Entreprise',
          price: 'Sur',
          period: ' devis',
          description: 'Pour les grands volumes',
          features: ['Tout de Pro', 'Multi-boutiques', 'Accès API', 'Intégrations custom', 'Support dédié'],
          cta: 'Nous contacter',
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
          period: '/month',
          description: 'Get started',
          features: ['100 products', '1 user', 'Unlimited sales', 'Basic stats'],
          cta: 'Get started',
        },
        {
          name: 'Pro',
          price: '$99',
          period: '/month',
          description: 'Most popular',
          popular: true,
          features: ['Unlimited products', '5 users', 'Advanced analytics', 'CSV export', 'Priority support'],
          cta: 'Try free for 30 days',
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: ' pricing',
          description: 'For large volumes',
          features: ['Everything in Pro', 'Multi-store', 'API access', 'Custom integrations', 'Dedicated support'],
          cta: 'Contact us',
        },
      ],
    },
  };

  const tx = t[lang];

  return (
    <section style={{
      padding: '80px 20px',
      background: 'var(--bg-alt)',
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
          }}>
            {tx.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {tx.plans.map((plan, idx) => (
            <div key={idx} style={{
              padding: '32px 24px',
              background: 'var(--bg-card)',
              border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border)',
              borderRadius: '16px',
              position: 'relative',
              transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
              zIndex: plan.popular ? 1 : 0,
            }}>
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #F97316, #EA580C)',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}>
                  {lang === 'fr' ? 'Populaire' : 'Popular'}
                </div>
              )}

              <h3 style={{
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--text)',
                margin: '0 0 8px',
              }}>
                {plan.name}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                margin: '0 0 24px',
              }}>
                {plan.description}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <span style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: 'var(--text)',
                }}>
                  {plan.price}
                </span>
                <span style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  marginLeft: '8px',
                }}>
                  {plan.period}
                </span>
              </div>

              <button style={{
                width: '100%',
                padding: '14px 24px',
                background: plan.popular ? 'linear-gradient(135deg, #F97316, #EA580C)' : 'var(--bg)',
                color: plan.popular ? 'white' : 'var(--text)',
                border: plan.popular ? 'none' : '1px solid var(--border)',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '16px',
                cursor: 'pointer',
                marginBottom: '24px',
                transition: 'all 0.3s',
              }} onMouseEnter={(e) => {
                if (plan.popular) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(249,115,22,0.3)';
                }
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {plan.cta}
              </button>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} style={{
                    display: 'flex',
                    gap: '12px',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                  }}>
                    <span style={{ color: 'var(--primary)' }}>✓</span>
                    {feature}
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
