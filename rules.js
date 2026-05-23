// ── YOLO TUTORIAL / RULES ──


const TUT_COLORS = {1:'#ff2dac', 2:'#9b3dff', 3:'#1a4ad4'};


function goToTutorial(){
  const splash = document.getElementById('splashScreen');
  if(splash){
    splash.style.transition = 'opacity .35s ease';
    splash.style.opacity = '0';
    setTimeout(()=>{
      splash.style.display='none';
      showTutorial();
    }, 350);
  } else {
    showTutorial();
  }
}


function showTutorial(){
  const tut = document.getElementById('tutorialScreen');
  if(tut){ tut.style.display = 'block'; }
  showTutPage(1);
}


function showTutPage(n){
  for(let i=1;i<=3;i++){
    const p=document.getElementById('tutPage'+i);
    if(p) p.style.display='none';
  }
  const page = document.getElementById('tutPage'+n);
  if(page) page.style.display='flex';
  document.body.style.background = TUT_COLORS[n] || '#ff2dac';
}


function skipTutorial(){
  const tut = document.getElementById('tutorialScreen');
  if(tut){
    tut.style.transition='opacity .3s';
    tut.style.opacity='0';
    setTimeout(()=>{ tut.style.display='none'; tut.style.opacity=''; }, 300);
  }
  startGame();
}


