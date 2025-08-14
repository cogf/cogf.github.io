
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Our Action Plan</title>
<!-- Ionicons (glass-like icons) -->
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

<style>
  /* ---------- Reset & base ---------- */
  :root{
    --bg-900: #02040a;
    --glass: rgba(255,255,255,0.06);
    --glass-2: rgba(255,255,255,0.04);
    --accent: #66d9ff;
    --accent-2: #8affc1;
    --muted: rgba(255,255,255,0.6);
    --card-radius: 16px;
  }
  *{box-sizing:border-box}
  html,body{height:100%}
  body{
    margin:0;
    font-family: -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: radial-gradient(circle at 20% 10%, rgba(20,40,60,0.18), transparent 15%),
                radial-gradient(circle at 85% 80%, rgba(40,20,55,0.12), transparent 18%),
                var(--bg-900);
    color:#fff;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    overflow-y:scroll;
    perspective:1200px;
  }

  /* ---------- Dark aurora CSS-only animated background ---------- */
  body::before{
    content:"";
    position:fixed; inset:0;
    z-index:-3;
    background:
      radial-gradient(circle at 10% 20%, rgba(26, 88, 80,0.12), transparent 8%),
      radial-gradient(circle at 80% 35%, rgba(34, 107, 255,0.10), transparent 12%),
      radial-gradient(circle at 50% 75%, rgba(255, 220, 80,0.06), transparent 13%);
    filter: blur(40px);
    opacity:1;
    animation: auroraShift 22s ease-in-out infinite;
  }
  @keyframes auroraShift{
    0%{transform:translateY(0) scale(1)}
    50%{transform:translateY(-6vh) scale(1.03)}
    100%{transform:translateY(0) scale(1)}
  }

  /* ---------- floating "subtle" particles (lightweight) ---------- */
  .particle {
    position: fixed;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01));
    pointer-events: none;
    z-index:-2;
    filter: blur(2px);
    animation: rise linear infinite;
    opacity:0.6;
  }
  @keyframes rise{
    from{transform:translateY(120vh) scale(.7)}
    to{transform:translateY(-20vh) scale(1)}
  }

  /* ---------- header (glass) ---------- */
  header.app-header{
    position:sticky;
    top:1rem;
    margin:1rem auto;
    max-width:1200px;
    display:flex;
    align-items:center;
    gap:18px;
    padding:18px 22px;
    border-radius:24px;
    backdrop-filter: blur(10px) saturate(120%);
    background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
    box-shadow: 0 8px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02);
    margin-left:auto;
    margin-right:auto;
    z-index:50;
    width:calc(100% - 40px);
  }
  .logo{
    width:64px;
    height:64px;
    border-radius:12px;
    background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
    display:flex; align-items:center; justify-content:center;
    box-shadow: 0 6px 18px rgba(0,0,0,0.5);
    border:1px solid rgba(255,255,255,0.03);
  }
  .logo ion-icon{font-size:30px; color:var(--accent)}
  .header-text{
    flex:1;
  }
  .title{
    font-size:20px;
    letter-spacing:0.2px;
    font-weight:600;
    color:#fff;
    margin-bottom:4px;
  }
  .subtitle{
    font-size:13px; color:var(--muted);
    line-height:1.2;
  }
  .header-actions{
    display:flex; gap:10px; align-items:center;
  }
  .glass-btn{
    padding:8px 12px;
    border-radius:12px;
    border:1px solid rgba(255,255,255,0.04);
    background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
    color:var(--muted);
    display:inline-flex; gap:8px; align-items:center;
    cursor:pointer;
    transition: transform .14s ease, box-shadow .14s ease;
    backdrop-filter: blur(6px);
  }
  .glass-btn:hover{ transform:translateY(-4px); box-shadow:0 12px 30px rgba(0,0,0,0.6) }

  /* ---------- top progress bar ---------- */
  #progress {
    position: fixed;
    top: 0; left: 0;
    height:4px;
    background: linear-gradient(90deg, rgba(102,217,255,0.95), rgba(138,255,193,0.95));
    width:0%;
    z-index:120;
    box-shadow: 0 2px 8px rgba(0,0,0,0.6);
  }

  /* ---------- gallery layout ---------- */
  .container{
    max-width:1200px;
    margin: 26px auto 80px;
    padding: 0 20px;
  }
  .intro{
    text-align:center;
    margin:22px 0 40px;
  }
  .intro h1{
    font-size:34px; margin-bottom:6px; letter-spacing:-0.4px;
    color:linear-gradient(90deg,#fff,#ddd);
  }
  .intro p{ color:var(--muted); font-size:15px; max-width:880px; margin:0 auto }

  .grid{
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap:20px;
    align-items:stretch;
  }

  /* ---------- gallery card (glass) ---------- */
  .card{
    position:relative;
    border-radius: var(--card-radius);
    overflow:hidden;
    transform-style:preserve-3d;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
    border:1px solid rgba(255,255,255,0.03);
    box-shadow: 0 10px 30px rgba(0,0,0,0.6);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
    will-change: transform;
    min-height:200px;
  }
  .card .stage{
    width:100%;
    height:100%;
    transform-origin: center center;
    transition: box-shadow .18s ease, transform .18s ease;
  }
  .card img{
    width:100%;
    height:320px;
    object-fit:cover;
    display:block;
    transform-origin:center center;
    transition: transform .2s ease, filter .2s ease;
    backface-visibility:hidden;
  }

  /* caption (blurred backdrop) */
  .caption {
    position:absolute;
    left:12px; right:12px; bottom:12px;
    padding:10px 12px;
    border-radius:12px;
    backdrop-filter: blur(8px) saturate(120%);
    background: linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.25));
    color:#fff; font-size:14px;
    transform: translateY(14px); opacity:0;
    transition: transform .22s ease, opacity .22s ease;
    display:flex; align-items:center; justify-content:center;
  }
  .card:hover .caption{ transform:translateY(0); opacity:1 }

  /* spinner center */
  .spinner {
    position:absolute;
    left:50%; top:50%;
    transform:translate(-50%,-50%);
    width:36px; height:36px;
    border-radius:50%;
    border:4px solid rgba(255,255,255,0.08);
    border-top-color: var(--accent);
    animation: spin 0.9s linear infinite;
    z-index:6;
  }
  @keyframes spin{ to{ transform:translate(-50%,-50%) rotate(360deg) } }

  /* lightbox */
  .lightbox {
    position:fixed; inset:0;
    display:flex; align-items:center; justify-content:center;
    background:rgba(0,0,0,0.85);
    z-index:200;
    opacity:0; pointer-events:none;
    transition: opacity .18s ease;
  }
  .lightbox.active{ opacity:1; pointer-events:auto }
  .lightbox img{
    max-width:92%; max-height:92%;
    border-radius:14px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.7);
  }

  /* subtle glow elements */
  .glow {
    box-shadow: 0 6px 30px rgba(102,217,255,0.06), 0 1px 0 rgba(255,255,255,0.02);
  }

  /* small footer */
  footer{
    text-align:center; color:var(--muted); font-size:13px;
    padding:40px 20px 80px;
  }

  /* responsive tweaks */
  @media (max-width:600px){
    .card img{ height:220px }
    header.app-header{ border-radius:14px; padding:12px }
    .title{ font-size:16px }
  }

  /* cursor glow-trail (a single blobby element + smoothing via JS) */
  .cursor-glow{
    position:fixed; left:0; top:0; width:46px; height:46px;
    border-radius:50%;
    pointer-events:none; z-index:150;
    transform: translate(-50%,-50%);
    background: radial-gradient(circle at 35% 30%, rgba(102,217,255,0.9), rgba(102,217,255,0.2) 35%, transparent 55%);
    mix-blend-mode: screen;
    filter: blur(6px) saturate(140%);
    transition: width .12s ease, height .12s ease;
  }

  /* subtle fade in for cards on scroll */
  .card.fade-in{ opacity:0; transform:translateY(8px) scale(.995) }
  .card.visible{ opacity:1; transform:translateY(0) scale(1); transition: opacity .5s ease, transform .5s ease }

