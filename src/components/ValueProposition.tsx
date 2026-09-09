import { useEffect } from 'react';
import { C, px, sectionPy } from '../constants/theme';
import { useCounter } from '../hooks/useCounter';
import { SectionLabel } from '../ui/SectionLabel';
import { Arrow } from '../ui/Arrow';

export default function ValueProposition() {
  const stat1 = useCounter(60);
  const stat2 = useCounter(85);
  const stat3 = useCounter(5);

  // Inject small responsive CSS for the big index number (so no extra CSS file edits required)
  useEffect(() => {
    const styleId = 'vp-index-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .vp-index {
          font-size: 6rem;
          font-weight: 900;
          color: rgba(0,0,0,0.12);
          user-select: none;
          pointer-events: none;
          line-height: 1;
        }
        @media (max-width: 768px) {
          .vp-index {
            font-size: 2.8rem !important;
            opacity: 0.08 !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section style={{ background: C.black, ...px, ...sectionPy }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr)',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="value-grid"
        >
          {/* Left column (text) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <SectionLabel text="03 - Por qué elegir a" light />
            <h2
              style={{
                fontFamily: 'Barlow Condensed, system-ui, sans-serif',
                fontSize: 'clamp(2.4rem, 6vw, 5rem)',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: C.white,
                lineHeight: 1.0,
                margin: 0,
              }}
            >
              WEB CRAFT <br />
              <span style={{ color: C.cyan }}>STUDIO.</span>
            </h2>
            <p style={{ color: '#888', fontSize: '15px', lineHeight: 1.75, maxWidth: '46ch', margin: 0 }}>
              Nuestro compromiso es transformar organizaciones. Por eso, dedicamos cada hora de trabajo a
              perfeccionar nuestras soluciones y ofrecerte un servicio de excelencia respaldado por:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px' }}>
              {[
                '5 años de experiencia',
                'Amplio Portafolio de Servicios',
                'Personal Profesional y Atento',
                'Soluciones innovadoras para tu marca',
              ].map((point) => (
                <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#555', marginTop: '2px', flexShrink: 0 }}>-</span>
                  <span style={{ color: '#888', fontSize: '14px', lineHeight: 1.6 }}>{point}</span>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: '8px' }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 26px',
                  background: C.cyan,
                  color: C.black,
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
              >
                Let's Build Together <Arrow size={13} />
              </a>
            </div>
          </div>

          {/* Right column: background image + stacked stat panels */}
          <div
            style={{
              position: 'relative',
              minHeight: '360px',
              borderRadius: 6,
              overflow: 'hidden',
              backgroundImage: "url('/team.png')", //  imagen en public/value-bg.jpg
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)',
            }}
          >
            {/* overlay para mejorar contraste */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(3,16,26,0.48), rgba(3,16,26,0.68))',
                zIndex: 1,
              }}
            />

            {/* panel con las tarjetas apiladas */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                height: '100%',
                color: '#00c8e8',
              }}
            >
              {[
                { num: stat1.count, label: 'Projects Completed', suffix: '60+', index: '' },
                { num: stat2.count, label: 'Partner Clients', suffix: '80+', index: '' },
                { num: stat3.count, label: 'Years in Business', suffix: '5', index: '' },
              ].map(({ num, label, suffix, index }, i) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '28px 36px',
                    borderBottom: i < 2 ? `1px solid rgba(255,255,255,0.03)` : 'none',
                    background: 'transparent',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'Barlow Condensed, system-ui, sans-serif',
                        fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                        fontWeight: 900,
                        color: C.cyan,
                        lineHeight: 1,
                      }}
                    >
                      {num}
                      {suffix}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '12px', letterSpacing: '0.12em', marginTop: 6 }}>
                      {label.toUpperCase()}
                    </div>
                  </div>

                  <div className="vp-index">{index}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}