import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Cursor follower component
function CursorFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY });
    const over = e => setHover(e.target.tagName === 'BUTTON' || e.target.tagName === 'A');
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div style={{
        position:'fixed', top:0, left:0, zIndex:9998, pointerEvents:'none',
        width: hover ? 44 : 36, height: hover ? 44 : 36,
        border:`2px solid ${hover ? 'var(--rose-deep)' : 'rgba(232,115,154,0.5)'}`,
        borderRadius:'50%',
        transform:`translate(${pos.x - (hover?22:18)}px, ${pos.y - (hover?22:18)}px)`,
        transition:'transform 0.12s ease, width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
        mixBlendMode:'multiply',
      }} />
      {/* Dot */}
      <div style={{
        position:'fixed', top:0, left:0, zIndex:9998, pointerEvents:'none',
        width:6, height:6,
        background:'var(--rose-deep)', borderRadius:'50%',
        transform:`translate(${pos.x-3}px, ${pos.y-3}px)`,
        transition:'transform 0.05s ease',
      }} />
    </>
  );
}

// Scroll-to-top button
function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return show ? (
    <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })} style={{
      position:'fixed', bottom:'2rem', right:'2rem', zIndex:90,
      width:48, height:48, borderRadius:'50%',
      background:'var(--rose-deep)', color:'#fff',
      border:'none', cursor:'pointer', fontSize:'1.2rem',
      boxShadow:'0 4px 20px rgba(232,115,154,0.4)',
      transition:'all 0.3s ease',
      display:'flex', alignItems:'center', justifyContent:'center',
    }}
    onMouseEnter={e => { e.target.style.transform='translateY(-3px) scale(1.1)'; }}
    onMouseLeave={e => { e.target.style.transform='none'; }}
    >↑</button>
  ) : null;
}

export default function App() {
  return (
    <>
      <CursorFollower />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
