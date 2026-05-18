'use client';

import { useApp } from '../providers';
import { useState } from 'react';

export default function Contact() {
  const { lang } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const t = {
    fr: {
      title: 'Contactez-nous',
      subtitle: 'Nous aimerions entendre vos questions, commentaires ou suggestions.',
      name: 'Nom complet',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi...',
      success: 'Message envoyé avec succès !',
      error: 'Erreur lors de l\'envoi. Veuillez réessayer.',
      response: 'Nous vous répondrons dans les 24 heures.',
      responseEmail: 'support@sellxy.app',
      hours: 'Réponse sous 24h',
      email24h: 'Nous répondons à tous les emails sous 24 heures',
      whatsapp: 'WhatsApp',
      instantSupport: 'Support instantané sur WhatsApp',
      office: 'Bureau',
      visitUs: 'Visitez nos bureaux',
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We\'d love to hear your questions, comments, or suggestions.',
      name: 'Full Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
      response: 'We\'ll respond within 24 hours.',
      responseEmail: 'support@sellxy.app',
      hours: 'Response within 24h',
      email24h: 'We respond to all emails within 24 hours',
      whatsapp: 'WhatsApp',
      instantSupport: 'Instant support on WhatsApp',
      office: 'Office',
      visitUs: 'Visit our offices',
    },
  };

  const tx = t[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xyzabc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <main>
      <section
        style={{
          padding: '80px 20px',
          background: 'var(--bg)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1
              style={{
                fontSize: 'clamp(28px, 5vw, 44px)',
                fontWeight: 800,
                color: 'var(--text)',
                margin: '0 0 16px',
              }}
            >
              {tx.title}
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: 'var(--text-muted)',
                margin: 0,
                maxWidth: '500px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {tx.subtitle}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              marginBottom: '60px',
            }}
          >
            {/* Contact Info Cards */}
            <div
              style={{
                padding: '32px 24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>✉️</div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--text)',
                  margin: '0 0 12px',
                }}
              >
                {lang === 'fr' ? 'Email' : 'Email'}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 16px' }}>
                {tx.email24h}
              </p>
              <a
                href="mailto:support@sellxy.app"
                style={{
                  color: 'var(--primary)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                }}
              >
                {tx.responseEmail} →
              </a>
            </div>

            <div
              style={{
                padding: '32px 24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>💬</div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--text)',
                  margin: '0 0 12px',
                }}
              >
                {tx.whatsapp}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 16px' }}>
                {tx.instantSupport}
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--primary)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                }}
              >
                {lang === 'fr' ? 'Ouvrir WhatsApp' : 'Open WhatsApp'} →
              </a>
            </div>

            <div
              style={{
                padding: '32px 24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>📍</div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--text)',
                  margin: '0 0 12px',
                }}
              >
                {tx.office}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                {lang === 'fr' ? 'Bientôt disponible' : 'Coming soon'}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              padding: '40px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '8px',
                  }}
                >
                  {tx.name}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                  placeholder={lang === 'fr' ? 'Votre nom' : 'Your name'}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '8px',
                  }}
                >
                  {tx.email}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                  placeholder={lang === 'fr' ? 'votre@email.com' : 'your@email.com'}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '8px',
                  }}
                >
                  {tx.subject}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                  placeholder={lang === 'fr' ? 'Sujet de votre message' : 'Message subject'}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '8px',
                  }}
                >
                  {tx.message}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                  placeholder={lang === 'fr' ? 'Votre message...' : 'Your message...'}
                />
              </div>

              {status === 'success' && (
                <div
                  style={{
                    padding: '12px 16px',
                    background: '#ECFDF5',
                    border: '1px solid #BBEFB0',
                    borderRadius: '8px',
                    color: '#065F46',
                    fontSize: '14px',
                  }}
                >
                  ✓ {tx.success}
                </div>
              )}

              {status === 'error' && (
                <div
                  style={{
                    padding: '12px 16px',
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    borderRadius: '8px',
                    color: '#991B1B',
                    fontSize: '14px',
                  }}
                >
                  ✗ {tx.error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  padding: '14px 24px',
                  background: 'linear-gradient(135deg, #F97316, #EA580C)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '16px',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  opacity: status === 'loading' ? 0.7 : 1,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  if (status !== 'loading') {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(249,115,22,0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {status === 'loading' ? tx.sending : tx.send}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
