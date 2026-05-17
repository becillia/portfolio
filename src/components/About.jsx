import React, { useRef, useEffect, useState } from 'react';

function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setVis(true); }, { threshold });
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

const stats = [
  { num: '10+', label: 'Projects Selesai' },
  { num: '2',   label: 'Fokus Keahlian' },
  { num: '3+',  label: 'Tools Dikuasai' },
  { num: '∞',   label: 'Semangat Belajar' },
];

export default function About() {
  const [ref, vis] = useVisible();

  return (
    <section id="about" ref={ref} style={{
      padding: 'var(--section-pad)',
      background: 'var(--white)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* BG decoration */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 350, height: 350,
        background: 'var(--lavender)', borderRadius: '50%',
        opacity: 0.4, filter: 'blur(60px)',
        animation: 'blob 12s ease-in-out infinite',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        {/* Section label */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
          letterSpacing: '0.15em', color: 'var(--rose-deep)',
          textTransform: 'uppercase', marginBottom: '1rem',
          opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)',
          transition: 'all 0.6s ease',
        }}>
          ✦ About Me
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '4rem', alignItems: 'center',
        }} className="about-grid">
          {/* Left: photo placeholder + shape */}
          <div style={{
            position: 'relative',
            opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateX(-30px)',
            transition: 'all 0.8s 0.1s ease',
          }}>
            {/* Main card */}
            <div style={{
              aspectRatio: '3/4', borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, var(--rose), var(--lavender))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '6rem', position: 'relative', overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(232,115,154,0.2)',
              maxWidth: 340,
            }}>
              <span>🌸</span>
              {/* Inner decoration */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(255,255,255,0.9), transparent)',
              }}>
                <p style={{ fontFamily:'var(--font-body)', fontSize:'0.85rem', color:'var(--text-soft)' }}>Developer & Designer</p>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute', top: '1.5rem', right: '-1.5rem',
              background: 'var(--butter)', borderRadius: 'var(--radius-sm)',
              padding: '0.8rem 1.2rem', boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
              fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 500,
              animation: 'float 4s ease-in-out infinite',
            }}>
              💡 Creative Thinker
            </div>
            <div style={{
              position: 'absolute', bottom: '5rem', right: '-2rem',
              background: 'var(--mint)', borderRadius: 'var(--radius-sm)',
              padding: '0.8rem 1.2rem', boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
              fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 500,
              animation: 'floatReverse 5s ease-in-out infinite',
            }}>
              🚀 Fast Learner
            </div>
          </div>

          {/* Right: text */}
          <div style={{
            opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateX(30px)',
            transition: 'all 0.8s 0.2s ease',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15,
              letterSpacing: '-0.02em', marginBottom: '1.5rem',
            }}>
              Hallo!<br />
              <em style={{ color: 'var(--rose-deep)' }}>Saya Bethania Cicilia Gunawan</em><br />
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem',
              lineHeight: 1.8, color: 'var(--text-soft)', marginBottom: '1rem',
            }}>
              Saya adalah mahasiswi D4 Teknologi Rekayasa Perangkat Lunak di Universitas Duta Bangsa Surakarta yang memiliki minat pada bidang pengembangan perangkat lunak dan web development. Saya memiliki pengalaman dalam membangun aplikasi mobile menggunakan teknologi modern berbasis Flutter dan Firebase.<strong style={{color:'var(--text)'}}></strong><strong style={{color:'var(--text)'}}></strong>
            </p>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem',
              lineHeight: 1.8, color: 'var(--text-soft)', marginBottom: '2rem',
            }}>
              Selain coding, saya juga tertarik pada bidang UI/UX Design dan senang menciptakan tampilan aplikasi yang sederhana, modern, dan nyaman digunakan. Saya percaya bahwa kombinasi antara technical skills dan kreativitas desain dapat menghasilkan pengalaman digital yang lebih menarik dan bermanfaat bagi pengguna.
            </p>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem',
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  background: i%2===0 ? 'var(--rose)' : 'var(--lavender)',
                  borderRadius: 'var(--radius-sm)', padding: '1.2rem',
                  textAlign: 'center',
                  opacity: vis ? 1 : 0,
                  transform: vis ? 'none' : 'translateY(20px)',
                  transition: `all 0.6s ${0.3 + i*0.1}s ease`,
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 900,
                    fontSize: '2rem', color: i%2===0 ? 'var(--rose-deep)' : 'var(--lav-deep)',
                  }}>{s.num}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.82rem',
                    color: 'var(--text-soft)', marginTop: '0.2rem',
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
