import { useEffect } from 'react';
import { C, px, sectionPy } from '../constants/theme';
import { useCounter } from '../hooks/useCounter';
import { SectionLabel } from '../ui/SectionLabel';
import { Arrow } from '../ui/Arrow';

export default function ValueProposition() {
  const stat1 = useCounter(60);
  const stat2 = useCounter(85);
  const stat3 = useCounter(5);

  // Inject responsive CSS for index number and stats cards
  useEffect(() => {
    const styleId = 'vp-index-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        /* Big index (decorative) */
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

        /* Responsive tweaks for the stats cards container */
        .vp-stats-cards { left: 20px; bottom: 20px; gap: 18px; }
        .vp-card { min-width: 240px; max-width: 320px; border-radius: 22px; padding: 22px 28px; }

        @media (max-width: 1100px) {
          .vp-stats-cards { left: 12px !important; bottom: 12px !important; gap: 12px !important; }
          .vp-card { min-width: 200px !important; max-width: 260px !important; padding: 18px !important; border-radius: 18px !important; }
        }

        @media (max-width: 720px) {
          .vp-stats-cards {
            position: static !important;
            display: flex !important;
            flex-wrap: wrap;
            gap: 12px;
            margin: 12px;
            justify-content: center;
          }
          .vp-card { min-width: 140px !important; max-width: 46% !important; padding: 14px !important; border-radius: 12px !important; }
          .vp-card--small { min-width: 120px !important; max-width: 160px !important; }
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

          {/* Right column: background image + stacked/overlaid stat panels */}
          <div
            style={{
              position: 'relative',
              minHeight: '360px',
              borderRadius: 10,
              overflow: 'hidden',
              backgroundImage: "url('/team.png')", // ajusta la ruta de la imagen según tu public/
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

            {/* Contenedor principal (contenido encima de la imagen) */}
            <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
              {/* Tarjetas grandes, superpuestas en la esquina inferior izquierda */}
              <div
                className="vp-stats-cards"
                style={{
                  position: 'absolute',
                  left: 20,
                  bottom: 20,
                  zIndex: 3,
                  display: 'flex',
                  gap: 18,
                  alignItems: 'flex-end',
                  pointerEvents: 'auto',
                }}
              >
                {[
                  { value: `${stat1.count}+`, label: 'Proyectos\nRealizados', bg: '#D7FF3B', fg: '#2400FF' },
                  { value: `${stat2.count}+`, label: 'Aliados\nAtendidos', bg: '#5C2BFF', fg: '#FFFFFF' },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="vp-card"
                    style={{
                      minWidth: 260,
                      maxWidth: 320,
                      borderRadius: 22,
                      padding: '22px 28px',
                      background: s.bg,
                      color: s.fg,
                      boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      transform: idx === 1 ? 'translateY(8px)' : 'none',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Barlow Condensed, system-ui, sans-serif',
                        fontSize: '3.2rem',
                        fontWeight: 900,
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}

                {/* Tarjeta pequeña adicional para la tercera estadística */}
                <div
                  className="vp-card vp-card--small"
                  style={{
                    minWidth: 160,
                    borderRadius: 18,
                    padding: '18px 20px',
                    background: 'rgba(0,0,0,0.45)',
                    color: '#00c8e8',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ fontFamily: 'Barlow Condensed, system-ui, sans-serif', fontSize: '2.4rem', fontWeight: 900 }}>
                    {stat3.count}
                  </div>
                  <div style={{ marginTop: 6, fontSize: '11px', letterSpacing: '.08em', color: 'rgba(255,255,255,0.9)' }}>
                    YEARS IN BUSINESS
                  </div>
                </div>
              </div>

              {/* (Opcional) big decorative index - left inside image, currently empty string index used above */}
              {/* If you want to show big translucent index numbers inside the image, add elements with className "vp-index" */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}