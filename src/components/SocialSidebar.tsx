import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <a
        className="social-icon social-ig"
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        className="social-icon social-fb"
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
    </div>
  );
}