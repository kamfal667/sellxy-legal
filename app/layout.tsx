import type { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'SellXY Stocks — Legal',
  description: 'Privacy Policy and Terms of Service for SellXY Stocks',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <style>{`
          :root {
            --bg: #FFF8F3;
            --bg-card: #ffffff;
            --text: #1e293b;
            --text-muted: #64748b;
            --text-light: #94a3b8;
            --border: #e2e8f0;
            --primary: #F97316;
            --primary-dark: #EA6C0A;
            --primary-light: #FFF7ED;
            --primary-border: #FED7AA;
            --th-bg: #FFF7ED;
            --th-text: #9A3412;
            --shadow: 0 2px 16px rgba(249,115,22,0.08);
          }
          [data-theme="dark"] {
            --bg: #0F172A;
            --bg-card: #1E293B;
            --text: #F1F5F9;
            --text-muted: #94A3B8;
            --text-light: #64748B;
            --border: #334155;
            --primary: #FB923C;
            --primary-dark: #F97316;
            --primary-light: #431407;
            --primary-border: #7C2D12;
            --th-bg: #431407;
            --th-text: #FED7AA;
            --shadow: 0 2px 16px rgba(0,0,0,0.3);
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
