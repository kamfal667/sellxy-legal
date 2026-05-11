import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SellXY Stocks — Legal',
  description: 'Privacy Policy and Terms of Service for SellXY Stocks',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: '#f8fafc', color: '#1e293b' }}>
        {children}
      </body>
    </html>
  );
}