</style>
</head>
<body>

  <!-- top progress -->
  <div id="progress"></div>

  <!-- header -->
  <header class="app-header glow" role="banner" aria-label="Gallery header">
    <div class="logo" aria-hidden>
      <ion-icon name="sparkles-outline"></ion-icon>
    </div>
    <div class="header-text">
      <div class="title"> Our Action Plan</div>
      <div class="subtitle">yes we coded a seprate website for this.</div>
    </div>
    <div class="header-actions">
      <button class="glass-btn"><ion-icon name="images-outline"></ion-icon> Gallery</button>
      <button class="glass-btn"><ion-icon name="information-circle-outline"></ion-icon> Info</button>
    </div>
  </header>

  <!-- container -->
  <main class="container">
    <section class="intro">
      <h2 style="font-weight:600; font-size:28px; margin-bottom:6px">Photos</h2>
      <p>click on them to view the full image.</p>
    </section>

    <!-- grid -->
    <div class="grid" id="grid">
      <!-- We use your original image URLs (fixed the broken one). Each card gets spinner + caption -->
      <div class="card" data-src="https://imgs.search.brave.com/2ChT6H9fwE10j15uyPdRx3HRaFAHIshbNiBBjYgzrrc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTI0/MjM0OC9wZXhlbHMt/cGhvdG8tMTI0MjM0/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA">
        <div class="stage">
          <div class="spinner" aria-hidden></div>
          <img alt="Gallery Item 1" src="https://imgs.search.brave.com/2ChT6H9fwE10j15uyPdRx3HRaFAHIshbNiBBjYgzrrc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTI0/MjM0OC9wZXhlbHMt/cGhvdG8tMTI0MjM0/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" />
        </div>
        <div class="caption">Gallery Item 1</div>
      </div>

      <div class="card" data-src="https://imgs.search.brave.com/2ChT6H9fwE10j15uyPdRx3HRaFAHIshbNiBBjYgzrrc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTI0/MjM0OC9wZXhlbHMt/cGhvdG8tMTI0MjM0/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA">
        <div class="stage">
          <div class="spinner" aria-hidden></div>
          <img alt="Gallery Item 2" src="https://imgs.search.brave.com/2ChT6H9fwE10j15uyPdRx3HRaFAHIshbNiBBjYgzrrc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTI0/MjM0OC9wZXhlbHMt/cGhvdG8tMTI0MjM0/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" />
        </div>
        <div class="caption">Gallery Item 2</div>
      </div>

      <div class="card" data-src="https://imgs.search.brave.com/F8-NONJLOOTRJyj6HPCeJJxEWSeaJEAkwHUZaGCw0KY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE3MDE1MzQw/MDg2OTMtMGVlZTA2/MzJkNDdhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhkMlZpYzJsMFpT/VXlNR0poWTJ0bmNt/OTFibVI4Wlc1OE1I/eDhNSHg4ZkRBPQ">
        <div class="stage">
          <div class="spinner" aria-hidden></div>
          <img alt="Gallery Item 3" src="https://imgs.search.brave.com/F8-NONJLOOTRJyj6HPCeJJxEWSeaJEAkwHUZaGCw0KY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE3MDE1MzQw/MDg2OTMtMGVlZTA2/MzJkNDdhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhkMlZpYzJsMFpT/VXlNR0poWTJ0bmNt/OTFibVI4Wlc1OE1I/eDhNSHg4ZkRBPQ" />
        </div>
        <div class="caption">Gallery Item 3</div>
      </div>

      <div class="card" data-src="https://imgs.search.brave.com/2ChT6H9fwE10j15uyPdRx3HRaFAHIshbNiBBjYgzrrc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTI0/MjM0OC9wZXhlbHMt/cGhvdG8tMTI0MjM0/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA">
        <div class="stage">
          <div class="spinner" aria-hidden></div>
          <img alt="Gallery Item 4" src="https://imgs.search.brave.com/2ChT6H9fwE10j15uyPdRx3HRaFAHIshbNiBBjYgzrrc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTI0/MjM0OC9wZXhlbHMt/cGhvdG8tMTI0MjM0/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" />
        </div>
        <div class="caption">Gallery Item 4</div>
      </div>

      <div class="card" data-src="https://imgs.search.brave.com/2ChT6H9fwE10j15uyPdRx3HRaFAHIshbNiBBjYgzrrc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTI0/MjM0OC9wZXhlbHMt/cGhvdG8tMTI0MjM0/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA">
        <div class="stage">
          <div class="spinner" aria-hidden></div>
          <img alt="Gallery Item 5" src="https://imgs.search.brave.com/2ChT6H9fwE10j15uyPdRx3HRaFAHIshbNiBBjYgzrrc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTI0/MjM0OC9wZXhlbHMt/cGhvdG8tMTI0MjM0/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" />
        </div>
        <div class="caption">Gallery Item 5</div>
      </div>

      <div class="card" data-src="https://imgs.search.brave.com/HFfLO7MOxGeX4koqt_Yggo3NmrLbZ0MnmrBSF4tcKvo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9v/cmFuZ2UtYmx1ZS1i/YWNrZ3JvdW5kXzE4/MTYyNC03MTUuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw">
        <div class="stage">
          <div class="spinner" aria-hidden></div>
          <img alt="Gallery Item 6" src="https://imgs.search.brave.com/HFfLO7MOxGeX4koqt_Yggo3NmrLbZ0MnmrBSF4tcKvo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9v/cmFuZ2UtYmx1ZS1i/YWNrZ3JvdW5kXzE4/MTYyNC03MTUuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw" />
        </div>
        <div class="caption">Gallery Item 6</div>
      </div>

      <div class="card" data-src="https://imgs.search.brave.com/HFfLO7MOxGeX4koqt_Yggo3NmrLbZ0MnmrBSF4tcKvo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9v/cmFuZ2UtYmx1ZS1i/YWNrZ3JvdW5kXzE4/MTYyNC03MTUuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw">
        <div class="stage">
          <div class="spinner" aria-hidden></div>
          <img alt="Gallery Item 7" src="https://imgs.search.brave.com/HFfLO7MOxGeX4koqt_Yggo3NmrLbZ0MnmrBSF4tcKvo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9v/cmFuZ2UtYmx1ZS1i/YWNrZ3JvdW5kXzE4/MTYyNC03MTUuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw" />
        </div>
        <div class="caption">Gallery Item 7</div>
      </div>

      <div class="card" data-src="https://imgs.search.brave.com/F8-NONJLOOTRJyj6HPCeJJxEWSeaJEAkwHUZaGCw0KY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE3MDE1MzQw/MDg2OTMtMGVlZTA2/MzJkNDdhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhkMlZpYzJsMFpT/VXlNR0poWTJ0bmNt/OTFibVI4Wlc1OE1I/eDhNSHg4ZkRBPQ">
        <div class="stage">
          <div class="spinner" aria-hidden></div>
          <img alt="Gallery Item 8" src="https://imgs.search.brave.com/F8-NONJLOOTRJyj6HPCeJJxEWSeaJEAkwHUZaGCw0KY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE3MDE1MzQw/MDg2OTMtMGVlZTA2/MzJkNDdhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhkMlZpYzJsMFpT/VXlNR0poWTJ0bmNt/OTFibVI4Wlc1OE1I/eDhNSHg4ZkRBPQ" />
        </div>
        <div class="caption">Gallery Item 8</div>
      </div>

      <div class="card" data-src="https://imgs.search.brave.com/F8-NONJLOOTRJyj6HPCeJJxEWSeaJEAkwHUZaGCw0KY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE3MDE1MzQw/MDg2OTMtMGVlZTA2/MzJkNDdhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhkMlZpYzJsMFpT/VXlNR0poWTJ0bmNt/OTFibVI4Wlc1OE1I/eDhNSHg4ZkRBPQ">
        <div class="stage">
          <div class="spinner" aria-hidden></div>
          <img alt="Gallery Item 9" src="https://imgs.search.brave.com/F8-NONJLOOTRJyj6HPCeJJxEWSeaJEAkwHUZaGCw0KY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE3MDE1MzQw/MDg2OTMtMGVlZTA2/MzJkNDdhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhkMlZpYzJsMFpT/VXlNR0poWTJ0bmNt/OTFibVI4Wlc1OE1I/eDhNSHg4ZkRBPQ" />
        </div>
        <div class="caption">Gallery Item 9</div>
      </div>

      <div class="card" data-src="https://imgs.search.brave.com/F8-NONJLOOTRJyj6HPCeJJxEWSeaJEAkwHUZaGCw0KY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE3MDE1MzQw/MDg2OTMtMGVlZTA2/MzJkNDdhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhkMlZpYzJsMFpT/VXlNR0poWTJ0bmNt/OTFibVI4Wlc1OE1I/eDhNSHg4ZkRBPQ">
        <div class="stage">
          <div class="spinner" aria-hidden></div>
          <img alt="Gallery Item 10" src="https://imgs.search.brave.com/F8-NONJLOOTRJyj6HPCeJJxEWSeaJEAkwHUZaGCw0KY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE3MDE1MzQw/MDg2OTMtMGVlZTA2/MzJkNDdhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhkMlZpYzJsMFpT/VXlNR0poWTJ0bmNt/OTFibVI4Wlc1OE1I/eDhNSHg4ZkRBPQ" />
        </div>
        <div class="caption">Gallery Item 10</div>
      </div>
    </div>
  </main>

  <!-- lightbox -->
  <div class="lightbox" id="lightbox" aria-hidden="true"><img src="" alt="enlarged"></div>

  <!-- cursor glow -->
  <div class="cursor-glow" id="cursorGlow" aria-hidden="true"></div>

  <footer>&copy; made by a fabmous guy all alone</footer>

