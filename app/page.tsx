'use client';

import { useApp } from './providers';
import { Navbar } from './components/Navbar';

const t = {
  fr: {
    title: 'Documents légaux',
    subtitle: 'Politique de confidentialité et Conditions d\'utilisation de SellXY Stocks',
    privacy: '🔒 Politique de confidentialité',
    terms: '📄 Conditions d\'utilisation',
    contact: 'Contact',
  },
  en: {
    title: 'Legal Documents',
    subtitle: 'Privacy Policy and Terms of Service for SellXY Stocks',
    privacy: '🔒 Privacy Policy',
    terms: '📄 Terms of Service',
    contact: 'Contact',
  },
};

export default function Home() {
  const { lang } = useApp();
  const tx = t[lang];

  return (
    <>
      <Navbar />
      <main style={{
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 16px',
      }}>
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '20px',
          padding: '48px 40px',
          maxWidth: '460px',
          width: '100%',
          boxShadow: 'var(--shadow)',
          border: '1px solid var(--border)',
          textAlign: 'center',
        }}>
          {/* Logo grande version */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #F97316, #EA580C)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(249,115,22,0.4)',
            }}>
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="4" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M7 8l3 3-3 3M12 14h5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
            SellXY Stocks
          </div>

          <h1 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text)', margin: '0 0 12px' }}>
            {tx.title}
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 32px', lineHeight: 1.6 }}>
            {tx.subtitle}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
            <a href="/privacy" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 20px',
              background: 'var(--primary-light)',
              border: '1px solid var(--primary-border)',
              borderRadius: '12px',
              color: 'var(--text)',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 600,
              transition: 'all 0.15s',
            }}>
              <span style={{ fontSize: '20px' }}>🔒</span>
              <span>{lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}</span>
              <span style={{ marginLeft: 'auto', color: 'var(--primary)', fontSize: '18px' }}>→</span>
            </a>
            <a href="/terms" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 20px',
              background: 'var(--primary-light)',
              border: '1px solid var(--primary-border)',
              borderRadius: '12px',
              color: 'var(--text)',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 600,
              transition: 'all 0.15s',
            }}>
              <span style={{ fontSize: '20px' }}>📄</span>
              <span>{lang === 'fr' ? 'Conditions d\'utilisation' : 'Terms of Service'}</span>
              <span style={{ marginLeft: 'auto', color: 'var(--primary)', fontSize: '18px' }}>→</span>
            </a>
          </div>

          <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>
            {tx.contact} : <a href="mailto:support@sellxy.app" style={{ color: 'var(--primary)' }}>support@sellxy.app</a>
          </p>
        </div>
      </main>
    </>
  );
}
