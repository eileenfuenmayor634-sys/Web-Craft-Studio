import { C, px } from '../constants/theme';
import { SectionLabel } from '../ui/SectionLabel';
import { Arrow } from '../ui/Arrow';

export default function PartnersBanner() {
  return (
    <section style={{ background: C.surface, ...px, paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div style={{
        maxWidth: '1400px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '2.5rem',
        alignItems: 'center',
      }} className="banner-grid">
        <div>
          <SectionLabel text="04 - Our Philosophy" />
          <h2 style={{
            fontFamily: "Barlow Condensed, system-ui, sans-serif",
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 700, textTransform: 'uppercase', color: C.black,
            lineHeight: 1.05, margin: '0 0 1.25rem',
          }}>
            More Than Clients —<br />
            <span style={{ color: C.muted }}>We Have Partners.</span>
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.75, color: C.body, maxWidth: '54ch', margin: 0 }}>
            We see every engagement as a long-term partnership. Our team of strategists, designers, engineers, and marketers operates as an extension of yours — available, accountable, and fully invested in your outcomes. When you win, we win.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '16px 32px', background: C.cyan, color: C.black,
            fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none', transition: 'opacity 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
          >
            Let's Start Working Now <Arrow size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}