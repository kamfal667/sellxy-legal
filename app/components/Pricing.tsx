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
            <div
              key={idx}
              style={{
                padding: '40px 32px',
                background: plan.popular
                  ? 'rgba(255, 255, 255, 0.9)'
                  : 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                border: plan.popular
                  ? '2px solid transparent'
                  : '1px solid rgba(249,115,22,0.15)',
                backgroundImage: plan.popular
                  ? 'linear-gradient(white, white), linear-gradient(135deg, #F97316, #EA580C)'
                  : 'none',
                backgroundOrigin: plan.popular ? 'border-box' : 'initial',
                backgroundClip: plan.popular ? 'padding-box, border-box' : 'initial',
                borderRadius: '20px',
                position: 'relative',
                transform: plan.popular ? 'scale(1.08)' : 'scale(1)',
                zIndex: plan.popular ? 10 : 0,
                boxShadow: plan.popular
                  ? 'var(--shadow-2xl), var(--glow-primary-strong)'
                  : 'var(--shadow-md)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: plan.popular ? 'pulseGlow 3s ease-in-out infinite' : 'none',
              }}
            >
              {plan.popular && (
                <>
                  {/* Animated gradient border */}
                  <div style={{
                    position: 'absolute',
                    inset: '-2px',
                    borderRadius: '20px',
                    padding: '2px',
                    background: 'linear-gradient(135deg, #F97316, #EA580C, #F97316)',
                    backgroundSize: '200% 200%',
                    animation: 'gradientShift 3s ease infinite',
                    zIndex: -1,
                    opacity: 0.6,
                  }} />

                  {/* Popular badge with glassmorphism */}
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #F97316, #EA580C)',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '24px',
                    fontSize: '12px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    boxShadow: 'var(--shadow-primary), inset 0 1px 0 rgba(255,255,255,0.3)',
                  }}>
                    {lang === 'fr' ? '🔥 Populaire' : '🔥 Popular'}
                  </div>
                </>
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

              {/* Price with gradient text */}
              <div style={{ marginBottom: '28px' }}>
                <span style={{
                  fontSize: '42px',
                  fontWeight: 800,
                  background: plan.popular
                    ? 'linear-gradient(135deg, #F97316, #EA580C)'
                    : 'var(--text)',
                  WebkitBackgroundClip: plan.popular ? 'text' : 'initial',
                  WebkitTextFillColor: plan.popular ? 'transparent' : 'initial',
                  backgroundClip: plan.popular ? 'text' : 'initial',
                  letterSpacing: '-0.02em',
                }}>
                  {plan.price}
                </span>
                <span style={{
                  fontSize: '16px',
                  color: 'var(--text-muted)',
                  marginLeft: '8px',
                  fontWeight: 500,
                }}>
                  {plan.period}
                </span>
              </div>

              {/* CTA Button with enhanced hover */}
              <button style={{
                width: '100%',
                padding: '16px 24px',
                background: plan.popular
                  ? 'linear-gradient(135deg, #F97316, #EA580C)'
                  : 'rgba(249,115,22,0.1)',
                backgroundSize: '200% 200%',
                color: plan.popular ? 'white' : 'var(--primary)',
                border: plan.popular ? 'none' : '1px solid var(--primary-border)',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '16px',
                cursor: 'pointer',
                marginBottom: '28px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: plan.popular ? 'var(--shadow-primary)' : 'var(--shadow-sm)',
              }} onMouseEnter={(e) => {
                if (plan.popular) {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-primary-lg)';
                  e.currentTarget.style.backgroundPosition = '100% 50%';
                } else {
                  e.currentTarget.style.background = 'rgba(249,115,22,0.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }} onMouseLeave={(e) => {
                if (plan.popular) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-primary)';
                  e.currentTarget.style.backgroundPosition = '0% 50%';
                } else {
                  e.currentTarget.style.background = 'rgba(249,115,22,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
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
