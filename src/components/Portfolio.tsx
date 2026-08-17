import { useState } from 'react';
import { C, px, sectionPy } from '../constants/theme';
import { PORTFOLIO_ITEMS } from '../constants/data';
import { SectionLabel } from '../ui/SectionLabel';
import { Arrow } from '../ui/Arrow';

function PortfolioCard({ item }: { item: typeof PORTFOLIO_ITEMS[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ background: C.white, cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        background: hovered ? C.light : C.surface,
        aspectRatio: '16/9', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '10px',
        transition: 'background 0.25s', position: 'relative', overflow: 'hidden',
      }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ opacity: hovered ? 0.15 : 0.25, transition: 'opacity 0.2s' }}>
          <rect x="4" y="8" width="32" height="24" rx="2" stroke={C.body} strokeWidth="1.3" />
          <circle cx="13" cy="16" r="3.5" stroke={C.body} strokeWidth="1.3" />
          <path d="M4 28l9-7 6 6 6-7 9 10" stroke={C.body} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.muted, opacity: hovered ? 0 : 1, transition: 'opacity 0.2s' }}>
          Project Image
        </span>
        <div style={{
          position: 'absolute', inset: 0, background: C.black,
          opacity: hovered ? 0.06 : 0, transition: 'opacity 0.25s',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }} />
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <p style={{ margin: 0, fontSize: '10px', fontFamily: 'monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted }}>
          {item.cat} {item.year}
        </p>
        <h3 style={{
          fontFamily: "Barlow Condensed, system-ui, sans-serif",
          fontSize: '1.35rem', fontWeight: 700, textTransform: 'uppercase',
          color: C.black, margin: 0, lineHeight: 1.1,
        }}>
          {item.title}
        </h3>
        <p style={{ fontSize: '13px', lineHeight: 1.6, color: C.mid, margin: 0 }}>
          {item.desc}
        </p>
        <a href="#" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '8px',
          fontSize: '11px', fontWeight: 700, color: C.black, textDecoration: 'none',
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.5')}
        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
        >
          Show Project <Arrow size={11} />
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ background: C.white, ...px, ...sectionPy }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between',
          gap: '1rem', marginBottom: '3rem', paddingBottom: '2rem',
          borderBottom: `1px solid ${C.border}`,
        }}>
          <div>
            <SectionLabel text="05 - Portfolio" />
            <h2 style={{
              fontFamily: "Barlow Condensed, system-ui, sans-serif",
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: 700, textTransform: 'uppercase', color: C.black,
              lineHeight: 1.0, margin: 0,
            }}>Our Portfolio</h2>
          </div>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontSize: '13px', fontWeight: 600, color: C.black, textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.5')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
          >
            View All Projects <Arrow size={13} />
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px', background: C.border,
        }}>
          {PORTFOLIO_ITEMS.map(p => (
            <PortfolioCard key={p.title} item={p} />
          ))}
        </div>
      </div>
    </section>
  );
}