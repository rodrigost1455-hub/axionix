<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Axionix FlowMind — Bienestar financiero con IA</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
<style>
  :root {
    /* Outer page (Axionix dark) */
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
    /* FlowMind brand */
    --fm: #a855f7;
    --fm-2: #ec4899;
    --fm-3: #6366f1;
    --fm-glow: rgba(168, 85, 247, 0.45);
    /* App interior */
    --app-bg: #0a0612;
    --app-card: #15131f;
    --app-card-2: #1c1928;
    --app-line: rgba(255, 255, 255, 0.06);
    --app-text: #ffffff;
    --app-text-dim: #9b94b3;
    --app-text-faint: #6b6485;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--bg); color: var(--text); font-family: 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
  body::before {
    content: "";
    position: fixed; inset: 0;
    background-image:
      radial-gradient(ellipse 80% 50% at 50% -10%, rgba(168, 85, 247, 0.20), transparent 60%),
      radial-gradient(ellipse 60% 40% at 85% 30%, rgba(236, 72, 153, 0.12), transparent 70%),
      radial-gradient(ellipse 50% 30% at 15% 60%, rgba(99, 102, 241, 0.10), transparent 70%),
      linear-gradient(to bottom, #05070d, #05070d);
    pointer-events: none;
    z-index: 0;
  }
  body::after {
    content: "";
    position: fixed; inset: 0;
    background-image:
      linear-gradient(rgba(168, 85, 247, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(168, 85, 247, 0.04) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
    pointer-events: none;
    z-index: 0;
  }
  .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
  #root { position: relative; z-index: 1; }

  .container { max-width: 1240px; margin: 0 auto; padding: 0 32px; }
  @media (max-width: 640px) { .container { padding: 0 20px; } }

  .btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px; border-radius: 10px; font-weight: 500; font-size: 14px; cursor: pointer; transition: all 0.2s ease; text-decoration: none; border: 1px solid transparent; white-space: nowrap; }
  .btn-primary { background: linear-gradient(135deg, var(--fm-3), var(--fm), var(--fm-2)); color: white; font-weight: 600; box-shadow: 0 0 0 1px rgba(168,85,247,0.4), 0 8px 24px -8px var(--fm-glow); }
  .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 0 0 1px var(--fm), 0 12px 32px -8px var(--fm-glow); }
  .btn-outline { background: rgba(255,255,255,0.02); color: var(--text); border-color: var(--line-strong); }
  .btn-outline:hover { background: rgba(168,85,247,0.08); border-color: var(--fm); color: var(--fm); }
  .btn-glow { background: rgba(10,18,36,0.6); color: var(--text); border: 1px solid var(--fm); box-shadow: 0 0 0 1px var(--fm), 0 0 20px -4px var(--fm-glow); }
  .btn-ghost { background: transparent; color: var(--text-dim); }
  .btn-ghost:hover { color: var(--text); }

  .tag { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 999px; border: 1px solid var(--line-strong); background: rgba(168, 85, 247, 0.06); font-size: 12px; color: var(--text-dim); font-family: 'JetBrains Mono', monospace; letter-spacing: 0.02em; }

  .nav { position: sticky; top: 0; z-index: 50; backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); background: rgba(5,7,13,0.7); border-bottom: 1px solid var(--line); }
  .nav-link { color: var(--text-dim); font-size: 14px; font-weight: 500; padding: 8px 14px; border-radius: 8px; text-decoration: none; transition: all 0.15s ease; }
  .nav-link:hover { color: var(--text); background: rgba(255,255,255,0.03); }
  .nav-link.active { color: var(--fm); }

  .logo-mark { width: 28px; height: 28px; border-radius: 7px; background: linear-gradient(135deg, var(--accent), var(--accent-2)); position: relative; box-shadow: 0 0 16px -2px var(--accent-glow); }
  .logo-mark::after { content: ""; position: absolute; inset: 6px; background: var(--bg); border-radius: 3px; clip-path: polygon(0 100%, 50% 0, 100% 100%, 65% 100%, 50% 60%, 35% 100%); }

  h1, h2, h3, h4 { font-family: 'Inter', sans-serif; letter-spacing: -0.02em; margin: 0; }
  h1 { font-size: clamp(40px, 5.5vw, 64px); font-weight: 700; line-height: 1.04; letter-spacing: -0.035em; }
  h2 { font-size: clamp(28px, 3.5vw, 42px); font-weight: 600; line-height: 1.1; letter-spacing: -0.03em; }
  h3 { font-size: 18px; font-weight: 600; letter-spacing: -0.015em; }
  p { margin: 0; line-height: 1.55; color: var(--text-dim); }

  .gradient-text { background: linear-gradient(135deg, var(--fm-3) 0%, #fff 50%, var(--fm-2) 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }

  @keyframes pulse-dot { 0%, 100% { box-shadow: 0 0 0 0 rgba(168,85,247,0.6); } 50% { box-shadow: 0 0 0 6px rgba(168,85,247,0); } }
  .pulse-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--fm); animation: pulse-dot 2s infinite; }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
  @keyframes screen-in { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

  /* Feature card */
  .feat-card { background: linear-gradient(180deg, rgba(28,15,40,0.6), rgba(10,15,28,0.6)); border: 1px solid var(--line); border-radius: 16px; padding: 28px; transition: all 0.25s ease; position: relative; overflow: hidden; }
  .feat-card:hover { border-color: rgba(168,85,247,0.25); transform: translateY(-2px); }
  .feat-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }

  /* WhatsApp btn */
  .wa-btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 22px; background: linear-gradient(135deg, #25D366, #128C7E); color: white; font-weight: 600; font-size: 15px; border-radius: 12px; text-decoration: none; box-shadow: 0 10px 30px -10px rgba(37, 211, 102, 0.6); transition: all 0.2s ease; border: 1px solid rgba(255,255,255,0.1); }
  .wa-btn:hover { transform: translateY(-1px); }

  /* Store badge buttons */
  .store-btn {
    display: inline-flex; align-items: center; gap: 12px;
    padding: 10px 18px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    color: var(--text);
    text-decoration: none;
    transition: all 0.2s ease;
    backdrop-filter: blur(8px);
  }
  .store-btn:hover { background: rgba(168,85,247,0.10); border-color: var(--fm); transform: translateY(-1px); }
  .store-btn-icon { width: 28px; height: 28px; flex-shrink: 0; }
  .store-btn-text { display: flex; flex-direction: column; line-height: 1.2; }
  .store-btn-text small { font-size: 10px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 500; }
  .store-btn-text strong { font-size: 15px; font-weight: 600; letter-spacing: -0.01em; }

  /* iPhone bezel */
  .phone {
    position: relative;
    width: 340px; height: 700px;
    background: #1a1a1f;
    border-radius: 50px;
    padding: 12px;
    box-shadow:
      0 0 0 2px #2a2a30,
      0 0 0 4px #0a0a0e,
      0 30px 100px -20px rgba(168, 85, 247, 0.35),
      0 60px 120px -30px rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
  .phone::before {
    /* edge highlight */
    content: "";
    position: absolute; inset: 0;
    border-radius: 50px;
    background: linear-gradient(160deg, rgba(255,255,255,0.10), transparent 30%, transparent 70%, rgba(255,255,255,0.06));
    pointer-events: none;
  }
  .phone-screen {
    width: 100%; height: 100%;
    background: var(--app-bg);
    border-radius: 38px;
    overflow: hidden;
    position: relative;
  }
  .phone-island {
    position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
    width: 120px; height: 32px; background: #000;
    border-radius: 20px; z-index: 30;
  }
  .phone-status {
    position: absolute; top: 0; left: 0; right: 0;
    padding: 16px 28px 0; height: 50px;
    display: flex; justify-content: space-between; align-items: center;
    font-family: 'Inter', sans-serif; font-weight: 600; font-size: 15px;
    color: white; z-index: 25;
    pointer-events: none;
  }

  /* App scroll container */
  .app {
    position: absolute; inset: 0;
    padding: 58px 18px 84px;
    overflow-y: auto;
    color: var(--app-text);
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .app::-webkit-scrollbar { display: none; }

  /* Avatar gradient */
  .avatar-grad {
    width: 42px; height: 42px; border-radius: 12px;
    background: linear-gradient(135deg, var(--fm), var(--fm-2));
    display: flex; align-items: center; justify-content: center;
    color: white; font-weight: 700; font-size: 17px;
    box-shadow: 0 8px 20px -6px rgba(236,72,153,0.5);
  }

  .icon-btn {
    width: 36px; height: 36px; border-radius: 10px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.06);
    display: flex; align-items: center; justify-content: center;
    color: var(--app-text); cursor: pointer;
    transition: all 0.15s ease;
    position: relative;
  }
  .icon-btn:hover { background: rgba(168,85,247,0.10); border-color: rgba(168,85,247,0.3); }

  .balance-card {
    background: linear-gradient(135deg, #5b6cf6 0%, #a855f7 50%, #ec4899 100%);
    border-radius: 22px;
    padding: 18px 20px;
    position: relative;
    overflow: hidden;
    color: white;
    box-shadow: 0 18px 40px -16px rgba(168, 85, 247, 0.55);
  }
  .balance-card::before {
    content: "";
    position: absolute;
    top: -30px; right: -30px;
    width: 160px; height: 160px;
    background: radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%);
    pointer-events: none;
  }
  .balance-card::after {
    content: "";
    position: absolute;
    bottom: -40px; left: -20px;
    width: 140px; height: 140px;
    background: radial-gradient(circle, rgba(255,255,255,0.10), transparent 60%);
    pointer-events: none;
  }

  .stat-card {
    background: var(--app-card);
    border: 1px solid var(--app-line);
    border-radius: 18px;
    padding: 14px;
  }

  .ai-card {
    background: var(--app-card);
    border: 1px solid var(--app-line);
    border-radius: 16px;
    padding: 14px;
    display: flex; gap: 12px; align-items: center;
  }

  .ai-icon {
    width: 30px; height: 30px;
    border-radius: 9px;
    background: linear-gradient(135deg, var(--fm), var(--fm-2));
    display: flex; align-items: center; justify-content: center;
    color: white;
    flex-shrink: 0;
  }

  /* Bottom tab bar */
  .tab-bar {
    position: absolute; bottom: 0; left: 0; right: 0;
    height: 84px;
    padding: 8px 14px 22px;
    background: rgba(10,6,18,0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255,255,255,0.04);
    display: flex; align-items: flex-start; justify-content: space-between;
    z-index: 20;
  }
  .tab-item {
    flex: 1; display: flex; flex-direction: column; align-items: center;
    gap: 4px; padding: 8px 4px;
    cursor: pointer; transition: color 0.15s ease;
    color: var(--app-text-faint);
    font-size: 10px; font-weight: 500;
  }
  .tab-item.active { color: var(--fm); }
  .tab-item:hover { color: var(--app-text-dim); }
  .tab-item.active:hover { color: var(--fm); }
  .tab-fab {
    width: 50px; height: 50px; border-radius: 50%;
    background: linear-gradient(135deg, var(--fm-3), var(--fm), var(--fm-2));
    display: flex; align-items: center; justify-content: center;
    color: white; cursor: pointer;
    box-shadow: 0 8px 24px -4px rgba(168,85,247,0.6), 0 0 0 4px rgba(168,85,247,0.10);
    transition: transform 0.15s ease;
    margin-top: -14px;
  }
  .tab-fab:hover { transform: scale(1.06); }
  .tab-indicator {
    position: absolute; top: 0; width: 32px; height: 3px;
    background: var(--fm); border-radius: 0 0 4px 4px;
    transition: left 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Generic chip */
  .chip {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 4px 10px; border-radius: 999px;
    font-size: 11px; font-weight: 500;
  }

  /* Marketing badges */
  .marketing-list { display: flex; flex-direction: column; gap: 16px; }
  .marketing-item { display: flex; gap: 14px; align-items: flex-start; }
  .marketing-num {
    width: 36px; height: 36px; border-radius: 10px;
    background: linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.12));
    border: 1px solid rgba(168,85,247,0.25);
    display: flex; align-items: center; justify-content: center;
    color: var(--fm); font-weight: 700; font-size: 13px;
    flex-shrink: 0;
    font-family: 'JetBrains Mono', monospace;
  }
  .marketing-content h4 { font-size: 17px; margin-bottom: 4px; color: var(--text); }
  .marketing-content p { font-size: 14px; }
</style>
</head>
<body>
<div id="root"></div>
<script type="text/babel" src="flowmind.jsx"></script>
</body>
</html>
