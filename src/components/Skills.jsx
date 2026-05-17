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
      { name: 'React JS',       level: 80 },
      { name: 'JavaScript',     level: 85 },
      { name: 'HTML & CSS',     level: 90 },
      { name: 'Node.js',        level: 75 },
      { name: 'Dart',           level: 80 },
      { name: 'MySQL / PostgreSQL', level: 85 },
      { name: 'PHP',             level: 80 },
      { name: 'Python',  level: 80 },
      { name: 'Flutter',  level: 90 },
    ],
  },
  {
    category: '🎨 Design',
    color: 'var(--lavender)',
    accent: '#9c5fd2',
    skills: [
      { name: 'Figma',          level: 80 },
      { name: 'Adobe Photoshop',level: 80 },
      { name: 'Adobe Illustrator', level: 85 },
      { name: 'Canva Pro',      level: 90 },
      { name: 'After Effects',  level: 70 },
    ],
  },
];

const tools = [
  { name: 'VS Code',    emoji: '💙', color: 'var(--sky)' },
  { name: 'Git & GitHub', emoji: '🐙', color: 'var(--mint)' },
  { name: 'Figma',      emoji: '🎯', color: 'var(--lavender)' },
  { name: 'Photoshop',  emoji: '🖼️', color: 'var(--sky)' },
  { name: 'Firebase',   emoji: '🔥', color: 'var(--peach)' },
  { name: 'Vercel',     emoji: '▲', color: 'var(--rose)' },
  { name: 'Illustrator',emoji: '✏️', color: 'var(--butter)' },
  { name: 'Canva',      emoji: '🎨', color: 'var(--mint)' },
];

function SkillBar({ name, level, accent, vis, delay }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'0.4rem' }}>
        <span style={{ fontFamily:'var(--font-body)', fontSize:'0.88rem', fontWeight:500 }}>{name}</span>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'var(--text-soft)' }}>{level}%</span>
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
                <span style={{fontSize:'1.1rem'}}>{t.emoji}</span>
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
