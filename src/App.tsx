// React
import { useState, useCallback } from 'react';

// Tema y constantes
import { C } from './constants/theme';


// Secciones de la página (en orden de renderizado)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialSidebar from './components/SocialSidebar';
import About from './components/About';
import Services from './components/Services';
import ValueProposition from './components/ValueProposition';
import PartnersBanner from './components/PartnersBanner';
import Portfolio from './components/Portfolio';
import SecondaryCta from './components/SecondaryCta';
import ClientLogos from './components/ClientLogos';
import ClientifyPartner from './components/ClientifyPartner';
import Blog from './components/Blog';

import Footer from './components/Footer';

export default function App() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeDropdown = useCallback(() => setActiveDropdown(null), []);

  return (
    <div
      style={{ 
        fontFamily: "DM Sans, system-ui, sans-serif", 
        color: C.body, 
        background: C.white, 
        overflowX: 'hidden' 
      }}
      onClick={closeDropdown}
    >
      <Navbar activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
      <Hero />
      <SocialSidebar />
      <About />
      <Services />
      <ValueProposition />
      <PartnersBanner />
      <Portfolio />
      <SecondaryCta />
      <ClientLogos />
      <ClientifyPartner />
      <Blog />
     
      <Footer />

      {/* Responsive CSS global inyectado */}
      <style>{`
        @media (min-width: 640px) {
          .cta-desktop { display: inline-flex !important; }
          .hamburger { display: none !important; }
          .nav-desktop { display: flex !important; }
        }
        @media (max-width: 639px) {
          .nav-desktop { display: none !important; }
        }
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-right { display: flex !important; }
          .about-grid { grid-template-columns: 1fr 1fr !important; }
          .value-grid { grid-template-columns: 1fr 1fr !important; }
          .banner-grid { grid-template-columns: 1fr auto !important; }
          .contact-grid { grid-template-columns: 1fr 1.3fr !important; }
          .partner-grid { grid-template-columns: auto 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: #444; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}