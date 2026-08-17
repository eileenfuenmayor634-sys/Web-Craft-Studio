import { C, px, sectionPy } from '../constants/theme';
import { SectionLabel } from '../ui/SectionLabel';

export default function About() {
  return (
    <section id="about" style={{ background: C.white, ...px, ...sectionPy }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'minmax(0,1fr)',
          gap: '3rem', alignItems: 'center',
        }} className="about-grid">
          <div>
            <SectionLabel text="01 About Us" />
            <h2 style={{
              fontFamily: "Barlow Condensed, system-ui, sans-serif",
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 700, textTransform: 'uppercase', color: C.black,
              lineHeight: 1.05, margin: '0 0 1.5rem',
            }}>
              A Studio Built for<br />
              <span style={{ color: C.muted }}>Digital Transformation</span>
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: C.body, maxWidth: '52ch', margin: '0 0 1.5rem' }}>
              Founded in 2015 and headquartered across Maracaibo, Miami, and fully remote-capable, we've spent nearly a decade at the intersection of strategy, design, and engineering - helping organizations modernize how they compete in the digital economy.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: C.mid, maxWidth: '52ch', margin: 0 }}>
              We don't just build websites. We architect digital systems that generate revenue, build authority, and scale with your ambitions.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              ['11+', 'Years of experience delivering measurable digital impact'],
              ['120+', 'Projects delivered across 3 continents'],
              ['8', 'Core service disciplines under one roof'],
              ['96%', 'Client retention rate across all engagements'],
            ].map(([n, l]) => (
              <div key={n} style={{
                display: 'flex', alignItems: 'center', gap: '20px',
                padding: '20px 0', borderBottom: `1px solid ${C.border}`,
              }}>
                <span style={{
                  fontFamily: "Barlow Condensed, system-ui, sans-serif",
                  fontSize: '2.8rem', fontWeight: 800, color: C.black,
                  lineHeight: 1, minWidth: '80px',
                }}>{n}</span>
                <span style={{ fontSize: '14px', color: C.mid, lineHeight: 1.5 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}