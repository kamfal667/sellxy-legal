'use client';

import React, { useRef, useState, useEffect } from 'react';

// ─── Reveal-on-scroll ───────────────────────────────────────────────────────
export function Reveal({
  children,
  as: Tag = 'div' as any,
  className = '',
  style = {},
  ...rest
}: {
  children: React.ReactNode;
  as?: any;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <Tag ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={style} {...rest}>
      {children}
    </Tag>
  );
}

// ─── CountUp animation ──────────────────────────────────────────────────────
export function CountUp({
  to,
  duration = 1800,
  format = (n: number) => n.toLocaleString('fr-FR'),
  className = '',
  style = {}
}: {
  to: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const k = Math.min(1, (t - t0) / duration);
            const e2 = 1 - Math.pow(1 - k, 3); // easeOutCubic
            setVal(Math.round(to * e2));
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref} className={`tnum ${className}`} style={style}>{format(val)}</span>;
}

// ─── Icon component ─────────────────────────────────────────────────────────
export function Icon({
  name,
  size = 20,
  stroke = 'currentColor',
  strokeWidth = 1.75,
  ...rest
}: {
  name: string;
  size?: number;
  stroke?: string;
  strokeWidth?: number;
  [key: string]: any;
}) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    ...rest
  };

  switch (name) {
    case 'box':   return <svg {...props}><path d="M21 8L12 3 3 8M21 8v8l-9 5-9-5V8M21 8l-9 5M3 8l9 5M12 13v8"/></svg>;
    case 'cart':  return <svg {...props}><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M3 4h2l3 12h11l2.5-9H7"/></svg>;
    case 'chart': return <svg {...props}><path d="M3 3v18h18"/><path d="M7 15l3-4 4 3 5-7"/></svg>;
    case 'users': return <svg {...props}><circle cx="9" cy="9" r="3.2"/><path d="M3 21c0-3 3-5 6-5s6 2 6 5"/><circle cx="17.5" cy="10" r="2.5"/><path d="M15 21c0-2.2 2-4 4.5-4s2.5 1.2 2.5 3"/></svg>;
    case 'globe': return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>;
    case 'lock':  return <svg {...props}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>;
    case 'check': return <svg {...props} strokeWidth={2.2}><path d="M4 12l5 5L20 6"/></svg>;
    case 'x':     return <svg {...props} strokeWidth={2.2}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case 'star':  return <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill={stroke} stroke={stroke} strokeWidth="1"><path d="M12 3l2.8 5.6 6.2.9-4.5 4.4 1.1 6.1L12 17.1l-5.6 2.9 1.1-6.1L3 9.5l6.2-.9z"/></svg>;
    case 'menu':  return <svg {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
    case 'arrow-right': return <svg {...props}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'arrow-down':  return <svg {...props}><path d="M12 5v14M6 13l6 6 6-6"/></svg>;
    case 'plus':  return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case 'minus': return <svg {...props}><path d="M5 12h14"/></svg>;
    case 'wifi-off': return <svg {...props}><path d="M2 8c5-5 15-5 20 0"/><path d="M5 12c4-4 10-4 14 0"/><path d="M8.5 15.5c2-2 5-2 7 0"/><path d="M3 3l18 18"/></svg>;
    case 'play':  return <svg {...props} fill={stroke}><path d="M7 5l12 7-12 7z"/></svg>;
    case 'shield': return <svg {...props}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>;
    case 'headset': return <svg {...props}><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M21 19v1a3 3 0 01-3 3h-3"/></svg>;
    case 'sparkle': return <svg {...props}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M18 6l-4 4M10 14l-4 4"/></svg>;
    case 'logo-apple': return <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill={stroke}><path d="M16.4 12.7c0-2.6 2.1-3.8 2.2-3.9-1.2-1.7-3-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.4 1-4.3 2.6-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 1.9 2.7 3.3 2.7 1.3-.1 1.9-.9 3.5-.9s2.1.8 3.5.8c1.4 0 2.4-1.3 3.3-2.6.6-.9 1.2-2 1.5-3-3.5-1.3-3.3-3.8-3.3-3.9zM14 5.6c.7-.8 1.2-2 1-3.2-1.1.1-2.4.8-3.1 1.6-.7.7-1.3 2-1.1 3.1 1.2.1 2.5-.7 3.2-1.5z"/></svg>;
    case 'logo-play':  return <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill={stroke}><path d="M3 2.5v19l11-9.5L3 2.5z" opacity=".95"/><path d="M14 12L17.5 9 21.5 11.5c.7.4.7 1.4 0 1.8L17.5 15.5 14 12.5z"/></svg>;
    default: return null;
  }
}

