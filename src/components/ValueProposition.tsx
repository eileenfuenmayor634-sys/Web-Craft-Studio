import { C, px, sectionPy } from '../constants/theme';
import { useCounter } from '../hooks/useCounter';
import { SectionLabel } from '../ui/SectionLabel';
import { Arrow } from '../ui/Arrow';

export default function ValueProposition() {
  const stat1 = useCounter(120);
  const stat2 = useCounter(85);
  const stat3 = useCounter(11);

  return (
    <section style={{ background: C.black, ...px, ...sectionPy }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'minmax(0,1fr)',
          gap: '3rem', alignItems: 'center',
        }} className="value-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <SectionLabel text="03 - Why Us" light />
            <h2 style={{
              fontFamily: "Barlow Condensed, system-ui, sans-serif",
              fontSize: 'clamp(2.4rem, 6vw, 5rem)',
              fontWeight: 800, textTransform: 'uppercase', color: C.white,
              lineHeight: 1.0, margin: 0,
            }}>
              Synonymous With<br />
              <span style={{ color: C.cyan }}>Innovation.</span>
            </h2>
            <p style={{ color: '#888', fontSize: '15px', lineHeight: 1.75, maxWidth: '46ch', margin: 0 }}>
              We walk beside our clients from the very first step — blending deep technical expertise with strategic clarity to produce outcomes that outlast the engagement.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px' }}>
              {[
                '11 years of battle-tested experience across industries',
                'End-to-end service portfolio — strategy through execution',
                'Senior-led teams with direct client access (no account managers)',
                'Proprietary innovation frameworks for accelerated delivery',
              ].map(point => (
                <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#555', marginTop: '2px', flexShrink: 0 }}>-</span>
                  <span style={{ color: '#888', fontSize: '14px', lineHeight: 1.6 }}>{point}</span>
                </div>
              ))}
            </div>
            <div style={{ paddingTop: '8px' }}>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 26px', background: C.cyan, color: C.black,
                fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', textDecoration: 'none', transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
              >
                Let's Build Together <Arrow size={13} />
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: C.navyBorder }}>
            {[
              { ref: stat1.ref, count: stat1.count, label: 'Projects Completed', suffix: '+' },
              { ref: stat2.ref, count: stat2.count, label: 'Partner Clients', suffix: '+' },
              { ref: stat3.ref, count: stat3.count, label: 'Years in Business', suffix: '' },
            ].map(({ ref, count, label, suffix }, i) => (
              <div
                key={label}
                ref={ref}
                style={{ padding: '2.5rem', background: C.navyCard, position: 'relative', overflow: 'hidden' }}
              >
                <span style={{
                  position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
                  fontFamily: "Barlow Condensed, system-ui, sans-serif",
                  fontSize: '6rem', fontWeight: 900, color: C.navyMid, lineHeight: 1,
                  userSelect: 'none', pointerEvents: 'none',
                }}>
                  0{i + 1}
                </span>
                <p style={{ color: C.cyan, fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px', opacity: 0.7 }}>{label}</p>
                <p style={{
                  fontFamily: "Barlow Condensed, system-ui, sans-serif",
                  fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 900, color: C.cyan,
                  lineHeight: 1, margin: 0,
                }}>
                  {count}{suffix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}