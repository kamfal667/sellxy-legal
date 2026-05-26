'use client';

import React, { useState } from 'react';
import { Reveal, CountUp, Icon, Logo, Phone, StoreBadge } from './components/primitives';
import { FEATURES, STEPS, SCREENS, BENEFITS, COMPARE_ROWS, TESTIMONIALS, FAQS } from './data';
import { useApp } from '../providers';
import './globals.css';

const MAX = 1160;

export default function LandingPage() {
  const [store, setStore] = useState<'apple' | 'play'>('apple');
  const downloads = 5240;
  const { theme } = useApp();

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', width: '100%', overflow: 'hidden' }}>
      <DesktopNav />
      <DesktopHero store={store} setStore={setStore} downloads={downloads} />
      <DesktopTrust downloads={downloads} />
      <DesktopFeatures />
      <DesktopHow />
      <DesktopScreens />
      <DesktopBenefits />
      <DesktopComparison />
      <DesktopTestimonials />
      <DesktopFAQ />
      <DesktopCTA store={store} setStore={setStore} />
      <DesktopFooter />
    </div>
  );
}

// ─── Nav ───────────────────────────────────────────────────────────────
function DesktopNav() {
  const { theme, toggleTheme } = useApp();

  return (
    <header style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg)' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '18px 32px', display: 'flex', alignItems: 'center', gap: 32 }}>
        <Logo size={30} />
        <nav style={{ display: 'flex', gap: 28, marginLeft: 12 }}>
          {['Fonctionnalités', 'Comment ça marche', 'Témoignages', 'FAQ'].map((l) => (
            <a key={l} href="#" style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontWeight: 500, fontSize: 14 }}>{l}</a>
          ))}
        </nav>
        <div style={{ flex: 1 }} />
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-sm"
          title={theme === 'light' ? 'Passer en mode sombre' : 'Passer en mode clair'}
          style={{ width: 36, height: 36, padding: 0, borderRadius: '50%' }}>
          <Icon name={theme === 'light' ? 'moon' : 'sun'} size={18} />
        </button>
        <button className="btn btn-ghost btn-sm">Se connecter</button>
        <button className="btn btn-cta btn-sm">
          <Icon name="arrow-down" size={14} />
          <span>Télécharger</span>
        </button>
      </div>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────
