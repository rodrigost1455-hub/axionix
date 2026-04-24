const { useState, useRef } = React;

const I = {
  Arrow: (p) => (<svg viewBox="0 0 24 24" width={p.size||14} height={p.size||14} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>),
  External: (p) => (<svg viewBox="0 0 24 24" width={p.size||14} height={p.size||14} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>),
  Whatsapp: (p) => (<svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="currentColor"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.32.17 11.87a11.8 11.8 0 0 0 1.59 5.93L0 24l6.35-1.66a11.9 11.9 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.42-8.43zM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.77.99 1.01-3.67-.24-.38a9.88 9.88 0 0 1-1.52-5.27c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 6.99 2.9a9.84 9.84 0 0 1 2.9 6.99c-.01 5.45-4.44 9.88-9.86 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.21 5.08 4.5.71.3 1.26.48 1.69.62.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/></svg>),
  Mail: (p) => (<svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>),
  Lock: (p) => (<svg viewBox="0 0 24 24" width={p.size||13} height={p.size||13} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>),
};

function Navbar() {
  return (
    <nav className="nav">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a href="Landing.html" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'var(--text)' }}>
          <div className="logo-mark" />
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em' }}>AXIONIX</span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--accent)', border: '1px solid rgba(34,211,238,0.3)', padding: '2px 6px', borderRadius: 4, marginLeft: 4, background: 'rgba(34,211,238,0.06)' }}>PROYECTOS</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hide-mobile">
          <a href="Landing.html" className="nav-link">Plataforma</a>
          <a href="POS.html" className="nav-link">POS</a>
          <a href="#" className="nav-link active">Proyectos</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="https://wa.me/526182562935" target="_blank" rel="noopener" className="btn btn-ghost" style={{ color: '#25D366', padding: '8px 12px', fontSize: 13 }}>
            <I.Whatsapp size={15} />
            <span className="mono hide-mobile">+52 618 256 2935</span>
          </a>
          <a href="#" className="btn btn-glow" style={{ padding: '9px 18px', fontSize: 13 }}>
            <I.Lock size={13} /> Iniciar Sesión
          </a>
        </div>
      </div>
      <style>{`@media (max-width: 780px) { .hide-mobile { display: none !important; } }`}</style>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ paddingTop: 72, paddingBottom: 48 }}>
      <div className="container fade-up" style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
        <div className="tag" style={{ marginBottom: 24, display: 'inline-flex' }}>
          <span className="pulse-dot" />
          <span>PORTAFOLIO · CASOS DE ÉXITO</span>
        </div>
        <h1 style={{ marginBottom: 22 }}>
          <span style={{ color: 'var(--text)' }}>Soluciones Reales.</span><br/>
          <span className="gradient-text">Resultados Medibles.</span>
        </h1>
        <p style={{ fontSize: 18, maxWidth: 660, margin: '0 auto 0' }}>
          Explora cómo nuestra tecnología está transformando operaciones. Desde integraciones de nuestro Core SaaS hasta desarrollos a la medida para requerimientos específicos.
        </p>
      </div>
    </section>
  );
}

