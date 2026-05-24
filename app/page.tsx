'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Redirect to the SellXY Landing page
    window.location.href = '/landing';
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Patrick Hand, cursive',
      background: '#FAF6F0',
      color: '#2A251F',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 600, padding: 24 }}>
        <h1 style={{ fontSize: 48, marginBottom: 16 }}>
          SellXY <span style={{ color: '#F4751A' }}>Stocks</span>
        </h1>
        <p style={{ fontSize: 19, marginBottom: 24, color: '#6F6357' }}>
          Redirection vers la landing page...
        </p>
        <p style={{ fontSize: 14, color: '#6F6357' }}>
          Si la redirection ne fonctionne pas, <a href="/landing" style={{ color: '#F4751A', textDecoration: 'underline' }}>cliquez ici</a>
        </p>
      </div>
    </div>
  );
}
