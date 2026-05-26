'use client';

import Link from 'next/link';
import { Icon } from '../landing/components/primitives';

export default function LegalPage() {
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
          Mentions <span style={{ color: 'var(--orange)' }}>légales</span>
        </h1>

        <div className="body" style={{ fontSize: 16, lineHeight: 1.7 }}>
          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Éditeur du site</h2>
            <p style={{ marginBottom: 12 }}><strong>Raison sociale :</strong> SellXY Stocks</p>
            <p style={{ marginBottom: 12 }}><strong>Forme juridique :</strong> SARL</p>
            <p style={{ marginBottom: 12 }}><strong>Siège social :</strong> Dakar, Sénégal</p>
            <p style={{ marginBottom: 12 }}><strong>Email :</strong> <a href="mailto:hello@sellxy.app" style={{ color: 'var(--orange)' }}>hello@sellxy.app</a></p>
            <p style={{ marginBottom: 12 }}><strong>Directeur de la publication :</strong> [Nom du directeur]</p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Hébergement</h2>
            <p style={{ marginBottom: 12 }}><strong>Hébergeur :</strong> Vercel Inc.</p>
            <p style={{ marginBottom: 12 }}><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
            <p style={{ marginBottom: 12 }}><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--orange)' }}>vercel.com</a></p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Données personnelles</h2>
            <p style={{ marginBottom: 12 }}>
              Les données personnelles collectées via notre application mobile sont traitées conformément au
              Règlement Général sur la Protection des Données (RGPD) et aux lois locales applicables.
            </p>
            <p>
              Pour plus d'informations sur le traitement de vos données, consultez notre{' '}
              <Link href="/privacy" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Propriété intellectuelle</h2>
            <p style={{ marginBottom: 12 }}>
              L'ensemble du contenu de ce site (textes, images, logos, icônes, vidéos) est la propriété exclusive
              de SellXY Stocks ou de ses partenaires, et est protégé par les lois relatives à la propriété
              intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des
              éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation
              écrite préalable de SellXY Stocks.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Cookies</h2>
            <p>
              Ce site utilise des cookies strictement nécessaires à son fonctionnement (préférences de langue et
              de thème). Aucun cookie de tracking ou publicitaire n'est utilisé sans votre consentement explicite.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Responsabilité</h2>
            <p style={{ marginBottom: 12 }}>
              SellXY Stocks s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
              Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises
              à disposition.
            </p>
            <p>
              SellXY Stocks décline toute responsabilité en cas de dommages directs ou indirects causés au matériel
              de l'utilisateur lors de l'accès au site ou résultant de l'utilisation de l'application mobile.
            </p>
          </section>

          <section>
            <h2 className="h-section" style={{ fontSize: 28, marginBottom: 16 }}>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit sénégalais. En cas de litige, et après échec
              de toute tentative de recherche d'une solution amiable, les tribunaux sénégalais seront seuls compétents.
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
