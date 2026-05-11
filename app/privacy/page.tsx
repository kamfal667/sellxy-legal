import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — SellXY Stocks',
};

export default function PrivacyPage() {
  return (
    <main style={styles.container}>
      <div style={styles.wrapper}>
        <Link href="/" style={styles.back}>← Retour</Link>

        <h1 style={styles.h1}>Privacy Policy — SellXY Stocks</h1>
        <p style={styles.meta}>Last updated: May 11, 2026 · Contact: <a href="mailto:support@sellxy.app" style={styles.a}>support@sellxy.app</a></p>

        <Section title="1. Introduction">
          <p>SellXY Stocks ("the App", "we", "us") is a mobile inventory and point-of-sale management application. This Privacy Policy explains what data we collect, how we use it, and your rights. By using the App, you agree to the practices described here.</p>
        </Section>

        <Section title="2. Data We Collect">
          <h3 style={styles.h3}>2.1 Account Data</h3>
          <ul style={styles.ul}>
            <li>Full name and email address</li>
            <li>Phone number (optional, for WhatsApp contact)</li>
            <li>Business name and location</li>
          </ul>
          <h3 style={styles.h3}>2.2 Business Data</h3>
          <ul style={styles.ul}>
            <li>Products, categories, stock levels</li>
            <li>Sales records and transaction history</li>
            <li>Customer information (if entered)</li>
            <li>Order data</li>
          </ul>
          <h3 style={styles.h3}>2.3 Technical Data</h3>
          <ul style={styles.ul}>
            <li>Device type and operating system, app version</li>
            <li>Crash reports and error logs (via Sentry)</li>
            <li>Anonymous usage analytics (via PostHog)</li>
            <li>IP address (collected by Supabase infrastructure)</li>
          </ul>
          <h3 style={styles.h3}>2.4 Media</h3>
          <ul style={styles.ul}>
            <li>Photos taken or selected from your gallery for product and category images</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Data">
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Purpose</th>
                <th style={styles.th}>Legal Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={styles.td}>Provide and run the App</td><td style={styles.td}>Contract performance</td></tr>
              <tr><td style={styles.td}>Sync your data across devices</td><td style={styles.td}>Contract performance</td></tr>
              <tr><td style={styles.td}>Fix bugs and improve stability</td><td style={styles.td}>Legitimate interest</td></tr>
              <tr><td style={styles.td}>Analyze usage patterns (anonymized)</td><td style={styles.td}>Legitimate interest</td></tr>
              <tr><td style={styles.td}>Send account notifications</td><td style={styles.td}>Contract performance</td></tr>
            </tbody>
          </table>
          <p style={styles.highlight}>We do <strong>not</strong> sell your data to third parties. We do <strong>not</strong> use your data for advertising.</p>
        </Section>

        <Section title="4. Data Storage & Security">
          <ul style={styles.ul}>
            <li>All data is stored on <strong>Supabase</strong> (PostgreSQL), hosted on secured AWS infrastructure.</li>
            <li>Protected by <strong>Row-Level Security (RLS)</strong>: you can only access your own data.</li>
            <li>Images stored in <strong>Supabase Storage</strong> with private bucket policies.</li>
            <li>All communications use <strong>TLS/HTTPS</strong> encryption.</li>
            <li>Passwords are hashed and never stored in plain text.</li>
          </ul>
        </Section>

        <Section title="5. Third-Party Services">
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Service</th>
                <th style={styles.th}>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={styles.td}>Supabase</td><td style={styles.td}>Database &amp; authentication</td></tr>
              <tr><td style={styles.td}>Sentry</td><td style={styles.td}>Crash reporting</td></tr>
              <tr><td style={styles.td}>PostHog</td><td style={styles.td}>Anonymous analytics</td></tr>
              <tr><td style={styles.td}>Google (OAuth)</td><td style={styles.td}>Optional sign-in</td></tr>
              <tr><td style={styles.td}>Expo / EAS</td><td style={styles.td}>App delivery</td></tr>
            </tbody>
          </table>
        </Section>

        <Section title="6. Data Retention">
          <ul style={styles.ul}>
            <li>Your account data is retained as long as your account is active.</li>
            <li>You may request deletion at any time by contacting support@sellxy.app.</li>
            <li>After deletion, data is permanently removed within 30 days.</li>
          </ul>
        </Section>

        <Section title="7. Your Rights">
          <p>Depending on your country, you may have the right to:</p>
          <ul style={styles.ul}>
            <li><strong>Access</strong> the data we hold about you</li>
            <li><strong>Correct</strong> inaccurate data</li>
            <li><strong>Delete</strong> your account and data</li>
            <li><strong>Export</strong> your data (data portability)</li>
            <li><strong>Withdraw consent</strong> at any time</li>
          </ul>
          <p>To exercise these rights: <a href="mailto:support@sellxy.app" style={styles.a}>support@sellxy.app</a></p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>The App is not intended for children under 13. We do not knowingly collect data from children under 13.</p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>We may update this policy from time to time. We will notify you of significant changes through the App or by email. Continued use after changes constitutes acceptance.</p>
        </Section>

        <Section title="10. Contact">
          <p><strong>SellXY</strong><br />Email: <a href="mailto:support@sellxy.app" style={styles.a}>support@sellxy.app</a><br />Website: <a href="https://sellxy.app" style={styles.a}>https://sellxy.app</a></p>
        </Section>

        <div style={styles.footer}>
          <Link href="/terms" style={styles.footerLink}>Terms of Service →</Link>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '32px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', borderBottom: '2px solid #E2E8F0', paddingBottom: '8px', marginBottom: '16px' }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: { background: '#f8fafc', minHeight: '100vh', padding: '40px 16px' },
  wrapper: { maxWidth: '760px', margin: '0 auto', background: '#fff', borderRadius: '16px', padding: '48px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' },
  back: { display: 'inline-block', marginBottom: '24px', color: '#2563EB', textDecoration: 'none', fontSize: '14px', fontWeight: 500 },
  h1: { fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: '0 0 8px' },
  h3: { fontSize: '15px', fontWeight: 700, color: '#334155', margin: '16px 0 8px' },
  meta: { fontSize: '13px', color: '#94a3b8', margin: '0 0 40px' },
  a: { color: '#2563EB', textDecoration: 'none' },
  ul: { paddingLeft: '20px', margin: '8px 0', lineHeight: '1.8', color: '#334155', fontSize: '15px' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '14px', margin: '12px 0' },
  th: { background: '#F1F5F9', padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#475569', border: '1px solid #E2E8F0' },
  td: { padding: '10px 14px', color: '#334155', border: '1px solid #E2E8F0', verticalAlign: 'top' },
  highlight: { background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '8px', padding: '12px 16px', color: '#166534', fontSize: '14px', margin: '16px 0' },
  footer: { borderTop: '1px solid #E2E8F0', paddingTop: '24px', marginTop: '40px', textAlign: 'center' },
  footerLink: { color: '#2563EB', textDecoration: 'none', fontSize: '14px', fontWeight: 500 },
};
