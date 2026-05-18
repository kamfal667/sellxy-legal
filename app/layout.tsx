import type { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'SellXY — Gestion de Stock et POS Mobile',
  description: 'Gérez votre commerce avec SellXY: inventaire, caisse, statistiques en temps réel. Application mobile iOS et Android pour commerçants et petites entreprises.',
  keywords: 'gestion stock, pos, caisse, inventaire, mobile, app, commerce, afrique',
  authors: [{ name: 'SellXY' }],
  openGraph: {
    title: 'SellXY — Gestion de Stock et POS Mobile',
    description: 'Gérez votre commerce en toute simplicité avec SellXY',
    url: 'https://sellxy.app',
    siteName: 'SellXY',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SellXY — Gestion de Stock et POS Mobile',
    description: 'Gérez votre commerce en toute simplicité',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <style>{`
          :root {
            --bg: #FFF8F3;
            --bg-card: #ffffff;
            --bg-elevated: #ffffff;
            --text: #1e293b;
            --text-muted: #64748b;
            --text-light: #94a3b8;
            --border: #e2e8f0;
            --border-light: rgba(255, 255, 255, 0.10);

            --primary-50: #FFF7ED;
            --primary-100: #FFEDD5;
            --primary-200: #FED7AA;
            --primary-300: #FDBA74;
            --primary-400: #FB923C;
            --primary: #F97316;
            --primary-600: #EA580C;
            --primary-700: #C2410C;
            --primary-800: #9A3412;

            --primary-dark: #EA6C0A;
            --primary-light: #FFF7ED;
            --primary-border: #FED7AA;
            --th-bg: #FFF7ED;
            --th-text: #9A3412;

            --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
            --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.04);
            --shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
            --shadow-xl: 0 24px 48px rgba(0, 0, 0, 0.16), 0 8px 16px rgba(0, 0, 0, 0.08);
            --shadow-2xl: 0 40px 64px rgba(0, 0, 0, 0.20), 0 16px 24px rgba(0, 0, 0, 0.10);

            --shadow-primary: 0 12px 32px rgba(249, 115, 22, 0.25);
            --shadow-primary-lg: 0 20px 48px rgba(249, 115, 22, 0.30);

            --glow-primary: 0 0 40px rgba(249, 115, 22, 0.20);
            --glow-primary-strong: 0 0 60px rgba(249, 115, 22, 0.30);

            --gradient-primary: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
            --gradient-hero: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(249,115,22,0.25), transparent 60%),
                             linear-gradient(135deg, rgba(249,115,22,0.12), rgba(234,88,12,0.08));
            --gradient-mesh: radial-gradient(at 0% 0%, rgba(249,115,22,0.15) 0px, transparent 50%),
                             radial-gradient(at 100% 100%, rgba(234,88,12,0.10) 0px, transparent 50%);

            --shadow: 0 2px 16px rgba(249,115,22,0.08);
          }
          [data-theme="dark"] {
            --bg: #0F172A;
            --bg-card: #1E293B;
            --bg-elevated: #293548;
            --text: #F1F5F9;
            --text-muted: #94A3B8;
            --text-light: #64748B;
            --border: #334155;
            --border-light: rgba(255, 255, 255, 0.10);

            --primary: #FB923C;
            --primary-dark: #F97316;
            --primary-light: #431407;
            --primary-border: #7C2D12;
            --th-bg: #431407;
            --th-text: #FED7AA;

            --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.20), 0 0 2px rgba(0, 0, 0, 0.10);
            --shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.30), 0 2px 8px rgba(0, 0, 0, 0.15);
            --shadow-xl: 0 24px 48px rgba(0, 0, 0, 0.40), 0 8px 16px rgba(0, 0, 0, 0.20);

            --shadow-primary: 0 12px 32px rgba(251, 146, 60, 0.20);
            --glow-primary: 0 0 40px rgba(251, 146, 60, 0.15);
            --glow-primary-strong: 0 0 60px rgba(251, 146, 60, 0.25);

            --shadow: 0 2px 16px rgba(0,0,0,0.3);
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(249,115,22,0.4);
            }
            50% {
              box-shadow: 0 0 40px rgba(249,115,22,0.6);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: var(--bg);
            color: var(--text);
            transition: background 0.2s, color 0.2s;
            line-height: 1.6;
          }
          a { color: var(--primary); text-decoration: none; }
          a:hover { text-decoration: underline; }
        `}</style>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