// ─── Logo lockup ────────────────────────────────────────────────────────────
export function Logo({
  size = 28,
  mark = true,
  name = true,
  className = '',
  style = {}
}: {
  size?: number;
  mark?: boolean;
  name?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, ...style }}>
      {mark && (
        <div style={{
          width: size,
          height: size,
          borderRadius: size * 0.24,
          overflow: 'hidden',
          background: '#fff',
          boxShadow: '0 1px 2px rgba(0,0,0,.08), 0 0 0 1px rgba(0,0,0,.04)',
        }}>
          <img src="/logo-sellxy.png" alt="" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
        </div>
      )}
      {name && (
        <span style={{ fontWeight: 800, letterSpacing: '-0.02em', fontSize: size * 0.65, lineHeight: 1, color: 'var(--ink)' }}>
          SellXY <span style={{ color: 'var(--orange)' }}>Stocks</span>
        </span>
      )}
    </div>
  );
}

// ─── Phone mockup ───────────────────────────────────────────────────────────
export function Phone({
  w = 320,
  screen = 'dashboard',
  shellOs = 'ios' as 'ios' | 'android',
  tilt = 0,
  glow = false,
  style = {}
}: {
  w?: number;
  screen?: 'dashboard' | 'products' | 'pos' | 'reports';
  shellOs?: 'ios' | 'android';
  tilt?: number;
  glow?: boolean;
  style?: React.CSSProperties;
}) {
  const h = Math.round(w * 2.02);
  const radius = w * 0.13;
  const innerRadius = radius - 6;

  return (
    <div style={{
      width: w,
      height: h,
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      flex: 'none',
      position: 'relative',
      ...style,
    }}>
      {glow && (
        <div aria-hidden style={{
          position: 'absolute',
          inset: -36,
          borderRadius: radius * 1.5,
          background: 'radial-gradient(ellipse at 50% 60%, rgba(37,99,235,.18), transparent 60%)',
          filter: 'blur(20px)',
          zIndex: 0,
        }} />
      )}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: radius,
        position: 'relative',
        zIndex: 1,
        background: 'var(--paper)',
        border: '8px solid var(--ink)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {shellOs === 'ios' && (
          <div style={{
            height: 30,
            background: 'var(--ink)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingBottom: 4,
          }}>
            <div style={{
              width: w * 0.35,
              height: 22,
              background: 'var(--paper)',
              borderRadius: '0 0 14px 14px',
            }} />
          </div>
        )}
        <div style={{
          height: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 12px',
          fontSize: 11,
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: 600,
        }}>
          <span>9:41</span>
          <span style={{ display:'inline-flex', gap: 4, alignItems:'center' }}>
            <span>●●●</span>
            <span style={{ width: 18, height: 8, border: '1px solid currentColor', borderRadius: 2, position:'relative', display:'inline-block' }}>
              <span style={{ position:'absolute', left:1, top:1, bottom:1, width:'70%', background:'currentColor', borderRadius:1 }} />
            </span>
          </span>
        </div>
        <div style={{
          flex: 1,
          padding: w * 0.04,
          display: 'flex',
          flexDirection: 'column',
          gap: w * 0.025,
          overflow: 'hidden',
        }}>
          <PhoneScreen kind={screen} w={w} />
        </div>
        {shellOs === 'android' && (
          <div style={{ height: 18, display:'flex', justifyContent:'center', alignItems:'center', borderTop:'1px solid var(--line)' }}>
            <div style={{ width: 36, height: 4, borderRadius: 2, background:'var(--ink-ghost)' }} />
          </div>
        )}
      </div>
    </div>
  );
}