<script>
/* ---------- UTILITIES ---------- */

/* Shuffle grid children (keeps randomness) */
(function shuffleGrid(){
  const grid = document.getElementById('grid');
  for(let i = grid.children.length; i >= 0; i--){
    grid.appendChild(grid.children[Math.random() * i | 0]);
  }
})();

/* Create subtle particles (CSS-driven sizes/durations) */
(function createParticles(){
  const count = 24;
  for(let i=0;i<count;i++){
    const p=document.createElement('div');
    p.className='particle';
    const size = Math.random()*6 + 3;
    p.style.width = size+'px';
    p.style.height = size+'px';
    p.style.left = Math.random()*100 + 'vw';
    p.style.top = Math.random()*80 + 'vh';
    p.style.opacity = (Math.random()*0.4 + 0.2).toFixed(2);
    p.style.animationDuration = (Math.random()*14 + 8) + 's';
    p.style.animationDelay = (-Math.random()*8) + 's';
    p.style.background = 'radial-gradient(circle, rgba(255,255,255,0.06), rgba(255,255,255,0.01))';
    document.body.appendChild(p);
  }
})();

/* ---------- PROGRESS BAR ---------- */
const progressEl = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const percent = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  progressEl.style.width = percent + '%';
});

/* ---------- CURSOR GLOW TRAIL ---------- */
const glow = document.getElementById('cursorGlow');
let gx = window.innerWidth/2, gy = window.innerHeight/2;
let tx = gx, ty = gy;
window.addEventListener('mousemove', (e) => {
  tx = e.clientX; ty = e.clientY;
  glow.style.width = '48px'; glow.style.height = '48px';
});
function animateGlow(){
  gx += (tx - gx) * 0.18;
  gy += (ty - gy) * 0.18;
  glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%,-50%)`;
  requestAnimationFrame(animateGlow);
}
animateGlow();

/* Hide the glow when mouse leaves window for cleaner feel */
window.addEventListener('mouseleave', ()=> {
  glow.style.width = '0px'; glow.style.height = '0px';
});
window.addEventListener('mouseenter', ()=> {
  glow.style.width = '48px'; glow.style.height = '48px';
});

/* ---------- IMAGE LOAD / SPINNER / LIGHTBOX ---------- */
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.card').forEach(card => {
  const img = card.querySelector('img');
  const spinner = card.querySelector('.spinner');

  // When each image loads, hide spinner
  if (img.complete) {
    spinner.style.display = 'none';
    card.classList.add('visible');
  } else {
    img.addEventListener('load', () => {
      spinner.style.display = 'none';
      card.classList.add('visible');
    });
    img.addEventListener('error', () => {
      // If a remote image fails, remove spinner and gracefully dim the card
      spinner.style.display = 'none';
      img.style.filter = 'grayscale(60%) opacity(.6)';
      img.alt = 'Image unavailable';
    });
  }

  // lightbox on click
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', (ev)=>{
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden','false');
  });
});

/* close lightbox on click or esc */
lightbox.addEventListener('click', ()=> {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden','true');
});
window.addEventListener('keydown', e => { if(e.key==='Escape'){ lightbox.classList.remove('active'); lightbox.setAttribute('aria-hidden','true'); } });

/* ---------- TILT (mouse-position based) ---------- */
/* For each card, we implement custom tilt based on mouse position over that card.
   This replicates original behaviour and gives depth shadow that changes with mouse */
document.querySelectorAll('.card').forEach(card => {
  const stage = card.querySelector('.stage');
  const img = card.querySelector('img');

  // parameters to tweak feel
  const maxTilt = 12; // degrees
  const depth = 18; // px shadow depth multiplier

  function handleMove(e){
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    const tiltY = (px - 0.5) * (maxTilt * 2); // rotateY
    const tiltX = (0.5 - py) * (maxTilt * 2); // rotateX

    const rotate = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    const translateZ = `translateZ(${Math.max(Math.abs(tiltX), Math.abs(tiltY)) * 1.2}px)`;

    // depth shadow (based on pointer)
    const shadowX = (px - 0.5) * depth * -1;
    const shadowY = (py - 0.5) * depth * -1;
    const shadow = `${shadowX}px ${Math.abs(shadowY)}px ${Math.abs(depth*1.8)}px rgba(0,0,0,0.65)`;

    // subtle scale and brightness
    stage.style.transform = `${rotate} ${translateZ}`;
    stage.style.boxShadow = shadow;
    img.style.transform = `scale(1.03) translateZ(0)`;
    img.style.filter = `brightness(1.05)`;
  }

  function handleLeave(){
    stage.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    stage.style.boxShadow = `0 10px 30px rgba(0,0,0,0.6)`;
    img.style.transform = `scale(1)`;
    img.style.filter = `brightness(1)`;
  }

  card.addEventListener('mousemove', handleMove);
  card.addEventListener('mouseleave', handleLeave);
  card.addEventListener('touchstart', handleMove);
  card.addEventListener('touchend', handleLeave);
});

/* ---------- BACKGROUND SHIFT BASED ON HOVERED IMAGE ---------- */
/* We'll sample a small canvas on hover to approximate a dominant color (fast, may be approximate) */
function sampleAvgColor(img){
  try{
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    const w = c.width = 40, h = c.height = 40;
    ctx.drawImage(img, 0,0,w,h);
    const data = ctx.getImageData(0,0,w,h).data;
    let r=0,g=0,b=0,count=0;
    for(let i=0;i<data.length;i+=4){
      r+=data[i]; g+=data[i+1]; b+=data[i+2]; count++;
    }
    r=Math.round(r/count); g=Math.round(g/count); b=Math.round(b/count);
    return `rgba(${r},${g},${b},0.08)`; // subtle
  }catch(err){
    return null;
  }
}

document.querySelectorAll('.card img').forEach(img => {
  let lastBg = null;
  img.addEventListener('mouseenter', () => {
    const c = sampleAvgColor(img);
    if(c){
      lastBg = c;
      // blend with aurora overlay using body::before is not modifiable here; we set a subtle overlay with inline style
      document.body.style.backgroundImage = `radial-gradient(circle at 20% 20%, ${c}, transparent 12%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.02), transparent 18%), var(--bg-900)`;
    } else {
      // fallback accent
      document.body.style.backgroundImage = `radial-gradient(circle at 20% 20%, rgba(102,217,255,0.06), transparent 12%), radial-gradient(circle at 80% 60%, rgba(138,255,193,0.04), transparent 18%), var(--bg-900)`;
    }
  });
  img.addEventListener('mouseleave', () => {
    // restore (remove inline bg-image)
    document.body.style.backgroundImage = '';
  })
});

/* ---------- simple intersection observer for fade-in ---------- */
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting) en.target.classList.add('visible');
  });
},{threshold:0.15});
document.querySelectorAll('.card').forEach(c => { c.classList.add('fade-in'); obs.observe(c); });

/* ---------- accessibility / small UI niceties ---------- */
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    lightbox.classList.remove('active');
  }
});

</script>
</body>
</html>
