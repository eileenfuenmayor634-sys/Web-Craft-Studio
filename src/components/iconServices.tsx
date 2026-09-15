// src/constants/serviceIcons.tsx
import React from 'react';
import { FaPaintBrush, FaLaptopCode, FaBullhorn, FaPalette, FaCloud, FaGraduationCap } from 'react-icons/fa';

// Exportar cada icono como ReactNode o como componente
export const ICON_WEB_DESIGN: React.ReactNode = <FaPaintBrush size={44} color="currentColor" aria-hidden />;
export const ICON_SOFTWARE: React.ReactNode = <FaLaptopCode size={44} color="currentColor" aria-hidden />;
export const ICON_MARKETING: React.ReactNode = <FaBullhorn size={44} color="currentColor" aria-hidden />;
export const ICON_BRANDING: React.ReactNode = <FaPalette size={44} color="currentColor" aria-hidden />;
export const ICON_CLOUD: React.ReactNode = <FaCloud size={44} color="currentColor" aria-hidden />;
export const ICON_ACADEMY: React.ReactNode = <FaGraduationCap size={44} color="currentColor" aria-hidden />;

// Alternativa: exportar un objeto
export const SERVICE_ICONS = {
  webDesign: ICON_WEB_DESIGN,
  software: ICON_SOFTWARE,
  marketing: ICON_MARKETING,
  branding: ICON_BRANDING,
  cloud: ICON_CLOUD,
  academy: ICON_ACADEMY,
};