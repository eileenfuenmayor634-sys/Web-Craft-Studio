export const C = {
  // Dark surfaces - navy from the logo background
  black: '#0D1B2E',
  navyDeep: '#081220',
  navyMid: '#132032',
  navyCard: '#16263A',
  navyBorder: '#1D3048',
  // Light surfaces
  dark: '#1A2B3C',
  body: '#3A4A5C',
  mid: '#56708A',
  muted: '#7A96B0',
  border: '#DCE6F0',
  surface: '#F0F5FA',
  light: '#E4EEF7',
  white: '#FFFFFF',
  // Brand accent
  cyan: '#00C8E8',
  cyanDark: '#00A8C4',
  whatsapp: '#25D366',       // color oficial WhatsApp
  whatsappDark: '#1ebe57',   // variante para hover/activo


  cyanGlow: 'rgba(0,200,232,0.15)',
} as const;

export const px = { 
  paddingLeft: 'clamp(1.25rem, 5vw, 6rem)', 
  paddingRight: 'clamp(1.25rem, 5vw, 6rem)' 
} as const;

export const sectionPy = { 
  paddingTop: 'clamp(3.5rem, 8vw, 6rem)', 
  paddingBottom: 'clamp(3.5rem, 8vw, 6rem)' 
} as const;