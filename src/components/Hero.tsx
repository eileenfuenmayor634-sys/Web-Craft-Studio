import { C, px, sectionPy } from '../constants/theme';
import { Arrow } from '../ui/Arrow';

export default function Hero() {
  return (
    <section style={{
      background: C.black, position: 'relative', overflow: 'hidden',
      ...px, ...sectionPy,
    }}>
      {/* Grid pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.06,
        backgroundImage: 'linear-gradient(rgba(0,200,232,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,232,0.3) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />
      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,200,232,0.07) 0%, transparent 70%)',
      }} />
      
      <div style={{
        maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: '1fr', gap: '3rem',
      }}>
        {/* Kicker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px' }}>
          <span style={{ display: 'block', width: '32px', height: '1px', background: C.cyan }} />
          <span style={{ color: C.cyan, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'monospace', opacity: 0.8 }}>
            Digital Transformation Agency Est. 2015
          </span>
        </div>

        {/* Main heading + right col */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: '3rem' }} className="hero-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h1 style={{
              fontFamily: "Barlow Condensed, system-ui, sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 800, lineHeight: 0.92,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase', color: C.white, margin: 0,
            }}>
              Hacemos de tu<br />
              <span style={{ color: C.cyan }}>emprendimiento</span><br />
              un negocio<br />
              <span style={{ color: C.cyan, opacity: 0.5 }}>real.</span>
            </h1>
            <p style={{ color: '#777', fontSize: '16px', lineHeight: 1.7, maxWidth: '48ch', margin: 0 }}>
             Ayudamos a emprendedores a diseñar, construir y expandir su presencia digital, desde estrategia de marca hasta su desarrollo integral.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '8px' }}>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', background: C.cyan, color: C.black,
                fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', textDecoration: 'none', transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
              >
                Begin Your Journey <Arrow size={14} color={C.black} />
              </a>
              <a href="#portfolio" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', border: `1px solid ${C.navyBorder}`, color: '#7A9AB8',
                fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em',
                textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = C.cyan; (e.currentTarget as HTMLAnchorElement).style.color = C.cyan; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = C.navyBorder; (e.currentTarget as HTMLAnchorElement).style.color = '#7A9AB8'; }}
              >
                See Our Work
              </a>
            </div>
          </div>

          {/* Right: image placeholder + floating card */}
          <div style={{ position: 'relative', minHeight: '260px', background: C.navyCard, display: 'flex', 
            alignItems: 'center', justifyContent: 'center', border: `1px solid ${C.navyBorder}` }} className="hero-right">
            <div style={{ textAlign: 'center', transform: 'translateY(-1)'}}>
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ opacity: 0.2 }}>
                <rect x="6" y="10" width="40" height="32" rx="2" stroke="white" strokeWidth="1.5"/>
                <circle cx="18" cy="22" r="5" stroke="white" strokeWidth="1.5" />
                <path d="M6 38l12-10 8 8 8-10 12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p style={{ color: '#333', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '12px' }}>
                Hero Visual
              </p>
            </div>
            
            {/* Floating stat card */}
            <div style={{
              position: 'absolute', bottom: '40px', right: '20px',
              background: C.navyDeep, border: `1px solid ${C.navyBorder}`,
              padding: '10px 20px', minWidth: '120px',
            }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.cyan, margin: 0, opacity: 0.8 }}>Avg. ROI Delivered</p>
              <p style={{ fontFamily: "Barlow Condensed, system-ui, sans-serif", fontSize: '36px', fontWeight: 800, color: C.white, margin: '4px 0 0', lineHeight: 1 }}>340%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}