function PhoneScreen({ kind, w }: { kind: string; w: number }) {
  const fs = w * 0.04;
  const tiny = w * 0.032;
  if (kind === 'dashboard') return <PhoneDash w={w} fs={fs} tiny={tiny} />;
  if (kind === 'products')  return <PhoneProducts w={w} fs={fs} tiny={tiny} />;
  if (kind === 'pos')       return <PhonePOS w={w} fs={fs} tiny={tiny} />;
  if (kind === 'reports')   return <PhoneReports w={w} fs={fs} tiny={tiny} />;
  return null;
}

function PhoneDash({ w, fs, tiny }: { w: number; fs: number; tiny: number }) {
  return (
    <>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', fontSize: fs, paddingTop: 4 }}>
        <div>
          <div style={{ color:'var(--ink-faint)', fontSize: tiny }}>Bonjour 👋</div>
          <div style={{ fontWeight: 700 }}>Awa</div>
        </div>
        <div style={{ width: fs*2, height: fs*2, borderRadius: '50%', background:'var(--blue-50)', display:'grid', placeItems:'center', color:'var(--blue)', fontWeight: 700, fontSize: tiny }}>A</div>
      </div>
      <div style={{ padding: w*0.04, borderRadius: w*0.04, background:'linear-gradient(135deg, var(--blue), var(--blue))', color:'#fff' }}>
        <div className="mono" style={{ fontSize: tiny, opacity: 0.8 }}>AUJOURD&apos;HUI</div>
        <div style={{ fontSize: fs*1.9, fontWeight: 800, marginTop: 2, letterSpacing:'-0.02em' }}>
          87 200 <span style={{ fontSize: fs*0.7, opacity: 0.85 }}>FCFA</span>
        </div>
        <div style={{ display:'flex', alignItems:'flex-end', gap: 3, marginTop: 6, height: w*0.16 }}>
          {[6,10,5,12,9,14,11,16,8,13,11,17].map((v,i)=>(
            <div key={i} style={{ flex:1, height: `${(v/17)*100}%`, background:'rgba(255,255,255,.7)', borderRadius: 2 }} />
          ))}
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 6 }}>
        <div style={{ padding: w*0.03, border:'1px solid var(--line)', borderRadius: w*0.03 }}>
          <div className="mono" style={{ fontSize: tiny, color:'var(--ink-faint)' }}>VENTES</div>
          <div style={{ fontSize: fs*1.4, fontWeight: 700 }}>42</div>
        </div>
        <div style={{ padding: w*0.03, border:'1px solid var(--line)', borderRadius: w*0.03 }}>
          <div className="mono" style={{ fontSize: tiny, color:'var(--ink-faint)' }}>STOCK</div>
          <div style={{ fontSize: fs*1.4, fontWeight: 700 }}>318</div>
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap: 4 }}>
        {[['Riz 5kg','+ 24','12 500'],['Huile 1L','+ 3','2 800'],['Savon','+ 12','350']].map((r,i)=>(
          <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:`${w*0.02}px ${w*0.03}px`, background:'var(--bg-alt)', borderRadius: w*0.025, fontSize: tiny }}>
            <span style={{ fontWeight: 600 }}>{r[0]}</span>
            <span className="mono" style={{ color:'var(--green)' }}>{r[1]}</span>
            <span className="mono">{r[2]}</span>
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display:'flex', justifyContent:'space-around', borderTop:'1px solid var(--line)', paddingTop: 6, color:'var(--ink-faint)' }}>
        <Icon name="chart" size={fs*1.4} stroke="var(--blue)"/>
        <Icon name="box" size={fs*1.4}/>
        <div style={{ width: fs*2, height: fs*2, borderRadius:'50%', background:'var(--orange)', display:'grid', placeItems:'center', color:'#fff', marginTop: -fs*0.6 }}>
          <Icon name="plus" size={fs*1.2} stroke="#fff" strokeWidth={2.4}/>
        </div>
        <Icon name="cart" size={fs*1.4}/>
        <Icon name="users" size={fs*1.4}/>
      </div>
    </>
  );
}