function injectTutorial() {
  const container = document.querySelector('.phone-frame-inner');
  if(!container || document.getElementById('tutorialScreen')) return;
  const div = document.createElement('div');
  div.innerHTML = `<!-- TUTORIAL SCREEN -->
<div id="tutorialScreen" style="display:none;position:absolute;inset:0;z-index:190;overflow:hidden;">

  <div id="tutPage1" style="display:none;position:absolute;inset:0;background:#ff2dac;flex-direction:column;padding:30px 22px 22px;overflow-y:auto;">
    <div style="text-align:center;margin-bottom:16px;"><div style="font-family:'Bangers',sans-serif;font-size:40px;color:#fff;letter-spacing:.16em;text-shadow:0 2px 12px rgba(0,0,0,.18);">WIE GEHT DAS?</div></div>
    <div style="background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border-radius:18px;padding:16px;margin-bottom:12px;border:1px solid rgba(255,255,255,.28);box-shadow:0 2px 0 rgba(255,255,255,.15) inset,0 4px 20px rgba(0,0,0,.1);">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:18px;color:#fff;letter-spacing:.1em;margin-bottom:6px;">🎯 DAS ZIEL</div>
      <div style="font-family:'DM Sans',sans-serif;font-size:12px;color:#fff;line-height:1.5;">Sammle Karten und bilde vollständige <b>Zeilen</b> aus je einer roten, gelben und blauen Karte. Nur vollständige Zeilen bringen Punkte!</div>
    </div>
    <div style="background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border-radius:18px;padding:16px;margin-bottom:12px;border:1px solid rgba(255,255,255,.28);box-shadow:0 2px 0 rgba(255,255,255,.15) inset,0 4px 20px rgba(0,0,0,.1);">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:18px;color:#fff;letter-spacing:.1em;margin-bottom:10px;">🃏 DIE AUSLAGE</div>
      <div style="font-family:'DM Sans',sans-serif;font-size:12px;color:#fff;line-height:1.5;margin-bottom:12px;">3 Karten liegen offen – jede mit einer Würfel-Kombi. Triff die Kombi → Karte gewinnen!</div>
      <div style="display:flex;gap:8px;justify-content:center;">
        <div style="width:78px;background:#fff;border-radius:10px;padding:4px;box-shadow:0 3px 0 rgba(0,0,0,.2);"><div style="background:#e03030;border-radius:7px;padding:3px 3px 5px;"><div style="font-family:'Bebas Neue',sans-serif;font-size:46px;color:#fff;text-align:center;line-height:1;text-shadow:2px 3px 0 rgba(0,0,0,.2);">5</div><div style="background:#fff;border-radius:10px;padding:3px 5px;display:flex;gap:3px;justify-content:center;"><div style="width:17px;height:17px;border-radius:4px;background:#f5f5f5;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;font-size:12px;color:#ff3dac;">●</div><div style="width:17px;height:17px;border-radius:4px;background:#f5f5f5;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;font-size:12px;color:#9b3dff;">●</div><div style="width:17px;height:17px;border-radius:4px;background:#f5f5f5;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:10px;font-weight:700;">Y</div></div></div></div>
        <div style="width:78px;background:#fff;border-radius:10px;padding:4px;box-shadow:0 3px 0 rgba(0,0,0,.2);"><div style="background:#2e5ce8;border-radius:7px;padding:3px 3px 5px;"><div style="font-family:'Bebas Neue',sans-serif;font-size:46px;color:#fff;text-align:center;line-height:1;text-shadow:2px 3px 0 rgba(0,0,0,.2);">3</div><div style="background:#fff;border-radius:10px;padding:3px 5px;display:flex;gap:3px;justify-content:center;"><div style="width:17px;height:17px;border-radius:4px;background:#f5f5f5;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;font-size:12px;color:#ff3dac;">●</div><div style="width:17px;height:17px;border-radius:4px;background:#f5f5f5;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;font-family:'Abril Fatface',cursive;font-size:10px;font-style:italic;">L</div><div style="width:17px;height:17px;border-radius:4px;background:#f5f5f5;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;font-family:'Righteous',sans-serif;font-size:10px;">O</div></div></div></div>
        <div style="width:78px;background:#fff;border-radius:10px;padding:4px;box-shadow:0 3px 0 rgba(0,0,0,.2);"><div style="background:#eef8ff;border-radius:7px;padding:3px 3px 5px;"><div style="font-family:'Bebas Neue',sans-serif;font-size:46px;color:#00c8c0;text-align:center;line-height:1;">7</div><div style="background:#fff;border-radius:10px;padding:3px 5px;display:flex;gap:3px;justify-content:center;"><div style="width:17px;height:17px;border-radius:4px;background:#f5f5f5;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;font-size:12px;color:#9b3dff;">●</div><div style="width:17px;height:17px;border-radius:4px;background:#f5f5f5;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:10px;font-weight:700;">Y</div><div style="width:17px;height:17px;border-radius:4px;background:#f5f5f5;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;font-family:'Abril Fatface',cursive;font-size:10px;font-style:italic;">L</div></div></div></div>
      </div>
    </div>
    <button class="glass-btn" onclick="showTutPage(2)" style="width:100%;background:rgba(255,255,255,.18);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1.5px solid rgba(255,255,255,.45);color:#fff;font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:.18em;padding:14px;border-radius:50px;cursor:pointer;box-shadow:0 2px 0 rgba(255,255,255,.2) inset,0 4px 16px rgba(0,0,0,.15);text-shadow:0 1px 4px rgba(0,0,0,.2);transition:background .2s;">WEITER →</button>
    <button onclick="skipTutorial()" style="background:transparent;border:none;color:rgba(255,255,255,.45);font-family:'DM Sans',sans-serif;font-size:12px;margin-top:6px;cursor:pointer;padding:6px;width:100%;">Überspringen</button>
  </div>

  <div id="tutPage2" style="display:none;position:absolute;inset:0;background:#9b3dff;flex-direction:column;padding:30px 22px 22px;overflow-y:auto;">
    <div style="text-align:center;margin-bottom:16px;"><div style="font-family:'Bangers',sans-serif;font-size:40px;color:#fff;letter-spacing:.16em;text-shadow:0 2px 12px rgba(0,0,0,.18);">DIE WÜRFEL</div></div>
    <div style="background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border-radius:18px;padding:16px;margin-bottom:12px;border:1px solid rgba(255,255,255,.28);box-shadow:0 2px 0 rgba(255,255,255,.15) inset,0 4px 20px rgba(0,0,0,.1);">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:16px;color:#fff;letter-spacing:.1em;margin-bottom:12px;">6 SEITEN – 4 WÜRFEL</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px;">
        <div style="background:#fff;border-radius:10px;padding:8px;text-align:center;box-shadow:0 3px 6px rgba(0,0,0,.2);"><div style="font-size:26px;color:#ff3dac;line-height:1;">●</div><div style="font-family:'DM Sans',sans-serif;font-size:9px;color:#555;margin-top:3px;font-weight:600;">Pink</div></div>
        <div style="background:#fff;border-radius:10px;padding:8px;text-align:center;box-shadow:0 3px 6px rgba(0,0,0,.2);"><div style="font-size:26px;color:#9b3dff;line-height:1;">●</div><div style="font-family:'DM Sans',sans-serif;font-size:9px;color:#555;margin-top:3px;font-weight:600;">Violett</div></div>
        <div style="background:#fff;border-radius:10px;padding:8px;text-align:center;box-shadow:0 3px 6px rgba(0,0,0,.2);"><div style="font-size:20px;color:#00c0a8;line-height:1.4;">◆</div><div style="font-family:'DM Sans',sans-serif;font-size:9px;color:#555;margin-top:3px;font-weight:600;">Diamant</div></div>
        <div style="background:#fff;border-radius:10px;padding:8px;text-align:center;box-shadow:0 3px 6px rgba(0,0,0,.2);"><div style="font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#111;line-height:1;">Y</div><div style="font-family:'DM Sans',sans-serif;font-size:9px;color:#555;margin-top:3px;font-weight:600;">Y</div></div>
        <div style="background:#fff;border-radius:10px;padding:8px;text-align:center;box-shadow:0 3px 6px rgba(0,0,0,.2);"><div style="font-family:'Righteous',sans-serif;font-size:26px;color:#111;line-height:1;">O</div><div style="font-family:'DM Sans',sans-serif;font-size:9px;color:#555;margin-top:3px;font-weight:600;">O</div></div>
        <div style="background:#fff;border-radius:10px;padding:8px;text-align:center;box-shadow:0 3px 6px rgba(0,0,0,.2);"><div style="font-family:'Abril Fatface',cursive;font-size:26px;font-style:italic;color:#111;line-height:1;">L</div><div style="font-family:'DM Sans',sans-serif;font-size:9px;color:#555;margin-top:3px;font-weight:600;">L</div></div>
      </div>
    </div>
    <div style="background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border-radius:18px;padding:16px;margin-bottom:12px;border:1px solid rgba(255,255,255,.28);box-shadow:0 2px 0 rgba(255,255,255,.15) inset,0 4px 20px rgba(0,0,0,.1);margin-bottom:16px;">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:16px;color:#fff;letter-spacing:.1em;margin-bottom:10px;">🎲 DEIN ZUG</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:10px;"><div style="width:26px;height:26px;border-radius:13px;background:#ffd700;color:#000;font-family:'Bebas Neue',sans-serif;font-size:15px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">1</div><div style="font-family:'DM Sans',sans-serif;font-size:12px;color:#fff;line-height:1.4;">Würfle bis zu <b>3 Mal</b>. Halte Würfel zwischen den Würfen fest.</div></div>
        <div style="display:flex;align-items:center;gap:10px;"><div style="width:26px;height:26px;border-radius:13px;background:#ff3dac;color:#fff;font-family:'Bebas Neue',sans-serif;font-size:15px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">2</div><div style="font-family:'DM Sans',sans-serif;font-size:12px;color:#fff;line-height:1.4;">Treffe die Kombination einer Karte → Karte nehmen!</div></div>
        <div style="display:flex;align-items:center;gap:10px;"><div style="width:26px;height:26px;border-radius:13px;background:#00c0a8;color:#fff;font-family:'Bebas Neue',sans-serif;font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">◆</div><div style="font-family:'DM Sans',sans-serif;font-size:12px;color:#fff;line-height:1.4;">◆ bei Fehlwürfen → Diamanten sammeln → Extra-Würfe!</div></div>
      </div>
    </div>
    <button class="glass-btn" onclick="showTutPage(3)" style="width:100%;background:rgba(255,255,255,.18);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1.5px solid rgba(255,255,255,.45);color:#fff;font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:.18em;padding:14px;border-radius:50px;cursor:pointer;box-shadow:0 2px 0 rgba(255,255,255,.2) inset,0 4px 16px rgba(0,0,0,.15);text-shadow:0 1px 4px rgba(0,0,0,.2);transition:background .2s;">WEITER →</button>
    <button onclick="skipTutorial()" style="background:transparent;border:none;color:rgba(255,255,255,.45);font-family:'DM Sans',sans-serif;font-size:12px;margin-top:6px;cursor:pointer;padding:6px;width:100%;">Überspringen</button>
  </div>

  <div id="tutPage3" style="display:none;position:absolute;inset:0;background:#1a4ad4;flex-direction:column;padding:30px 22px 22px;overflow-y:auto;">
    <div style="text-align:center;margin-bottom:16px;"><div style="font-family:'Bangers',sans-serif;font-size:40px;color:#fff;letter-spacing:.16em;text-shadow:0 2px 12px rgba(0,0,0,.18);">PUNKTE &amp; YOLO</div></div>
    <div style="background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border-radius:18px;padding:16px;margin-bottom:12px;border:1px solid rgba(255,255,255,.28);box-shadow:0 2px 0 rgba(255,255,255,.15) inset,0 4px 20px rgba(0,0,0,.1);">
      <div style="font-family:'DM Sans',sans-serif;font-size:12px;color:#fff;line-height:1.5;margin-bottom:10px;">Karten kommen in Spalten (Rot, Gelb, Blau). Jede vollständige <b>Zeile</b> aus 3 Farben bringt Punkte:</div>
      <div style="background:rgba(0,0,0,.2);border-radius:10px;padding:10px;display:flex;align-items:center;justify-content:center;gap:6px;">
        <div style="background:#e03030;border-radius:6px;width:34px;height:22px;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;color:#fff;font-size:14px;">5</div>
        <div style="color:#fff;font-size:14px;">+</div>
        <div style="background:#d4930a;border-radius:6px;width:34px;height:22px;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;color:#fff;font-size:14px;">3</div>
        <div style="color:#fff;font-size:14px;">+</div>
        <div style="background:#2e5ce8;border-radius:6px;width:34px;height:22px;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;color:#fff;font-size:14px;">4</div>
        <div style="color:#fff;font-size:16px;">=</div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:24px;color:#ffd700;">12 Pts</div>
      </div>
      <div style="font-family:'DM Sans',sans-serif;font-size:11px;color:rgba(255,255,255,.75);margin-top:8px;">Weiße Karten sind Joker – passen in jede Spalte!</div>
    </div>
    <div style="background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border-radius:18px;padding:16px;margin-bottom:12px;border:1px solid rgba(255,255,255,.28);box-shadow:0 2px 0 rgba(255,255,255,.15) inset,0 4px 20px rgba(0,0,0,.1);">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:16px;color:#ffd700;letter-spacing:.1em;margin-bottom:8px;">✦ YOLO!</div>
      <div style="font-family:'DM Sans',sans-serif;font-size:12px;color:#fff;line-height:1.5;margin-bottom:10px;">Würfelst du <b>Y·O·L·O</b> mit allen 4 Würfeln? Alle 3 Karten auf einmal!</div>
      <div style="display:flex;gap:5px;justify-content:center;">
        <div style="background:#fff;border-radius:8px;width:42px;height:42px;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:22px;font-weight:700;box-shadow:0 3px 0 rgba(0,0,0,.2);">Y</div>
        <div style="background:#fff;border-radius:8px;width:42px;height:42px;display:flex;align-items:center;justify-content:center;font-family:'Righteous',sans-serif;font-size:22px;box-shadow:0 3px 0 rgba(0,0,0,.2);">O</div>
        <div style="background:#fff;border-radius:8px;width:42px;height:42px;display:flex;align-items:center;justify-content:center;font-family:'Abril Fatface',cursive;font-size:22px;font-style:italic;box-shadow:0 3px 0 rgba(0,0,0,.2);">L</div>
        <div style="background:#fff;border-radius:8px;width:42px;height:42px;display:flex;align-items:center;justify-content:center;font-family:'Righteous',sans-serif;font-size:22px;box-shadow:0 3px 0 rgba(0,0,0,.2);">O</div>
      </div>
    </div>
    <div style="background:rgba(255,215,0,.14);backdrop-filter:blur(8px);border-radius:18px;padding:14px;margin-bottom:16px;border:1px solid rgba(255,215,0,.45);">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:14px;color:#ffd700;letter-spacing:.1em;margin-bottom:4px;">★ BONUSAUFTRÄGE</div>
      <div style="font-family:'DM Sans',sans-serif;font-size:12px;color:#fff;line-height:1.4;">Sofort-Boni: sofort kassieren. Langzeit-Boni: am Ende gewinnt, wer mehr hat!</div>
    </div>
    <button class="glass-btn" onclick="skipTutorial()" style="width:100%;background:rgba(255,255,255,.18);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1.5px solid rgba(255,255,255,.45);color:#fff;font-family:'Bebas Neue',sans-serif;font-size:20px;letter-spacing:.18em;padding:14px;border-radius:50px;cursor:pointer;box-shadow:0 2px 0 rgba(255,255,255,.2) inset,0 4px 16px rgba(0,0,0,.15);text-shadow:0 1px 4px rgba(0,0,0,.2);transition:background .2s;font-size:22px;">LOS GEHT'S! 🎲</button>
  </div>

</div>`;
  const phoneFrameInner = document.querySelector('.phone-frame-inner');
  if(phoneFrameInner) phoneFrameInner.insertBefore(div.firstElementChild, phoneFrameInner.firstChild);
  else container.appendChild(div.firstElementChild);
  if(typeof sizeSplashAndTutorial === 'function') sizeSplashAndTutorial();
}

document.addEventListener('DOMContentLoaded', injectTutorial);
