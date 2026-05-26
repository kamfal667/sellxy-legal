'use client';

import Link from 'next/link';
import { Icon } from '../landing/components/primitives';

export default function AccessibilityPage() {
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
          <span style={{ color: 'var(--orange)' }}>Accessibilité</span>
        </h1>

        <div className="body" style={{ fontSize: 16, lineHeight: 1.7 }}>
          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Notre engagement</h2>
            <p>
              SellXY s'engage à rendre son site web et son application mobile accessibles au plus grand nombre,
              conformément aux standards internationaux d'accessibilité (WCAG 2.1 niveau AA).
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Fonctionnalités d'accessibilité</h2>

            <h3 className="h-card" style={{ fontSize: 22, marginTop: 24, marginBottom: 12 }}>Application mobile</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--orange-50)', color: 'var(--orange)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>
                  <strong>Mode sombre</strong> — Réduction de la fatigue oculaire avec un thème sombre complet
                </div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--orange-50)', color: 'var(--orange)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>
                  <strong>Textes lisibles</strong> — Tailles de police généreuses (minimum 16px) et contrastes élevés
                </div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--orange-50)', color: 'var(--orange)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>
                  <strong>Navigation simplifiée</strong> — Interface claire avec des zones tactiles de taille suffisante (min. 44x44px)
                </div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--orange-50)', color: 'var(--orange)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>
                  <strong>Support des lecteurs d'écran</strong> — Compatible avec TalkBack (Android) et VoiceOver (iOS)
                </div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--orange-50)', color: 'var(--orange)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>
                  <strong>Icônes accompagnées de texte</strong> — Chaque action est identifiable visuellement et textuellement
                </div>
              </li>
            </ul>

            <h3 className="h-card" style={{ fontSize: 22, marginTop: 24, marginBottom: 12 }}>Site web</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--orange-50)', color: 'var(--orange)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>
                  <strong>Navigation au clavier</strong> — Toutes les fonctionnalités accessibles via le clavier
                </div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--orange-50)', color: 'var(--orange)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>
                  <strong>Sémantique HTML</strong> — Structure claire avec titres hiérarchisés et rôles ARIA
                </div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--orange-50)', color: 'var(--orange)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>
                  <strong>Animations réduites</strong> — Respect de la préférence "prefers-reduced-motion"
                </div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--orange-50)', color: 'var(--orange)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={14} strokeWidth={2.4} />
                </span>
                <div>
                  <strong>Images descriptives</strong> — Toutes les images ont un texte alternatif pertinent
                </div>
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Tests et audits</h2>
            <p style={{ marginBottom: 12 }}>
              Notre application est régulièrement testée avec :
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}>TalkBack (Android) et VoiceOver (iOS)</li>
              <li style={{ marginBottom: 8 }}>Outils d'analyse de contraste (WCAG Contrast Checker)</li>
              <li style={{ marginBottom: 8 }}>Navigation complète au clavier</li>
              <li style={{ marginBottom: 8 }}>Tests avec des utilisateurs en situation de handicap</li>
            </ul>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Limitations connues</h2>
            <p style={{ marginBottom: 12 }}>
              Malgré nos efforts, certaines limitations peuvent subsister :
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}>
                Les graphiques statistiques ne sont pas encore complètement accessibles aux lecteurs d'écran
                (tableaux de données alternatifs en cours de développement)
              </li>
              <li style={{ marginBottom: 8 }}>
                Certaines fonctionnalités avancées peuvent nécessiter une vision normale
              </li>
            </ul>
            <p style={{ marginTop: 16 }}>
              Nous travaillons activement à améliorer ces aspects dans les prochaines versions.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Retours et suggestions</h2>
            <p style={{ marginBottom: 12 }}>
              Vous rencontrez une difficulté d'accessibilité ? Vous avez une suggestion d'amélioration ?
            </p>
            <p>
              Contactez notre équipe dédiée à l'accessibilité :{' '}
              <a href="mailto:accessibility@sellxy.app" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>
                accessibility@sellxy.app
              </a>
            </p>
            <p style={{ marginTop: 12, fontSize: 14, color: 'var(--ink-soft)' }}>
              Nous nous engageons à vous répondre sous 48h et à prendre en compte vos retours dans nos prochaines mises à jour.
            </p>
          </section>

          <section>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Standards de référence</h2>
            <p>
              Cette déclaration d'accessibilité se réfère aux normes suivantes :
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: 24, marginTop: 12 }}>
              <li style={{ marginBottom: 8 }}>
                <strong>WCAG 2.1 niveau AA</strong> — Web Content Accessibility Guidelines
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>EN 301 549</strong> — Norme européenne d'accessibilité
              </li>
              <li style={{ marginBottom: 8 }}>
                <strong>RGAA 4.1</strong> — Référentiel Général d'Amélioration de l'Accessibilité
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer style={{ borderTop: '1px solid var(--line)', padding: '32px 0', marginTop: 64, textAlign: 'center', fontSize: 14, color: 'var(--ink-soft)' }}>
        <p>Dernière mise à jour : Mai 2026</p>
      </footer>
    </div>
  );
}
