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
          padding: 'var(--space-20) var(--space-3)',
          background: 'var(--bg)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <h1
              style={{
                fontSize: 'var(--text-5xl)',
                fontWeight: 700,
                color: 'var(--text)',
                margin: '0 0 var(--space-3)',
              }}
            >
              {tx.title}
            </h1>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-muted)',
                margin: 0,
                maxWidth: '600px',
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
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-12)',
            }}
          >
            {/* Contact Info Cards */}
            <div
              style={{
                padding: 'var(--space-6)',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--border-radius)',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: 'var(--space-3)' }}>✉️</div>
              <h3
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 600,
                  color: 'var(--text)',
                  margin: '0 0 var(--space-2)',
                }}
              >
                {lang === 'fr' ? 'Email' : 'Email'}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '0 0 var(--space-3)' }}>
                {tx.email24h}
              </p>
              <a
                href="mailto:support@sellxy.app"
                style={{
                  color: 'var(--text)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                }}
              >
                {tx.responseEmail} →
              </a>
            </div>

            <div
              style={{
                padding: 'var(--space-6)',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--border-radius)',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: 'var(--space-3)' }}>💬</div>
              <h3
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 600,
                  color: 'var(--text)',
                  margin: '0 0 var(--space-2)',
                }}
              >
                {tx.whatsapp}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '0 0 var(--space-3)' }}>
                {tx.instantSupport}
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 500,
                }}
              >
                {lang === 'fr' ? 'Ouvrir WhatsApp' : 'Open WhatsApp'} →
              </a>
            </div>

            <div
              style={{
                padding: 'var(--space-6)',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--border-radius)',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: 'var(--space-3)' }}>📍</div>
              <h3
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 600,
                  color: 'var(--text)',
                  margin: '0 0 var(--space-2)',
                }}
              >
                {tx.office}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: 0 }}>
                {lang === 'fr' ? 'Bientôt disponible' : 'Coming soon'}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              padding: 'var(--space-6)',
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--border-radius)',
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: 'var(--space-1)',
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
                    padding: 'var(--space-2)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--border-radius)',
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    fontSize: 'var(--text-base)',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                  placeholder={lang === 'fr' ? 'Votre nom' : 'Your name'}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: 'var(--space-1)',
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
                    padding: 'var(--space-2)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--border-radius)',
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    fontSize: 'var(--text-base)',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                  placeholder={lang === 'fr' ? 'votre@email.com' : 'your@email.com'}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: 'var(--space-1)',
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
                    padding: 'var(--space-2)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--border-radius)',
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    fontSize: 'var(--text-base)',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                  placeholder={lang === 'fr' ? 'Sujet de votre message' : 'Message subject'}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: 'var(--space-1)',
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
                    padding: 'var(--space-2)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--border-radius)',
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    fontSize: 'var(--text-base)',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                  placeholder={lang === 'fr' ? 'Votre message...' : 'Your message...'}
                />
              </div>

              {status === 'success' && (
                <div
                  style={{
                    padding: 'var(--space-2)',
                    background: '#ECFDF5',
                    border: '1px solid #BBEFB0',
                    borderRadius: 'var(--border-radius)',
                    color: '#065F46',
                    fontSize: 'var(--text-sm)',
                  }}
                >
                  ✓ {tx.success}
                </div>
              )}

              {status === 'error' && (
                <div
                  style={{
                    padding: 'var(--space-2)',
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    borderRadius: 'var(--border-radius)',
                    color: '#991B1B',
                    fontSize: 'var(--text-sm)',
                  }}
                >
                  ✗ {tx.error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  padding: 'var(--space-2) var(--space-4)',
                  background: status === 'loading' ? 'var(--text-muted)' : 'var(--text)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--border-radius)',
                  fontWeight: 500,
                  fontSize: 'var(--text-base)',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (status !== 'loading') {
                    e.currentTarget.style.opacity = '0.8';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
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