// Visual placeholders per project — no third-party names/marks
function BigoteVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1e0f1a 0%, #2d1420 40%, #0d1426 100%)' }}>
      {/* Radial glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(ellipse at center, rgba(239, 68, 68, 0.2), transparent 60%)' }} />
      {/* Grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(239,68,68,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }} />

      {/* Mock browser */}
      <div style={{ position: 'absolute', inset: '14% 10% 14% 10%', background: '#0a0e1a', border: '1px solid rgba(148,184,255,0.12)', borderRadius: 10, overflow: 'hidden', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 12px', background: '#05070d', borderBottom: '1px solid rgba(148,184,255,0.1)' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
          <span className="mono" style={{ fontSize: 9, color: 'var(--text-faint)', marginLeft: 8 }}>bigote-rojo.vercel.app</span>
        </div>
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>✦</div>
            <div style={{ height: 8, width: 80, background: 'rgba(255,255,255,0.12)', borderRadius: 2 }} />
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
              <div style={{ height: 6, width: 30, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }} />
              <div style={{ height: 6, width: 30, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }} />
              <div style={{ height: 6, width: 30, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }} />
            </div>
          </div>
          <div style={{ height: 14, width: '70%', background: 'linear-gradient(90deg, #dc2626, rgba(255,255,255,0.3))', borderRadius: 3, marginTop: 8 }} />
          <div style={{ height: 6, width: '55%', background: 'rgba(255,255,255,0.15)', borderRadius: 2 }} />
          <div style={{ height: 6, width: '48%', background: 'rgba(255,255,255,0.1)', borderRadius: 2 }} />
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <div style={{ height: 18, width: 60, background: '#dc2626', borderRadius: 4 }} />
            <div style={{ height: 18, width: 60, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4 }} />
          </div>
        </div>
      </div>

      {/* Floating metric */}
      <div style={{ position: 'absolute', top: 16, right: 16, padding: '6px 10px', background: 'rgba(5,7,13,0.85)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 6, fontSize: 10, color: '#fca5a5', fontFamily: 'JetBrains Mono' }}>
        ● LIVE · vercel
      </div>
    </div>
  );
}

function TractoVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0d1426 0%, #0f1e35 50%, #05070d 100%)' }}>
      <div style={{ position: 'absolute', top: '30%', left: '20%', width: '60%', height: '60%', background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.18), transparent 60%)' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 85%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 85%)' }} />

      {/* Dashboard mock — no third-party names */}
      <div style={{ position: 'absolute', inset: '12% 8% 12% 8%', background: '#0a0e1a', border: '1px solid rgba(148,184,255,0.12)', borderRadius: 10, overflow: 'hidden', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)', display: 'grid', gridTemplateColumns: '70px 1fr', gap: 0 }}>
        {/* Sidebar */}
        <div style={{ background: '#05070d', borderRight: '1px solid rgba(148,184,255,0.08)', padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }} />
          <div style={{ height: 1, background: 'rgba(148,184,255,0.08)', margin: '4px 0' }} />
          {[0,1,2,3,4].map(i => (
            <div key={i} style={{ height: 24, borderRadius: 4, background: i === 1 ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.02)' }} />
          ))}
        </div>
        <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div className="mono" style={{ fontSize: 8, color: 'var(--text-faint)', letterSpacing: '0.1em' }}>CATÁLOGO · SKU</div>
              <div style={{ height: 10, width: 120, background: 'rgba(255,255,255,0.2)', borderRadius: 2, marginTop: 4 }} />
            </div>
            <div style={{ height: 20, width: 80, background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', borderRadius: 4 }} />
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
            {[
              { l: 'SKUs', v: '12,840', c: 'var(--accent)' },
              { l: 'STOCK', v: '98.2%', c: '#22c55e' },
              { l: 'ALERTAS', v: '3', c: '#f59e0b' },
            ].map(s => (
              <div key={s.l} style={{ padding: 8, border: '1px solid rgba(148,184,255,0.08)', borderRadius: 4, background: 'rgba(255,255,255,0.015)' }}>
                <div className="mono" style={{ fontSize: 7, color: 'var(--text-faint)', letterSpacing: '0.1em' }}>{s.l}</div>
                <div className="mono" style={{ fontSize: 12, color: s.c, fontWeight: 600 }}>{s.v}</div>
              </div>
            ))}
          </div>

          {/* Table rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 2 }}>
            {[70, 55, 82, 40, 60].map((w, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(148,184,255,0.05)', borderRadius: 3 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: i === 3 ? '#f59e0b' : '#22c55e' }} />
                <div style={{ height: 5, width: `${w}%`, maxWidth: 120, background: 'rgba(255,255,255,0.12)', borderRadius: 2 }} />
                <div className="mono" style={{ marginLeft: 'auto', fontSize: 8, color: 'var(--text-faint)' }}>SKU-{String(4821 + i).padStart(5, '0')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating tag */}
      <div style={{ position: 'absolute', top: 16, right: 16, padding: '6px 10px', background: 'rgba(5,7,13,0.85)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: 6, fontSize: 10, color: '#93c5fd', fontFamily: 'JetBrains Mono' }}>
        ● LIVE · netlify
      </div>
    </div>
  );
}

function ProjectCard({ tag, tagColor, title, subtitle, body, bullets, href, visual, delay }) {
  return (
    <div className="proj-card fade-up" style={{ animationDelay: `${delay}s` }}>
      <div className="proj-visual">{visual}</div>
      <div className="proj-body">
        <span className="proj-tag" style={{ background: `${tagColor}14`, color: tagColor, border: `1px solid ${tagColor}30` }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: tagColor }} />
          {tag}
        </span>
        <h3 style={{ fontSize: 26, marginTop: 4 }}>{title}</h3>
        <div style={{ fontSize: 14, color: tagColor, fontWeight: 500 }}>{subtitle}</div>
        <p style={{ fontSize: 15, marginTop: 4 }}>{body}</p>
        {bullets && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12, paddingTop: 16, borderTop: '1px dashed var(--line)' }}>
            {bullets.map(b => (
              <div key={b.k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13 }}>
                <span style={{ color: 'var(--text-dim)' }}>{b.k}</span>
                <span className="mono" style={{ color: tagColor, fontWeight: 500 }}>{b.v}</span>
              </div>
            ))}
          </div>
        )}
        <div style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '12px 18px', fontSize: 14 }}>
            Visitar Sitio <I.External size={13} />
          </a>
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '12px 18px', fontSize: 14 }}>
            Ver caso
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section style={{ padding: '32px 0 80px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }} className="proj-grid">
          <ProjectCard
            delay={0.15}
            tag="IMPLEMENTACIÓN SAAS"
            tagColor="#F87171"
            title="Bigote Rojo"
            subtitle="Automatización y presencia digital optimizada."
            body="Rediseño del flujo operativo y despliegue de la presencia digital, integrando agenda, contacto y experiencia de marca sobre nuestra plataforma Core SaaS."
            bullets={[
              { k: 'Stack', v: 'Axionix Core · Next.js' },
              { k: 'Deploy', v: 'Vercel · CDN global' },
              { k: 'Go-live', v: '2025 Q4' },
            ]}
            href="https://bigote-rojo.vercel.app/"
            visual={<BigoteVisual />}
          />
          <ProjectCard
            delay={0.3}
            tag="DESARROLLO A LA MEDIDA"
            tagColor="#60A5FA"
            title="Tracto Partes La Curva"
            subtitle="Compromiso enterprise. Gestión precisa de catálogo."
            body="Un compromiso específico con el cliente que requirió un desarrollo a la medida, estructurado de forma independiente a nuestro producto SaaS principal. Sistema enfocado en la gestión precisa de catálogo."
            bullets={[
              { k: 'Arquitectura', v: 'Stack dedicado' },
              { k: 'Deploy', v: 'Netlify · edge' },
              { k: 'Modalidad', v: 'Compromiso directo' },
            ]}
            href="https://tractoparteslacurva.netlify.app/"
            visual={<TractoVisual />}
          />
        </div>

        <div style={{ marginTop: 48, padding: '28px 32px', border: '1px dashed var(--line-strong)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, background: 'rgba(255,255,255,0.015)' }}>
          <div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.1em', marginBottom: 6 }}>PORTAFOLIO EN EXPANSIÓN</div>
            <div style={{ fontSize: 17, fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.01em' }}>Hay más casos en operación privada. ¿Quieres ver uno relevante para tu industria?</div>
          </div>
          <a href="#contacto" className="btn btn-outline" style={{ padding: '12px 20px' }}>Solicitar referencias <I.Arrow size={13} /></a>
        </div>
        <style>{`@media (max-width: 900px) { .proj-grid { grid-template-columns: 1fr !important; } }`}</style>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contacto" style={{ padding: '40px 0 80px' }}>
      <div className="container">
        <div style={{ position: 'relative', borderRadius: 24, border: '1px solid var(--line-strong)', background: 'linear-gradient(135deg, rgba(34,211,238,0.06), rgba(59,130,246,0.04), rgba(13,20,38,0.8))', padding: '64px 56px', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(34,211,238,0.15), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -100, left: -50, width: 300, height: 300, background: 'radial-gradient(circle, rgba(59,130,246,0.12), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <div className="tag" style={{ marginBottom: 18, display: 'inline-flex' }}>
              <span className="pulse-dot" />
              DESARROLLO ENTERPRISE · A LA MEDIDA
            </div>
            <h2 style={{ marginBottom: 18 }}>
              ¿Tienes un requerimiento específico?<br/>
              <span className="gradient-text">Construyamos el futuro de tu negocio.</span>
            </h2>
            <p style={{ fontSize: 17, maxWidth: 560, margin: '0 auto 32px' }}>
              Agenda una sesión de descubrimiento. En menos de dos horas hábiles te contactamos para entender tu caso y proponer un camino.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a className="wa-btn" href="https://wa.me/526182562935?text=Hola%20Axionix%2C%20tengo%20un%20proyecto" target="_blank" rel="noopener">
                <I.Whatsapp size={20} />
                WhatsApp · +52 618 256 2935
              </a>
              <a className="btn btn-outline" href="mailto:contact@axionixmx.com" style={{ padding: '14px 20px', fontSize: 15 }}>
                <I.Mail size={15} /> contact@axionixmx.com
              </a>
            </div>
          </div>
        </div>

        <footer style={{ marginTop: 60, paddingTop: 32, borderTop: '1px solid var(--line)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div className="logo-mark" style={{ width: 24, height: 24 }} />
            <span style={{ fontWeight: 600, fontSize: 14 }}>AXIONIX</span>
            <span className="mono" style={{ fontSize: 11, color: 'var(--text-faint)' }}>© 2026 · Durango, MX</span>
          </div>
          <div style={{ display: 'flex', gap: 20, fontSize: 13, color: 'var(--text-dim)' }}>
            <a href="Landing.html" style={{ color: 'inherit', textDecoration: 'none' }}>Plataforma</a>
            <a href="POS.html" style={{ color: 'inherit', textDecoration: 'none' }}>POS</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Proyectos</a>
            <a href="mailto:contact@axionixmx.com" style={{ color: 'inherit', textDecoration: 'none' }}>Contacto</a>
          </div>
        </footer>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <ContactCTA />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
