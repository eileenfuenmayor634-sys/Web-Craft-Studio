import { C } from '../constants/theme';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, } from 'react-icons/fa';
export default function SocialSidebar() {
  return (
    <div style={{
      position: 'fixed',
      right: '30px',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      zIndex: 50,
    }}>
     {/* Iconos reales de redes sociales */}
      <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#7A9AB8', fontSize: '16px', transition: 'color 0.15s' }}>
        <FaFacebookF />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#7A9AB8', fontSize: '16px', transition: 'color 0.15s' }}>
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#7A9AB8', fontSize: '16px', transition: 'color 0.15s' }}>
        <FaLinkedinIn />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ color: '#7A9AB8', fontSize: '16px', transition: 'color 0.15s' }}>
        <FaYoutube />
      </a>
      
      {/* Línea divisoria */}
      <span style={{ display: 'block', width: '1px', height: '30px', background: '#7A9AB8', opacity: 0.4, margin: '4px 0' }} />

      {/* Texto vertical */}
      <span style={{
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        color: '#7A9AB8',
        fontSize: '11px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}>
        Síguenos
      </span>
    </div>
  );
}