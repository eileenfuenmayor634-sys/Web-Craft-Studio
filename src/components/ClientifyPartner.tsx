import { C, px, sectionPy } from '../constants/theme';
import { SectionLabel } from '../ui/SectionLabel';
import { Arrow } from '../ui/Arrow';

export default function ClientifyPartner() {
  return (
    <section style={{ background: C.white, ...px, ...sectionPy, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'minmax(0,1fr)',
          gap: '3rem', alignItems: 'center',
          border: `1px solid ${C.border}`, padding: 'clamp(2rem, 4vw, 3.5rem)',
        }} className="partner-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{
              background: C.surface, border: `1px solid ${C.border}`,
              padding: '20px 32px', display: 'inline-flex', alignItems: 'center', gap: '10px',
            }}>
              <div style={{ width: '28px', height: '28px', background: C.black, borderRadius: '4px' }} />
              <span style={{
                fontFamily: "Barlow Condensed, system-ui, sans-serif",
                fontWeight: 800, fontSize: '20px', letterSpacing: '0.06em', color: C.black,
              }}>CLIENTIFY</span>
            </div>
            <span style={{
              background: C.black, color: C.white,
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em',
              textTransform: 'uppercase', padding: '6px 14px',
            }}>
              Official Partner
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <SectionLabel text="07 - Official Partnership" />
            <h3 style={{
              fontFamily: "Barlow Condensed, system-ui, sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700, textTransform: 'uppercase', color: C.black,
              lineHeight: 1.05, margin: 0,
            }}>
              We Are Official Partners of Clientify
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.75, color: C.body, maxWidth: '50ch', margin: 0 }}>
              Clientify is the all-in-one CRM covering the full commercial cycle — sales pipeline, marketing automation, WhatsApp campaigns, email sequences, e-signatures, and analytics. As certified partners, we implement, customize, and train your team to get full value from day one.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '4px' }}>
              {['Sales Pipeline', 'Marketing Automation', 'WhatsApp Campaigns', 'Email Sequences', 'E-signatures', 'Analytics'].map(f => (
                <span key={f} style={{
                  padding: '5px 12px', border: `1px solid ${C.border}`,
                  fontSize: '11px', color: C.mid, letterSpacing: '0.04em',
                  background: C.surface,
                }}>{f}</span>
              ))}
            </div>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '8px',
              fontSize: '13px', fontWeight: 700, color: C.black, textDecoration: 'none',
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.5')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
            >
              Talk to Us About Clientify <Arrow size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}