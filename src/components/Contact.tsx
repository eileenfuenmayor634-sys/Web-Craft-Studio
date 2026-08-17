import { useState } from 'react';
import { C, px, sectionPy } from '../constants/theme';
import { SectionLabel } from '../ui/SectionLabel';
import { FormField } from '../ui/FormField';
import { Arrow } from '../ui/Arrow';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  return (
    <section id="contact" style={{ background: C.black, ...px, ...sectionPy }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'minmax(0,1fr)',
          gap: '3.5rem',
        }} className="contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <SectionLabel text="09 - Contact" light />
            <h2 style={{
              fontFamily: "Barlow Condensed, system-ui, sans-serif",
              fontSize: 'clamp(2.4rem, 6vw, 5rem)',
              fontWeight: 800, textTransform: 'uppercase', color: C.white,
              lineHeight: 1.0, margin: 0,
            }}>
              Let's Create<br />
              <span style={{ color: C.cyan }}>Something</span><br />
              <span style={{ color: C.cyan, opacity: 0.5 }}>Great.</span>
            </h2>
            <p style={{ color: '#777', fontSize: '15px', lineHeight: 1.75, maxWidth: '44ch', margin: 0 }}>
              Tell us about your project. We'll get back to you within one business day with a tailored brief and next steps.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '1rem', borderTop: '1px solid #1e1e1e' }}>
              {[
                ['General', 'hello@agency.studio'],
                ['New Projects', 'projects@agency.studio'],
                ['Phone', '+1 (305) 000-0000'],
                ['Offices', 'Maracaibo • Miami • Remote'],
              ].map(([l, v]) => (
                <div key={l}>
                  <p style={{ margin: 0, fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#444', marginBottom: '3px' }}>{l}</p>
                  <p style={{ margin: 0, fontSize: '14px', color: '#888' }}>{v}</p>
                </div>
              ))}
            </div>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={e => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
              <FormField label="Full Name" type="text" placeholder="Jane Smith" value={formData.name} onChange={v => setFormData(f => ({ ...f, name: v }))} />
              <FormField label="Email Address" type="email" placeholder="jane@company.com" value={formData.email} onChange={v => setFormData(f => ({ ...f, email: v }))} />
            </div>
            <FormField label="Phone (optional)" type="tel" placeholder="+1 (000) 000-0000" value={formData.phone} onChange={v => setFormData(f => ({ ...f, phone: v }))} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#555', fontFamily: 'monospace' }}>
                Tell Us About Your Project
              </label>
              <textarea
                rows={5}
                placeholder="Describe your project — scope, goals, timeline, budget..."
                value={formData.message}
                onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                style={{
                  background: 'transparent', border: '1px solid #222',
                  padding: '12px 14px', color: C.white, fontSize: '14px',
                  outline: 'none', resize: 'vertical', fontFamily: "DM Sans, system-ui, sans-serif",
                  lineHeight: 1.6,
                }}
                onFocus={e => ((e.target as HTMLTextAreaElement).style.borderColor = '#555')}
                onBlur={e => ((e.target as HTMLTextAreaElement).style.borderColor = '#222')}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#555', fontFamily: 'monospace' }}>
                Service of Interest
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Web Design', 'Development', 'Marketing', 'Branding', 'Cloud', 'Consulting'].map(s => (
                  <button key={s} type="button" style={{
                    padding: '7px 14px', border: '1px solid #222', background: 'transparent',
                    color: '#555', fontSize: '12px', cursor: 'pointer', letterSpacing: '0.04em',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#555'; (e.currentTarget as HTMLButtonElement).style.color = '#aaa'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#222'; (e.currentTarget as HTMLButtonElement).style.color = '#555'; }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              padding: '15px', background: C.cyan, color: C.black,
              fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', border: 'none', cursor: 'pointer',
              marginTop: '8px', transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.85')}
            onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
            >
              Send Your Request <Arrow size={14} color={C.black} />
            </button>
            <p style={{ textAlign: 'center', fontSize: '11px', color: '#333', margin: 0 }}>
              We respond within 1 business day. Zero spam, guaranteed.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}