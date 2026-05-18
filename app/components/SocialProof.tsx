'use client';

import { useApp } from '../providers';

export function SocialProof() {
  const { lang } = useApp();

  const t = {
    fr: {
      title: 'Rejoignez les commerçants qui font confiance à SellXY',
      stats: [
        { number: '5000+', label: 'Commerçants actifs' },
        { number: '2M+', label: 'Transactions traitées' },
        { number: '98%', label: 'Taux de satisfaction' },
        { number: '24/7', label: 'Support disponible' },
      ],
      testimonials: [
        {
          text: 'SellXY a transformé ma façon de travailler. Je gère tout depuis mon téléphone maintenant.',
          author: 'Amina, Commerçante',
        },
        {
          text: 'Les rapports de ventes en temps réel m\'aident à prendre de meilleures décisions.',
          author: 'Mohamed, Entrepreneur',
        },
        {
          text: 'Enfin une solution simple et efficace. Je recommande SellXY à tous mes amis.',
          author: 'Fatima, Propriétaire de boutique',
        },
      ],
    },
    en: {
      title: 'Join merchants who trust SellXY',
      stats: [
        { number: '5000+', label: 'Active merchants' },
        { number: '2M+', label: 'Transactions processed' },
        { number: '98%', label: 'Satisfaction rate' },
        { number: '24/7', label: 'Support available' },
      ],
      testimonials: [
        {
          text: 'SellXY transformed how I work. I manage everything from my phone now.',
          author: 'Amina, Merchant',
        },
        {
          text: 'Real-time sales reports help me make better decisions.',
          author: 'Mohamed, Entrepreneur',
        },
        {
          text: 'Finally a simple and effective solution. I recommend SellXY to all my friends.',
          author: 'Fatima, Shop Owner',
        },
      ],
    },
  };

  const tx = t[lang];

  return (
    <section style={{
      padding: 'var(--space-16) var(--space-3)',
      background: 'var(--bg)',
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

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--space-3)',
          marginBottom: 'var(--space-12)',
        }}>
          {tx.stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                padding: 'var(--space-4)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--border-radius)',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontSize: 'var(--text-4xl)',
                fontWeight: 700,
                color: 'var(--primary)',
                marginBottom: 'var(--space-2)',
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-3)',
        }}>
          {tx.testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              style={{
                padding: 'var(--space-4)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--border-radius)',
              }}
            >
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text)',
                fontStyle: 'italic',
                margin: '0 0 var(--space-3)',
                lineHeight: 1.6,
              }}>
                "{testimonial.text}"
              </p>
              <div style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--primary)',
                fontWeight: 600,
              }}>
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
