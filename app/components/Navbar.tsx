'use client';

import { useApp } from '../providers';

export function Navbar() {
  const { lang, setLang, theme, toggleTheme } = useApp();

  const t = {
    fr: {
      features: 'Fonctionnalités',
      pricing: 'Tarification',
      faq: 'FAQ',
      contact: 'Contact',
      download: 'Télécharger',
    },
    en: {
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      download: 'Download',
    },
  };

  const tx = t[lang];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      height: '64px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 var(--space-3)',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
        }}>
          <img
            src="/logo.png"
            alt="SellXY"
            style={{
              height: '50px',
              objectFit: 'contain',
            }}
          />
        </a>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          gap: 'var(--space-6)',
          fontSize: 'var(--text-sm)',
        }}>
          <a href="#features">{tx.features}</a>
          <a href="#pricing">{tx.pricing}</a>
          <a href="/faq">{tx.faq}</a>
          <a href="/contact">{tx.contact}</a>
        </div>

        {/* Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
        }}>
          {/* Lang toggle */}
          <div style={{
            display: 'flex',
            background: 'var(--border)',
            borderRadius: '6px',
            overflow: 'hidden',
          }}>
            {(['fr', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: '4px 8px',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  background: lang === l ? 'var(--text)' : 'transparent',
                  color: lang === l ? 'var(--bg)' : 'var(--text)',
                  transition: 'all 0.2s',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              transition: 'all 0.2s',
            }}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* CTA */}
          <button style={{
            padding: '8px 16px',
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--border-radius)',
            fontSize: 'var(--text-sm)',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            {tx.download}
          </button>
        </div>
      </div>
    </nav>
  );
}
