'use client';

import Link from 'next/link';
import { Icon } from '../landing/components/primitives';

export default function CookiesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }}>
      <header style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg)', padding: '20px 0' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px' }}>
          <Link href="/landing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--ink)', textDecoration: 'none', fontSize: 15 }}>
            <Icon name="arrow-right" size={16} style={{ transform: 'rotate(180deg)' }} />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: 800, margin: '0 auto', padding: '64px 32px' }}>
        <h1 className="h-display" style={{ fontSize: 56, marginBottom: 24 }}>
          Politique des <span style={{ color: 'var(--orange)' }}>cookies</span>
        </h1>

        <div className="body" style={{ fontSize: 16, lineHeight: 1.7 }}>
          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, smartphone, tablette)
              lors de la visite d'un site web. Il permet de conserver des informations sur votre navigation et
              de vous reconnaître lors de vos prochaines visites.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Cookies utilisés par SellXY</h2>

            <h3 className="h-card" style={{ fontSize: 22, marginTop: 24, marginBottom: 12 }}>1. Cookies strictement nécessaires</h3>
            <p style={{ marginBottom: 16 }}>
              Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: 24, marginBottom: 16 }}>
              <li style={{ marginBottom: 8 }}>
                <strong>sellxy-theme</strong> — Mémorise votre choix de thème (clair/sombre)
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>sellxy-lang</strong> — Mémorise votre choix de langue (français/anglais)
              </li>
            </ul>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', fontStyle: 'italic' }}>
              Durée de conservation : Ces cookies sont stockés localement et persistent jusqu'à ce que vous les supprimiez manuellement.
            </p>

            <h3 className="h-card" style={{ fontSize: 22, marginTop: 24, marginBottom: 12 }}>2. Cookies analytiques (optionnels)</h3>
            <p style={{ marginBottom: 16 }}>
              Avec votre consentement, nous utilisons des cookies pour comprendre comment vous utilisez notre site
              et améliorer votre expérience.
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: 24, marginBottom: 16 }}>
              <li style={{ marginBottom: 8 }}>
                <strong>PostHog</strong> — Analyse d'utilisation anonymisée pour améliorer l'application
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>Sentry</strong> — Détection et rapport d'erreurs techniques (uniquement si vous y consentez)
              </li>
            </ul>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', fontStyle: 'italic' }}>
              Ces cookies ne sont activés qu'après votre consentement explicite dans les paramètres de l'application.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Ce que nous ne faisons PAS</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--green-50)', color: 'var(--green)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>Nous n'utilisons <strong>aucun cookie publicitaire</strong></div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--green-50)', color: 'var(--green)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>Nous ne partageons <strong>aucune donnée avec des tiers</strong> à des fins marketing</div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--green-50)', color: 'var(--green)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>Nous ne suivons <strong>pas votre navigation</strong> en dehors de notre site</div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--green-50)', color: 'var(--green)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>Nous ne vendons <strong>jamais vos données</strong></div>
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Gérer vos cookies</h2>
            <p style={{ marginBottom: 16 }}>
              Vous pouvez à tout moment modifier vos préférences concernant les cookies :
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}>
                <strong>Dans l'application mobile :</strong> Accédez à Paramètres → Confidentialité
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>Dans votre navigateur :</strong> Consultez les paramètres de confidentialité de votre navigateur
                pour supprimer ou bloquer les cookies
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Durée de conservation</h2>
            <ul style={{ listStyle: 'disc', paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}>
                <strong>Cookies techniques :</strong> Conservation permanente (jusqu'à suppression manuelle)
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>Cookies analytiques :</strong> Maximum 13 mois
              </li>
            </ul>
          </section>

          <section>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Nous contacter</h2>
            <p>
              Pour toute question concernant notre politique de cookies, contactez-nous à{' '}
              <a href="mailto:privacy@sellxy.app" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>
                privacy@sellxy.app
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer style={{ borderTop: '1px solid var(--line)', padding: '32px 0', marginTop: 64, textAlign: 'center', fontSize: 14, color: 'var(--ink-soft)' }}>
        <p>Dernière mise à jour : Mai 2026</p>
      </footer>
    </div>
  );
}
