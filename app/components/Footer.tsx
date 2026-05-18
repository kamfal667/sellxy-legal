'use client';

import { useApp } from '../providers';

export function Footer() {
  const { lang } = useApp();

  const t = {
    fr: {
      product: 'Produit',
      features: 'Fonctionnalités',
      pricing: 'Tarification',
      faq: 'FAQ',
      legal: 'Légal',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      support: 'Support',
      contact: 'Contact',
      email: 'support@sellxy.app',
      company: 'Entreprise',
      about: 'À propos',
      blog: 'Blog',
      copyright: '© 2026 SellXY. Tous droits réservés.',
    },
    en: {
      product: 'Product',
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      support: 'Support',
      contact: 'Contact',
      email: 'support@sellxy.app',
      company: 'Company',
      about: 'About',
      blog: 'Blog',
      copyright: '© 2026 SellXY. All rights reserved.',
    },
  };

  const tx = t[lang];

  return (
    <footer style={{
      background: 'linear-gradient(to bottom, var(--bg) 0%, var(--bg-card) 50%)',
      borderTop: '1px solid rgba(249,115,22,0.1)',
      padding: '80px 20px 40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative gradient orb */}
      <div style={{
        position: 'absolute',
        bottom: '-200px',
        right: '-100px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.08), transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '60px',
        }}>
          {/* Produit */}
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              {tx.product}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="#features" style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s',
                }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  {tx.features}
                </a>
              </li>
              <li>
                <a href="#pricing" style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s',
                }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  {tx.pricing}
                </a>
              </li>
              <li>
                <a href="#faq" style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s',
                }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  {tx.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              {tx.legal}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="/privacy" style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s',
                }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  {tx.privacy}
                </a>
              </li>
              <li>
                <a href="/terms" style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s',
                }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  {tx.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              {tx.support}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="mailto:support@sellxy.app" style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s',
                }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  {tx.email}
                </a>
              </li>
              <li>
                <a href="#contact" style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s',
                }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                   onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  {tx.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Brand */}
          <div>
            <h4 style={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>
              SellXY
            </h4>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-muted)',
              margin: 0,
              lineHeight: 1.6,
            }}>
              {lang === 'fr'
                ? 'Simplifiez la gestion de votre commerce mobile.'
                : 'Simplify your mobile business management.'}
            </p>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <p style={{
            fontSize: '13px',
            color: 'var(--text-muted)',
            margin: 0,
          }}>
            {tx.copyright}
          </p>

          <div style={{
            display: 'flex',
            gap: '24px',
          }}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(249,115,22,0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '10px',
              border: '1px solid rgba(249,115,22,0.2)',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontSize: '18px',
              transition: 'all 0.3s',
              boxShadow: 'var(--shadow-sm)',
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #F97316, #EA580C)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-3px) rotate(5deg)';
              e.currentTarget.style.boxShadow = 'var(--shadow-primary)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(249,115,22,0.1)';
              e.currentTarget.style.color = 'var(--primary)';
              e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}>
              𝕏
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(249,115,22,0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '10px',
              border: '1px solid rgba(249,115,22,0.2)',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontSize: '18px',
              transition: 'all 0.3s',
              boxShadow: 'var(--shadow-sm)',
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #F97316, #EA580C)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-3px) rotate(-5deg)';
              e.currentTarget.style.boxShadow = 'var(--shadow-primary)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(249,115,22,0.1)';
              e.currentTarget.style.color = 'var(--primary)';
              e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}>
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
