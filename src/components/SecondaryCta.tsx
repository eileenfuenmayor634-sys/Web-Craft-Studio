import { C, px } from '../constants/theme';
import { Arrow } from '../ui/Arrow';

export default function SecondaryCta() {
  return (
    <section style={{ background: C.black, ...px, paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div style={{
        maxWidth: '1400px', margin: '0 auto',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center',
        justifyContent: 'space-between', gap: '2rem',
      }}>
        <h2 style={{
          fontFamily: "Barlow Condensed, system-ui, sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700, textTransform: 'uppercase', color: C.white,
          lineHeight: 1.05, margin: 0,
        }}>
          Shall We Start Working Together?
        </h2>
        <a href="#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          padding: '16px 32px', background: C.cyan, color: C.black,
          fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', textDecoration: 'none', transition: 'opacity 0.15s',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
        >
          Contact Us Now! <Arrow size={14} color={C.black} />
        </a>
      </div>
    </section>
  );
}