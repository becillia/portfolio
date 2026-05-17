import React from 'react';

const items = [
  'App Development', '✦', 'Web Development', '✦', 'Graphic Design',
  '✦', 'UI/UX Design', '✦', 'Branding', '✦', 'Motion Design',
  '✦', 'React JS', '✦', 'Figma', '✦', 'App Development', '✦',
  'Web Development', '✦', 'Graphic Design', '✦', 'UI/UX Design',
  '✦', 'Branding', '✦', 'Motion Design', '✦', 'React JS', '✦', 'Figma', '✦',
];

export default function Marquee() {
  return (
    <div style={{
      overflow: 'hidden',
      background: 'var(--rose-deep)',
      padding: '0.85rem 0',
      borderTop: '2px solid rgba(0,0,0,0.06)',
      borderBottom: '2px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{
        display: 'flex', gap: '2.5rem',
        animation: 'marquee 28s linear infinite',
        width: 'max-content',
      }}>
        {items.concat(items).map((item, i) => (
          <span key={i} style={{
            fontFamily: item === '✦' ? 'inherit' : 'var(--font-mono)',
            fontSize: item === '✦' ? '1rem' : '0.82rem',
            fontWeight: item === '✦' ? 400 : 700,
            color: '#fff',
            letterSpacing: item === '✦' ? 0 : '0.08em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            opacity: item === '✦' ? 0.6 : 1,
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
