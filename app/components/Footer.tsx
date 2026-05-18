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
      borderTop: '1px solid var(--border)',
      padding: 'var(--space-12) var(--space-3) var(--space-6)',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--space-8)',
          marginBottom: 'var(--space-8)',
        }}>
          {/* Product */}
          <div>
            <h4 style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--text)',
              marginBottom: 'var(--space-3)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {tx.product}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <a href="#features" style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}>
                {tx.features}
              </a>
              <a href="#pricing" style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}>
                {tx.pricing}
              </a>
              <a href="/faq" style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}>
                {tx.faq}
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--text)',
              marginBottom: 'var(--space-3)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {tx.legal}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <a href="/privacy" style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}>
                {tx.privacy}
              </a>
              <a href="/terms" style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}>
                {tx.terms}
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--text)',
              marginBottom: 'var(--space-3)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {tx.support}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <a href="mailto:support@sellxy.app" style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}>
                {tx.email}
              </a>
              <a href="/contact" style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}>
                {tx.contact}
              </a>
            </div>
          </div>

          {/* Brand */}
          <div>
            <h4 style={{
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: 'var(--text)',
              marginBottom: 'var(--space-3)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              SellXY
            </h4>
            <p style={{
              fontSize: 'var(--text-sm)',
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

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 'var(--space-4)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 'var(--space-3)',
          flexWrap: 'wrap',
        }}>
          <p style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--text-muted)',
            margin: 0,
          }}>
            {tx.copyright}
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border)',
              borderRadius: 'var(--border-radius)',
              color: 'var(--text)',
              fontSize: '16px',
            }}>
              𝕏
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border)',
              borderRadius: 'var(--border-radius)',
              color: 'var(--text)',
              fontSize: '16px',
            }}>
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
