import React, { useEffect, useState } from 'react';

const roles = ['App Developer', 'Web Developer', 'Graphic Designer', 'UI/UX Enthusiast'];

function Blob({ color, style }) {
  return (
    <div style={{
      position: 'absolute',
      borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      background: color,
      animation: 'blob 8s ease-in-out infinite',
      opacity: 0.55,
      filter: 'blur(2px)',
      ...style,
    }} />
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % roles.length);
        setFade(true);
      }, 350);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--rose) 0%, var(--peach) 40%, var(--lavender) 100%)',
      padding: '6rem 2rem 4rem',
    }}>
      {/* Decorative blobs */}
      <Blob color="var(--mint)"     style={{ width: 380, height: 380, top: '-10%', right: '-8%', animationDelay: '0s' }} />
      <Blob color="var(--butter)"   style={{ width: 260, height: 260, bottom: '5%', left: '-6%', animationDelay: '-3s' }} />
      <Blob color="var(--sky)"      style={{ width: 180, height: 180, top: '20%', left: '12%', animationDelay: '-5s', animationDuration: '10s' }} />

      {/* Floating shapes */}
      {[
        { top:'15%', left:'8%',  size:18, color:'var(--rose-deep)',  delay:'0s',   shape:'circle' },
        { top:'72%', left:'80%', size:28, color:'var(--mint-deep)',  delay:'-2s',  shape:'square' },
        { top:'30%', right:'5%', size:14, color:'var(--lav-deep)',   delay:'-4s',  shape:'circle' },
        { top:'60%', left:'5%',  size:22, color:'var(--rose-deep)',  delay:'-1s',  shape:'diamond' },
        { top:'80%', right:'20%',size:12, color:'var(--lav-deep)',   delay:'-3s',  shape:'circle' },
      ].map((s,i) => (
        <div key={i} style={{
          position: 'absolute',
          top: s.top, left: s.left, right: s.right,
          width: s.size, height: s.size,
          background: s.color,
          borderRadius: s.shape === 'circle' ? '50%' : s.shape === 'diamond' ? '0' : '3px',
          transform: s.shape === 'diamond' ? 'rotate(45deg)' : 'none',
          animation: `${i%2===0?'float':'floatReverse'} ${3+i*0.5}s ease-in-out infinite`,
          animationDelay: s.delay,
          opacity: 0.7,
        }} />
      ))}

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', maxWidth: 760, gap: '1.5rem',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'var(--card-bg)',
          border: '1px solid rgba(249,213,229,0.8)',
          borderRadius: '99px', padding: '0.45rem 1.2rem',
          fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
          color: 'var(--rose-deep)', letterSpacing: '0.05em',
          animation: 'fadeUp 0.7s ease both',
          backdropFilter: 'blur(10px)',
        }}>
          <span style={{ width:7, height:7, borderRadius:'50%', background:'var(--rose-deep)',
            boxShadow:'0 0 0 2px rgba(232,115,154,0.3)', display:'inline-block',
            animation:'pulse-ring 1.5s ease-out infinite', }} />
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.08,
          letterSpacing: '-0.03em', color: 'var(--text)',
          animation: 'fadeUp 0.8s 0.1s ease both',
        }}>
          Hi, I'm <span style={{
            background: 'linear-gradient(135deg, var(--rose-deep), var(--lav-deep))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Bethania Cicilia Gunawan</span> ✦
        </h1>

        {/* Animated role */}
        <div style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)', fontWeight: 400,
          color: 'var(--text-soft)',
          animation: 'fadeUp 0.8s 0.2s ease both',
          minHeight: '2.8rem', display: 'flex', alignItems: 'center',
        }}>
          <span style={{
            transition: 'opacity 0.35s ease, transform 0.35s ease',
            opacity: fade ? 1 : 0,
            transform: fade ? 'translateY(0)' : 'translateY(-8px)',
            display: 'inline-block',
          }}>
            {roles[roleIdx]}
          </span>
        </div>

        {/* Desc */}
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '1.05rem', fontWeight: 300,
          color: 'var(--text-soft)', maxWidth: 520, lineHeight: 1.7,
          animation: 'fadeUp 0.8s 0.3s ease both',
        }}>
          Mahasiswi Teknologi Rekayasa Perangkat Lunak di <strong style={{fontWeight:500,color:'var(--Lav-deep)'}}>Universitas Duta Bangsa Surakarta</strong> yang passionate di bidang <strong style={{fontWeight:500,color:'var(--rose-deep)'}}>pengembangan aplikasi & web</strong> sekaligus <strong style={{fontWeight:500,color:'var(--lav-deep)'}}>desain grafis</strong>. 
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center',
          animation: 'fadeUp 0.8s 0.4s ease both',
        }}>
          <a href="#projects" onClick={e => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({behavior:'smooth'}); }}
            style={{
              padding: '0.8rem 2rem', borderRadius: '99px',
              background: 'var(--rose-deep)', color: '#fff',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.95rem',
              border: '2px solid transparent',
              cursor: 'pointer', transition: 'all 0.25s ease',
              boxShadow: '0 4px 20px rgba(232,115,154,0.35)',
            }}
            onMouseEnter={e => { e.target.style.transform='translateY(-2px)'; e.target.style.boxShadow='0 8px 30px rgba(232,115,154,0.45)'; }}
            onMouseLeave={e => { e.target.style.transform='translateY(0)'; e.target.style.boxShadow='0 4px 20px rgba(232,115,154,0.35)'; }}
          >
            Lihat Projects ✦
          </a>
          <a href="#contact" onClick={e => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({behavior:'smooth'}); }}
            style={{
              padding: '0.8rem 2rem', borderRadius: '99px',
              background: 'transparent', color: 'var(--text)',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.95rem',
              border: '2px solid rgba(45,45,45,0.2)',
              cursor: 'pointer', transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.target.style.background='rgba(255,255,255,0.6)'; e.target.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background='transparent'; e.target.style.transform='translateY(0)'; }}
          >
            Hubungi Saya
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: '2rem', animation: 'float 2s ease-in-out infinite',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          opacity: 0.5,
        }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', letterSpacing:'0.1em' }}>SCROLL</span>
          <div style={{ width:1, height:40, background:'var(--text)', borderRadius:1 }} />
        </div>
      </div>
    </section>
  );
}
