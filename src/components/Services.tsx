import { useState } from 'react';
import { C, px, sectionPy } from '../constants/theme';
import { SERVICES, Service } from '../constants/data';
import { SectionLabel } from '../ui/SectionLabel';
import { Arrow } from '../ui/Arrow';

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: hovered ? C.light : C.surface,
        padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem',
        cursor: 'pointer', transition: 'background 0.2s', position: 'relative',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{
        position: 'absolute', top: '16px', right: '16px',
        fontFamily: 'monospace', fontSize: '10px', color: C.border, letterSpacing: '0.1em',
      }}>0{index + 1}</span>

      <div style={{ color: hovered ? C.black : C.mid, transition: 'color 0.2s' }}>
        {service.icon}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
        <h3 style={{
          fontFamily: "Barlow Condensed, system-ui, sans-serif",
          fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase',
          color: C.black, margin: 0, letterSpacing: '0.02em',
        }}>
          {service.title}
        </h3>
        <p style={{ fontSize: '13px', lineHeight: 1.65, color: C.mid, margin: 0 }}>
          {service.desc}
        </p>
      </div>
      <a href={service.href} style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        fontSize: '11px', fontWeight: 700, color: C.black,
        textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.2s',
      }}>
        Learn More <Arrow size={11} />
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ background: C.surface, ...px, ...sectionPy }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '0.75rem',
          marginBottom: '3rem', paddingBottom: '2rem',
          borderBottom: `1px solid ${C.border}`,
        }}>
          <SectionLabel text="02 - Services" />
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem' }}>
            <h2 style={{
              fontFamily: "Barlow Condensed, system-ui, sans-serif",
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: 700, textTransform: 'uppercase', color: C.black,
              lineHeight: 1.0, margin: 0,
            }}>
              Our Services
            </h2>
            <p style={{ fontSize: '14px', color: C.mid, maxWidth: '38ch', lineHeight: 1.6, margin: 0 }}>
              Eight integrated disciplines. One accountable team. Every engagement is tailored — no off-the-shelf packages.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1px', background: C.border,
        }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}