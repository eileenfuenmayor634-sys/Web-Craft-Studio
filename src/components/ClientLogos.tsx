import { C, px } from '../constants/theme';
import { CLIENT_LOGOS } from '../constants/data';
import { SectionLabel } from '../ui/SectionLabel';

export default function ClientLogos() {
  return (
    <section style={{ background: C.surface, ...px, paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <SectionLabel text="06 - Clients & Partners" />
        <p style={{
          fontFamily: "Barlow Condensed, system-ui, sans-serif",
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 600, color: C.dark, textTransform: 'uppercase',
          margin: '0 0 2.5rem', maxWidth: '52ch',
        }}>
          Grateful to Work with Incredible Brands.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1px', background: C.border,
        }}>
          {CLIENT_LOGOS.map(name => (
            <div key={name} style={{
              background: C.white, padding: '24px 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.background = C.light)}
            onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.background = C.white)}
            >
              <span style={{
                fontFamily: "Barlow Condensed, system-ui, sans-serif",
                fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: C.muted,
              }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}