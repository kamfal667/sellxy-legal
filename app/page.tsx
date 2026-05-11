import Link from 'next/link';

export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>SellXY Stocks</div>
        <h1 style={styles.title}>Legal Documents</h1>
        <p style={styles.subtitle}>Politique de confidentialité et Conditions d'utilisation</p>
        <div style={styles.links}>
          <Link href="/privacy" style={styles.link}>
            🔒 Privacy Policy / Politique de confidentialité
          </Link>
          <Link href="/terms" style={styles.link}>
            📄 Terms of Service / Conditions d'utilisation
          </Link>
        </div>
        <p style={styles.footer}>
          Contact :{' '}
          <a href="mailto:support@sellxy.app" style={styles.email}>
            support@sellxy.app
          </a>
        </p>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    background: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)',
  },
  card: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '48px',
    maxWidth: '480px',
    width: '100%',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },
  logo: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#2563EB',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '16px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#0f172a',
    margin: '0 0 8px',
  },
  subtitle: {
    fontSize: '15px',
    color: '#64748b',
    margin: '0 0 32px',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '32px',
  },
  link: {
    display: 'block',
    padding: '14px 20px',
    background: '#F1F5F9',
    borderRadius: '10px',
    color: '#1e293b',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 500,
    transition: 'background 0.15s',
  },
  footer: {
    fontSize: '13px',
    color: '#94a3b8',
    margin: 0,
  },
  email: {
    color: '#2563EB',
    textDecoration: 'none',
  },
};
