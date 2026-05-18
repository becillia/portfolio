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

const ContactIcon = ({ type }) => {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true,
  };

  if (type === 'email') {
    return (
      <svg {...common}>
        <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'linkedin') {
    return (
      <svg {...common} fill="currentColor">
        <path d="M6.94 8.98H3.88V20h3.06V8.98ZM5.42 4C4.43 4 3.7 4.72 3.7 5.66c0 .92.71 1.66 1.68 1.66h.02c1.01 0 1.72-.74 1.72-1.66C7.1 4.72 6.41 4 5.42 4ZM20.3 13.68c0-3.32-1.77-4.86-4.13-4.86-1.9 0-2.75 1.04-3.23 1.78V8.98H9.9c.04 1.03 0 11.02 0 11.02h3.05v-6.15c0-.33.02-.66.12-.9.26-.66.85-1.34 1.84-1.34 1.3 0 1.82 1 1.82 2.46V20h3.06v-6.32h.01Z" />
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

  return (
    <svg {...common}>
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
    </svg>
  );
};

const contacts = [
  { icon: <ContactIcon type="email" />, label: 'Email', value: 'bethaniac462@gmail.com', href: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=bethaniac462@gmail.com', color:'var(--rose)' },
  { icon: <ContactIcon type="linkedin" />, label: 'LinkedIn', value: 'linkedin.com/in/bethaniacicilia', href: 'https://linkedin.com/in/bethaniacicilia', color:'var(--sky)' },
  { icon: <ContactIcon type="github" />, label: 'GitHub', value: 'github.com/becillia', href: 'https://github.com/becillia', color:'var(--mint)' },
  { icon: <ContactIcon type="instagram" />, label: 'Instagram', value: 'instagram.com/bethanianuela', href: 'https://instagram.com/bethanianuela', color:'var(--peach)' },
];

export default function Contact() {
  const [ref, vis] = useVisible();
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
 const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    name: form.name,
    email: form.email,
    _replyto: form.email,
    message: form.message,
  };

  const response = await fetch('https://formspree.io/f/xgoqelln', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    setSent(true);
    setTimeout(() => setSent(false), 3000);

    setForm({
      name: '',
      email: '',
      message: '',
    });
  }
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
