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
            /* Backgrounds */
            --bg: #FFFFFF;
            --bg-dark: #0A0A0A;
            --bg-gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --bg-gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            --bg-gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

            /* Text & Border */
            --text: #000000;
            --text-muted: #666666;
            --border: #E5E5E5;

            /* Primary Colors */
            --primary: #F97316;
            --primary-light: #FB923C;
            --primary-dark: #EA580C;

            /* Secondary Colors - Vibrant Palette */
            --purple: #8B5CF6;
            --purple-light: #A78BFA;
            --blue: #3B82F6;
            --blue-light: #60A5FA;
            --pink: #EC4899;
            --pink-light: #F472B6;
            --teal: #14B8A6;
            --teal-light: #2DD4BF;

            /* Shadows */
            --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
            --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
            --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.16);
            --shadow-xl: 0 12px 48px rgba(0, 0, 0, 0.20);

            /* Colored Shadows */
            --shadow-primary: 0 8px 32px rgba(249, 115, 22, 0.3);
            --shadow-purple: 0 8px 32px rgba(139, 92, 246, 0.3);
            --shadow-blue: 0 8px 32px rgba(59, 130, 246, 0.3);
            --shadow-pink: 0 8px 32px rgba(236, 72, 153, 0.3);

            /* Gradients */
            --gradient-orange: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
            --gradient-purple: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
            --gradient-blue: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
            --gradient-sunset: linear-gradient(135deg, #F97316 0%, #EC4899 100%);
            --gradient-pink-purple: linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%);

            /* Border Radius */
            --radius-sm: 8px;
            --radius-md: 12px;
            --radius-lg: 16px;
            --radius-xl: 24px;

            --space-1: 8px;
            --space-2: 16px;
            --space-3: 24px;
            --space-4: 32px;
            --space-5: 40px;
            --space-6: 48px;
            --space-8: 64px;
            --space-12: 96px;
            --space-16: 128px;
            --space-20: 160px;

            --text-xs: 12px;
            --text-sm: 14px;
            --text-base: 16px;
            --text-lg: 18px;
            --text-xl: 20px;
            --text-2xl: 24px;
            --text-3xl: 30px;
            --text-4xl: 36px;
            --text-5xl: 48px;
            --text-6xl: 60px;
            --text-7xl: 72px;
            --text-8xl: 80px;
            --text-9xl: 90px;

            --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
            --border-radius: 8px;
          }

          [data-theme="dark"] {
            --bg: #000000;
            --text: #FFFFFF;
            --text-muted: #999999;
            --border: #333333;
            --primary: #F97316;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          @keyframes glow-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.5); }
            50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.8); }
          }

          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.5;
            font-size: var(--text-base);
            -webkit-font-smoothing: antialiased;
          }
          a {
            color: var(--text);
            text-decoration: none;
            transition: opacity 0.2s;
          }
          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