function PhoneProducts({ w, fs, tiny }: { w: number; fs: number; tiny: number }) {
  const items = [
    ['Riz parfumé 5kg','12 500', 24, 'ok'],
    ['Huile végétale 1L','2 800', 8, 'low'],
    ['Savon multiusage','350', 64, 'ok'],
    ['Sucre cristal 1kg','900', 12, 'ok'],
    ['Lait en poudre','3 200', 2, 'low'],
    ['Pain de mie','600', 18, 'ok'],
  ];
  return (
    <>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', fontSize: fs }}>
        <div style={{ fontWeight: 700 }}>Mes produits</div>
        <Icon name="plus" size={fs*1.2} stroke="var(--blue)"/>
      </div>
      <div style={{ padding:`${w*0.025}px ${w*0.035}px`, border:'1px solid var(--line)', borderRadius: w*0.04, color:'var(--ink-faint)', fontSize: tiny }}>🔍 Chercher un produit</div>
      <div style={{ display:'flex', flexDirection:'column', gap: 5, flex: 1, overflow:'hidden' }}>
        {items.map((it,i)=>(
          <div key={i} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 6, padding: w*0.025, border:'1px solid var(--line)', borderRadius: w*0.03 }}>
            <div style={{ width: w*0.1, height: w*0.1, borderRadius: w*0.02, background:'var(--bg-alt)' }} />
            <div style={{ flex:1, minWidth: 0 }}>
              <div style={{ fontSize: tiny, fontWeight: 600, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{it[0]}</div>
              <div className="mono" style={{ fontSize: tiny*0.85, color: it[3]==='low'?'var(--orange)':'var(--ink-faint)' }}>{it[2]} pcs {it[3]==='low'?'· bas':''}</div>
            </div>
            <div className="mono" style={{ fontSize: tiny, fontWeight: 700 }}>{it[1]}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function PhonePOS({ w, fs, tiny }: { w: number; fs: number; tiny: number }) {
  const lines = [['Riz 5kg', 2, 25000],['Huile 1L', 1, 2800],['Savon', 4, 1400]];
  return (
    <>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', fontSize: fs }}>
        <span style={{ fontWeight: 700 }}>Caisse</span>
        <span className="mono" style={{ fontSize: tiny, color:'var(--ink-faint)' }}>3 articles</span>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap: 6, flex: 1 }}>
        {lines.map((r,i)=>(
          <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding: w*0.025, background:'var(--bg-alt)', borderRadius: w*0.03 }}>
            <div>
              <div style={{ fontSize: tiny, fontWeight: 600 }}>{r[0]}</div>
              <div className="mono" style={{ fontSize: tiny*0.85, color:'var(--ink-faint)' }}>×{r[1]}</div>
            </div>
            <div className="mono" style={{ fontWeight: 700, fontSize: tiny }}>{r[2].toLocaleString('fr-FR')}</div>
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{ display:'flex', justifyContent:'space-between', padding: `${w*0.02}px 0`, fontSize: tiny, color:'var(--ink-faint)' }}>
          <span>Sous-total</span><span className="mono">29 200</span>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
          <span style={{ fontWeight: 700 }}>Total</span>
          <span className="mono" style={{ fontSize: fs*1.4, fontWeight: 800 }}>29 200 <span style={{ fontSize: tiny }}>FCFA</span></span>
        </div>
        <div style={{ background:'var(--green)', color:'#fff', padding: w*0.03, borderRadius: w*0.03, textAlign:'center', fontWeight: 700, fontSize: fs }}>
          Encaisser
        </div>
      </div>
    </>
  );
}

function PhoneReports({ w, fs, tiny }: { w: number; fs: number; tiny: number }) {
  return (
    <>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', fontSize: fs }}>
        <span style={{ fontWeight: 700 }}>Rapports</span>
        <span className="mono" style={{ fontSize: tiny, color:'var(--ink-faint)' }}>7 jours</span>
      </div>
      <div style={{ padding: w*0.03, border:'1px solid var(--line)', borderRadius: w*0.03 }}>
        <div className="mono" style={{ fontSize: tiny, color:'var(--ink-faint)' }}>CHIFFRE D&apos;AFFAIRES</div>
        <div style={{ fontSize: fs*1.7, fontWeight: 800 }}>612 400 <span style={{ fontSize: tiny, color:'var(--green)' }}>+18%</span></div>
        <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ width:'100%', height: w*0.28, marginTop: 4 }}>
          <defs>
            <linearGradient id="ar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--blue)" stopOpacity="0.25" />
              <stop offset="1" stopColor="var(--blue)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 32 L 14 26 L 28 28 L 42 18 L 56 22 L 70 12 L 84 8 L 100 5 L 100 40 L 0 40 Z" fill="url(#ar)" />
          <path d="M0 32 L 14 26 L 28 28 L 42 18 L 56 22 L 70 12 L 84 8 L 100 5" fill="none" stroke="var(--blue)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="mono" style={{ fontSize: tiny, color:'var(--ink-faint)' }}>PRODUITS STARS</div>
      <div style={{ display:'flex', flexDirection:'column', gap: 4 }}>
        {[['Riz parfumé 5kg', 84, 100],['Huile 1L', 62, 100],['Savon', 41, 100]].map((r,i)=>(
          <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 60px', gap: 6, alignItems:'center', fontSize: tiny }}>
            <div style={{ display:'flex', flexDirection:'column', gap: 3 }}>
              <span style={{ fontWeight: 600 }}>{r[0]}</span>
              <div style={{ height: 4, background:'var(--bg-alt)', borderRadius: 2 }}>
                <div style={{ width: `${r[1]}%`, height: '100%', background:'var(--orange)', borderRadius: 2 }} />
              </div>
            </div>
            <span className="mono" style={{ textAlign:'right', color:'var(--ink-soft)' }}>{r[1]} pcs</span>
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Store badge ────────────────────────────────────────────────────────────
export function StoreBadge({
  kind = 'apple' as 'apple' | 'play',
  active = false,
  onClick
}: {
  kind?: 'apple' | 'play';
  active?: boolean;
  onClick?: () => void;
}) {
  const label1 = kind === 'apple' ? 'Télécharger sur' : 'Disponible sur';
  const label2 = kind === 'apple' ? 'App Store'        : 'Google Play';
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display:'inline-flex',
        alignItems:'center',
        gap: 10,
        padding: '10px 16px',
        background: active ? 'var(--ink)' : 'transparent',
        color: active ? 'var(--bg)' : 'var(--ink)',
        border: `1.5px solid ${active ? 'var(--ink)' : 'var(--ink-ghost)'}`,
        borderRadius: 12,
        cursor: 'pointer',
        font: 'inherit',
        transition: 'all .15s ease',
        opacity: onClick && !active ? 0.7 : 1,
      }}
    >
      <Icon name={kind === 'apple' ? 'logo-apple' : 'logo-play'} size={24} stroke={active ? 'var(--bg)' : 'var(--ink)'} />
      <span style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', lineHeight: 1.15 }}>
        <span style={{ fontSize: 10, opacity: 0.75 }}>{label1}</span>
        <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em' }}>{label2}</span>
      </span>
    </button>
  );
}
