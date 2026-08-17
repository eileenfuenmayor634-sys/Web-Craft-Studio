import { useState } from 'react';
import { C, px, sectionPy } from '../constants/theme';
import { BLOG_POSTS } from '../constants/data';
import { SectionLabel } from '../ui/SectionLabel';
import { Arrow } from '../ui/Arrow';

function BlogCard({ post }: { post: typeof BLOG_POSTS[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: hovered ? C.light : C.white,
        display: 'flex', flexDirection: 'column', cursor: 'pointer',
        transition: 'background 0.2s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        background: hovered ? '#E4E4E4' : C.surface,
        aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.2s',
      }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ opacity: 0.2 }}>
          <rect x="3" y="6" width="26" height="20" rx="2" stroke={C.body} strokeWidth="1.3" />
          <path d="M8 13h16M8 17h12M8 21h8" stroke={C.body} strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            background: C.black, color: C.white,
            fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', padding: '3px 8px',
          }}>
            {post.cat}
          </span>
          <span style={{ fontSize: '10px', color: C.muted, fontFamily: 'monospace' }}>{post.date}</span>
        </div>
        <h3 style={{
          fontFamily: "Barlow Condensed, system-ui, sans-serif",
          fontSize: '1.2rem', fontWeight: 700, color: C.black, margin: 0,
          lineHeight: 1.2, textTransform: 'uppercase',
        }}>
          {post.title}
        </h3>
        <p style={{ fontSize: '13px', lineHeight: 1.6, color: C.mid, margin: 0 }}>{post.excerpt}</p>
        <a href="#" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: 'auto', paddingTop: '10px',
          fontSize: '11px', fontWeight: 700, color: C.black, textDecoration: 'none',
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.5')}
        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
        >
          Read Article <Arrow size={11} />
        </a>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <section id="blog" style={{ background: C.surface, ...px, ...sectionPy }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between',
          gap: '1rem', marginBottom: '3rem', paddingBottom: '2rem',
          borderBottom: `1px solid ${C.border}`,
        }}>
          <div>
            <SectionLabel text="08 - Insights" />
            <h2 style={{
              fontFamily: "Barlow Condensed, system-ui, sans-serif",
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: 700, textTransform: 'uppercase', color: C.black,
              lineHeight: 1.0, margin: 0,
            }}>Agency Blog.</h2>
          </div>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontSize: '13px', fontWeight: 600, color: C.black, textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.5')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
          >
            View All Posts <Arrow size={13} />
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px', background: C.border,
        }}>
          {BLOG_POSTS.map(post => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}