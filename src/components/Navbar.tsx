import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import { C, px } from '../constants/theme';
import { NAV_ITEMS } from '../constants/data';
import logoSrc from '../assets/imports/Web craft Studio.png';

interface NavbarProps {
  activeDropdown?: string | null;
  setActiveDropdown?: Dispatch<SetStateAction<string | null>>;
}

export default function Navbar({ activeDropdown, setActiveDropdown }: NavbarProps) {
  const [internalDropdown, setInternalDropdown] = useState<string | null>(null);
  
  // Usamos las props si vienen de App.tsx, de lo contrario usamos el estado interno
  const currentDropdown = activeDropdown !== undefined ? activeDropdown : internalDropdown;
  const updateDropdown = setActiveDropdown || setInternalDropdown;

  const [mobileOpen, setMobileOpen] = useState(false);
  const closeDropdown = useCallback(() => updateDropdown(null), [updateDropdown]);

  return (
    <nav 
      onClick={e => { e.stopPropagation(); closeDropdown(); }}
      style={{
        position: 'fixed', top: 0,width: '100%', zIndex: 100,
        background: C.black, borderBottom: `1px solid ${C.navyBorder}`,
        ...px,
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px', maxWidth: '1400px', margin: '0 auto',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img src={logoSrc} alt="Web craft Studio" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="nav-desktop">
          {NAV_ITEMS.map(item => (
            <div key={item.label} style={{ position: 'relative' }} onClick={e => e.stopPropagation()}>
              <a
                href={item.href}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                  padding: '6px 12px', fontSize: '13px', color: '#8AAAC4',
                  textDecoration: 'none', fontWeight: 500, letterSpacing: '0.01em',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = C.cyan;
                  if (item.children) updateDropdown(item.label);
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#8AAAC4';
                }}
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>

              {/* Dropdown */}
              {item.children && currentDropdown === item.label && (
                <div
                  style={{
                    position: 'absolute', top: '100%', left: 0,
                    background: C.navyCard, border: `1px solid ${C.navyBorder}`,
                    minWidth: '180px', zIndex: 200, boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                  }}
                  onMouseEnter={() => updateDropdown(item.label)}
                  onMouseLeave={() => updateDropdown(null)}
                >
                  {item.children.map(child => (
                    <a key={child} href="#" style={{
                      display: 'block', padding: '10px 16px', fontSize: '13px',
                      color: '#7A9AB8', textDecoration: 'none', borderBottom: `1px solid ${C.navyBorder}`,
                      transition: 'background 0.1s, color 0.1s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = C.navyMid;
                      (e.currentTarget as HTMLAnchorElement).style.color = C.cyan;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = C.navyCard;
                      (e.currentTarget as HTMLAnchorElement).style.color = '#7A9AB8';
                    }}
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + mobile btn */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="#contact" style={{
            display: 'none',
            padding: '8px 20px', background: C.cyan, color: C.black,
            fontSize: '13px', fontWeight: 700, textDecoration: 'none',
            letterSpacing: '0.05em', transition: 'opacity 0.15s',
          }}
          className="cta-desktop"
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.85')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
          >
            Get Started
          </a>

          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Menu"
            className="hamburger"
          >
            <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block', height: '1.5px', background: C.cyan,
                  transition: 'all 0.2s',
                  transform: mobileOpen
                    ? i === 0 ? 'rotate(45deg) translateY(9px)' : i === 2 ? 'rotate(-45deg) translateY(-9px)' : 'scaleX(0)'
                    : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ borderTop: `1px solid ${C.navyBorder}`, background: C.navyMid }}>
          {NAV_ITEMS.map(item => (
            <a key={item.label} href={item.href}
              style={{
                display: 'block', padding: '14px 0', fontSize: '15px', fontWeight: 500,
                color: '#8AAAC4', textDecoration: 'none', borderBottom: `1px solid ${C.navyBorder}`,
                ...px,
              }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div style={{ ...px, paddingTop: '16px', paddingBottom: '16px' }}>
            <a href="#contact" style={{
              display: 'block', textAlign: 'center', padding: '12px', background: C.cyan,
              color: C.black, fontSize: '14px', fontWeight: 700, textDecoration: 'none',
            }}
            onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}