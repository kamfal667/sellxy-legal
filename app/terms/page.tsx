import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — SellXY Stocks',
};

export default function TermsPage() {
  return (
    <main style={styles.container}>
      <div style={styles.wrapper}>
        <Link href="/" style={styles.back}>← Retour</Link>

        <h1 style={styles.h1}>Terms of Service — SellXY Stocks</h1>
        <p style={styles.meta}>Last updated: May 11, 2026 · Contact: <a href="mailto:support@sellxy.app" style={styles.a}>support@sellxy.app</a></p>

        <Section title="1. Acceptance of Terms">
          <p>By downloading, installing, or using SellXY Stocks ("the App"), you agree to be bound by these Terms of Service. If you do not agree, do not use the App.</p>
        </Section>

        <Section title="2. Description of Service">
          <p>SellXY Stocks provides:</p>
          <ul style={styles.ul}>
            <li>Inventory management (products, categories, stock tracking)</li>
            <li>Point-of-sale (POS) functionality</li>
            <li>Sales history and analytics dashboard</li>
            <li>Customer and order management</li>
            <li>Multi-user access with role-based permissions (owner / employee)</li>
          </ul>
        </Section>

        <Section title="3. Account Registration">
          <ul style={styles.ul}>
            <li>You must provide accurate information when creating an account.</li>
            <li>You are responsible for maintaining the security of your credentials.</li>
            <li>You must not share login credentials with unauthorized persons.</li>
            <li>You are responsible for all activity that occurs under your account.</li>
            <li>You must be at least 18 years old to create an account.</li>
          </ul>
        </Section>

        <Section title="4. Acceptable Use">
          <p>You agree <strong>not</strong> to:</p>
          <ul style={styles.ul}>
            <li>Use the App for illegal activities or fraudulent transactions</li>
            <li>Attempt to reverse-engineer, decompile, or tamper with the App</li>
            <li>Upload malicious content, viruses, or harmful code</li>
            <li>Violate the rights of third parties</li>
            <li>Attempt to gain unauthorized access to other users' data</li>
          </ul>
        </Section>

        <Section title="5. Data Ownership">
          <p style={styles.highlight}>
            <strong>Your business data belongs to you.</strong> Products, sales, customers, and all data you enter remain your property. You grant SellXY a limited license to store and process this data solely to provide the service. We do not claim ownership of your business data.
          </p>
        </Section>

        <Section title="6. Subscription & Pricing">
          <ul style={styles.ul}>
            <li>The App may offer free and paid tiers. Current pricing is available within the App.</li>
            <li>Subscriptions are billed in advance on a monthly or annual basis.</li>
            <li>Refunds are handled case-by-case. Contact support@sellxy.app within 7 days of a charge.</li>
            <li>We reserve the right to change pricing with 30 days' prior notice.</li>
          </ul>
        </Section>

        <Section title="7. Service Availability">
          <ul style={styles.ul}>
            <li>We strive for high availability but do not guarantee 100% uptime.</li>
            <li>We may perform maintenance that temporarily interrupts service, with advance notice when possible.</li>
            <li>We are not liable for losses caused by service interruptions beyond our control.</li>
          </ul>
        </Section>

        <Section title="8. Intellectual Property">
          <ul style={styles.ul}>
            <li>The App, its design, logo, and codebase are the intellectual property of SellXY.</li>
            <li>You may not copy, modify, distribute, or create derivative works without written permission.</li>
            <li>"SellXY" and "SellXY Stocks" are trademarks of SellXY.</li>
          </ul>
        </Section>

        <Section title="9. Limitation of Liability">
          <ul style={styles.ul}>
            <li>SellXY is not liable for any indirect, incidental, or consequential damages.</li>
            <li>Our total liability for any claim is limited to the amount you paid us in the 3 months preceding the claim.</li>
            <li>We do not guarantee that the App will be error-free or that data will never be lost.</li>
          </ul>
          <p style={styles.warning}>⚠️ Always maintain your own backups of critical business data.</p>
        </Section>

        <Section title="10. Indemnification">
          <p>You agree to indemnify and hold SellXY harmless from any claims, losses, or damages arising from your use of the App in violation of these Terms, your violation of any applicable law, or content you submit through the App.</p>
        </Section>

        <Section title="11. Termination">
          <ul style={styles.ul}>
            <li>You may delete your account at any time from within the App or by contacting support.</li>
            <li>We may suspend or terminate your account if you violate these Terms.</li>
            <li>Upon termination, your data will be deleted within 30 days.</li>
          </ul>
        </Section>

        <Section title="12. Governing Law">
          <p>These Terms are governed by applicable law. Any disputes will be resolved through good-faith negotiation, and if necessary, binding arbitration.</p>
        </Section>

        <Section title="13. Changes to Terms">
          <p>We may update these Terms from time to time. We will notify you of material changes via the App or email at least 15 days before they take effect. Continued use after the effective date constitutes acceptance.</p>
        </Section>

        <Section title="14. Contact">
          <p>
            <strong>SellXY</strong><br />
            Email: <a href="mailto:support@sellxy.app" style={styles.a}>support@sellxy.app</a><br />
            Website: <a href="https://sellxy.app" style={styles.a}>https://sellxy.app</a>
          </p>
        </Section>

        <div style={styles.footer}>
          <Link href="/privacy" style={styles.footerLink}>← Privacy Policy</Link>
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
  meta: { fontSize: '13px', color: '#94a3b8', margin: '0 0 40px' },
  a: { color: '#2563EB', textDecoration: 'none' },
  ul: { paddingLeft: '20px', margin: '8px 0', lineHeight: '1.8', color: '#334155', fontSize: '15px' },
  highlight: { background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '8px', padding: '12px 16px', color: '#1e40af', fontSize: '14px', margin: '12px 0' },
  warning: { background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '8px', padding: '12px 16px', color: '#92400e', fontSize: '14px', margin: '12px 0' },
  footer: { borderTop: '1px solid #E2E8F0', paddingTop: '24px', marginTop: '40px', textAlign: 'center' },
  footerLink: { color: '#2563EB', textDecoration: 'none', fontSize: '14px', fontWeight: 500 },
};
