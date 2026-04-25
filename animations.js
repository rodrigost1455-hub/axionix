/**

- AXIONIX — Animation Layer v1.0
- Inspired by Outcrowd aesthetic
- 
- Drop this file in your repo root and add ONE line to index.html:
- <script src="animations.js" defer></script>
- 
- Covers:
- 1. Custom cursor glow (desktop only)
- 1. Floating parallax orbs reacting to mouse + scroll
- 1. Scroll-reveal (fade-up + stagger) via IntersectionObserver
- 1. Magnetic hover on .btn-primary, .btn-glow, .wa-btn
- 1. Counter animation on stats (99.98%, <50ms, SOC 2, etc.)
- 1. Hero headline word-split entrance
- 1. Navbar hide/show on scroll direction
- 1. Card tilt 3D on hover (bento cards)
- 1. Scroll progress bar at top of page
- 1. Typing cursor blink on .code-line elements
   */

(function () {
‘use strict’;

/* ──────────────────────────────────────────────

- 1. UTILS
- ────────────────────────────────────────────── */
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
  const isMobile = () => window.innerWidth < 768 || ‘ontouchstart’ in window;

function onReady(fn) {
if (document.readyState !== ‘loading’) fn();
else document.addEventListener(‘DOMContentLoaded’, fn);
}

/* ──────────────────────────────────────────────

- 1. CUSTOM CURSOR GLOW
- ────────────────────────────────────────────── */
  function initCursor() {
  if (isMobile()) return;

```
const cursor = document.createElement('div');
cursor.id = 'axionix-cursor';
Object.assign(cursor.style, {
  position: 'fixed',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)',
  pointerEvents: 'none',
  zIndex: '9998',
  transform: 'translate(-50%, -50%)',
  transition: 'opacity 0.3s ease',
  top: '0',
  left: '0',
});

const dot = document.createElement('div');
dot.id = 'axionix-cursor-dot';
Object.assign(dot.style, {
  position: 'fixed',
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  background: 'rgba(34,211,238,0.8)',
  pointerEvents: 'none',
  zIndex: '9999',
  transform: 'translate(-50%, -50%)',
  top: '0',
  left: '0',
  transition: 'transform 0.08s ease, background 0.2s ease',
  boxShadow: '0 0 10px rgba(34,211,238,0.6)',
});

document.body.appendChild(cursor);
document.body.appendChild(dot);

let mx = window.innerWidth / 2, my = window.innerHeight / 2;
let cx = mx, cy = my;

window.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top = my + 'px';
});

// Enlarge on interactive elements
document.addEventListener('mouseover', (e) => {
  if (e.target.closest('a, button, .btn, .card')) {
    dot.style.transform = 'translate(-50%, -50%) scale(3)';
    dot.style.background = 'rgba(34,211,238,0.4)';
  }
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest('a, button, .btn, .card')) {
    dot.style.transform = 'translate(-50%, -50%) scale(1)';
    dot.style.background = 'rgba(34,211,238,0.8)';
  }
});

// Smooth follow for glow
function animateCursor() {
  cx = lerp(cx, mx, 0.08);
  cy = lerp(cy, my, 0.08);
  cursor.style.left = cx + 'px';
  cursor.style.top = cy + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();
```

}

/* ──────────────────────────────────────────────

- 1. FLOATING PARALLAX ORBS
- ────────────────────────────────────────────── */
  function initOrbs() {
  const orbData = [
  { size: 600, x: 15, y: 10, color: ‘rgba(34,211,238,0.055)’, speed: 0.018, floatAmp: 22, floatSpeed: 0.0007 },
  { size: 480, x: 80, y: 60, color: ‘rgba(59,130,246,0.05)’, speed: 0.012, floatAmp: 18, floatSpeed: 0.0005 },
  { size: 350, x: 50, y: 85, color: ‘rgba(167,139,250,0.04)’, speed: 0.025, floatAmp: 28, floatSpeed: 0.0009 },
  { size: 280, x: 90, y: 15, color: ‘rgba(34,211,238,0.04)’, speed: 0.02, floatAmp: 15, floatSpeed: 0.0006 },
  ];

```
const container = document.createElement('div');
container.id = 'axionix-orbs';
Object.assign(container.style, {
  position: 'fixed',
  inset: '0',
  pointerEvents: 'none',
  zIndex: '0',
  overflow: 'hidden',
});

const orbs = orbData.map((d) => {
  const el = document.createElement('div');
  Object.assign(el.style, {
    position: 'absolute',
    width: d.size + 'px',
    height: d.size + 'px',
    borderRadius: '50%',
    background: `radial-gradient(circle at center, ${d.color}, transparent 70%)`,
    filter: 'blur(40px)',
    left: d.x + '%',
    top: d.y + '%',
    transform: 'translate(-50%, -50%)',
    willChange: 'transform',
  });
  container.appendChild(el);
  return { el, ...d, ox: d.x, oy: d.y, t: Math.random() * 1000 };
});

document.body.insertBefore(container, document.body.firstChild);

let mouseX = 0.5, mouseY = 0.5;
let scrollY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX / window.innerWidth;
  mouseY = e.clientY / window.innerHeight;
});

window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
}, { passive: true });

function animateOrbs(ts) {
  orbs.forEach((o) => {
    o.t += 1;
    const floatX = Math.sin(o.t * o.floatSpeed * 1.3) * o.floatAmp * 0.3;
    const floatY = Math.cos(o.t * o.floatSpeed) * o.floatAmp;
    const parallaxX = (mouseX - 0.5) * o.speed * 100;
    const parallaxY = (mouseY - 0.5) * o.speed * 60 - scrollY * o.speed * 0.15;

    o.el.style.transform = `translate(
      calc(-50% + ${floatX + parallaxX}px),
      calc(-50% + ${floatY + parallaxY}px)
    )`;
  });
  requestAnimationFrame(animateOrbs);
}
requestAnimationFrame(animateOrbs);
```

}

/* ──────────────────────────────────────────────

- 1. SCROLL REVEAL
- ────────────────────────────────────────────── */
  function initScrollReveal() {
  // Inject CSS
  const style = document.createElement(‘style’);
  style.textContent = `.ax-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1); } .ax-reveal.ax-visible { opacity: 1; transform: translateY(0); } .ax-reveal-left { opacity: 0; transform: translateX(-32px); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); } .ax-reveal-left.ax-visible { opacity: 1; transform: translateX(0); } .ax-reveal-scale { opacity: 0; transform: scale(0.94); transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); } .ax-reveal-scale.ax-visible { opacity: 1; transform: scale(1); }    `;
  document.head.appendChild(style);

```
// Wait for React to render, then tag elements
setTimeout(() => {
  // Hero section items - already have fade-up, add stagger
  const heroItems = document.querySelectorAll('.fade-up > *');
  heroItems.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.08}s`;
  });

  // Bento cards
  document.querySelectorAll('.bento .card').forEach((el, i) => {
    el.classList.add('ax-reveal');
    el.style.transitionDelay = `${i * 0.12}s`;
  });

  // Section headings
  document.querySelectorAll('h2, h3').forEach((el) => {
    if (!el.closest('.nav')) el.classList.add('ax-reveal');
  });

  // Paragraphs in sections
  document.querySelectorAll('section p').forEach((el) => {
    el.classList.add('ax-reveal');
    el.style.transitionDelay = '0.1s';
  });

  // Tags / badges
  document.querySelectorAll('section .tag').forEach((el) => {
    el.classList.add('ax-reveal-left');
  });

  // CTA section
  const ctaSection = document.querySelector('#contacto');
  if (ctaSection) {
    ctaSection.querySelectorAll('.card, [class*="card"], a.wa-btn, a.btn-outline').forEach((el, i) => {
      el.classList.add('ax-reveal');
      el.style.transitionDelay = `${i * 0.1}s`;
    });
  }

  // Observe all
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ax-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.ax-reveal, .ax-reveal-left, .ax-reveal-scale').forEach((el) => {
    observer.observe(el);
  });
}, 800);
```

}

/* ──────────────────────────────────────────────

- 1. MAGNETIC BUTTONS
- ────────────────────────────────────────────── */
  function initMagneticButtons() {
  if (isMobile()) return;

```
function applyMagnetic(selector, strength = 0.35) {
  setTimeout(() => {
    document.querySelectorAll(selector).forEach((btn) => {
      btn.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)';

      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * strength;
        const dy = (e.clientY - cy) * strength;
        btn.style.transform = `translate(${dx}px, ${dy}px) scale(1.03)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0) scale(1)';
      });
    });
  }, 800);
}

applyMagnetic('.btn-primary', 0.3);
applyMagnetic('.btn-glow', 0.25);
applyMagnetic('.wa-btn', 0.2);
```

}

/* ──────────────────────────────────────────────

- 1. COUNTER ANIMATION
- ────────────────────────────────────────────── */
  function initCounters() {
  setTimeout(() => {
  // Find the stats row in hero (99.98%, <50ms, SOC 2)
  const statEls = document.querySelectorAll(’.mono[style*=“font-size: 20px”], .mono[style*=“fontSize: 20px”]’);
  
  statEls.forEach((el) => {
  const text = el.textContent.trim();
  const numMatch = text.match(/[\d.]+/);
  if (!numMatch) return;
  
  const target = parseFloat(numMatch[0]);
  const prefix = text.split(numMatch[0])[0];
  const suffix = text.split(numMatch[0])[1] || ‘’;
  const decimals = numMatch[0].includes(’.’) ? numMatch[0].split(’.’)[1].length : 0;
  
  const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
  if (!entry.isIntersecting) return;
  observer.unobserve(el);
  
  ```
     let start = null;
     const duration = 1400;
  
     function step(ts) {
       if (!start) start = ts;
       const progress = Math.min((ts - start) / duration, 1);
       const eased = 1 - Math.pow(1 - progress, 3);
       const value = (eased * target).toFixed(decimals);
       el.textContent = prefix + value + suffix;
       if (progress < 1) requestAnimationFrame(step);
     }
     requestAnimationFrame(step);
   });
  ```
  
  }, { threshold: 0.5 });
  
  observer.observe(el);
  });
  }, 800);
  }

/* ──────────────────────────────────────────────

- 1. HERO HEADLINE WORD SPLIT
- ────────────────────────────────────────────── */
  function initHeroHeadline() {
  const style = document.createElement(‘style’);
  style.textContent = `@keyframes ax-word-in { from { opacity: 0; transform: translateY(24px) rotateX(-15deg); filter: blur(4px); } to   { opacity: 1; transform: translateY(0) rotateX(0deg); filter: blur(0px); } } .ax-word { display: inline-block; animation: ax-word-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }    `;
  document.head.appendChild(style);

```
setTimeout(() => {
  const h1 = document.querySelector('h1');
  if (!h1) return;

  // Split text nodes only, preserve spans (gradient-text)
  const nodes = Array.from(h1.childNodes);
  h1.innerHTML = '';
  h1.style.perspective = '600px';

  let wordIndex = 0;
  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.split(/(\s+)/);
      words.forEach((word) => {
        if (word.trim()) {
          const span = document.createElement('span');
          span.className = 'ax-word';
          span.style.animationDelay = `${wordIndex * 0.07}s`;
          span.textContent = word;
          h1.appendChild(span);
          wordIndex++;
        } else if (word) {
          h1.appendChild(document.createTextNode(word));
        }
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Preserve gradient spans etc.
      node.classList.add('ax-word');
      node.style.animationDelay = `${wordIndex * 0.07}s`;
      h1.appendChild(node);
      wordIndex++;
    }
  });
}, 300);
```

}

/* ──────────────────────────────────────────────

- 1. NAVBAR SCROLL BEHAVIOR
- ────────────────────────────────────────────── */
  function initNavbar() {
  const style = document.createElement(‘style’);
  style.textContent = `.nav { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease, box-shadow 0.3s ease !important; } .nav.ax-nav-hidden { transform: translateY(-100%) !important; } .nav.ax-nav-scrolled { background: rgba(5,7,13,0.92) !important; box-shadow: 0 1px 0 rgba(34,211,238,0.08) !important; }    `;
  document.head.appendChild(style);

```
let lastScroll = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const nav = document.querySelector('.nav');
      if (!nav) { ticking = false; return; }
      const current = window.scrollY;

      if (current > 80) nav.classList.add('ax-nav-scrolled');
      else nav.classList.remove('ax-nav-scrolled');

      if (current > lastScroll && current > 120) {
        nav.classList.add('ax-nav-hidden');
      } else {
        nav.classList.remove('ax-nav-hidden');
      }

      lastScroll = current;
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });
```

}

/* ──────────────────────────────────────────────

- 1. CARD 3D TILT
- ────────────────────────────────────────────── */
  function initCardTilt() {
  if (isMobile()) return;

```
const style = document.createElement('style');
style.textContent = `
  .card {
    transform-style: preserve-3d;
    will-change: transform;
  }
`;
document.head.appendChild(style);

setTimeout(() => {
  document.querySelectorAll('.bento .card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotX = -y * 6;
      const rotY = x * 6;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0) scale(1)';
      card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });
  });
}, 800);
```

}

/* ──────────────────────────────────────────────

- 1. SCROLL PROGRESS BAR
- ────────────────────────────────────────────── */
  function initScrollProgress() {
  const bar = document.createElement(‘div’);
  bar.id = ‘ax-scroll-progress’;
  Object.assign(bar.style, {
  position: ‘fixed’,
  top: ‘0’,
  left: ‘0’,
  height: ‘2px’,
  width: ‘0%’,
  background: ‘linear-gradient(90deg, #22d3ee, #3b82f6)’,
  zIndex: ‘99999’,
  pointerEvents: ‘none’,
  transition: ‘width 0.1s linear’,
  boxShadow: ‘0 0 8px rgba(34,211,238,0.6)’,
  });
  document.body.appendChild(bar);

```
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  bar.style.width = pct + '%';
}, { passive: true });
```

}

/* ──────────────────────────────────────────────

- 1. GRID SCANLINE EFFECT ON HERO VIDEO
- ────────────────────────────────────────────── */
  function initVideoScanline() {
  const style = document.createElement(‘style’);
  style.textContent = `@keyframes ax-scanline { 0%   { transform: translateY(-100%); } 100% { transform: translateY(200%); } } .hero-video-inner::after { content: ""; position: absolute; left: 0; right: 0; height: 40%; background: linear-gradient(180deg, transparent 0%, rgba(34,211,238,0.04) 50%, transparent 100%); animation: ax-scanline 4s ease-in-out infinite; pointer-events: none; z-index: 2; }    `;
  document.head.appendChild(style);
  }

/* ──────────────────────────────────────────────

- BONUS: MARQUEE PAUSE ON HOVER
- ────────────────────────────────────────────── */
  function initMarqueePause() {
  setTimeout(() => {
  const track = document.querySelector(’.marquee-track’);
  if (!track) return;
  track.addEventListener(‘mouseenter’, () => {
  track.style.animationPlayState = ‘paused’;
  });
  track.addEventListener(‘mouseleave’, () => {
  track.style.animationPlayState = ‘running’;
  });
  }, 800);
  }

/* ──────────────────────────────────────────────

- BONUS: GRADIENT BORDER PULSE ON CTA CARD
- ────────────────────────────────────────────── */
  function initCTAGlow() {
  const style = document.createElement(‘style’);
  style.textContent = `@keyframes ax-border-pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(34,211,238,0.0), 0 20px 60px -20px rgba(0,0,0,0.5); } 50%       { box-shadow: 0 0 30px -8px rgba(34,211,238,0.15), 0 20px 60px -20px rgba(0,0,0,0.5); } } #contacto > .container > div:first-child { animation: ax-border-pulse 4s ease-in-out infinite; }    `;
  document.head.appendChild(style);
  }

/* ──────────────────────────────────────────────

- BOOT
- ────────────────────────────────────────────── */
onReady(() => {
  initCursor();
  initOrbs();
  initScrollProgress();
  initNavbar();
  initVideoScanline();
  initCTAGlow();

  setTimeout(() => {
    initHeroHeadline();
    initScrollReveal();
    initMagneticButtons();
    initCardTilt();
    initCounters();
    initMarqueePause();
  }, 2500);
});

})();
