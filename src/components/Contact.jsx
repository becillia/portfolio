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

const contacts = [
  { icon: '📧', label: 'Email', value: 'bethaniac462@gmail.com',        href: 'mailto:bethaniac462@gmail.com',             color:'var(--rose)' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/bethaniacicilia', href: 'https://linkedin.com',         color:'var(--sky)' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/becillia',  href: 'https://github.com',                color:'var(--mint)' },
];

export default function Contact() {
  const [ref, vis] = useVisible();
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: connect to EmailJS, Formspree, etc.
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name:'', email:'', message:'' });
  };

  const inputStyle = {
    width:'100%', padding:'0.9rem 1.2rem',
    fontFamily:'var(--font-body)', fontSize:'0.95rem',
    background:'rgba(255,255,255,0.7)', backdropFilter:'blur(10px)',
    border:'1.5px solid rgba(0,0,0,0.1)', borderRadius:'var(--radius-sm)',
    color:'var(--text)', outline:'none',
    transition:'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  return (
    <section id="contact" ref={ref} style={{
      padding:'var(--section-pad)',
      background:'linear-gradient(135deg, var(--lavender) 0%, var(--rose) 50%, var(--peach) 100%)',
      position:'relative', overflow:'hidden',
    }}>
      {/* Blobs */}
      <div style={{
        position:'absolute', top:'-20%', right:'-10%',
        width:400, height:400, borderRadius:'50%',
        background:'var(--butter)', opacity:0.35, filter:'blur(80px)',
        animation:'blob 12s ease-in-out infinite',
      }} />
      <div style={{
        position:'absolute', bottom:'-15%', left:'-8%',
        width:350, height:350, borderRadius:'50%',
        background:'var(--mint)', opacity:0.3, filter:'blur(80px)',
        animation:'blob 15s ease-in-out infinite -4s',
      }} />

      <div style={{ maxWidth:1100, margin:'0 auto', position:'relative' }}>
        <p style={{
          fontFamily:'var(--font-mono)', fontSize:'0.78rem',
          letterSpacing:'0.15em', color:'var(--rose-deep)',
          textTransform:'uppercase', marginBottom:'0.75rem',
          opacity:vis?1:0, transition:'opacity 0.6s ease',
        }}>✦ Contact</p>

        <h2 style={{
          fontFamily:'var(--font-display)', fontWeight:900,
          fontSize:'clamp(2rem, 5vw, 3.5rem)', lineHeight:1.1,
          letterSpacing:'-0.02em', marginBottom:'1rem',
          opacity:vis?1:0, transform:vis?'none':'translateY(20px)',
          transition:'all 0.7s 0.1s ease',
        }}>
          Let's <em style={{color:'var(--rose-deep)'}}>Connect</em> ✦
        </h2>
        <p style={{
          fontFamily:'var(--font-body)', fontSize:'1rem',
          color:'var(--text-soft)', marginBottom:'3rem', maxWidth:500,
          opacity:vis?1:0, transition:'opacity 0.7s 0.2s ease',
        }}>
          Ada project seru, kolaborasi, atau sekadar mau ngobrol? Jangan ragu untuk reach out!
        </p>

        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr',
          gap:'2.5rem',
        }} className="contact-grid">
          {/* Contact cards */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            {contacts.map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noreferrer" style={{
                background:'var(--card-bg)', backdropFilter:'blur(12px)',
                border:'1.5px solid rgba(255,255,255,0.6)',
                borderRadius:'var(--radius-sm)', padding:'1.2rem 1.5rem',
                display:'flex', alignItems:'center', gap:'1rem',
                transition:'all 0.3s ease',
                opacity:vis?1:0, transform:vis?'none':'translateX(-20px)',
                transitionDelay:`${0.3+i*0.1}s`,
                boxShadow:'0 4px 20px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateX(6px)'; e.currentTarget.style.background=c.color; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateX(0)'; e.currentTarget.style.background='var(--card-bg)'; }}
              >
                <span style={{
                  width:48, height:48, borderRadius:12,
                  background:c.color, display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'1.3rem', flexShrink:0,
                }}>{c.icon}</span>
                <div>
                  <div style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.9rem' }}>{c.label}</div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'var(--text-soft)' }}>{c.value}</div>
                </div>
                <span style={{ marginLeft:'auto', color:'var(--text-soft)', fontSize:'1.2rem' }}>→</span>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{
            background:'var(--card-bg)', backdropFilter:'blur(12px)',
            borderRadius:'var(--radius-lg)', padding:'2rem',
            border:'1.5px solid rgba(255,255,255,0.6)',
            display:'flex', flexDirection:'column', gap:'1rem',
            boxShadow:'0 8px 40px rgba(0,0,0,0.08)',
            opacity:vis?1:0, transform:vis?'none':'translateX(20px)',
            transition:'all 0.8s 0.3s ease',
          }}>
            <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.3rem', marginBottom:'0.25rem' }}>
              Kirim Pesan 💌
            </h3>
            <input
              name="name" value={form.name} onChange={handleChange}
              placeholder="Nama kamu"
              required
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor='var(--rose-deep)'; e.target.style.boxShadow='0 0 0 3px rgba(232,115,154,0.15)'; }}
              onBlur={e => { e.target.style.borderColor='rgba(0,0,0,0.1)'; e.target.style.boxShadow='none'; }}
            />
            <input
              name="email" value={form.email} onChange={handleChange}
              placeholder="Email kamu" type="email"
              required
              style={inputStyle}
              onFocus={e => { e.target.style.borderColor='var(--rose-deep)'; e.target.style.boxShadow='0 0 0 3px rgba(232,115,154,0.15)'; }}
              onBlur={e => { e.target.style.borderColor='rgba(0,0,0,0.1)'; e.target.style.boxShadow='none'; }}
            />
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder="Cerita kamu di sini..." rows={4}
              required
              style={{ ...inputStyle, resize:'vertical', minHeight:120 }}
              onFocus={e => { e.target.style.borderColor='var(--rose-deep)'; e.target.style.boxShadow='0 0 0 3px rgba(232,115,154,0.15)'; }}
              onBlur={e => { e.target.style.borderColor='rgba(0,0,0,0.1)'; e.target.style.boxShadow='none'; }}
            />
            <button type="submit" style={{
              padding:'0.9rem', borderRadius:'var(--radius-sm)',
              background: sent ? 'var(--mint-deep)' : 'var(--rose-deep)',
              color:'#fff', border:'none', cursor:'pointer',
              fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.95rem',
              transition:'all 0.3s ease',
              boxShadow:'0 4px 20px rgba(232,115,154,0.3)',
            }}
            onMouseEnter={e => { if(!sent){ e.target.style.transform='translateY(-2px)'; e.target.style.boxShadow='0 8px 30px rgba(232,115,154,0.45)'; }}}
            onMouseLeave={e => { e.target.style.transform='none'; e.target.style.boxShadow='0 4px 20px rgba(232,115,154,0.3)'; }}
            >
              {sent ? '✓ Terkirim!' : 'Kirim Pesan ✦'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media(max-width:768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
