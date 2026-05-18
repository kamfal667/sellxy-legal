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
            --bg: #FFFFFF;
            --text: #000000;
            --text-muted: #666666;
            --border: #E5E5E5;
            --primary: #F97316;

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
