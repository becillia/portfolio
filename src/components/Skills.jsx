import React, { useRef, useEffect, useState } from 'react';

function useVisible(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setVis(true); }, { threshold });
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

const skillGroups = [
  {
    category: '💻 Development',
    color: 'var(--sky)',
    accent: '#4a90d9',
    skills: [
      { name: 'React JS',       level: 100},
      { name: 'JavaScript',     level: 100 },
      { name: 'HTML & CSS',     level: 100 },
      { name: 'Node.js',        level: 100 },
      { name: 'Dart',           level: 100 },
      { name: 'MySQL / PostgreSQL', level: 100 },
      { name: 'PHP',             level: 100 },
      { name: 'Python',  level: 100 },
      { name: 'Flutter',  level: 100 },
    ],
  },
  {
    category: '🎨 Design',
    color: 'var(--lavender)',
    accent: '#9c5fd2',
    skills: [
      { name: 'Figma',          level: 100 },
      { name: 'Adobe Photoshop',level: 100 },
      { name: 'Adobe Illustrator', level: 100 },
      { name: 'Canva Pro',      level: 100 },
      { name: 'After Effects',  level: 100 },
    ],
  },
];

const ToolIcon = ({ type }) => {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true,
  };

  if (type === 'vscode') {
    return (
      <svg {...common}>
        <path d="M16.5 4 7 12l9.5 8 3.5-1.6V5.6L16.5 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M7 12 3.8 9.5 2.5 10.7v2.6l1.3 1.2L7 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'github') {
    return (
      <svg {...common} fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.28 9.28 0 0 1 12 6.97c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.04 2.74-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92v2.79c0 .28.18.6.69.5A10.16 10.16 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (type === 'figma') {
    return (
      <svg {...common}>
        <path d="M9 3h3v6H9a3 3 0 1 1 0-6Z" stroke="currentColor" strokeWidth="2" />
        <path d="M12 3h3a3 3 0 1 1 0 6h-3V3Z" stroke="currentColor" strokeWidth="2" />
        <path d="M9 9h3v6H9a3 3 0 1 1 0-6Z" stroke="currentColor" strokeWidth="2" />
        <path d="M12 9h3a3 3 0 1 1-3 3V9Z" stroke="currentColor" strokeWidth="2" />
        <path d="M9 15h3v3a3 3 0 1 1-3-3Z" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === 'photoshop') {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M7 15V9h3.1a2.1 2.1 0 1 1 0 4.2H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 14.7c.5.35 1.1.5 1.7.5.75 0 1.3-.3 1.3-.85 0-.5-.35-.72-1.25-.98-.95-.28-1.55-.75-1.55-1.58 0-.92.78-1.55 1.92-1.55.65 0 1.17.13 1.58.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'firebase') {
    return (
      <svg {...common}>
        <path d="M5 20 8.2 4l3.1 5.8L13.2 7 19 20H5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="m8.2 4 4.7 16M11.3 9.8 5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'vercel') {
    return (
      <svg {...common} fill="currentColor">
        <path d="M12 4 22 20H2L12 4Z" />
      </svg>
    );
  }

  if (type === 'illustrator') {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="m7 15 2.3-6h1.4L13 15m-5.2-1.7h4.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 10.2V15M16 8.5v.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M6 18h12M7 14c2.8-1.8 3-5.8 5-8 2 2.2 2.2 6.2 5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 11c1.2 1 2.5 1.5 4 1.5S14.8 12 16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

const tools = [
  { name: 'VS Code', icon: 'vscode', color: 'var(--sky)' },
  { name: 'Git & GitHub', icon: 'github', color: 'var(--mint)' },
  { name: 'Figma', icon: 'figma', color: 'var(--lavender)' },
  { name: 'Photoshop', icon: 'photoshop', color: 'var(--sky)' },
  { name: 'Firebase', icon: 'firebase', color: 'var(--peach)' },
  { name: 'Vercel', icon: 'vercel', color: 'var(--rose)' },
  { name: 'Illustrator', icon: 'illustrator', color: 'var(--butter)' },
  { name: 'Canva', icon: 'canva', color: 'var(--mint)' },
];

function SkillBar({ name, level, accent, vis, delay }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'0.4rem' }}>
        <span style={{ fontFamily:'var(--font-body)', fontSize:'0.88rem', fontWeight:500 }}>{name}</span>
      </div>
      <div style={{ height:8, background:'rgba(0,0,0,0.07)', borderRadius:99, overflow:'hidden' }}>
        <div style={{
          height:'100%', borderRadius:99,
          background: `linear-gradient(90deg, ${accent}, ${accent}99)`,
          width: vis ? `${level}%` : '0%',
          transition: `width 1s ${delay}s cubic-bezier(.4,0,.2,1)`,
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, vis] = useVisible();

  return (
    <section id="skills" ref={ref} style={{
      padding: 'var(--section-pad)',
      background: 'var(--white)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position:'absolute', top:'30%', right:'-10%',
        width:300, height:300, borderRadius:'50%',
        background:'var(--butter)', opacity:0.4, filter:'blur(70px)',
        animation:'blob 15s ease-in-out infinite',
      }} />

      <div style={{ maxWidth:1100, margin:'0 auto', position:'relative' }}>
        <p style={{
          fontFamily:'var(--font-mono)', fontSize:'0.78rem',
          letterSpacing:'0.15em', color:'var(--rose-deep)',
          textTransform:'uppercase', marginBottom:'0.75rem',
          opacity: vis?1:0, transition:'opacity 0.6s ease',
        }}>✦ Skills & Tools</p>

        <h2 style={{
          fontFamily:'var(--font-display)', fontWeight:900,
          fontSize:'clamp(2rem, 5vw, 3.5rem)', lineHeight:1.1,
          letterSpacing:'-0.02em', marginBottom:'3rem',
          opacity:vis?1:0, transform:vis?'none':'translateY(20px)',
          transition:'all 0.7s 0.1s ease',
        }}>
          Keahlian <em style={{color:'var(--rose-deep)'}}>Saya</em>
        </h2>

        {/* Skill bars grid */}
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr',
          gap:'2rem', marginBottom:'3.5rem',
        }} className="skills-grid">
          {skillGroups.map((group, gi) => (
            <div key={gi} style={{
              background: group.color,
              borderRadius:'var(--radius-lg)', padding:'2rem',
              opacity:vis?1:0, transform:vis?'none':'translateY(30px)',
              transition:`all 0.7s ${0.2+gi*0.15}s ease`,
            }}>
              <h3 style={{
                fontFamily:'var(--font-display)', fontWeight:700,
                fontSize:'1.3rem', marginBottom:'1.5rem',
              }}>{group.category}</h3>
              {group.skills.map((s, si) => (
                <SkillBar key={s.name} {...s} accent={group.accent} vis={vis} delay={0.4+si*0.1} />
              ))}
            </div>
          ))}
        </div>

        {/* Tools */}
        <div style={{
          opacity:vis?1:0, transform:vis?'none':'translateY(20px)',
          transition:'all 0.7s 0.5s ease',
        }}>
          <h3 style={{
            fontFamily:'var(--font-display)', fontWeight:700,
            fontSize:'1.5rem', marginBottom:'1.5rem', textAlign:'center',
          }}>Tools yang Aku Gunakan</h3>
          <div style={{
            display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center',
          }}>
            {tools.map((t, i) => (
              <div key={i} style={{
                background: t.color,
                borderRadius:'var(--radius-sm)', padding:'0.75rem 1.4rem',
                display:'flex', alignItems:'center', gap:'0.6rem',
                fontFamily:'var(--font-body)', fontWeight:500, fontSize:'0.9rem',
                opacity:vis?1:0, transform:vis?'none':'scale(0.9)',
                transition:`all 0.5s ${0.6+i*0.06}s ease`,
                cursor:'default',
                border:'1.5px solid rgba(255,255,255,0.6)',
                boxShadow:'0 4px 15px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px) scale(1.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0) scale(1)'; }}
              >
                <span style={{ display:'inline-flex', color:'var(--text)', flexShrink:0 }}>
                  <ToolIcon type={t.icon} />
                </span>
                {t.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
