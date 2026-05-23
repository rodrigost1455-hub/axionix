<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Axionix POINT · POS — Velocidad en el mostrador</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
<style>
  :root {
    --bg: #05070d;
    --bg-elev: #0b1020;
    --bg-card: #0d1426;
    --line: rgba(148, 184, 255, 0.08);
    --line-strong: rgba(148, 184, 255, 0.16);
    --text: #e6ecff;
    --text-dim: #8a96b3;
    --text-faint: #53607d;
    --accent: #22d3ee;
    --accent-2: #3b82f6;
    --accent-glow: rgba(34, 211, 238, 0.35);
    --pos-bg: #f5f7fb;
    --pos-card: #ffffff;
    --pos-line: #e6eaf2;
    --pos-text: #0f172a;
    --pos-text-dim: #64748b;
    --pos-accent: #6366f1;
    --pos-green: #16a34a;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--bg); color: var(--text); font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
  body::before {
    content: "";
    position: fixed; inset: 0;
    background-image:
      radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.16), transparent 60%),
      radial-gradient(ellipse 60% 40% at 15% 30%, rgba(34, 211, 238, 0.06), transparent 70%),
      linear-gradient(to bottom, #05070d, #05070d);
    pointer-events: none;
    z-index: 0;
  }
  body::after {
    content: "";
    position: fixed; inset: 0;
    background-image:
      linear-gradient(rgba(148, 184, 255, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(148, 184, 255, 0.035) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
    pointer-events: none;
    z-index: 0;
  }
  .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
  #root { position: relative; z-index: 1; }

  .container { max-width: 1320px; margin: 0 auto; padding: 0 32px; }
  @media (max-width: 640px) { .container { padding: 0 20px; } }

  .btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px; border-radius: 10px; font-weight: 500; font-size: 14px; cursor: pointer; transition: all 0.2s ease; text-decoration: none; border: 1px solid transparent; white-space: nowrap; }
  .btn-primary { background: linear-gradient(135deg, var(--accent), var(--accent-2)); color: #02111f; font-weight: 600; box-shadow: 0 0 0 1px rgba(34,211,238,0.3), 0 8px 24px -8px var(--accent-glow); }
  .btn-primary:hover { transform: translateY(-1px); }
  .btn-outline { background: rgba(255,255,255,0.02); color: var(--text); border-color: var(--line-strong); }
  .btn-outline:hover { background: rgba(34,211,238,0.06); border-color: var(--accent); color: var(--accent); }
  .btn-glow { background: rgba(10,18,36,0.6); color: var(--text); border: 1px solid var(--accent); box-shadow: 0 0 0 1px var(--accent), 0 0 20px -4px var(--accent-glow); }
  .btn-ghost { background: transparent; color: var(--text-dim); }
  .btn-ghost:hover { color: var(--text); }

  .tag { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 999px; border: 1px solid var(--line-strong); background: rgba(34, 211, 238, 0.04); font-size: 12px; color: var(--text-dim); font-family: 'JetBrains Mono', monospace; letter-spacing: 0.02em; }

  .nav { position: sticky; top: 0; z-index: 50; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); background: rgba(5,7,13,0.7); border-bottom: 1px solid var(--line); }
  .nav-link { color: var(--text-dim); font-size: 14px; font-weight: 500; padding: 8px 14px; border-radius: 8px; text-decoration: none; transition: all 0.15s ease; }
  .nav-link:hover { color: var(--text); background: rgba(255,255,255,0.03); }
  .nav-link.active { color: var(--accent); }

  .logo-mark { width: 28px; height: 28px; border-radius: 7px; background: linear-gradient(135deg, var(--accent), var(--accent-2)); position: relative; box-shadow: 0 0 16px -2px var(--accent-glow); }
  .logo-mark::after { content: ""; position: absolute; inset: 6px; background: var(--bg); border-radius: 3px; clip-path: polygon(0 100%, 50% 0, 100% 100%, 65% 100%, 50% 60%, 35% 100%); }

  h1, h2, h3, h4 { font-family: 'Inter', sans-serif; letter-spacing: -0.02em; margin: 0; }
  h1 { font-size: clamp(40px, 5.5vw, 64px); font-weight: 700; line-height: 1.04; letter-spacing: -0.035em; }
  h2 { font-size: clamp(28px, 3.5vw, 42px); font-weight: 600; line-height: 1.1; letter-spacing: -0.03em; }
  h3 { font-size: 18px; font-weight: 600; letter-spacing: -0.015em; }
  p { margin: 0; line-height: 1.55; color: var(--text-dim); }

  .gradient-text { background: linear-gradient(135deg, var(--accent) 0%, #fff 50%, var(--accent-2) 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }

  @keyframes pulse-dot { 0%, 100% { box-shadow: 0 0 0 0 rgba(34,211,238,0.6); } 50% { box-shadow: 0 0 0 6px rgba(34,211,238,0); } }
  .pulse-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); animation: pulse-dot 2s infinite; }

  @keyframes fadeUp { from { transform: translateY(16px); } to { transform: translateY(0); } }
  .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }

  /* Browser window mockup */
  .mockup-frame {
    position: relative;
    border-radius: 18px;
    background: linear-gradient(135deg, rgba(34,211,238,0.35), rgba(59,130,246,0.35), rgba(34,211,238,0.1));
    padding: 1px;
    box-shadow: 0 0 100px -20px rgba(34, 211, 238, 0.3), 0 40px 80px -20px rgba(0,0,0,0.6);
  }
  .mockup-frame::before {
    content: ""; position: absolute; inset: -30px;
    background: radial-gradient(ellipse at center, rgba(34,211,238,0.12), transparent 70%);
    filter: blur(30px); z-index: -1; pointer-events: none;
  }
  .mockup-inner { background: var(--pos-bg); border-radius: 17px; overflow: hidden; }
  .mockup-chrome {
    display: flex; align-items: center; gap: 10px;
    padding: 12px 16px;
    background: #0a0e1a;
    border-bottom: 1px solid rgba(148,184,255,0.08);
  }
  .mockup-dot { width: 11px; height: 11px; border-radius: 50%; }
  .mockup-urlbar {
    flex: 1; margin: 0 12px;
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--line);
    border-radius: 6px;
    padding: 4px 12px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px; color: var(--text-faint);
    display: flex; align-items: center; gap: 8px;
  }

  /* POS interior (light) */
  .pos { color: var(--pos-text); font-family: 'Inter', sans-serif; }
  .pos-topbar {
    display: flex; align-items: center; gap: 16px;
    padding: 12px 20px;
    background: #0f172a;
    color: white;
  }
  .pos-brand { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 15px; letter-spacing: -0.01em; }
  .pos-brand small { font-size: 9px; letter-spacing: 0.15em; color: var(--accent); font-weight: 500; display: block; margin-top: 2px; }
  .pos-search {
    flex: 1; display: flex; align-items: center; gap: 10px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 9px 14px;
    color: white; font-size: 13px;
  }
  .pos-search input { flex: 1; background: transparent; border: none; outline: none; color: white; font: inherit; }
  .pos-search input::placeholder { color: rgba(255,255,255,0.4); }
  .pos-status { display: inline-flex; align-items: center; gap: 6px; padding: 6px 10px; border-radius: 999px; background: rgba(22,163,74,0.15); border: 1px solid rgba(22,163,74,0.35); color: #4ade80; font-size: 12px; font-weight: 500; }
  .pos-user { display: flex; align-items: center; gap: 10px; }
  .pos-avatar { width: 30px; height: 30px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent-2)); display: flex; align-items: center; justify-content: center; color: #02111f; font-weight: 700; font-size: 12px; }

  .pos-cats { display: flex; gap: 10px; padding: 16px 20px 12px; overflow-x: auto; background: var(--pos-bg); }
  .pos-cat {
    flex-shrink: 0;
    padding: 10px 16px; border-radius: 10px;
    background: var(--pos-card);
    border: 1px solid var(--pos-line);
    display: flex; align-items: center; gap: 8px;
    font-size: 13px; font-weight: 500; color: var(--pos-text);
    cursor: pointer; transition: all 0.15s ease;
    min-width: 88px;
    flex-direction: column; padding: 10px 14px;
  }
  .pos-cat-icon { width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; }
  .pos-cat.active { border-color: var(--pos-accent); background: #eef2ff; box-shadow: 0 0 0 2px rgba(99,102,241,0.15); }
  .pos-cat:hover:not(.active) { border-color: #94a3b8; }

  .pos-body { display: grid; grid-template-columns: 1fr 280px; gap: 16px; padding: 0 20px 20px; background: var(--pos-bg); }
  @media (max-width: 860px) { .pos-body { grid-template-columns: 1fr; } }

  .pos-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
  @media (max-width: 1080px) { .pos-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 640px) { .pos-grid { grid-template-columns: repeat(2, 1fr); } }

  .pos-card {
    background: var(--pos-card);
    border-radius: 10px;
    border: 1px solid var(--pos-line);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    cursor: pointer;
    display: flex; flex-direction: column;
  }
  .pos-card:hover { transform: translateY(-4px); box-shadow: 0 14px 28px -14px rgba(15,23,42,0.25); border-color: #cbd5e1; }
  .pos-card-img { aspect-ratio: 4/3; background: #f1f5f9; display: flex; align-items: center; justify-content: center; position: relative; }
  .pos-card-body { padding: 12px; display: flex; flex-direction: column; gap: 6px; }
  .pos-card-name { font-size: 11.5px; font-weight: 700; color: var(--pos-text); line-height: 1.25; letter-spacing: 0; text-transform: uppercase; min-height: 28px; }
  .pos-card-price { display: flex; align-items: baseline; gap: 4px; }
  .pos-card-price b { font-size: 15px; font-weight: 700; color: var(--pos-text); }
  .pos-card-price span { font-size: 10px; color: var(--pos-text-dim); font-family: 'JetBrains Mono', monospace; }
  .pos-stock { display: inline-flex; align-items: center; gap: 5px; font-size: 10.5px; color: var(--pos-green); font-weight: 500; }
  .pos-stock-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--pos-green); }
  .pos-stock.low { color: #d97706; }
  .pos-stock.low .pos-stock-dot { background: #d97706; }
  .pos-add {
    display: flex; align-items: center; justify-content: center; gap: 4px;
    padding: 8px 10px;
    background: var(--pos-green);
    color: white; font-size: 10.5px; font-weight: 700;
    border: none; border-radius: 6px; cursor: pointer;
    transition: all 0.15s ease;
    letter-spacing: 0.04em;
    margin-top: 4px;
  }
  .pos-add:hover { background: #15803d; }
  .pos-add.added { background: var(--pos-accent); }

  .pos-cart {
    background: var(--pos-card);
    border-radius: 12px;
    border: 1px solid var(--pos-line);
    padding: 16px;
    display: flex; flex-direction: column;
    min-height: 480px;
  }
  .pos-cart h4 { font-size: 11px; color: var(--pos-text-dim); letter-spacing: 0.1em; font-family: 'JetBrains Mono', monospace; font-weight: 500; margin-bottom: 12px; }
  .pos-cart-empty { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 12px; padding: 20px; color: var(--pos-text-dim); }
  .pos-cart-list { flex: 1; display: flex; flex-direction: column; gap: 8px; overflow-y: auto; }
  .pos-cart-item { display: flex; gap: 8px; padding: 8px; border-radius: 8px; background: #f8fafc; border: 1px solid var(--pos-line); }
  .pos-cart-item-info { flex: 1; min-width: 0; }
  .pos-cart-item-name { font-size: 11px; font-weight: 600; color: var(--pos-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .pos-cart-item-meta { font-size: 10px; color: var(--pos-text-dim); font-family: 'JetBrains Mono', monospace; }
  .pos-qty { display: flex; align-items: center; gap: 4px; }
  .pos-qty button { width: 20px; height: 20px; border-radius: 4px; background: white; border: 1px solid var(--pos-line); cursor: pointer; font-size: 12px; line-height: 1; color: var(--pos-text); }
  .pos-qty span { min-width: 16px; text-align: center; font-size: 11px; font-weight: 600; }
  .pos-cart-total { border-top: 1px solid var(--pos-line); margin-top: 12px; padding-top: 12px; }
  .pos-cart-row { display: flex; justify-content: space-between; font-size: 12px; color: var(--pos-text-dim); margin-bottom: 4px; }
  .pos-cart-row.big { font-size: 16px; color: var(--pos-text); font-weight: 700; margin-top: 8px; }
  .pos-cart-cobrar { margin-top: 12px; padding: 12px; background: var(--pos-accent); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 13px; }
  .pos-cart-cobrar:hover { background: #4f46e5; }

  /* Feature card */
  .feat-card { background: linear-gradient(180deg, rgba(13,20,38,0.8), rgba(10,15,28,0.6)); border: 1px solid var(--line); border-radius: 16px; padding: 28px; transition: all 0.25s ease; position: relative; overflow: hidden; }
  .feat-card:hover { border-color: var(--line-strong); transform: translateY(-2px); }
  .feat-icon { width: 40px; height: 40px; border-radius: 10px; background: rgba(34,211,238,0.08); border: 1px solid rgba(34,211,238,0.25); display: flex; align-items: center; justify-content: center; color: var(--accent); margin-bottom: 20px; }

  /* Whatsapp btn */
  .wa-btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 22px; background: linear-gradient(135deg, #25D366, #128C7E); color: white; font-weight: 600; font-size: 15px; border-radius: 12px; text-decoration: none; box-shadow: 0 10px 30px -10px rgba(37, 211, 102, 0.6); transition: all 0.2s ease; border: 1px solid rgba(255,255,255,0.1); }
  .wa-btn:hover { transform: translateY(-1px); }

  .corner-marks { position: relative; }
  .corner-marks::before, .corner-marks::after { content: ""; position: absolute; width: 10px; height: 10px; border: 1px solid var(--accent); opacity: 0.5; z-index: 2; }
  .corner-marks::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }
  .corner-marks::after { bottom: -1px; right: -1px; border-left: none; border-top: none; }

  @keyframes flyToCart {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: translate(150px, -50px) scale(0.2); opacity: 0; }
  }
</style>
</head>
<body>
<div id="root"></div>
<script type="text/babel" src="pos.jsx"></script>
</body>
</html>
