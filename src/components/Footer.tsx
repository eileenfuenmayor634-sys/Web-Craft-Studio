import { C, px } from '../constants/theme';
import { SERVICES, BLOG_POSTS } from '../constants/data';
import logoSrc from '../public/Web craft Studio.png';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid #1a1a1a', ...px }}>
      <div style={{
        maxWidth: '1400px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '3rem', paddingTop: '3.5rem', paddingBottom: '3.5rem',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <img src={logoSrc} alt="Web Craft Studio" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
          </div>
          <p style={{ color: '#555', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>
            Maracaibo, Venezuela<br />
            Miami, Florida, USA<br />
            Fully Remote-Capable
          </p>
          <p style={{ color: '#444', fontSize: '11px', margin: 0, fontFamily: 'monospace' }}>RIF: J-000000000-0</p>
          <div style={{ display: 'flex', gap: '12px', paddingTop: '4px' }}>
            {['in', 'tw', 'ig', 'yt'].map(s => (
              <a key={s} href="#" style={{ color: '#444', fontSize: '11px', fontFamily: 'monospace', textDecoration: 'none' }}
              onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#888')}
              onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#444')}
              >{s}</a>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p style={{ color: '#555', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 4px', fontFamily: 'monospace' }}>Services</p>
          {SERVICES.map(s => (
            <a key={s.title} href="#" style={{ color: '#444', fontSize: '13px', textDecoration: 'none', lineHeight: 1.4 }}
            onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#888')}
            onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#444')}
            >{s.title}</a>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ color: '#555', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 4px', fontFamily: 'monospace' }}>Recent Posts</p>
          {BLOG_POSTS.map(p => (
            <a key={p.title} href="#" style={{ display: 'flex', flexDirection: 'column', gap: '2px', textDecoration: 'none' }}>
              <span style={{ color: '#444', fontSize: '12px', lineHeight: 1.4 }}>{p.title}</span>
              <span style={{ color: '#333', fontSize: '10px', fontFamily: 'monospace' }}>{p.date}</span>
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <p style={{ color: '#555', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 4px', fontFamily: 'monospace' }}>Newsletter</p>
          <p style={{ color: '#444', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
            Monthly insights on digital strategy, design, and technology.
          </p>
          <input type="text" placeholder="Your name" style={{
            background: 'transparent', border: '1px solid #1e1e1e',
            padding: '10px 12px', color: C.white, fontSize: '13px', outline: 'none',
            fontFamily: "DM Sans, system-ui",
          }}
          onFocus={e => ((e.target as HTMLInputElement).style.borderColor = '#333')}
          onBlur={e => ((e.target as HTMLInputElement).style.borderColor = '#1e1e1e')}
          />
          <input type="email" placeholder="Email address" style={{
            background: 'transparent', border: '1px solid #1e1e1e',
            padding: '10px 12px', color: C.white, fontSize: '13px', outline: 'none',
            fontFamily: "DM Sans, system-ui",
          }}
          onFocus={e => ((e.target as HTMLInputElement).style.borderColor = '#333')}
          onBlur={e => ((e.target as HTMLInputElement).style.borderColor = '#1e1e1e')}
          />
          <button style={{
            padding: '10px', background: C.white, color: C.black,
            fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', border: 'none', cursor: 'pointer',
          }}>
            Subscribe
          </button>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #141414', maxWidth: '1400px', margin: '0 auto', paddingTop: '20px', paddingBottom: '20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <p style={{ margin: 0, color: '#333', fontSize: '12px' }}>
            2026 Agency Studio LLC. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Legal Notice', 'Privacy Policy', 'Terms of Use', 'Careers'].map(l => (
              <a key={l} href="#" style={{ color: '#333', fontSize: '11px', textDecoration: 'none' }}
              onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#666')}
              onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#333')}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}