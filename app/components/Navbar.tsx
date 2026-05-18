'use client';

import { useApp } from '../providers';
import { useState } from 'react';

export function Navbar() {
  const { lang, setLang, theme, toggleTheme } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { label: tx.features, href: '#features' },
    { label: tx.pricing, href: '#pricing' },
    { label: tx.faq, href: '/faq' },
    { label: tx.contact, href: '/contact' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg-card)',
      borderBottom: '1px solid var(--border)',
      boxShadow: '0 1px 8px rgba(249,115,22,0.07)',
      padding: '0 20px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #F97316, #EA580C)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(249,115,22,0.35)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 3h18v2H3V3zm0 4h12v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2zm0 4h18v2H3v-2z" fill="white" opacity="0.3"/>
              <rect x="2" y="2" width="20" height="20" rx="3" stroke="white" strokeWidth="1.5" fill="none"/>
              <path d="M7 8l3 3-3 3M12 14h5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>SellXY</div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.05em', lineHeight: 1.2 }}>STOCKS</div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div style={{
          display: 'none',
          '@media (min-width: 768px)': {
            display: 'flex',
          },
          flexDirection: 'row',
          gap: '32px',
          alignItems: 'center',
        } as any}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Desktop Download Button */}
          <a
            href="#"
            style={{
              display: 'none',
              '@media (min-width: 768px)': {
                display: 'inline-block',
              },
              padding: '8px 16px',
              background: 'linear-gradient(135deg, #F97316, #EA580C)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '13px',
              transition: 'all 0.2s',
            } as any}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(249,115,22,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {tx.download}
          </a>

          {/* Lang toggle */}
          <div style={{
            display: 'flex',
            background: 'var(--bg)',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            overflow: 'hidden',
          }}>
            {(['fr', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  background: lang === l ? 'var(--primary)' : 'transparent',
                  color: lang === l ? '#fff' : 'var(--text-muted)',
                  transition: 'all 0.15s',
                  letterSpacing: '0.05em',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title={theme === 'light' ? 'Mode sombre' : 'Mode clair'}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              transition: 'all 0.15s',
            }}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              '@media (min-width: 768px)': {
                display: 'none',
              },
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
            } as any}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          display: 'flex',
          '@media (min-width: 768px)': {
            display: 'none',
          },
          flexDirection: 'column',
          gap: '12px',
          padding: '16px 0',
          borderTop: '1px solid var(--border)',
        } as any}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '12px 0',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-muted)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
