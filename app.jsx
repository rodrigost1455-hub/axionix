const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#22d3ee",
  "accent2": "#3b82f6",
  "heroLayout": "split",
  "showGrid": true,
  "videoGlow": "cyan",
  "density": "comfortable"
}/*EDITMODE-END*/;

// ---------- Icons ----------
const Icon = {
  Whatsapp: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="currentColor" {...p}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.32.17 11.87a11.8 11.8 0 0 0 1.59 5.93L0 24l6.35-1.66a11.9 11.9 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.42-8.43zM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.77.99 1.01-3.67-.24-.38a9.88 9.88 0 0 1-1.52-5.27c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 6.99 2.9a9.84 9.84 0 0 1 2.9 6.99c-.01 5.45-4.44 9.88-9.86 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.21 5.08 4.5.71.3 1.26.48 1.69.62.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z"/>
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 14} height={p.size || 14} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 14} height={p.size || 14} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Lock: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 14} height={p.size || 14} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  Bolt: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 16} height={p.size || 16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Mail: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 16} height={p.size || 16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-10 6L2 7"/>
    </svg>
  ),
};

// ---------- Navbar ----------
function Navbar() {
  const [active, setActive] = useState('plataforma');
  const links = [
    { id: 'plataforma', label: 'Plataforma', href: '#plataforma' },
    { id: 'pos', label: 'POS', href: 'POS.html' },
    { id: 'proyectos', label: 'Proyectos', href: 'Proyectos.html' },
    { id: 'contacto', label: 'Contacto', href: '#contacto' },
  ];
  return (
    <nav className="nav">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'var(--text)' }}>
          <div className="logo-mark" />
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em' }}>AXIONIX</span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', border: '1px solid var(--line)', padding: '2px 6px', borderRadius: 4, marginLeft: 4 }}>v3.2</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hide-mobile">
          {links.map(l => (
            <a key={l.id} href={l.href} className={`nav-link ${active === l.id ? 'active' : ''}`} onClick={() => setActive(l.id)}>
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="https://wa.me/526182562935" target="_blank" rel="noopener" className="btn btn-ghost" style={{ color: '#25D366', padding: '8px 12px', fontSize: 13 }}>
            <Icon.Whatsapp size={15} />
            <span className="mono hide-mobile">+52 618 256 2935</span>
          </a>
          <a href="#login" className="btn btn-glow" style={{ padding: '9px 18px', fontSize: 13 }}>
            <Icon.Lock size={13} /> Iniciar Sesión
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 780px) { .hide-mobile { display: none !important; } }
      `}</style>
    </nav>
  );
}

// ---------- Hero ----------
function Hero() {
  const videoRef = useRef(null);
  return (
    <section style={{ paddingTop: 72, paddingBottom: 88 }}>
      <div className="container">
        <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }}>
          {/* copy */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)', gap: 56, alignItems: 'center' }} className="hero-grid">
            <div style={{ maxWidth: 580 }}>
              <div className="tag" style={{ marginBottom: 24 }}>
                <span className="pulse-dot" />
                <span>SISTEMA OPERATIVO EMPRESARIAL · MX</span>
              </div>
              <h1 style={{ marginBottom: 24 }}>
                Automatiza y <span className="gradient-text">escala</span> tu negocio con Axionix.
              </h1>
              <p style={{ fontSize: 18, color: 'var(--text-dim)', maxWidth: 520, marginBottom: 36 }}>
                La plataforma empresarial y sistema de Punto de Venta (POS) en la nube. Diseñado para adaptarse a todo, desde comercios locales hasta operaciones corporativas.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                <a href="#plataforma" className="btn btn-primary" style={{ padding: '14px 22px', fontSize: 15 }}>
                  Explorar Plataforma <Icon.Arrow size={15} />
                </a>
                <a href="POS.html" className="btn btn-outline" style={{ padding: '14px 22px', fontSize: 15 }}>
                  Conocer Axionix POS
                </a>
              </div>
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                {[
                  { n: '99.98%', l: 'Uptime SLA' },
                  { n: '< 50ms', l: 'Latencia p95' },
                  { n: 'SOC 2', l: 'Certificado' },
                ].map(s => (
                  <div key={s.l}>
                    <div className="mono" style={{ fontSize: 20, fontWeight: 500, color: 'var(--text)' }}>{s.n}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* video */}
            <div style={{ position: 'relative' }}>
              <VideoPanel videoRef={videoRef} />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}

function VideoPanel({ videoRef }) {
  return (
    <div style={{ position: 'relative' }}>
      {/* Floating UI labels around video */}
      <div style={{ position: 'absolute', top: -14, left: 20, zIndex: 3 }}>
        <div className="tag" style={{ background: 'rgba(5,7,13,0.9)' }}>
          <span className="pulse-dot" />
          AXIONIX_CORE · ACTIVE
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: -14, right: 20, zIndex: 3 }}>
        <div className="tag" style={{ background: 'rgba(5,7,13,0.9)' }}>
          <Icon.Bolt size={12} />
          <span>NODE.REGION: MX-CENTRAL</span>
        </div>
      </div>

      <div className="hero-video-wrap corner-marks">
        <div className="hero-video-inner" style={{ aspectRatio: '16 / 10' }}>
          <video
            ref={videoRef}
            autoPlay loop muted playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          >
            <source src="assets/axionix-logo.mp4" type="video/mp4" />
          </video>
          {/* scanline overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, transparent 0%, transparent 95%, rgba(34,211,238,0.12) 100%)',
            mixBlendMode: 'screen',
            pointerEvents: 'none'
          }} />
          {/* subtle inner border */}
          <div style={{
            position: 'absolute', inset: 8, borderRadius: 12,
            border: '1px solid rgba(34,211,238,0.15)',
            pointerEvents: 'none'
          }} />
        </div>
      </div>

      {/* Code strip underneath */}
      <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px' }}>
        <span className="code-line">
          <span className="k">axionix</span>.runtime(<span className="s">"production"</span>)
        </span>
        <span className="code-line" style={{ color: 'var(--accent)' }}>
          ● streaming
        </span>
      </div>
    </div>
  );
}

// ---------- Divisions Bento ----------
function Divisions() {
  return (
    <section id="plataforma" style={{ paddingTop: 40, paddingBottom: 100 }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="tag" style={{ marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: 2, background: 'var(--accent)' }} />
            LÍNEAS DE PRODUCTO
          </div>
          <h2>Tres divisiones. <span style={{ color: 'var(--text-dim)' }}>Una plataforma unificada.</span></h2>
          <p style={{ marginTop: 16, fontSize: 16 }}>
            Cada división comparte el mismo núcleo: autenticación, base de datos, permisos granulares y sincronización en tiempo real. Adopta una o las tres.
          </p>
        </div>

        <div className="bento">
          <DivisionCard
            size="large"
            tag="01 · CORE SAAS"
            title="Axionix Core"
            subtitle="Automatización para negocios basados en servicio."
            body="Soluciones de automatización para clínicas, barberías y restaurantes. Agenda inteligente, expediente digital, flujos operativos y reportes en una sola vista."
            industries={['Clínicas', 'Barberías', 'Restaurantes', 'Spa & Estética']}
            accent="var(--accent)"
            visual={<CoreVisual />}
          />
          <DivisionCard
            tag="02 · AXIONIX POS"
            title="Axionix POS"
            subtitle="Punto de venta ágil, hardware-friendly."
            body="Sistemas de punto de venta ágiles para refaccionarias, retail y tortillerías. Inventario multi-sucursal, facturación y cortes en segundos."
            industries={['Refaccionarias', 'Retail', 'Tortillerías']}
            accent="#3B82F6"
            visual={<PosVisual />}
          />
          <DivisionCard
            tag="03 · ENTERPRISE"
            title="Proyectos a la Medida"
            subtitle="Desarrollo enterprise dedicado."
            body="Desarrollo Enterprise y compromisos específicos, como nuestro caso Tracto Partes La Curva. Equipo dedicado, SLA y roadmap compartido."
            industries={['Industrial', 'Refacciones', 'Logística']}
            accent="#A78BFA"
            visual={<EnterpriseVisual />}
          />
        </div>
      </div>
    </section>
  );
}

function DivisionCard({ size, tag, title, subtitle, body, industries, accent, visual }) {
  const ref = useRef(null);
  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    ref.current.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  return (
    <div ref={ref} className="card" onMouseMove={onMove} style={{
      gridColumn: size === 'large' ? 'span 1' : undefined,
      display: 'flex', flexDirection: 'column', minHeight: 440
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <span className="mono" style={{ fontSize: 11, color: accent, letterSpacing: '0.08em' }}>{tag}</span>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: accent, boxShadow: `0 0 10px ${accent}` }} />
      </div>

      <div style={{
        borderRadius: 12,
        border: '1px solid var(--line)',
        background: 'rgba(2,8,22,0.6)',
        height: 160,
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 24
      }}>
        <div className="glyph-grid" />
        {visual}
      </div>

      <h3 style={{ fontSize: 22, marginBottom: 6 }}>{title}</h3>
      <div style={{ fontSize: 14, color: accent, marginBottom: 12, fontWeight: 500 }}>{subtitle}</div>
      <p style={{ fontSize: 14, marginBottom: 20 }}>{body}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {industries.map(i => (
          <span key={i} style={{
            fontSize: 11, padding: '4px 10px',
            border: '1px solid var(--line)',
            borderRadius: 999,
            color: 'var(--text-dim)',
            background: 'rgba(255,255,255,0.02)'
          }}>{i}</span>
        ))}
      </div>

      <a href="#" style={{
        marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 6,
        fontSize: 13, color: accent, textDecoration: 'none', fontWeight: 500
      }}>
        Explorar división <Icon.Arrow size={12} />
      </a>
    </div>
  );
}

// Division visuals
function CoreVisual() {
  return (
    <div style={{ position: 'absolute', inset: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {/* Fake calendar rows */}
      {[
        { t: '09:00', n: 'Limpieza dental', s: 'Dr. Ramírez', c: 'var(--accent)' },
        { t: '10:30', n: 'Corte + Barba', s: 'Miguel R.', c: '#3B82F6' },
        { t: '13:00', n: 'Mesa 4 · 6 pax', s: 'Reserva', c: '#A78BFA' },
      ].map((r, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '8px 12px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid var(--line)',
          borderRadius: 8,
          fontSize: 11,
          animation: `fadeUp 0.6s ${0.1 + i * 0.1}s both`
        }}>
          <span className="mono" style={{ color: r.c, fontWeight: 500 }}>{r.t}</span>
          <span style={{ color: 'var(--text)', flex: 1 }}>{r.n}</span>
          <span style={{ color: 'var(--text-faint)' }}>{r.s}</span>
          <div style={{ width: 4, height: 4, borderRadius: '50%', background: r.c }} />
        </div>
      ))}
    </div>
  );
}

function PosVisual() {
  return (
    <div style={{ position: 'absolute', inset: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
      <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 10px', background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 6, fontSize: 11 }}>
        <span className="mono" style={{ color: 'var(--text-dim)' }}>TICKET #04821</span>
        <span className="mono" style={{ color: '#3B82F6', fontWeight: 600 }}>$1,284.00 MXN</span>
      </div>
      {[
        { n: 'Balata FR', q: '×2', p: '320' },
        { n: 'Filtro aceite', q: '×1', p: '180' },
        { n: 'Aceite 5W30', q: '×4', p: '520' },
        { n: 'Mano de obra', q: '', p: '264' },
      ].map((it, i) => (
        <div key={i} style={{
          padding: '6px 8px', fontSize: 10,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid var(--line)', borderRadius: 6,
        }}>
          <div style={{ color: 'var(--text)', marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
            <span>{it.n}</span><span className="mono" style={{ color: 'var(--text-faint)' }}>{it.q}</span>
          </div>
          <div className="mono" style={{ color: '#3B82F6', fontSize: 11 }}>${it.p}</div>
        </div>
      ))}
    </div>
  );
}

function EnterpriseVisual() {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <svg viewBox="0 0 300 160" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="eline" x1="0" x2="1">
            <stop offset="0" stopColor="#A78BFA" stopOpacity="0.1"/>
            <stop offset="0.5" stopColor="#A78BFA" stopOpacity="0.8"/>
            <stop offset="1" stopColor="#A78BFA" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        {/* grid lines */}
        {[0, 40, 80, 120, 160].map(y => (
          <line key={y} x1="20" y1={y + 10} x2="280" y2={y + 10} stroke="rgba(167,139,250,0.08)" />
        ))}
        {/* bars */}
        {[45, 70, 55, 90, 75, 110, 95, 130, 115, 140].map((v, i) => (
          <rect key={i} x={30 + i * 25} y={150 - v} width="14" height={v}
                fill="url(#eline)" rx="2"
                style={{ animation: `fadeUp 0.6s ${i * 0.05}s both` }}/>
        ))}
        <text x="20" y="20" fill="#A78BFA" fontSize="9" fontFamily="JetBrains Mono" opacity="0.7">TRACTO_PARTES / ops.throughput</text>
      </svg>
    </div>
  );
}

// ---------- Case Logos ----------
function CaseStrip() {
  const items = ['Tracto Partes La Curva', 'Clínica Dental NorteSur', 'Barbershop District', 'La Tortillería Central', 'Refaccionaria Pacífico', 'Nodo Restaurante'];
  return (
    <section style={{ padding: '24px 0 64px', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="container">
        <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20, textAlign: 'center' }}>
          Operando para equipos en México
        </div>
        <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
          <div className="marquee-track">
            {[...items, ...items].map((x, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                color: 'var(--text-dim)', fontSize: 15, fontWeight: 500,
                whiteSpace: 'nowrap', letterSpacing: '-0.01em'
              }}>
                <div style={{ width: 20, height: 20, borderRadius: 4, background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', opacity: 0.5 }} />
                {x}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Contact CTA ----------
function ContactCTA() {
  return (
    <section id="contacto" style={{ padding: '100px 0 80px' }}>
      <div className="container">
        <div style={{
          position: 'relative',
          borderRadius: 24,
          border: '1px solid var(--line-strong)',
          background: 'linear-gradient(135deg, rgba(34,211,238,0.06), rgba(59,130,246,0.04), rgba(13,20,38,0.8))',
          padding: '64px 56px',
          overflow: 'hidden'
        }}>
          {/* Accents */}
          <div style={{
            position: 'absolute', top: -100, right: -100, width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(34,211,238,0.15), transparent 60%)',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute', bottom: -100, left: -50, width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(59,130,246,0.12), transparent 60%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'center' }} className="cta-grid">
            <div>
              <div className="tag" style={{ marginBottom: 18 }}>
                <span className="pulse-dot" />
                RESPUESTA EN · &lt; 2 HRS HÁBILES
              </div>
              <h2 style={{ marginBottom: 18 }}>
                Impulsa tu negocio <span className="gradient-text">hoy mismo.</span>
              </h2>
              <p style={{ fontSize: 17, maxWidth: 520, marginBottom: 32 }}>
                Habla con nuestro equipo. Agenda una demo, solicita una cotización o cuéntanos tu caso — te contactamos por WhatsApp o correo.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="wa-btn" href="https://wa.me/526182562935?text=Hola%20Axionix%2C%20quiero%20saber%20m%C3%A1s" target="_blank" rel="noopener">
                  <Icon.Whatsapp size={20} />
                  WhatsApp · +52 618 256 2935
                </a>
                <a className="btn btn-outline" href="mailto:contact@axionixmx.com" style={{ padding: '14px 20px', fontSize: 15 }}>
                  <Icon.Mail size={15} /> contact@axionixmx.com
                </a>
              </div>
            </div>

            <ContactCard />
          </div>
        </div>

        <Footer />
      </div>
      <style>{`
        @media (max-width: 860px) { .cta-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function ContactCard() {
  return (
    <div style={{
      background: 'rgba(5,7,13,0.7)',
      backdropFilter: 'blur(14px)',
      border: '1px solid var(--line-strong)',
      borderRadius: 16,
      padding: 28,
      boxShadow: '0 20px 60px -20px rgba(0,0,0,0.5)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <div className="logo-mark" style={{ width: 32, height: 32 }} />
        <div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Axionix México</div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)' }}>Durango · Operando 24/7</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { label: 'WhatsApp directo', value: '+52 618 256 2935', icon: <Icon.Whatsapp size={14} />, color: '#25D366' },
          { label: 'Correo de contacto', value: 'contact@axionixmx.com', icon: <Icon.Mail size={14} />, color: 'var(--accent)' },
          { label: 'Tiempo de respuesta', value: '< 2 horas hábiles', icon: <Icon.Bolt size={14} />, color: '#A78BFA' },
        ].map((r, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 12px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--line)',
            borderRadius: 10
          }}>
            <div style={{ color: r.color }}>{r.icon}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{r.label}</div>
              <div className="mono" style={{ fontSize: 13, color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.value}</div>
            </div>
            <Icon.Check size={14} style={{ color: r.color, opacity: 0.6 }} />
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 20, padding: '10px 12px',
        borderTop: '1px dashed var(--line)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 11
      }}>
        <span className="mono" style={{ color: 'var(--text-faint)' }}>status.axionixmx.com</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#22d3ee' }}>
          <span className="pulse-dot" /> Todos los sistemas operativos
        </span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="logo-mark" style={{ width: 24, height: 24 }} />
          <span style={{ fontWeight: 600, fontSize: 14 }}>AXIONIX</span>
          <span className="mono" style={{ fontSize: 11, color: 'var(--text-faint)' }}>© 2026 · Durango, MX</span>
        </div>
        <div style={{ display: 'flex', gap: 20, fontSize: 13, color: 'var(--text-dim)' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacidad</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Términos</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Estado</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Docs</a>
        </div>
      </div>
    </footer>
  );
}

// ---------- App ----------
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent tweaks via CSS vars
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', tweaks.accent);
    root.style.setProperty('--accent-2', tweaks.accent2);
    // Derive glow rgba
    const hex = tweaks.accent.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    root.style.setProperty('--accent-glow', `rgba(${r}, ${g}, ${b}, 0.35)`);
  }, [tweaks.accent, tweaks.accent2]);

  return (
    <>
      <Navbar />
      <Hero />
      <CaseStrip />
      <Divisions />
      <ContactCTA />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Color">
          <TweakColor label="Acento primario" value={tweaks.accent} onChange={v => setTweak('accent', v)} />
          <TweakColor label="Acento secundario" value={tweaks.accent2} onChange={v => setTweak('accent2', v)} />
        </TweakSection>
        <TweakSection label="Presets">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
            {[
              { name: 'Cyan', a: '#22d3ee', b: '#3b82f6' },
              { name: 'Violeta', a: '#A78BFA', b: '#7C3AED' },
              { name: 'Verde', a: '#34D399', b: '#0EA5E9' },
              { name: 'Ámbar', a: '#FBBF24', b: '#F97316' },
              { name: 'Rosa', a: '#F472B6', b: '#8B5CF6' },
              { name: 'Lima', a: '#A3E635', b: '#22D3EE' },
            ].map(p => (
              <button key={p.name} onClick={() => { setTweak('accent', p.a); setTweak('accent2', p.b); }}
                style={{
                  padding: '8px 6px', fontSize: 11, cursor: 'pointer',
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${tweaks.accent === p.a ? p.a : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: 6, color: 'white',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4
                }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: p.a }} />
                  <div style={{ width: 10, height: 10, borderRadius: 2, background: p.b }} />
                </div>
                {p.name}
              </button>
            ))}
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
