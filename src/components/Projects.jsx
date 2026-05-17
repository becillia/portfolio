import React, { useRef, useEffect, useState } from 'react';

import simpleK from '../assets/Simple-K.png';
import dailyChallenge from '../assets/daily-challenge.png';
import dailyUI from '../assets/daily-ui.jpeg';
import reservasiHotel from '../assets/reservasi-hotel.png';

function useVisible(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, vis];
}

const appProjects = [
  {
    title: 'Simple-K',
    desc: 'Sistem manajemen keluhan dan layanan kampus yang dibangun dengan Go (Gin), GORM, JWT Authentication, dan MySQL.',
    tech: ['Go', 'Gin', 'GORM', 'MySQL'],
    color: 'var(--sky)',
    accent: '#4a90d9',
    tag: 'Web App',
    image: simpleK,
  },
  {
    title: 'Daily Challenge App',
    desc: 'Aplikasi mobile checklist aktivitas sehari-hari yang membantu pengguna mencatat dan menandai aktivitas yang sudah selesai.',
    tech: ['Flutter', 'Firebase', 'Dart', 'Mobile App'],
    color: 'var(--rose)',
    accent: 'var(--rose-deep)',
    tag: 'Mobile App',
    image: dailyChallenge,
  },
  {
    title: 'Website Reservasi Hotel - UAS',
    desc: 'Website reservasi hotel yang memungkinkan pengguna melakukan pemesanan kamar, melihat detail hotel, dan mengelola data reservasi secara online.',
    tech: ['MySQL', 'PHP', ],
    color: 'var(--rose)',
    accent: 'var(--rose-deep)',
    tag: 'Web App',
    image: reservasiHotel,
  },
];

const designProjects = [
  {
    title: 'Daily Challenge UI Design',
    desc: 'Desain antarmuka aplikasi Daily Challenge dengan tampilan sederhana, modern, dan mudah digunakan oleh pengguna.',
    tech: ['Canva', 'UI Design', 'Mobile Design'],
    color: 'var(--lavender)',
    accent: 'var(--lav-deep)',
    tag: 'UI Design',
    image: dailyUI,
  },
];

function ProjectCard({ project, index, vis }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--card-bg)',
        border: `1.5px solid ${
          hovered ? project.accent : 'rgba(255,255,255,0.08)'
        }`,
        borderRadius: 'var(--radius-lg)',
        padding: '1.2rem',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
        transform: vis
          ? hovered
            ? 'translateY(-8px) scale(1.02)'
            : 'translateY(0) scale(1)'
          : 'translateY(30px) scale(0.97)',
        opacity: vis ? 1 : 0,
        transitionDelay: `${index * 0.1}s`,
        boxShadow: hovered
          ? `0 20px 60px ${project.accent}45`
          : '0 4px 20px rgba(0,0,0,0.25)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        minHeight: '430px',
      }}
    >
      <div
        style={{
          height: 190,
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          position: 'relative',
          background: '#111',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.65))',
          }}
        />

        <span
          style={{
            position: 'absolute',
            bottom: 14,
            left: 14,
            background: project.accent,
            color: '#fff',
            padding: '0.35rem 0.85rem',
            borderRadius: '99px',
            fontSize: '0.75rem',
            fontWeight: 600,
          }}
        >
          {project.tag}
        </span>
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.35rem',
          lineHeight: 1.3,
          color: 'var(--text)',
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          lineHeight: 1.65,
          color: 'var(--text-soft)',
          flex: 1,
        }}
      >
        {project.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-soft)',
              background: 'rgba(255,255,255,0.08)',
              padding: '0.3rem 0.75rem',
              borderRadius: '99px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div
        style={{
          color: project.accent,
          fontWeight: 600,
          fontSize: '0.9rem',
          transform: hovered ? 'translateX(5px)' : 'none',
          transition: 'transform 0.3s ease',
        }}
      >
        Lihat Detail →
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, vis] = useVisible();
  const [tab, setTab] = useState('app');

  const projects = tab === 'app' ? appProjects : designProjects;

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: 'var(--section-pad)',
        background:
          'linear-gradient(180deg, var(--bg) 0%, var(--card-bg) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.15em',
              color: 'var(--rose-deep)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            ✦ My Work
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: 1.1,
                  color: 'var(--text)',
                }}
              >
                Project <em style={{ color: 'var(--rose-deep)' }}>Saya</em>
              </h2>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.4rem',
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(10px)',
                borderRadius: '999px',
                padding: '0.35rem',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              }}
            >
              <button
                onClick={() => setTab('app')}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  background: tab === 'app' ? 'var(--rose-deep)' : 'transparent',
                  color: tab === 'app' ? '#fff' : 'var(--text-soft)',
                  transition: 'all 0.3s ease',
                }}
              >
                💻 App & Web
              </button>

              <button
                onClick={() => setTab('design')}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  background:
                    tab === 'design' ? 'var(--rose-deep)' : 'transparent',
                  color: tab === 'design' ? '#fff' : 'var(--text-soft)',
                  transition: 'all 0.3s ease',
                }}
              >
                🎨 Graphic Design
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={`${tab}-${i}`}
              project={project}
              index={i}
              vis={vis}
            />
          ))}
        </div>
      </div>
    </section>
  );
}