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
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(249,115,22,0.15)',
      boxShadow: 'var(--shadow-md), inset 0 1px 0 rgba(255,255,255,0.5)',
      padding: '0 20px',
      transition: 'all 0.3s',
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
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #F97316, #EA580C)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-primary)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <img
              src="/icon.png"
              alt="SellXY Logo"
              style={{
                width: '32px',
                height: '32px',
                objectFit: 'contain',
              }}
            />
          </div>
          <div>
            <div style={{
              fontSize: '16px',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #F97316, #EA580C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
            }}>
              SellXY
            </div>
            <div style={{
              fontSize: '10px',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              lineHeight: 1.2,
              fontWeight: 600,
            }}>
              STOCKS
            </div>
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
