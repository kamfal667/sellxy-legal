'use client';

import Link from 'next/link';
import { Icon } from '../landing/components/primitives';

export default function AboutPage() {
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
          À propos de <span style={{ color: 'var(--orange)' }}>SellXY</span>
        </h1>

        <div className="body" style={{ fontSize: 18, lineHeight: 1.7 }}>
          <section style={{ marginBottom: 48 }}>
            <h2 className="h-section" style={{ fontSize: 32, marginBottom: 16 }}>Notre mission</h2>
            <p style={{ marginBottom: 16 }}>
              SellXY est née d'un constat simple : les commerçants en Afrique méritent des outils aussi performants
              que ceux disponibles ailleurs dans le monde, mais adaptés à leur réalité quotidienne.
            </p>
            <p>
              Notre mission est de simplifier la gestion commerciale pour les petites et moyennes boutiques à travers
              l'Afrique, en proposant une application mobile intuitive, gratuite et qui fonctionne même avec une
              connexion internet limitée.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 className="h-section" style={{ fontSize: 32, marginBottom: 16 }}>Notre histoire</h2>
            <p style={{ marginBottom: 16 }}>
              Tout a commencé en 2024 lorsque notre fondateur, après avoir observé des dizaines de commerçants gérer
              leur stock sur des cahiers et des tableurs Excel, a décidé qu'il devait y avoir une meilleure façon
              de faire.
            </p>
            <p>
              Aujourd'hui, SellXY est utilisé par plus de 5 000 commerçants à travers le Sénégal, la Côte d'Ivoire,
              le Ghana et le Maroc. Nous continuons d'évoluer grâce aux retours de notre communauté.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 className="h-section" style={{ fontSize: 32, marginBottom: 16 }}>Nos valeurs</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 26, height: 26, borderRadius: 13, background: 'var(--orange-50)', color: 'var(--orange)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={16} strokeWidth={2.4} />
                </span>
                <div>
                  <strong>Simplicité</strong> — Nos outils sont pensés pour être utilisés par tous, sans formation technique.
                </div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 26, height: 26, borderRadius: 13, background: 'var(--orange-50)', color: 'var(--orange)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={16} strokeWidth={2.4} />
                </span>
                <div>
                  <strong>Accessibilité</strong> — Application gratuite, légère (12 Mo), qui fonctionne hors ligne.
                </div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 26, height: 26, borderRadius: 13, background: 'var(--orange-50)', color: 'var(--orange)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={16} strokeWidth={2.4} />
                </span>
                <div>
                  <strong>Proximité</strong> — Support en français, disponible 7j/7, avec des réponses en moins de 4h.
                </div>
              </li>
              <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 26, height: 26, borderRadius: 13, background: 'var(--orange-50)', color: 'var(--orange)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={16} strokeWidth={2.4} />
                </span>
                <div>
                  <strong>Transparence</strong> — Pas de frais cachés, pas d'engagement, vos données vous appartiennent.
                </div>
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 className="h-section" style={{ fontSize: 32, marginBottom: 16 }}>L'équipe</h2>
            <p>
              SellXY est développé par une équipe passionnée basée à Dakar, avec des contributeurs à Abidjan, Accra
              et Casablanca. Nous sommes développeurs, designers, et anciens commerçants qui comprennent les défis
              du terrain.
            </p>
          </section>

          <section>
            <h2 className="h-section" style={{ fontSize: 32, marginBottom: 16 }}>Nous contacter</h2>
            <p style={{ marginBottom: 16 }}>
              Une question ? Une suggestion ? Nous sommes à votre écoute.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <strong>Email :</strong> <a href="mailto:hello@sellxy.app" style={{ color: 'var(--orange)' }}>hello@sellxy.app</a>
              </div>
              <div>
                <strong>Support :</strong> <a href="mailto:support@sellxy.app" style={{ color: 'var(--orange)' }}>support@sellxy.app</a>
              </div>
              <div>
                <strong>WhatsApp :</strong> <a href="https://wa.me/221770000000" style={{ color: 'var(--orange)' }}>+221 77 000 00 00</a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