function DesktopHero({ store, setStore, downloads }: { store: 'apple' | 'play'; setStore: (s: 'apple' | 'play') => void; downloads: number }) {
  return (
    <section style={{ position: 'relative', background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%)' }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', right: -120, top: 40, width: 640, height: 520, borderRadius: '50%',
          background: 'radial-gradient(closest-side, rgba(37,99,235,0.10), transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', left: -100, bottom: -100, width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(closest-side, rgba(249,115,22,0.08), transparent 70%)',
        }} />
      </div>

      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '80px 32px 96px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center', position: 'relative' }}>
        <div>
          <Reveal>
            <div className="tag tag-blue" style={{ marginBottom: 20 }}>
              <span className="dot dot-on" /> Pensé pour les commerçants d&apos;Afrique
            </div>
          </Reveal>
          <Reveal className="reveal-delay-1">
            <h1 className="h-display" style={{ fontSize: 60, margin: '0 0 20px' }}>
              Gérez votre boutique<br/>comme un <span className="scribble">pro</span>,<br/>depuis votre smartphone.
            </h1>
          </Reveal>
          <Reveal className="reveal-delay-2">
            <p className="body" style={{ fontSize: 19, maxWidth: 520, margin: '0 0 32px' }}>
              La caisse et le stock de votre boutique, dans votre poche. Suivez vos ventes, gérez votre inventaire et encaissez vos clients — gratuitement.
            </p>
          </Reveal>
          <Reveal className="reveal-delay-3" style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
            <button className="btn btn-cta">
              <Icon name="arrow-down" size={16} />
              <span>Télécharger gratuitement</span>
            </button>
            <button className="btn btn-ghost">
              <Icon name="play" size={14} />
              <span>Voir la démo (1 min)</span>
            </button>
          </Reveal>
          <Reveal className="reveal-delay-4" style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'inline-flex' }}>
                {[0,1,2,3,4].map((i) => (
                  <Icon key={i} name="star" size={16} stroke="var(--star)" />
                ))}
              </div>
              <span className="mono" style={{ fontSize: 13, color: 'var(--ink-soft)' }}>4.8 / 5</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'inline-flex', marginRight: -8 }}>
                {[0,1,2,3].map((i) => (
                  <div key={i} style={{
                    width: 26, height: 26, borderRadius: '50%',
                    background: ['#F59E0B','#10B981','#2563EB','#F97316'][i],
                    border: '2px solid var(--bg)', marginLeft: i ? -8 : 0,
                  }} />
                ))}
              </div>
              <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>
                <CountUp to={downloads} format={(n) => '+' + n.toLocaleString('fr-FR')} /> commerçants
              </span>
            </div>
          </Reveal>
        </div>

        <div style={{ position: 'relative', minHeight: 600, display: 'grid', placeItems: 'center' }}>
          <Reveal style={{ position: 'absolute', inset: '8% 0% 4% 8%', borderRadius: 28, overflow: 'hidden', background: 'var(--paper-deep)' }}>
            <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: 'var(--ink-faint)', fontSize: 14 }}>
              Photo · Commerçante en boutique
            </div>
          </Reveal>
          <Reveal className="reveal-delay-2" style={{ position: 'absolute', left: -20, top: 60 }}>
            <div className="card" style={{ padding: 14, width: 220, boxShadow: '0 20px 40px -20px rgba(15,23,42,.25)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--green-50)', display: 'grid', placeItems: 'center', color: 'var(--green)' }}>
                  <Icon name="check" size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--ink-faint)' }}>Nouvelle vente</div>
                  <div className="mono" style={{ fontSize: 15, fontWeight: 700 }}>+ 12 800 FCFA</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="reveal-delay-3" style={{ position: 'absolute', right: 0, bottom: 80 }}>
            <div className="card" style={{ padding: 14, width: 200, boxShadow: '0 20px 40px -20px rgba(15,23,42,.25)' }}>
              <div className="eyebrow" style={{ fontSize: 10, color: 'var(--orange)' }}>ALERTE STOCK</div>
              <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4 }}>Huile 1L · 8 restants</div>
              <div style={{ height: 4, background: 'var(--bg-alt)', borderRadius: 2, marginTop: 8 }}>
                <div style={{ width: '20%', height: '100%', background: 'var(--orange)', borderRadius: 2 }} />
              </div>
            </div>
          </Reveal>
          <Reveal className="reveal-delay-1">
            <Phone w={300} screen="dashboard" glow tilt={-2} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Trust strip ──────────────────────────────────────────────────────
