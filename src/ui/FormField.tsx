// src/ui/FormField.tsx
import { C } from '../constants/theme';

export function FormField({
  label, type, placeholder, value, onChange,
}: {
  label: string; type: string; placeholder: string; value: string; onChange: (v: string) => void
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{
        fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase',
        color: '#555', fontFamily: 'monospace',
      }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          background: 'transparent', border: '1px solid #222',
          padding: '12px 14px', color: C.white, fontSize: '14px',
          outline: 'none', fontFamily: "DM Sans, system-ui, sans-serif",
        }}
      />
    </div>
  );
}