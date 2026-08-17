import { C } from '../constants/theme';

export function SectionLabel({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
      <span style={{ display: 'block', width: '28px', height: '1px', background: C.cyan, opacity: light ? 0.8 : 0.5 }} />
      <span style={{
        fontFamily: "DM Mono, monospace",
        fontSize: '10px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: C.cyan,
        opacity: light ? 0.8 : 0.6,
      }}>
        {text}
      </span>
    </div>
  );
}