function DesktopTrust({ downloads }: { downloads: number }) {
  const items = [
    { big: <><CountUp to={downloads} format={(n) => '+' + n.toLocaleString('fr-FR')} /></>, small: 'commerçants en Afrique' },
    { big: '4.8 ★',  small: 'sur 1 200 avis' },
    { big: '12 Mo',  small: 'app légère, démarre vite' },
    { big: '7 j/7',  small: 'support en français' },
  ];
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '36px 32px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
        {items.map((it, i) => (
          <Reveal key={i} className={`reveal-delay-${i+1}`} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em' }}>{it.big}</div>
            <div style={{ fontSize: 13, opacity: 0.7 }}>{it.small}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────
function DesktopFeatures() {
  return (
    <section style={{ background: 'var(--bg)', padding: '96px 0' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '0 32px' }}>
        <Reveal style={{ marginBottom: 56, maxWidth: 640 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Fonctionnalités</div>
          <h2 className="h-section" style={{ fontSize: 44, margin: '0 0 12px' }}>
            Tout ce qu&apos;il faut.<br/>Rien de plus.
          </h2>
          <p className="body" style={{ fontSize: 17 }}>
            Six outils pensés pour le quotidien d&apos;une boutique. Pas de tableur, pas de complication — juste ce qu&apos;il faut pour vendre vite et bien.
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {FEATURES.map((f, i) => (
            <Reveal key={i} className={`reveal-delay-${(i % 3) + 1}`}>
              <FeatureCard f={f} accent={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ f, accent }: { f: typeof FEATURES[0]; accent: boolean }) {
  return (
    <div className="card" style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column', gap: 16, position: 'relative' }}>
      <div style={{
        width: 52, height: 52, borderRadius: 10,
        background: accent ? 'var(--orange)' : 'var(--paper-alt)',
        color: accent ? '#fff' : 'var(--ink)',
        border: '1.5px solid var(--ink)',
        boxShadow: '2px 2px 0 var(--ink)',
        display: 'grid', placeItems: 'center',
      }}>
        <Icon name={f.icon} size={24} />
      </div>
      <div>
        <h3 className="h-card" style={{ fontSize: 18, margin: '0 0 6px' }}>{f.title}</h3>
        <p className="body" style={{ fontSize: 14, margin: 0 }}>{f.body}</p>
      </div>
    </div>
  );
}

// ─── How it works ─────────────────────────────────────────────────────
function DesktopHow() {
  return (
    <section style={{ background: 'var(--bg-alt)', padding: '96px 0' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '0 32px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 56, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Comment ça marche</div>
          <h2 className="h-section" style={{ fontSize: 44, margin: '0 0 12px' }}>Démarrez en 3 étapes</h2>
          <p className="body" style={{ fontSize: 17 }}>Moins de 2 minutes entre le moment où vous téléchargez et votre première vente.</p>
        </Reveal>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          <div aria-hidden style={{ position: 'absolute', left: '16%', right: '16%', top: 32, height: 1, borderTop: '1.5px dashed var(--ink-ghost)', zIndex: 0 }} />
          {STEPS.map((s, i) => (
            <Reveal key={i} className={`reveal-delay-${i+1}`} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div className="hand" style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'var(--paper)', border: '2.5px solid var(--ink)',
                color: 'var(--orange)', display: 'grid', placeItems: 'center',
                fontSize: 34, fontWeight: 400, letterSpacing: '0',
                boxShadow: '4px 4px 0 var(--ink)',
              }}>
                {s.n}
              </div>
              <h3 className="h-card" style={{ fontSize: 18, margin: '20px 0 8px' }}>{s.title}</h3>
              <p className="body" style={{ fontSize: 14, margin: 0, maxWidth: 280 }}>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Screenshots ─────────────────────────────────────────────────────
function DesktopScreens() {
  const [active, setActive] = useState(0);
  return (
    <section style={{ background: 'var(--bg)', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '0 32px' }}>
        <Reveal style={{ marginBottom: 48, maxWidth: 640 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>L&apos;app</div>
          <h2 className="h-section" style={{ fontSize: 44, margin: '0 0 12px' }}>Conçue pour le comptoir.</h2>
          <p className="body" style={{ fontSize: 17 }}>
            Tout est à portée de pouce — grand texte, contrastes nets, navigation simple. Pensée pour être utilisée debout, vite, à côté du client.
          </p>
        </Reveal>
        <Reveal>
          <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            {SCREENS.map((s, i) => (
              <button key={s.key} type="button" onClick={() => setActive(i)}
                className={'tab ' + (active === i ? 'active' : '')}>
                {String(i+1).padStart(2,'0')} · {s.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 24, alignItems: 'end' }}>
          {SCREENS.map((s, i) => (
            <Reveal key={s.key} className={`reveal-delay-${i+1}`} style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
              <div style={{ transform: active === i ? 'scale(1.05)' : 'scale(0.96)', transition: 'transform .35s cubic-bezier(.2,.7,.2,1)', filter: active === i ? 'none' : 'grayscale(0.3) opacity(0.85)' }}>
                <Phone w={210} screen={s.key as any} tilt={active === i ? 0 : (i % 2 ? 2 : -2)} />
              </div>
              <div style={{ textAlign: 'center', maxWidth: 220 }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)', marginBottom: 4 }}>0{i+1}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{s.label}</div>
                <div className="body" style={{ fontSize: 13 }}>{s.caption}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Benefits ────────────────────────────────────────────────────────
function DesktopBenefits() {
  return (
    <section style={{ background: 'var(--bg-alt)', padding: '96px 0' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'center' }}>
        <Reveal>
          <div style={{ height: 480, borderRadius: 24, background: 'var(--paper-deep)', display: 'grid', placeItems: 'center', color: 'var(--ink-faint)', fontSize: 14 }}>
            Photo · Boutique vue large
          </div>
        </Reveal>
        <Reveal className="reveal-delay-1">
          <div className="eyebrow" style={{ marginBottom: 12 }}>Pourquoi SellXY</div>
          <h2 className="h-section" style={{ fontSize: 40, margin: '0 0 16px' }}>Pensé pour votre quotidien.</h2>
          <p className="body" style={{ fontSize: 17, marginBottom: 28 }}>
            Pas besoin d&apos;être ingénieur. Pas besoin d&apos;internet permanent. Pas besoin de carte bancaire. SellXY s&apos;adapte à votre rythme.
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 14, listStyle: 'none', padding: 0, margin: 0 }}>
            {BENEFITS.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 26, height: 26, borderRadius: 13, background: 'var(--green-50)', color: 'var(--green)', display: 'grid', placeItems: 'center', flex: 'none', marginTop: 1 }}>
                  <Icon name="check" size={16} strokeWidth={2.4} />
                </span>
                <span style={{ fontSize: 16, fontWeight: 500 }}>{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Comparison ──────────────────────────────────────────────────────
function DesktopComparison() {
  return (
    <section style={{ background: 'var(--bg)', padding: '96px 0' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '0 32px' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 48, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Comparaison</div>
          <h2 className="h-section" style={{ fontSize: 40, margin: '0 0 12px' }}>Cahier, Excel, ou SellXY ?</h2>
          <p className="body" style={{ fontSize: 17 }}>
            Voyez ce qui change vraiment quand vous passez du papier ou d&apos;un tableur à une vraie app de caisse.
          </p>
        </Reveal>
        <Reveal>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'var(--bg-alt)', borderBottom: '1px solid var(--line)' }}>
              <div style={{ padding: '18px 24px', fontSize: 13, color: 'var(--ink-faint)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Capacité</div>
              <CompHead label="Cahier" />
              <CompHead label="Excel" />
              <CompHead label="SellXY" highlight />
            </div>
            {COMPARE_ROWS.map((r, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderTop: i ? '1px solid var(--line)' : 'none' }}>
                <div style={{ padding: '18px 24px', fontWeight: 500 }}>{r.feat}</div>
                <CompCell v={r.paper} />
                <CompCell v={r.excel} />
                <CompCell v={r.app} highlight />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
function CompHead({ label, highlight }: { label: string; highlight?: boolean }) {
  return (
    <div className="hand" style={{
      padding: '18px 0', textAlign: 'center', fontWeight: 400, fontSize: 18,
      background: highlight ? 'var(--orange)' : 'transparent',
      color: highlight ? '#fff' : 'var(--ink)',
    }}>{label}</div>
  );
}
function CompCell({ v, highlight }: { v: boolean | string; highlight?: boolean }) {
  let content;
  if (v === true) content = <span style={{ width: 32, height: 32, borderRadius: '50%', background: highlight ? 'var(--green)' : 'transparent', color: highlight ? '#fff' : 'var(--green)', border: '1.5px solid var(--green)', display: 'grid', placeItems: 'center' }}><Icon name="check" size={18} strokeWidth={2.4} /></span>;
  else if (v === false) content = <span style={{ color: 'var(--ink-ghost)' }}><Icon name="x" size={20} /></span>;
  else content = <span className="mono" style={{ fontSize: 12, color: 'var(--ink-faint)' }}>{v}</span>;
  return (
    <div style={{ padding: '18px 0', display: 'grid', placeItems: 'center', background: highlight ? 'rgba(244,117,26,.06)' : 'transparent' }}>
      {content}
    </div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────
function DesktopTestimonials() {
  return (
    <section style={{ background: 'var(--bg-alt)', padding: '96px 0' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '0 32px' }}>
        <Reveal style={{ marginBottom: 48, maxWidth: 640 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Témoignages</div>
          <h2 className="h-section" style={{ fontSize: 40, margin: '0 0 12px' }}>Ils l&apos;utilisent tous les jours.</h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} className={`reveal-delay-${i+1}`}>
              <div className="card" style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'inline-flex', gap: 2 }}>
                  {[0,1,2,3,4].map((s) => <Icon key={s} name="star" size={16} stroke="var(--star)" />)}
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.5, margin: 0, color: 'var(--ink)' }}>&quot;{t.quote}&quot;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 20, background: ['var(--blue-50)','var(--orange-50)','var(--green-50)'][i], color: ['var(--blue)','var(--orange)','var(--green)'][i], display: 'grid', placeItems: 'center', fontWeight: 700 }}>
                    {t.who.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{t.who}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-faint)' }}>{t.role} · {t.city}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────
function DesktopFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background: 'var(--paper)', padding: '96px 0', position: 'relative' }}>
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64 }}>
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 12 }}>FAQ</div>
          <h2 className="h-section" style={{ fontSize: 48, margin: '0 0 16px' }}>Vous vous<br/>demandez peut-être…</h2>
          <p className="body" style={{ fontSize: 16, marginBottom: 24 }}>
            Une question hors liste ? Écrivez à <a href="mailto:hello@sellxy.app" style={{ color: 'var(--orange)', textDecoration: 'underline', textDecorationStyle: 'wavy', textUnderlineOffset: 4 }}>hello@sellxy.app</a> — réponse en moins de 4h, en français.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span className="tag">💬 Réponse &lt; 4h</span>
            <span className="tag">🇫🇷 En français</span>
            <span className="tag">📱 WhatsApp dispo</span>
          </div>
        </Reveal>
        <Reveal className="reveal-delay-1">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FAQS.map((q, i) => (
              <div key={i} className="card" style={{ overflow: 'hidden', boxShadow: open === i ? '3px 3px 0 var(--ink)' : '2px 2px 0 var(--ink)', transition: 'box-shadow .15s ease, transform .15s ease', transform: open === i ? 'translate(-1px, -1px)' : 'none' }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  width: '100%', background: 'transparent', border: 0, padding: '20px 24px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                  cursor: 'pointer', font: 'inherit', textAlign: 'left',
                }}>
                  <span className="hand" style={{ fontSize: 22, lineHeight: 1.2, color: 'var(--ink)' }}>{q.q}</span>
                  <span style={{
                    width: 32, height: 32, borderRadius: '50%',
                    border: '1.5px solid var(--ink)', background: open === i ? 'var(--orange)' : 'var(--paper)',
                    color: open === i ? '#fff' : 'var(--ink)',
                    display: 'grid', placeItems: 'center', flex: 'none',
                    transition: 'transform .2s ease, background .15s ease',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  }}>
                    <Icon name="plus" size={16} strokeWidth={2.4} />
                  </span>
                </button>
                <div style={{
                  maxHeight: open === i ? 240 : 0,
                  transition: 'max-height .35s cubic-bezier(.2,.7,.2,1)',
                  overflow: 'hidden',
                }}>
                  <div className="body" style={{ padding: '0 24px 22px', fontSize: 16, lineHeight: 1.55, borderTop: '1.5px dashed var(--ink-faint)', paddingTop: 16, margin: '0 24px' }}>
                    {q.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────
function DesktopCTA({ store, setStore }: { store: 'apple' | 'play'; setStore: (s: 'apple' | 'play') => void }) {
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', right: -200, top: -100, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(closest-side, rgba(249,115,22,0.18), transparent 70%)' }} />
      <div aria-hidden style={{ position: 'absolute', left: -200, bottom: -200, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(closest-side, rgba(37,99,235,0.22), transparent 70%)' }} />
      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '0 32px', textAlign: 'center', position: 'relative' }}>
        <Reveal>
          <div className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 16 }}>Gratuit pour commencer</div>
          <h2 className="h-display" style={{ fontSize: 60, margin: '0 0 16px' }}>
            Tout pour la <span className="scribble">vente</span>.<br/>Rien à payer.
          </h2>
          <p style={{ fontSize: 19, opacity: 0.75, maxWidth: 540, margin: '0 auto 36px' }}>
            Toutes les fonctionnalités essentielles incluses. Pas de carte bancaire. Pas d&apos;engagement.
          </p>
        </Reveal>
        <Reveal className="reveal-delay-1">
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
            <div onClick={() => setStore('apple')}><StoreBadge kind="apple" active={store === 'apple'} onClick={() => setStore('apple')} /></div>
            <div onClick={() => setStore('play')}><StoreBadge kind="play"  active={store === 'play'}  onClick={() => setStore('play')} /></div>
          </div>
          <button className="btn btn-cta" style={{ height: 54, padding: '0 28px', fontSize: 17 }}>
            <Icon name="arrow-down" size={18} />
            <span>Télécharger maintenant — {store === 'apple' ? 'iOS' : 'Android'}</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────
function DesktopFooter() {
  const product = ['Fonctionnalités', 'Démo', 'Tarifs', 'Nouveautés', 'Statut du service'];
  const company = ['À propos', 'Carrières', 'Presse', 'Partenaires', 'Blog'];
  const socials = ['FB','IG','TW','WA','LI','YT'];
  const legalInline = [
    { label: 'CGU',                          href: '#cgu' },
    { label: 'Politique de confidentialité', href: '#privacy' },
    { label: 'Mentions légales',             href: '#legal' },
    { label: 'Cookies',                       href: '#cookies' },
    { label: 'Accessibilité',                href: '#a11y' },
  ];
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '72px 0 32px', position: 'relative', overflow: 'hidden' }}>
      <svg viewBox="0 0 1280 18" preserveAspectRatio="none" width="100%" height="18" style={{ display: 'block', position: 'absolute', top: 0, left: 0 }}>
        <path d="M0 9 Q 40 0 80 9 T 160 9 T 240 9 T 320 9 T 400 9 T 480 9 T 560 9 T 640 9 T 720 9 T 800 9 T 880 9 T 960 9 T 1040 9 T 1120 9 T 1200 9 T 1280 9" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div style={{ maxWidth: MAX, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, paddingBottom: 48, borderBottom: '1.5px dashed rgba(250,246,240,.25)', marginBottom: 48 }}>
          <div>
            <Logo size={32} />
            <h3 className="h-section" style={{ fontSize: 36, margin: '24px 0 8px', color: 'var(--paper)' }}>
              Prêt à <span className="scribble">vendre</span> autrement ?
            </h3>
            <p style={{ fontSize: 15, opacity: 0.7, maxWidth: 400, margin: 0 }}>
              La caisse et le stock de votre boutique, dans votre poche. Pour les commerçants d&apos;Afrique.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 'none' }}>
            <button className="btn btn-cta">
              <Icon name="arrow-down" size={16} />
              <span>Télécharger gratuitement</span>
            </button>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, opacity: 0.7 }}>
              <Icon name="check" size={14} stroke="var(--orange)" strokeWidth={2.4} />
              <span>Gratuit · sans carte · 12 Mo</span>
            </div>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: 48, paddingBottom: 40 }}>
          <Reveal>
            <div className="hand" style={{ fontSize: 22, marginBottom: 14, color: 'var(--paper)' }}>Restez en contact</div>
            <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.7, margin: '0 0 18px', maxWidth: 320 }}>
              Une fois par mois : conseils pour les commerçants, nouveautés produit. Désinscription en un clic.
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: 0, maxWidth: 340 }}>
              <input type="email" placeholder="votre@email.com" style={{
                flex: 1, background: 'transparent', color: 'var(--paper)',
                border: '1.5px solid var(--paper)', borderRight: 0,
                padding: '10px 14px', borderTopLeftRadius: 8, borderBottomLeftRadius: 8,
                fontFamily: 'inherit', fontSize: 14, outline: 'none', minWidth: 0,
              }} />
              <button type="submit" style={{
                background: 'var(--orange)', color: '#fff',
                border: '1.5px solid var(--orange)',
                padding: '10px 16px', borderTopRightRadius: 8, borderBottomRightRadius: 8,
                fontFamily: 'Patrick Hand, cursive', fontSize: 16, cursor: 'pointer',
              }}>S&apos;inscrire →</button>
            </form>
            <div style={{ marginTop: 22 }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', opacity: 0.55, marginBottom: 10 }}>SUIVEZ-NOUS</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {socials.map((s) => (
                  <a key={s} href="#" className="mono" style={{
                    width: 36, height: 36, borderRadius: 8,
                    border: '1.5px dashed var(--paper)', display: 'grid', placeItems: 'center',
                    fontSize: 10, opacity: 0.85, textDecoration: 'none', color: 'inherit',
                  }}>{s}</a>
                ))}
              </div>
            </div>
          </Reveal>

          <FooterColD title="Produit" links={product} delay={1} />
          <FooterColD title="Société" links={company} delay={2} />

          <Reveal className="reveal-delay-3">
            <div className="hand" style={{ fontSize: 20, color: 'var(--orange)', marginBottom: 14 }}>Contact</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, lineHeight: 1.4 }}>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ opacity: 0.55, fontSize: 10, width: 64, flex: 'none', marginTop: 4, letterSpacing: '.08em' }} className="mono">EMAIL</span>
                <a href="mailto:hello@sellxy.app" style={{ color: 'var(--paper)', textDecoration: 'underline', textDecorationStyle: 'wavy', textUnderlineOffset: 3, textDecorationColor: 'var(--orange)' }}>hello@sellxy.app</a>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ opacity: 0.55, fontSize: 10, width: 64, flex: 'none', marginTop: 4, letterSpacing: '.08em' }} className="mono">SUPPORT</span>
                <a href="mailto:support@sellxy.app" style={{ color: 'var(--paper)', textDecoration: 'underline', textDecorationStyle: 'wavy', textUnderlineOffset: 3, textDecorationColor: 'var(--orange)' }}>support@sellxy.app</a>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ opacity: 0.55, fontSize: 10, width: 64, flex: 'none', marginTop: 4, letterSpacing: '.08em' }} className="mono">WHATSAPP</span>
                <a href="https://wa.me/221770000000" style={{ color: 'var(--paper)', textDecoration: 'none' }}>+221 77 000 00 00</a>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ opacity: 0.55, fontSize: 10, width: 64, flex: 'none', marginTop: 4, letterSpacing: '.08em' }} className="mono">HORAIRES</span>
                <span style={{ opacity: 0.85 }}>Lun – Sam · 8h – 20h GMT</span>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ opacity: 0.55, fontSize: 10, width: 64, flex: 'none', marginTop: 4, letterSpacing: '.08em' }} className="mono">ADRESSE</span>
                <span style={{ opacity: 0.85 }}>Dakar, Sénégal<br/>Abidjan · Accra · Casablanca</span>
              </li>
            </ul>
          </Reveal>
        </div>

        <div style={{ paddingTop: 24, borderTop: '1.5px dashed rgba(250,246,240,.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, opacity: 0.8, flexWrap: 'wrap', gap: 16 }}>
          <span className="mono" style={{ opacity: 0.7 }}>© 2026 SellXY Stocks · Tous droits réservés</span>
          <nav style={{ display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center' }}>
            {legalInline.map((l, i) => (
              <React.Fragment key={l.label}>
                {i > 0 && <span style={{ opacity: 0.35 }}>·</span>}
                <a href={l.href} style={{ color: 'inherit', textDecoration: 'underline', textDecorationStyle: 'dashed', textUnderlineOffset: 4, textDecorationThickness: 1 }}>{l.label}</a>
              </React.Fragment>
            ))}
          </nav>
        </div>
        <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, opacity: 0.45, flexWrap: 'wrap', gap: 12 }} className="mono">
          <span>Fait avec <span style={{ color: 'var(--orange)' }}>♥</span> en Afrique de l&apos;Ouest</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span className="dot dot-on" /> Tous les systèmes opérationnels
          </span>
          <span>v1.0 · sketch direction</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColD({ title, links, delay = 1 }: { title: string; links: string[]; delay?: number }) {
  return (
    <Reveal className={`reveal-delay-${delay}`}>
      <div className="hand" style={{ fontSize: 20, color: 'var(--orange)', marginBottom: 14 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map((l) => (
          <li key={l} style={{ fontSize: 15 }}>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit', opacity: 0.85 }}>{l}</a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
