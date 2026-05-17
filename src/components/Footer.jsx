import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background:'var(--text)',
      padding:'2.5rem 2rem',
      textAlign:'center',
    }}>
      <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem' }}>
        <span style={{
          fontFamily:'var(--font-display)', fontWeight:900, fontSize:'1.6rem',
          color:'var(--rose)',
        }}></span>

        <p style={{
          fontFamily:'var(--font-body)', fontSize:'0.85rem',
          color:'rgba(255,255,255,0.4)',
        }}>
        </p>

        <div style={{ width:'100%', height:1, background:'rgba(255,255,255,0.08)' }} />

        <p style={{
          fontFamily:'var(--font-mono)', fontSize:'0.72rem',
          color:'rgba(255,255,255,0.25)', letterSpacing:'0.05em',
        }}>
          © {new Date().getFullYear()} Bethania Cicilia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
