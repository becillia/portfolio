import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home',    href: '#hero' },
  { label: 'About',   href: '#about' },
  { label: 'Projects',href: '#projects' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 2.5rem',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        background: scrolled ? 'rgba(255,252,250,0.82)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(249,213,229,0.5)' : 'none',
        transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
      }}>
        {/* Logo */}
        <button onClick={() => handleNav('#hero')} style={{
          background: 'transparent', border: 'none', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', gap: '0.65rem',
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: '1rem', color: 'var(--text)',
          letterSpacing: '0',
        }}>
          <span aria-hidden="true" style={{
            width: 42, height: 42, borderRadius: '50%',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--rose-deep), var(--lav-deep))',
            color: '#fff',
            fontFamily: 'var(--font-display)',
            fontSize: '1.65rem',
            fontWeight: 900,
            lineHeight: 1,
            boxShadow: '0 8px 24px rgba(232,115,154,0.28)',
            border: '2px solid rgba(255,252,250,0.9)',
          }}>
            B
          </span>
          <span className="brand-name"></span>
        </button>

        {/* Desktop links */}
        <ul style={{
          display: 'flex', gap: '0.25rem', listStyle: 'none',
          '@media(max-width:640px)': { display: 'none' },
        }} className="nav-links">
          {navLinks.map(l => (
            <li key={l.href}>
              <button onClick={() => handleNav(l.href)} style={{
                background: active === l.href ? 'var(--rose)' : 'transparent',
                border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontWeight: 500,
                fontSize: '0.9rem', color: active === l.href ? 'var(--rose-deep)' : 'var(--text)',
                padding: '0.45rem 1.1rem',
                borderRadius: '99px',
                transition: 'all 0.25s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => { if(active !== l.href) e.target.style.background = 'var(--peach)'; }}
              onMouseLeave={e => { if(active !== l.href) e.target.style.background = 'transparent'; }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            flexDirection: 'column', gap: '5px', padding: '4px',
          }}
          aria-label="Menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2,
              background: 'var(--rose-deep)', borderRadius: 2,
              transition: 'all 0.3s ease',
              transform: menuOpen && i===0 ? 'rotate(45deg) translate(5px,5px)'
                        : menuOpen && i===1 ? 'scaleX(0)'
                        : menuOpen && i===2 ? 'rotate(-45deg) translate(5px,-5px)'
                        : 'none',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(255,252,250,0.97)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
        }}>
          {navLinks.map(l => (
            <button key={l.href} onClick={() => handleNav(l.href)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '2rem', color: 'var(--text)',
              transition: 'color 0.2s',
            }}>
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:640px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
          .brand-name { display: none; }
        }
      `}</style>
    </>
  );
}
