// KOB Viewer Core v3.18 — global scope (no IIFE)

// Inject styles
(function(){
  var _s=document.createElement('style');
  _s.textContent="\n:root{\n  --sans:'DM Sans',system-ui,sans-serif;--mono:'JetBrains Mono',monospace;\n  --t1:#1a1a18;--t2:#58584f;--t3:#9a9a90;--ti:#185fa5;--ts:#0f6e56;--tw:#993c1d;--tp:#6b3fa0;\n  --bg1:#fff;--bg2:#f4f3ef;--bg3:#eceae4;--bgs:#e1f5ee;--bgp:#f0eaf8;\n  --b3:rgba(26,26,24,.13);--b2:rgba(26,26,24,.25);--b1:rgba(26,26,24,.42);\n  --bs:#0f6e56;--bp:#6b3fa0;--rm:8px;--rl:12px;\n}\n@media(prefers-color-scheme:dark){:root{\n  --t1:#f0efe8;--t2:#9a9a90;--t3:#68685f;--ti:#85b7eb;--ts:#5dcaa5;--tw:#f0997b;--tp:#c49ee8;\n  --bg1:#1c1c1a;--bg2:#262623;--bg3:#2e2e2b;--bgs:#085041;--bgp:#2e1e45;\n  --b3:rgba(240,239,232,.13);--b2:rgba(240,239,232,.25);--b1:rgba(240,239,232,.42);\n  --bs:#5dcaa5;--bp:#c49ee8;\n}}\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}\nbody{font-family:var(--sans);background:var(--bg2);color:var(--t1);min-height:100vh;}\n.page-hdr{background:var(--bg1);border-bottom:.5px solid var(--b3);padding:14px 20px;}\n.page-hdr h1{font-size:17px;font-weight:600;}\n.page-hdr span{font-size:12px;color:var(--t3);display:block;margin-top:2px;}\n.page-main{max-width:900px;margin:0 auto;padding:20px 16px 60px;}\n.card{background:var(--bg1);border:.5px solid var(--b3);border-radius:16px;padding:24px;}\n.tabs{display:flex;gap:2px;border-bottom:.5px solid var(--b3);margin-bottom:20px;flex-wrap:wrap;}\n.tab{background:transparent;border:.5px solid transparent;border-radius:8px 8px 0 0;padding:8px 16px;cursor:pointer;font-size:13px;font-family:var(--sans);color:var(--t2);margin-bottom:-.5px;}\n.tab.active{background:var(--bg1);border-color:var(--b2);border-bottom-color:var(--bg1);color:var(--t1);}\n/* nav rows */\n.nav-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:8px;}\n.nav-l{display:flex;gap:6px;flex-wrap:wrap;}\n.round-row{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;}\n.btn-sm{padding:5px 12px;font-size:12px;font-family:var(--sans);cursor:pointer;border-radius:6px;border:.5px solid var(--b2);background:var(--bg2);color:var(--t2);}\n.btn-sm.sel,.btn-sm:hover{background:var(--bg3);color:var(--t1);}\n.btn-sm.green{color:var(--ts);border-color:var(--bs);}\n.btn-sm.green:hover{background:var(--bgs);}\n.btn-xs{padding:3px 9px;font-size:11px;font-family:var(--sans);cursor:pointer;border-radius:6px;border:.5px solid var(--b2);background:var(--bg2);color:var(--t2);}\n.btn-xs.sel,.btn-xs:hover{background:var(--bg3);color:var(--t1);}\n/* progress */\n.prog-row{display:flex;align-items:center;gap:10px;margin-bottom:12px;}\n.prog-lbl{font-size:12px;color:var(--t3);white-space:nowrap;}\n.prog-wrap{flex:1;height:4px;background:var(--bg3);border-radius:2px;}\n.prog-bar{height:4px;background:var(--ts);border-radius:2px;transition:width .3s;}\n/* match table */\n.net-table{border:.5px solid var(--b3);border-radius:var(--rl);overflow:hidden;}\n.net-head,.net-row{display:grid;grid-template-columns:64px 1fr 70px 28px 70px 1fr 80px;gap:4px;align-items:center;padding:7px 10px;}\n.net-head{background:var(--bg2);font-size:10px;font-weight:600;color:var(--t3);text-transform:uppercase;letter-spacing:.06em;}\n.net-row{border-top:.5px solid var(--b3);}\n.net-row.alt{background:var(--bg2);}\n.nnum{font-size:11px;color:var(--t3);font-family:var(--mono);}\n.pair{display:flex;align-items:center;gap:4px;font-size:13px;}\n.pa{color:var(--ti);}\n.pb{color:var(--tp);}\n.plus{color:var(--t3);font-size:11px;}\n.vsc{font-size:11px;color:var(--t3);text-align:center;}\n.score-in{width:64px;font-family:var(--mono);font-size:13px;text-align:center;padding:4px 6px;border:.5px solid var(--b3);border-radius:6px;background:var(--bg2);color:var(--t1);}\n.score-in.win{border-color:var(--bs);background:var(--bgs);color:var(--ts);}\n.score-in.lose{border-color:var(--b2);}\n/* pool header */\n.pool-hdr{font-size:12px;font-weight:600;color:var(--t2);padding:8px 10px;background:var(--bg2);border-radius:var(--rm);margin-bottom:8px;display:flex;align-items:center;gap:8px;}\n.pool-badge{font-size:10px;padding:1px 7px;border-radius:99px;background:var(--bgp);color:var(--tp);font-weight:600;}\n/* standings */\n.std-wrap{overflow-x:auto;}\n.std-table{width:100%;border-collapse:collapse;font-size:13px;}\n.std-table th{font-size:10px;font-weight:500;color:var(--t2);text-transform:uppercase;letter-spacing:.06em;padding:8px 10px;text-align:left;background:var(--bg2);border-bottom:.5px solid var(--b3);}\n.std-table th.r,.std-table td.r{text-align:right;}\n.std-table td{padding:8px 10px;border-bottom:.5px solid var(--b3);color:var(--t1);}\n.std-table tr:last-child td{border-bottom:none;}\n.std-table tr.alt td{background:var(--bg2);}\n.rnk{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;font-size:11px;font-weight:600;background:var(--bg2);color:var(--t2);}\n.rnk.gold{background:#fef3c7;color:#92400e;}\n.rnk.silver{background:#f3f4f6;color:#374151;}\n.rnk.bronze{background:#fde8d8;color:#92400e;}\n.gbadge{font-size:10px;padding:1px 6px;border-radius:99px;background:var(--bg2);border:.5px solid var(--b3);color:var(--t2);}\n.dpos{color:var(--ts);}\n.dneg{color:var(--tw);}\n.grp-filter{display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;}\n.fnote{font-size:11px;color:var(--t3);margin-top:10px;}\n/* stats bar */\n.stats{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:14px;}\n.stat{display:flex;flex-direction:column;}\n.stat-lbl{font-size:10px;color:var(--t3);text-transform:uppercase;letter-spacing:.06em;}\n.stat-val{font-size:16px;font-weight:600;color:var(--t1);}\n/* lookup */\n.lookup-sel{font-family:var(--sans);font-size:13px;padding:5px 8px;border:.5px solid var(--b3);border-radius:var(--rm);background:var(--bg2);color:var(--t1);}\n.lk-wrap{border:.5px solid var(--b3);border-radius:var(--rl);overflow:hidden;}\n.lk-head,.lk-row{display:grid;grid-template-columns:60px 80px 1fr 28px 1fr 80px;gap:4px;align-items:center;padding:7px 10px;}\n.lk-head{background:var(--bg2);font-size:10px;font-weight:600;color:var(--t3);text-transform:uppercase;letter-spacing:.06em;}\n.lk-row{border-top:.5px solid var(--b3);}\n.lk-row.alt{background:var(--bg2);}\n/* bracket */\n.bracket-wrap{overflow-x:auto;padding-bottom:8px;}\n.bracket{display:flex;gap:0;align-items:flex-start;}\n.bk-round{display:flex;flex-direction:column;min-width:160px;}\n.bk-round-hdr{font-size:10px;font-weight:600;color:var(--t3);text-transform:uppercase;letter-spacing:.06em;padding:0 8px 8px;}\n.bk-spacer{flex:1;}\n.bk-match{border:.5px solid var(--b3);border-radius:var(--rm);background:var(--bg1);margin:0 8px 4px;}\n.bk-match.bye{opacity:.5;}\n.bk-match.complete{border-color:var(--bs);}\n.bk-entry{padding:6px 10px;font-size:12px;display:flex;justify-content:space-between;align-items:center;gap:8px;min-height:32px;}\n.bk-entry:first-child{border-bottom:.5px solid var(--b3);}\n.bk-entry.winner{font-weight:600;color:var(--ts);}\n.bk-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}\n.bk-score{font-family:var(--mono);font-size:12px;width:32px;text-align:center;padding:2px 4px;border:.5px solid var(--b3);border-radius:4px;background:var(--bg2);color:var(--t1);}\n.bk-score.win{border-color:var(--bs);background:var(--bgs);color:var(--ts);}\n.bk-connector{display:flex;flex-direction:column;justify-content:center;width:16px;margin-bottom:4px;}\n.bk-connector svg{overflow:visible;}\n.bk-group{display:flex;align-items:center;margin-bottom:8px;}\n.bk-empty{font-size:12px;color:var(--t3);padding:12px 10px;text-align:center;}\n.bk-section-hdr{font-size:11px;font-weight:600;color:var(--t2);text-transform:uppercase;letter-spacing:.06em;padding:4px 0 8px;}\n.seed-item{display:flex;align-items:center;gap:10px;padding:8px 10px;background:var(--bg1);border:.5px solid var(--b3);border-radius:var(--rm);margin-bottom:4px;cursor:grab;user-select:none;transition:background .15s;}\n.seed-item:active{cursor:grabbing;}\n.seed-item.drag-over{background:var(--bg3);border-color:var(--b1);}\n.seed-item.dragging{opacity:.4;}\n.seed-num{font-size:11px;font-family:var(--mono);color:var(--t3);width:22px;flex-shrink:0;}\n.seed-name{font-size:13px;color:var(--t1);}\n.seed-handle{font-size:14px;color:var(--t3);flex-shrink:0;}\n.bk-pick{font-size:10px;padding:2px 8px;border-radius:4px;border:.5px solid var(--b2);background:var(--bg2);color:var(--t2);cursor:pointer;font-family:var(--sans);flex-shrink:0;}\n.bk-pick:hover{background:var(--bg3);color:var(--t1);}\n.bk-pick.picked{background:var(--bgs);color:var(--ts);border-color:var(--bs);font-weight:600;}\n/* pool standings section */\n.pool-section{margin-bottom:20px;}\n.pool-section-hdr{font-size:12px;font-weight:600;color:var(--t2);margin-bottom:8px;padding-bottom:6px;border-bottom:.5px solid var(--b3);}\n/* empty state */\n.empty{padding:40px;text-align:center;color:var(--t3);}\n/* Admin / locked mode */\n.admin-badge{display:none;font-size:10px;font-weight:600;padding:2px 8px;border-radius:99px;background:var(--bgs);color:var(--ts);border:.5px solid var(--bs);letter-spacing:.04em;}\nbody.admin-mode .admin-badge{display:inline-block;}\n.lock-btn{background:none;border:.5px solid var(--b2);border-radius:6px;padding:5px 10px;font-size:12px;font-family:var(--sans);cursor:pointer;color:var(--t2);display:flex;align-items:center;gap:5px;}\n.lock-btn:hover{background:var(--bg2);}\n/* Locked mode: hide all score inputs and pick buttons, show static score instead */\nbody.viewer-locked .score-in{display:none;}\nbody.viewer-locked .score-static{display:inline-block;}\nbody.viewer-locked .bk-pick{display:none;}\nbody.viewer-locked .seed-editor{display:none!important;}\nbody.viewer-locked #btn-edit-seeds{display:none!important;}\nbody.viewer-locked .btn-seed-bracket-wrap{display:none;}\n/* Admin mode: show everything */\nbody.admin-mode .score-in{display:inline-block;}\nbody.admin-mode .score-static{display:none;}\nbody.admin-mode .bk-pick{display:inline-block;}\n/* Score static: read-only value shown in locked mode */\n.score-static{display:none;width:64px;text-align:center;font-family:var(--mono);font-size:13px;color:var(--t1);}\n.score-static.win{color:var(--ts);font-weight:600;}\n.score-static.lose{color:var(--tw);}\n@media(max-width:580px){\n  .net-head,.net-row{grid-template-columns:44px 1fr 52px 18px 52px 1fr 64px;padding:6px 6px;}\n  .lk-head,.lk-row{grid-template-columns:44px 60px 1fr 22px 1fr 60px;}\n  .bk-round{min-width:130px;}\n  .card{padding:14px;}\n}\n";
  document.head.appendChild(_s);

  // Inject body HTML
  var _tmp=document.createElement('div');
  _tmp.innerHTML='<header class="page-hdr" style="display:flex;justify-content:space-between;align-items:center;">\n  <div>\n    <h1 id="page-title" style="display:flex;align-items:center;gap:8px;">KOB Viewer <span class="admin-badge">ADMIN</span></h1>\n    <span id="page-sub"></span>\n  </div>\n  <div style="display:flex;gap:8px;align-items:center;">\n    <button class="lock-btn" onclick="storeExport()" title="Download backup of all scores and renames" style="font-size:11px;">Backup</button>\n    <button class="lock-btn" onclick="storeImport()" title="Restore from backup file" style="font-size:11px;">Restore</button>\n    <button class="lock-btn" onclick="storeClear()" title="Delete all saved data (requires confirmation)" style="font-size:11px;color:var(--tw);border-color:var(--tw);">Clear</button>\n    <button class="lock-btn" onclick="toggleAdmin()" id="lock-btn">\n      <span id="lock-icon">[lock]</span> <span id="lock-label">View only</span>\n    </button>\n  </div>\n</header>\n<main class="page-main">\n<div class="card">\n  <div class="tabs" id="tabs"></div>\n  <div id="tab-schedule" style="display:none">\n    <div id="stats-bar" class="stats"></div>\n    <div class="nav-row"><div class="nav-l" id="week-btns"></div><div class="nav-r"><button class="btn-sm green" onclick="exportXLSX()">Export .xlsx</button></div></div>\n    <div class="round-row" id="round-btns"></div>\n    <div class="prog-row"><span class="prog-lbl" id="prog-lbl"></span><div class="prog-wrap"><div class="prog-bar" id="prog-bar" style="width:0%"></div></div></div>\n    <div class="net-table" id="net-table"></div>\n    <p class="fnote" id="fnote"></p>\n  </div>\n  <div id="tab-pools" style="display:none">\n    <div class="nav-row"><div class="nav-l" id="pool-btns"></div><div class="nav-r"><button class="btn-sm" id="btn-export-sheets" style="display:none" onclick="exportSheetsXLSX()">Export to Sheets</button> <button class="btn-sm green" onclick="exportXLSX()">Export .xlsx</button></div></div>\n    <div class="round-row" id="pool-round-btns"></div>\n    <div class="prog-row"><span class="prog-lbl" id="pool-prog-lbl"></span><div class="prog-wrap"><div class="prog-bar" id="pool-prog-bar" style="width:0%"></div></div></div>\n    <div id="pool-table"></div>\n  </div>\n  <div id="tab-standings" style="display:none">\n    <div class="grp-filter" id="std-filter"></div>\n    <div class="std-wrap"><table class="std-table" id="std-table"></table></div>\n    <p class="fnote" id="std-note"></p>\n  </div>\n  <div id="tab-bracket" style="display:none">\n    <div class="nav-row" style="margin-bottom:14px;">\n      <div id="bracket-sub-nav" class="nav-l"></div>\n      <div style="display:flex;gap:6px;">\n        <button class="btn-sm" onclick="seedBracket()" id="btn-seed-bracket">Seed from standings</button>\n        <button class="btn-sm" onclick="toggleSeedEditor()" id="btn-edit-seeds" style="display:none">Edit seeds</button>\n      </div>\n    </div>\n    <!-- Seed editor: draggable list, shown instead of bracket when editing -->\n    <div id="seed-editor" style="display:none;margin-bottom:16px;">\n      <p style="font-size:12px;color:var(--t2);margin-bottom:10px;">Drag entries to reorder seeds. Changes rebuild the bracket.</p>\n      <div id="seed-list-wrap" style="max-width:320px;"></div>\n      <div style="display:flex;gap:8px;margin-top:12px;">\n        <button class="btn-sm sel" onclick="confirmSeedEdit()">Confirm & rebuild</button>\n        <button class="btn-sm" onclick="cancelSeedEdit()">Cancel</button>\n      </div>\n    </div>\n    <div id="bracket-wrap"></div>\n  </div>\n  <div id="tab-lookup" style="display:none">\n    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">\n      <label style="font-size:13px;color:var(--t2);">Player:</label>\n      <select id="lookup-sel" class="lookup-sel" onchange="renderLookup()"></select>\n    </div>\n    <div id="lookup-res"></div>\n  </div>\n  <!-- Traditional League schedule tab -->\n  <div id="tab-trad-lg-schedule" style="display:none">\n    <div class="nav-row">\n      <div class="nav-l" id="trad-week-btns"></div>\n      <button class="btn-sm green" onclick="exportXLSX()">Export .xlsx</button>\n    </div>\n    <div class="round-row" id="trad-round-btns"></div>\n    <div class="prog-row"><span class="prog-lbl" id="trad-prog-lbl"></span><div class="prog-wrap"><div class="prog-bar" id="trad-prog-bar" style="width:0%"></div></div></div>\n    <div id="trad-lg-table"></div>\n  </div>\n  <!-- KOB Quads schedule tab -->\n  <div id="tab-quads-schedule" style="display:none">\n    <div class="nav-row">\n      <div class="nav-l" id="quads-stage-btns"></div>\n      <button class="btn-sm green" onclick="exportXLSX()">Export .xlsx</button>\n    </div>\n    <div class="nav-l" id="quads-pool-btns" style="margin-bottom:10px;flex-wrap:wrap;gap:6px;display:flex;"></div>\n    <div class="prog-row"><span class="prog-lbl" id="quads-prog-lbl"></span><div class="prog-wrap"><div class="prog-bar" id="quads-prog-bar" style="width:0%"></div></div></div>\n    <div id="quads-table"></div>\n  </div>\n  <!-- KOB Random Mix schedule tab -->\n  <div id="tab-mix-schedule" style="display:none">\n    <div class="nav-row">\n      <div class="nav-l" id="mix-round-btns"></div>\n      <button class="btn-sm green" onclick="exportXLSX()">Export .xlsx</button>\n    </div>\n    <div class="prog-row"><span class="prog-lbl" id="mix-prog-lbl"></span><div class="prog-wrap"><div class="prog-bar" id="mix-prog-bar" style="width:0%"></div></div></div>\n    <div id="mix-table"></div>\n  </div>\n  <!-- KOB Standings (shared for quads + mix) -->\n  <div id="tab-mix-standings" style="display:none">\n    <div class="std-wrap"><table class="std-table" id="std-table"></table></div>\n  </div>\n  <div id="tab-teams" style="display:none">\n    <p style="font-size:13px;color:var(--t2);margin-bottom:14px;">Rename entries — display names update across all tabs instantly. Original names are preserved internally.</p>\n    <div id="teams-rename-list" style="max-width:480px;"></div>\n    <div style="display:flex;gap:8px;margin-top:14px;">\n      <button class="btn-sm sel" onclick="applyRenames()">Apply</button>\n      <button class="btn-sm" onclick="resetRenames()">Reset to originals</button>\n    </div>\n  </div>\n</div>\n</main>';
  while(_tmp.firstChild) document.body.appendChild(_tmp.firstChild);
  document.body.style.display='';
  document.body.style.alignItems='';
  document.body.style.justifyContent='';
})();

// All viewer logic at global scope so onclick handlers can reach everything

var SD = window.SD || {};
var scores = {};   // key->{s1,s2} for all formats
// allBrackets[i] = {name, seeds, rounds} -- one per Gold/Silver/etc
var allBrackets = [];
var selPool=0, selRound=0, selWeek=0, selLgRound=0, gf='all', selBracket=0;
var fmt='kob_league';
var nameMap={};  // originalName -> displayName
var adminMode=false;
var _storeKey='';  // localStorage key prefix, set at init from event title

function storeSave(){if(typeof window._storeSaveOverride==="function"){window._storeSaveOverride();return;}
  if(!_storeKey) return;
  try{
    localStorage.setItem(_storeKey+'.scores', JSON.stringify(scores));
    localStorage.setItem(_storeKey+'.nameMap', JSON.stringify(nameMap));
    // Save bracket state (seeds + picks only, not full round structure)
    var bracketState=allBrackets.map(function(bk){
      return {name:bk.name, seeds:bk.seeds, wins:extractWins(bk)};
    });
    localStorage.setItem(_storeKey+'.brackets', JSON.stringify(bracketState));
  }catch(e){}
}

function extractWins(bk){
  var wins={w:[],l:[],gf:null};
  (bk.wRounds||[]).forEach(function(round,ri){
    round.forEach(function(m,mi){ if(m.winner) wins.w.push([ri,mi,m.winner]); });
  });
  (bk.lRounds||[]).forEach(function(round,ri){
    round.forEach(function(m,mi){ if(m.winner&&!m.isBye) wins.l.push([ri,mi,m.winner]); });
  });
  if(bk.grandFinal&&bk.grandFinal.winner) wins.gf=bk.grandFinal.winner;
  return wins;
}

function storeLoad(){if(typeof window._storeLoadOverride==="function"){window._storeLoadOverride();return;}
  if(!_storeKey) return;
  try{
    var sc=localStorage.getItem(_storeKey+'.scores');
    if(sc) scores=JSON.parse(sc);
    var nm=localStorage.getItem(_storeKey+'.nameMap');
    if(nm) nameMap=JSON.parse(nm);
  }catch(e){}
}

function storeLoadBrackets(){
  if(!_storeKey||!allBrackets.length) return;
  try{
    var bs=localStorage.getItem(_storeKey+'.brackets');
    if(!bs) return;
    var saved=JSON.parse(bs);
    saved.forEach(function(sv,bi){
      if(!allBrackets[bi]) return;
      var bk=allBrackets[bi];
      // Re-apply wins in order
      (sv.wins.w||[]).forEach(function(w){ pickWinner(bi,'W',w[0],w[1],w[2]); });
      (sv.wins.l||[]).forEach(function(w){ pickWinner(bi,'L',w[0],w[1],w[2]); });
      if(sv.wins.gf) pickWinner(bi,'GF',0,0,sv.wins.gf);
    });
  }catch(e){}
}

function storeClear(){if(typeof window._storeClearOverride==="function"){window._storeClearOverride();return;}
  if(!_storeKey) return;
  var confirm1=window.confirm('WARNING: This will permanently delete all saved scores, team names, and bracket picks for this event.\n\nDo you want to download a backup first?');
  if(confirm1) storeExport();
  var typed=window.prompt('Type CLEAR to confirm deletion (this cannot be undone):');
  if(typed===null||typed.trim()!=='CLEAR'){
    alert('Clear cancelled.');
    return;
  }
  try{
    ['scores','nameMap','brackets'].forEach(function(k){
      localStorage.removeItem(_storeKey+'.'+k);
    });
    scores={}; nameMap={}; allBrackets=[];
    location.reload();
  }catch(e){}
}

function storeExport(){if(typeof window._storeExportOverride==="function"){window._storeExportOverride();return;}
  if(!_storeKey) return;
  var backup={
    key:_storeKey,
    title:SD.title,
    format:SD.format,
    exported:new Date().toISOString(),
    scores:scores,
    nameMap:nameMap
  };
  var blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'});
  var a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=(SD.title||'kob-event')+'-backup-'+new Date().toISOString().slice(0,10)+'.json';
  a.click();
  URL.revokeObjectURL(a.href);
}

function storeImport(){if(typeof window._storeImportOverride==="function"){window._storeImportOverride();return;}
  var input=document.createElement('input');
  input.type='file'; input.accept='.json';
  input.onchange=function(){
    var file=input.files[0]; if(!file) return;
    var reader=new FileReader();
    reader.onload=function(e){
      try{
        var data=JSON.parse(e.target.result);
        if(data.scores) scores=data.scores;
        if(data.nameMap) nameMap=data.nameMap;
        storeSave();
        alert('Backup restored. Reloading...');
        location.reload();
      }catch(err){ alert('Invalid backup file.'); }
    };
    reader.readAsText(file);
  };
  input.click();
}

function toggleAdmin(){
  var pin=SD.adminPin;
  if(!adminMode){
    // Entering admin mode
    if(pin){
      var entered=prompt('Enter admin PIN:');
      if(entered===null) return;
      if(String(entered).trim()!==String(pin)){
        alert('Incorrect PIN.');
        return;
      }
    }
    adminMode=true;
    document.body.classList.remove('viewer-locked');
    document.body.classList.add('admin-mode');
    document.getElementById('lock-icon').textContent='[open]';
    document.getElementById('lock-label').textContent='Admin';
    document.getElementById('lock-btn').style.borderColor='var(--bs)';
    document.getElementById('lock-btn').style.color='var(--ts)';
  } else {
    adminMode=false;
    document.body.classList.remove('admin-mode');
    document.body.classList.add('viewer-locked');
    document.getElementById('lock-icon').textContent='[lock]';
    document.getElementById('lock-label').textContent='View only';
    document.getElementById('lock-btn').style.borderColor='';
    document.getElementById('lock-btn').style.color='';
  }
}

function dn(name){
  // Display name: use nameMap if set, else original
  return nameMap[name]||name;
}
function initNameMap(){
  // Build nameMap from all entries in SD, defaulting to original name
  nameMap={};
  if(SD.entries) SD.entries.forEach(function(e){ if(!nameMap[e]) nameMap[e]=e; });
  else if(SD.pools) SD.pools.forEach(function(pool){ pool.entries.forEach(function(e){ if(!nameMap[e]) nameMap[e]=e; }); });
  else if(SD.gA){ SD.gA.forEach(function(e){nameMap[e]=e;}); SD.gB.forEach(function(e){nameMap[e]=e;}); }
}

/* -- Tabs -- */
function buildTabs(tabDefs){
  var h='';
  tabDefs.forEach(function(t,i){
    h+='<button class="tab'+(i===0?' active':'')+'" onclick="switchTab(\''+t.id+'\')">'+t.label+'</button>';
  });
  document.getElementById('tabs').innerHTML=h;
}
function switchTab(t){
  var allTabs=['schedule','pools','standings','bracket','lookup','teams','quads-schedule','mix-schedule','mix-standings','trad-lg-schedule','trad-lg-standings'];
  allTabs.forEach(function(x){
    var el=document.getElementById('tab-'+x);
    if(el) el.style.display=x===t?'':'none';
  });
  document.querySelectorAll('.tab').forEach(function(b){
    b.classList.toggle('active', b.textContent.toLowerCase()===t||b.getAttribute('onclick').indexOf("'"+t+"'")>=0);
  });
  if(t==='standings') renderStandings();
  if(t==='bracket') renderBracket();
  if(t==='lookup') renderLookupSelect();
  if(t==='teams') renderTeamsTab();
}

/* =======================================================
   SHARED KOB UTILITIES
======================================================= */
function blankEntry(name){
  return {name:name,gp:0,w:0,l:0,pf:0,pa:0,winRate:0,diffPerGame:0,pfPerGame:0};
}
function refreshRates(e){
  e.winRate=e.gp>0?e.w/e.gp:0;
  e.diffPerGame=e.gp>0?(e.pf-e.pa)/e.gp:0;
  e.pfPerGame=e.gp>0?e.pf/e.gp:0;
  return e;
}
function nameHash(s){
  var h=0;
  for(var i=0;i<s.length;i++) h=(Math.imul(31,h)+s.charCodeAt(i))|0;
  return h;
}
function kobSort(a,b,h2h){
  if(Math.abs(b.winRate-a.winRate)>0.0001) return b.winRate-a.winRate;
  if(Math.abs(b.diffPerGame-a.diffPerGame)>0.0001) return b.diffPerGame-a.diffPerGame;
  if(Math.abs(b.pfPerGame-a.pfPerGame)>0.0001) return b.pfPerGame-a.pfPerGame;
  if(h2h){
    var ab=h2h[a.name]&&h2h[a.name][b.name];
    var ba=h2h[b.name]&&h2h[b.name][a.name];
    if(ab&&ba){
      var dw=ab.w-ba.w; if(dw!==0) return -dw;
      var dd=(ab.pf-ab.pa)-(ba.pf-ba.pa); if(dd!==0) return -dd;
      var dp=ab.pf-ba.pf; if(dp!==0) return -dp;
    }
  }
  return nameHash(a.name)-nameHash(b.name);
}

/* =======================================================
   KOB LEAGUE
======================================================= */
function initKOBLeague(){
  var sd=SD;
  initNameMap();
  buildTabs([{id:'schedule',label:'Schedule'},{id:'standings',label:'Standings'},{id:'bracket',label:'Playoffs'},{id:'lookup',label:'Player lookup'},{id:'teams',label:'Teams'}]);
  document.getElementById('page-sub').textContent=sd.weeks+'w . '+(sd.roundsPerWeek||5)+'r/w . '+sd.courts.length+' courts . '+sd.gA.length+'+'+sd.gB.length+' players';
  var sb=document.getElementById('stats-bar');
  var total=sd.weeks*(sd.roundsPerWeek||5)*sd.courts.length;
  var sbHtml='<div class="stat"><div class="stat-lbl">Total matches</div><div class="stat-val">'+total+'</div></div>';
  if(sd.stats){
    sbHtml+='<div class="stat"><div class="stat-lbl">Repeat partners</div><div class="stat-val">'+sd.stats.rp+'</div></div>';
    sbHtml+='<div class="stat"><div class="stat-lbl">Repeat matchups</div><div class="stat-val">'+sd.stats.mp+'</div></div>';
    if(sd.stats.op!==undefined){
      var opCls=sd.stats.op>0?"dneg":"";
      sbHtml+='<div class="stat"><div class="stat-lbl">Repeat opp. (indiv.)</div>' +
        '<div class="stat-val '+opCls+'">'+(sd.stats.op||0)+
        (sd.stats.opMx?' (max '+sd.stats.opMx+'x)':'')+
        '</div></div>';
    }
  }
  sb.innerHTML=sbHtml;
  document.getElementById('tab-schedule').style.display='';
  renderLgSchedule();
}
function renderLgSchedule(){
  var sd=SD;
  var weeks=sd.weeks||sd.sched.length;
  var roundsPerWeek=sd.roundsPerWeek||sd.sched[0].length;
  var wb='';
  for(var w=0;w<weeks;w++) wb+='<button class="btn-sm'+(w===selWeek?' sel':'')+'" onclick="selWeek='+w+';selLgRound=0;renderLgSchedule()">Week '+(w+1)+'</button>';
  document.getElementById('week-btns').innerHTML=wb;
  var rb='';
  for(var r=0;r<roundsPerWeek;r++) rb+='<button class="btn-xs'+(r===selLgRound?' sel':'')+'" onclick="selLgRound='+r+';renderLgSchedule()">Round '+(r+1)+'</button>';
  document.getElementById('round-btns').innerHTML=rb;
  var round=sd.sched[selWeek][selLgRound];
  var rows='<div class="net-table"><div class="net-head"><span>Net</span><span>Pair 1</span><span style="text-align:center">Score</span><span></span><span style="text-align:center">Score</span><span>Pair 2</span></div>';
  for(var i=0;i<round.length;i++){
    var m=round[i], key=selWeek+'-'+selLgRound+'-'+i;
    var sc=scores[key]||{s1:'',s2:''};
    var s1n=parseInt(sc.s1),s2n=parseInt(sc.s2);
    var has=sc.s1!==''&&sc.s2!==''&&!isNaN(s1n)&&!isNaN(s2n);
    var c1=has?(s1n>s2n?'win':s1n<s2n?'lose':''):'';
    var c2=has?(s2n>s1n?'win':s2n<s1n?'lose':''):'';
    var courtName=sd.courts[i%sd.courts.length]?sd.courts[i%sd.courts.length].name:(i+1);
    rows+='<div class="net-row'+(i%2?' alt':'')+'">'
      +'<span class="nnum">'+courtName+'</span>'
      +'<span class="pair"><span class="pa">'+dn(m.p1[0])+'</span><span class="plus">+</span><span class="pb">'+dn(m.p1[1])+'</span></span>'
      +'<input type="number" min="0" max="99" class="score-in '+c1+'" value="'+sc.s1+'" data-key="'+key+'" data-side="0" oninput="onLgScore(this)">'
      +'<span class="score-static '+c1+'">'+(sc.s1!==''?sc.s1:'-')+'</span>'
      +'<span class="vsc">vs</span>'
      +'<input type="number" min="0" max="99" class="score-in '+c2+'" value="'+sc.s2+'" data-key="'+key+'" data-side="1" oninput="onLgScore(this)">'
      +'<span class="score-static '+c2+'">'+(sc.s2!==''?sc.s2:'-')+'</span>'
      +'<span class="pair"><span class="pa">'+dn(m.p2[0])+'</span><span class="plus">+</span><span class="pb">'+dn(m.p2[1])+'</span></span>'
      +'</div>';
  }
  rows+='</div>';
  document.getElementById('net-table').innerHTML=rows;
  updateLgProgress();
}
function onLgScore(input){
  var key=input.dataset.key, side=parseInt(input.dataset.side);
  if(!scores[key]) scores[key]={s1:'',s2:''};
  if(side===0) scores[key].s1=input.value; else scores[key].s2=input.value;
  var sc=scores[key];
  var s1n=parseInt(sc.s1),s2n=parseInt(sc.s2);
  var has=sc.s1!==''&&sc.s2!==''&&!isNaN(s1n)&&!isNaN(s2n);
  var c1=has?(s1n>s2n?'win':s1n<s2n?'lose':''):'';
  var c2=has?(s2n>s1n?'win':s2n<s1n?'lose':''):'';
  var inputs=document.querySelectorAll('[data-key="'+key+'"]');
  if(inputs[0]) inputs[0].className='score-in '+c1;
  if(inputs[1]) inputs[1].className='score-in '+c2;
  storeSave();
  updateLgProgress();
}
function updateLgProgress(){
  var sd=SD; var total=0,done=0;
  sd.sched.forEach(function(week,wi){week.forEach(function(round,ri){round.forEach(function(m,ni){
    total++;
    var sc=scores[wi+'-'+ri+'-'+ni];
    if(sc&&sc.s1!==''&&sc.s2!==''&&!isNaN(parseInt(sc.s1))&&!isNaN(parseInt(sc.s2))) done++;
  });});});
  document.getElementById('prog-lbl').textContent=done+' / '+total+' scored';
  document.getElementById('prog-bar').style.width=total?Math.round(done/total*100)+'%':'0%';
}
function calcLgStandings(){
  var sd=SD,players={};
  sd.gA.forEach(function(n){players[n]={name:n,grp:'A',w:0,l:0,pf:0,pa:0};});
  sd.gB.forEach(function(n){players[n]={name:n,grp:'B',w:0,l:0,pf:0,pa:0};});
  sd.sched.forEach(function(week,wi){week.forEach(function(round,ri){round.forEach(function(m,ni){
    var sc=scores[wi+'-'+ri+'-'+ni];
    if(!sc||sc.s1===''||sc.s2==='') return;
    var s1=parseInt(sc.s1),s2=parseInt(sc.s2);
    if(isNaN(s1)||isNaN(s2)) return;
    m.p1.forEach(function(p){players[p].pf+=s1;players[p].pa+=s2;if(s1>s2)players[p].w++;else if(s2>s1)players[p].l++;});
    m.p2.forEach(function(p){players[p].pf+=s2;players[p].pa+=s1;if(s2>s1)players[p].w++;else if(s1>s2)players[p].l++;});
  });});});
  return Object.values(players).sort(function(a,b){if(b.w!==a.w)return b.w-a.w;var da=a.pf-a.pa,db=b.pf-b.pa;if(db!==da)return db-da;return b.pf-a.pf;});
}

/* =======================================================
   TRADITIONAL TOURNAMENT
======================================================= */
function initTournament(){
  var sd=SD;
  initNameMap();
  buildTabs([{id:'pools',label:'Pool play'},{id:'standings',label:'Standings'},{id:'bracket',label:'Bracket'},{id:'lookup',label:'Lookup'},{id:'teams',label:'Teams'}]);
  document.getElementById('page-sub').textContent=sd.pools.length+' pools . '+sd.entries.length+' entries . '+sd.courts.length+' courts';
  document.getElementById('tab-pools').style.display='';
  renderPoolSchedule();
  // Build bracket sub-nav (Gold, Silver, etc.)
  var nb=sd.config.numBrackets||2;
  var names=['Gold','Silver','Bronze','Copper','Platinum','Diamond'];
  var h='';
  for(var i=0;i<nb;i++) h+='<button class="btn-sm'+(i===0?' sel':'')+'" onclick="selBracket='+i+';renderBracket()">'+( i<names.length?names[i]:'Bracket '+(i+1))+'</button>';
  document.getElementById('bracket-sub-nav').innerHTML=h;
}
function renderPoolSchedule(){
  var sd=SD;
  // Pool tabs only -- no round nav
  var pb='';
  sd.pools.forEach(function(p,pi){
    pb+='<button class="btn-sm'+(pi===selPool?' sel':'')+'" onclick="selPool='+pi+';renderPoolSchedule()">'+p.name+'</button>';
  });
  document.getElementById('pool-btns').innerHTML=pb;
  document.getElementById('pool-round-btns').innerHTML='';
  var pool=sd.pools[selPool];
  var poolSets=pool.sets||sd.scoring.numSets||1;
  var baseNote=pool.entries.length%2!==0?'<div style="font-size:11px;color:var(--t2);padding:6px 10px;background:var(--bg2);border-radius:var(--rm);border:.5px solid var(--b3);margin-bottom:6px;">Odd pool size ('+pool.entries.length+' entries) -- one team has a bye each round.</div>':'';
  var setsNote=pool.bonusRounds&&pool.bonusRounds.length?'<div style="font-size:11px;color:var(--ts);padding:6px 10px;background:var(--bgs);border-radius:var(--rm);border:.5px solid var(--bs);margin-bottom:10px;">Undersized pool -- '+pool.bonusRounds.length+' bonus single-set match'+(pool.bonusRounds.length!==1?'es':'')+' added below to equalise total sets.</div>':'';
  var poolNote=baseNote+setsNote;

  // Vertical layout: each match is a card with name header + one row per set
  var matchNum=0;
  var rows=poolNote+'<div style="display:flex;flex-direction:column;gap:8px;">';

  pool.rounds.forEach(function(round,ri){
    round.forEach(function(m,mi){
      if(m.isBye) return;
      matchNum++;
      var courtName=sd.courts[m.court]?sd.courts[m.court].name:'C'+(m.court+1);
      var refText=m.ref?(' | Ref: '+dn(m.ref)):'';

      // Pre-score all sets to determine match winner
      var mySets1=0,mySets2=0,allDone=true;
      var setData=[];
      for(var si=0;si<poolSets;si++){
        var key='p'+selPool+'-r'+ri+'-m'+mi+'-s'+si;
        var sc=scores[key]||{s1:'',s2:''};
        var s1n=parseInt(sc.s1),s2n=parseInt(sc.s2);
        var has=sc.s1!==''&&sc.s2!==''&&!isNaN(s1n)&&!isNaN(s2n);
        if(!has) allDone=false;
        if(has){ if(s1n>s2n) mySets1++; else if(s2n>s1n) mySets2++; }
        setData.push({key:key,sc:sc,has:has,
          c1:has?(s1n>s2n?'win':s1n<s2n?'lose':''):'',
          c2:has?(s2n>s1n?'win':s2n<s1n?'lose':''):'',s1n:s1n,s2n:s2n});
      }
      var matchWin1=allDone&&mySets1>mySets2;
      var matchWin2=allDone&&mySets2>mySets1;
      var cardBorder=allDone?'border:.5px solid var(--bs)':'border:.5px solid var(--b3)';

      // Card header: match number, court, ref
      var card='<div style="background:var(--bg1);'+cardBorder+';border-radius:var(--rl);overflow:hidden;">';
      card+='<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 12px;background:var(--bg2);border-bottom:.5px solid var(--b3);">';
      card+='<span style="font-size:11px;color:var(--t3);font-weight:600;">#'+matchNum+'</span>';
      card+='<span style="font-size:11px;color:var(--t2);">'+courtName+refText+'</span>';
      if(allDone) card+='<span style="font-size:11px;font-weight:600;color:var(--ts);">'+(matchWin1?dn(m.p1):matchWin2?dn(m.p2):'Tie')+'</span>';
      card+='</div>';

      // Entry name bar
      card+='<div style="display:grid;grid-template-columns:1fr 28px 1fr;gap:8px;padding:8px 12px;border-bottom:.5px solid var(--b3);">';
      card+='<span style="font-size:13px;font-weight:'+(matchWin1?'600':'400')+';color:'+(matchWin1?'var(--ts)':'var(--ti)')+';">'+dn(m.p1)+'</span>';
      card+='<span style="font-size:12px;color:var(--t3);text-align:center;align-self:center;">vs</span>';
      card+='<span style="font-size:13px;font-weight:'+(matchWin2?'600':'400')+';color:'+(matchWin2?'var(--ts)':'var(--tp)')+';text-align:right;">'+dn(m.p2)+'</span>';
      card+='</div>';

      // One row per set
      setData.forEach(function(s,si){
        var rowBg=si%2===0?'':'background:var(--bg2);';
        card+='<div style="display:grid;grid-template-columns:40px 80px 28px 80px;gap:8px;align-items:center;padding:6px 12px;'+rowBg+'border-bottom:.5px solid var(--b3);">';
        card+='<span style="font-size:10px;font-weight:600;color:var(--t3);text-transform:uppercase;">Set '+(si+1)+'</span>';
        card+='<input type="number" min="0" max="99" class="score-in '+s.c1+'" value="'+s.sc.s1+'" data-key="'+s.key+'" data-side="0" oninput="onPoolScore(this)" style="max-width:80px;">';
        card+='<span style="font-size:12px;color:var(--t3);text-align:center;">vs</span>';
        card+='<input type="number" min="0" max="99" class="score-in '+s.c2+'" value="'+s.sc.s2+'" data-key="'+s.key+'" data-side="1" oninput="onPoolScore(this)" style="max-width:80px;">';
        card+='</div>';
      });

      // Set score tally if >1 set
      if(poolSets>1&&allDone){
        card+='<div style="padding:5px 12px;font-size:11px;color:var(--t3);background:var(--bg2);">Sets: '+mySets1+' - '+mySets2+'</div>';
      }

      card+='</div>';
      rows+=card;
    });
  });
  // Bonus single-set matches for undersized pools
  if(pool.bonusRounds&&pool.bonusRounds.length){
    rows+='<div style="margin-top:12px;padding:6px 0 4px;font-size:10px;font-weight:600;color:var(--ts);text-transform:uppercase;letter-spacing:.06em;border-top:.5px solid var(--b3);">Bonus sets</div>';
    pool.bonusRounds.forEach(function(round,ri){
      round.forEach(function(m,mi){
        if(m.isBye) return;
        matchNum++;
        var key='p'+selPool+'-b'+ri+'-m'+mi;
        var sc=scores[key]||{s1:'',s2:''};
        var s1n=parseInt(sc.s1),s2n=parseInt(sc.s2);
        var has=sc.s1!==''&&sc.s2!==''&&!isNaN(s1n)&&!isNaN(s2n);
        var c1=has?(s1n>s2n?'win':s1n<s2n?'lose':''):'';
        var c2=has?(s2n>s1n?'win':s2n<s1n?'lose':''):'';
        var courtName=sd.courts[m.court]?sd.courts[m.court].name:'C'+(m.court+1);
        var refHtml=m.ref?'<span style="font-size:11px;color:var(--t2);">'+dn(m.ref)+'</span>':'<span style="font-size:11px;color:var(--t3);">-</span>';
        var winnerLabel=has&&s1n!==s2n?(s1n>s2n?dn(m.p1):dn(m.p2)):'';
        var card='<div style="background:var(--bg1);border:.5px solid var(--b3);border-radius:var(--rl);overflow:hidden;opacity:0.88;">';
        card+='<div style="display:flex;justify-content:space-between;align-items:center;padding:5px 12px;background:var(--bg2);border-bottom:.5px solid var(--b3);">';
        card+='<span style="font-size:11px;color:var(--t3);font-weight:600;">#'+matchNum+' <span style="color:var(--ts);">bonus</span></span>';
        card+='<span style="font-size:11px;color:var(--t2);">'+courtName+(m.ref?' | Ref: '+dn(m.ref):'')+'</span>';
        if(winnerLabel) card+='<span style="font-size:11px;font-weight:600;color:var(--ts);">'+winnerLabel+'</span>';
        card+='</div>';
        card+='<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;padding:8px 12px;border-bottom:.5px solid var(--b3);">';
        card+='<span style="font-size:13px;color:var(--ti);">'+dn(m.p1)+'</span>';
        card+='<span style="font-size:12px;color:var(--t3);text-align:center;align-self:center;">vs</span>';
        card+='<span style="font-size:13px;color:var(--tp);text-align:right;">'+dn(m.p2)+'</span>';
        card+='</div>';
        // Single set row
        card+='<div style="display:grid;grid-template-columns:40px 80px 28px 80px;gap:8px;align-items:center;padding:6px 12px;">';
        card+='<span style="font-size:10px;font-weight:600;color:var(--ts);text-transform:uppercase;">Set 1</span>';
        card+='<input type="number" min="0" max="99" class="score-in '+c1+'" value="'+sc.s1+'" data-key="'+key+'" data-side="0" oninput="onPoolScore(this)" style="max-width:80px;">';
        card+='<span style="font-size:12px;color:var(--t3);text-align:center;">vs</span>';
        card+='<input type="number" min="0" max="99" class="score-in '+c2+'" value="'+sc.s2+'" data-key="'+key+'" data-side="1" oninput="onPoolScore(this)" style="max-width:80px;">';
        card+='</div>';
        card+='</div>';
        rows+=card;
      });
    });
  }
  rows+='</div>';
  document.getElementById('pool-table').innerHTML=rows;
  updatePoolProgress();
}
function onPoolScore(input){
  var key=input.dataset.key, side=parseInt(input.dataset.side);
  if(!scores[key]) scores[key]={s1:'',s2:''};
  if(side===0) scores[key].s1=input.value; else scores[key].s2=input.value;
  var sc=scores[key];
  var s1n=parseInt(sc.s1),s2n=parseInt(sc.s2);
  var has=sc.s1!==''&&sc.s2!==''&&!isNaN(s1n)&&!isNaN(s2n);
  var c1=has?(s1n>s2n?'win':s1n<s2n?'lose':''):'';
  var c2=has?(s2n>s1n?'win':s2n<s1n?'lose':''):'';
  var inputs=document.querySelectorAll('[data-key="'+key+'"]');
  if(inputs[0]) inputs[0].className='score-in '+c1;
  if(inputs[1]) inputs[1].className='score-in '+c2;
  storeSave();
  updatePoolProgress();
}
function updatePoolProgress(){
  var sd=SD; var total=0,done=0;
  sd.pools.forEach(function(pool,pi){
    var poolSets=pool.sets||sd.scoring.numSets||1;
    // Normal rounds
    pool.rounds.forEach(function(round,ri){round.forEach(function(m,mi){
      if(m.isBye) return;
      total++;
      var allDone=true;
      for(var si=0;si<poolSets;si++){
        var sc=scores['p'+pi+'-r'+ri+'-m'+mi+'-s'+si];
        if(!sc||sc.s1===''||sc.s2===''||isNaN(parseInt(sc.s1))||isNaN(parseInt(sc.s2))){allDone=false;break;}
      }
      if(allDone) done++;
    });});
    // Bonus single-set rounds
    if(pool.bonusRounds) pool.bonusRounds.forEach(function(round,ri){round.forEach(function(m,mi){
      if(m.isBye) return;
      total++;
      var sc=scores['p'+pi+'-b'+ri+'-m'+mi];
      if(sc&&sc.s1!==''&&sc.s2!==''&&!isNaN(parseInt(sc.s1))&&!isNaN(parseInt(sc.s2))) done++;
    });});
  });
  document.getElementById('pool-prog-lbl').textContent=done+' / '+total+' scored';
  document.getElementById('pool-prog-bar').style.width=total?Math.round(done/total*100)+'%':'0%';
}
function calcPoolStandings(poolIdx){
  var sd=SD, pool=sd.pools[poolIdx];
  var players={};
  pool.entries.forEach(function(e){players[e]={name:e,w:0,l:0,t:0,pf:0,pa:0,gp:0};});
  var poolSets=pool.sets||sd.scoring.numSets||1;
  pool.rounds.forEach(function(round,ri){round.forEach(function(m,mi){
    if(m.isBye) return;
    var sets1=0,sets2=0,totalPF1=0,totalPF2=0,allScored=true;
    for(var si=0;si<poolSets;si++){
      var sc=scores['p'+poolIdx+'-r'+ri+'-m'+mi+'-s'+si];
      if(!sc||sc.s1===''||sc.s2===''){allScored=false;break;}
      var s1=parseInt(sc.s1),s2=parseInt(sc.s2);
      if(isNaN(s1)||isNaN(s2)){allScored=false;break;}
      totalPF1+=s1; totalPF2+=s2;
      if(s1>s2) sets1++; else if(s2>s1) sets2++;
    }
    if(!allScored) return;
    players[m.p1].gp++; players[m.p1].pf+=totalPF1; players[m.p1].pa+=totalPF2;
    players[m.p2].gp++; players[m.p2].pf+=totalPF2; players[m.p2].pa+=totalPF1;
    if(sets1>sets2){players[m.p1].w++;players[m.p2].l++;}
    else if(sets2>sets1){players[m.p2].w++;players[m.p1].l++;}
    else{players[m.p1].t++;players[m.p2].t++;}
  });});
  // Bonus single-set rounds (count as individual matches)
  if(pool.bonusRounds) pool.bonusRounds.forEach(function(round,ri){round.forEach(function(m,mi){
    if(m.isBye) return;
    var sc=scores['p'+poolIdx+'-b'+ri+'-m'+mi];
    if(!sc||sc.s1===''||sc.s2==='') return;
    var s1=parseInt(sc.s1),s2=parseInt(sc.s2);
    if(isNaN(s1)||isNaN(s2)) return;
    players[m.p1].gp++; players[m.p1].pf+=s1; players[m.p1].pa+=s2;
    players[m.p2].gp++; players[m.p2].pf+=s2; players[m.p2].pa+=s1;
    if(s1>s2){players[m.p1].w++;players[m.p2].l++;}
    else if(s2>s1){players[m.p2].w++;players[m.p1].l++;}
    else{players[m.p1].t++;players[m.p2].t++;}
  });});
  // Attach per-game coefficients for cross-pool fairness
  Object.values(players).forEach(function(p){
    p.winRate=p.gp>0?p.w/p.gp:0;
    p.diffPerGame=p.gp>0?(p.pf-p.pa)/p.gp:0;
    p.pfPerGame=p.gp>0?p.pf/p.gp:0;
  });
  return Object.values(players).sort(sortByCoeff);
}
function sortByCoeff(a,b){
  // Primary: win rate; Secondary: point diff per game; Third: PF per game
  if(Math.abs(b.winRate-a.winRate)>0.0001) return b.winRate-a.winRate;
  if(Math.abs(b.diffPerGame-a.diffPerGame)>0.0001) return b.diffPerGame-a.diffPerGame;
  return b.pfPerGame-a.pfPerGame;
}
// -- Double/Single elimination bracket ----------------------------------------
function lRoundSizes(sz, wNR){
  // Standard DE L-bracket sizes based on power-of-2 bracket size
  // sz/4 seeds in L-R0, pattern repeats: same, halve, same, halve...
  if(wNR<=1) return [];
  var sizes=[], s=sz/4;
  for(var i=0;i<2*(wNR-1);i++){
    sizes.push(Math.max(1,s));
    if(i%2===1&&s>1) s=Math.floor(s/2);
  }
  return sizes;
}
function buildWRounds(seeds){
  var n=seeds.length;
  var sz=1; while(sz<n) sz*=2;
  var wNR=Math.log2(sz);
  var byeCount=sz-n;  // how many R0 matches are byes
  // Standard seeding: 1v(sz), 2v(sz-1)... with byes at the bottom
  var r0=[];
  for(var i=0;i<sz/2;i++){
    var p1=seeds[i]||null, p2=seeds[sz-1-i]||null;
    var bye=!p1||!p2;
    r0.push({
      p1:p1||(p2||'TBD'), p2:bye?null:p2,
      isBye:bye, winner:bye?(p1||p2):null,
      matchNum:0, court:null
    });
  }
  var wRounds=[r0];
  // Build subsequent W rounds
  var prev=r0;
  for(var r=1;r<wNR;r++){
    var round=[];
    for(var j=0;j<Math.ceil(prev.length/2);j++)
      round.push({p1:null,p2:null,isBye:false,winner:null,matchNum:0,court:null});
    wRounds.push(round);
    prev=round;
  }
  // Auto-advance byes in R0 -> R1
  r0.forEach(function(m,mi){
    if(m.isBye&&m.winner&&wRounds[1]){
      var nmi=Math.floor(mi/2);
      if(mi%2===0) wRounds[1][nmi].p1=m.winner;
      else          wRounds[1][nmi].p2=m.winner;
    }
  });
  return {wRounds:wRounds, sz:sz, wNR:wNR, byeCount:byeCount};
}
function seedBracket(){
  var sd=SD;
  var bracketType=sd.config.bracketType||'single';
  var method=sd.bracket.seedingMethod||'flat';
  var nb=sd.config.numBrackets||2;
  var bracketNames=sd.config.bracketNames&&sd.config.bracketNames.length?sd.config.bracketNames:['Gold','Silver','Bronze','Copper','Platinum','Diamond'];
  var allCourts=sd.courts||[];
  var numCourts=Math.max(allCourts.length,1);
  // Build seed list
  var allSeeds=[];
  // Determine entry count and qualifier cutoff for this format
  var _totalEntries;
  if(fmt==='traditional_league') _totalEntries=sd.teams?sd.teams.length:0;
  else if(fmt==='kob_league') _totalEntries=(sd.gA?sd.gA.length:0)+(sd.gB?sd.gB.length:0);
  else _totalEntries=sd.entries?sd.entries.length:0;
  var _qualCfg=sd.config&&sd.config.playoffMode==='top-n'?sd.config.playoffQualifiers:
    (sd.bracket&&sd.bracket.qualifiers?sd.bracket.qualifiers:null);
  var _totalAdv=_qualCfg||_totalEntries;

  if(method==='pool'&&sd.pools){
    var _seedsAdv=Math.max(1,Math.ceil(_totalAdv/sd.pools.length));
    var byPool=sd.pools.map(function(p,pi){return calcPoolStandings(pi).slice(0,_seedsAdv);});
    for(var s=0;s<_seedsAdv;s++)
      for(var p=0;p<sd.pools.length;p++)
        if(byPool[p][s]) allSeeds.push(byPool[p][s].name);
  } else {
    if(fmt==='kob_league'||fmt==='traditional_league'){
      // League: seed from season standings
      var leagueStandings=fmt==='traditional_league'?calcTradLeagueStandings():calcLgStandings();
      allSeeds=leagueStandings.map(function(p){return p.name;});
    } else {
      var allPlayers={};
      sd.pools.forEach(function(pool,pi){
        calcPoolStandings(pi).forEach(function(p){ allPlayers[p.name]=p; });
      });
      allSeeds=Object.values(allPlayers).sort(sortByCoeff).map(function(p){return p.name;});
    }
  }
  var total=allSeeds.length;
  var perBracket=Math.ceil(total/nb);
  allBrackets=[];
  var courtsPerBracket=Math.max(1,Math.floor(numCourts/Math.max(nb,1)));
  var globalMatchNum=1;
  for(var b=0;b<nb;b++){
    var slice=allSeeds.slice(b*perBracket,(b+1)*perBracket);
    if(!slice.length) break;
    var wb=buildWRounds(slice);
    var wRounds=wb.wRounds, sz=wb.sz, wNR=wb.wNR, byeCount=wb.byeCount;
    // L bracket
    var lRounds=[], lNR=0;
    if(bracketType==='double'&&wNR>1){
      lNR=2*(wNR-1);
      var lSizes=lRoundSizes(sz,wNR);
      for(var lr=0;lr<lNR;lr++){
        var lRound=[];
        for(var j=0;j<lSizes[lr];j++)
          lRound.push({p1:null,p2:null,isBye:false,winner:null,matchNum:0,court:null});
        lRounds.push(lRound);
      }
    }
    var grandFinal={p1:null,p2:null,winner:null,matchNum:0};
    // Assign match numbers: W-R0, L-R0, W-R1, L-R1, L-R2, W-R2, L-R3, L-R4, ...
    var bracketCourtStart=b*courtsPerBracket;
    var bracketCourtCount=courtsPerBracket;
    var localCourtCounter=0;
    function assignNum(m){
      if(!m.isBye){
        m.matchNum=globalMatchNum++;
        var courtIdx=bracketCourtStart+(localCourtCounter%bracketCourtCount);
        m.court=allCourts[courtIdx]?allCourts[courtIdx].name:'Court '+(courtIdx+1);
        localCourtCounter++;
      }
    }
    wRounds[0].forEach(assignNum);
    if(lRounds[0]) lRounds[0].forEach(assignNum);
    for(var r=1;r<wNR;r++){
      wRounds[r].forEach(assignNum);
      if(lRounds[2*r-1]) lRounds[2*r-1].forEach(assignNum);
      if(lRounds[2*r])   lRounds[2*r].forEach(assignNum);
    }
    if(bracketType==='double') grandFinal.matchNum=globalMatchNum++;
    var newBk={
      name:b<bracketNames.length?bracketNames[b]:'Bracket '+(b+1),
      seeds:slice, type:bracketType,
      wRounds:wRounds, lRounds:lRounds,
      grandFinal:grandFinal, sz:sz, wNR:wNR, lNR:lNR
    };
    markDeadLSlots(newBk);
    allBrackets.push(newBk);
  }
  var navEl=document.getElementById('bracket-sub-nav');
  if(navEl){
    var h='';
    allBrackets.forEach(function(bk,i){
      h+='<button class="btn-sm'+(i===selBracket?' sel':'')+'" onclick="selBracket='+i+';renderBracketNav();renderBracket()">'+bk.name+'</button>';
    });
    navEl.innerHTML=h;
  }
  document.getElementById('btn-seed-bracket').textContent='Re-seed brackets';
  var editBtn=document.getElementById('btn-edit-seeds');
  if(editBtn) editBtn.style.display='';
  storeLoadBrackets();
  renderBracket();
}
function markDeadLSlots(bk){
  if(!bk.lRounds.length) return;
  // Mark L-R1 slots whose source W-R1 match was a bye
  bk.wRounds[0].forEach(function(wm,wMi){
    if(!wm.isBye) return;
    var lMi=Math.floor(wMi/2);
    if(lMi>=bk.lRounds[0].length) return;
    var lm=bk.lRounds[0][lMi];
    if(wMi%2===0) lm.p1Dead=true; else lm.p2Dead=true;
  });
  // Propagate: both sides dead -> isEmpty, mark next-round input dead
  var changed=true;
  while(changed){
    changed=false;
    bk.lRounds.forEach(function(round,lRi){
      round.forEach(function(m,lMi){
        if(m.isEmpty) return;
        if(m.p1Dead&&m.p2Dead){
          m.isEmpty=true; m.isBye=true;
          var next=lRi+1;
          if(next>=bk.lRounds.length) return;
          if(lRi%2===0){
            if(lMi<bk.lRounds[next].length) bk.lRounds[next][lMi].p2Dead=true;
          } else {
            var nmi=Math.floor(lMi/2);
            if(nmi<bk.lRounds[next].length){
              if(lMi%2===0) bk.lRounds[next][nmi].p1Dead=true;
              else bk.lRounds[next][nmi].p2Dead=true;
            }
          }
          changed=true;
        }
      });
    });
  }
}
function autoAdvanceLIfNeeded(bk){
  // If one side of a L match is dead and the other is filled, auto-advance winner
  var changed=true;
  while(changed){
    changed=false;
    bk.lRounds.forEach(function(round,lRi){
      round.forEach(function(m,lMi){
        if(m.winner||m.isEmpty) return;
        var p1Real=m.p1&&m.p1!=='TBD';
        var p2Real=m.p2&&m.p2!=='TBD';
        if(p1Real&&m.p2Dead&&!p2Real){
          m.winner=m.p1; m.isBye=true;
          advanceInL(bk,lRi,lMi,m.p1);
          changed=true;
        } else if(p2Real&&m.p1Dead&&!p1Real){
          m.winner=m.p2; m.isBye=true;
          advanceInL(bk,lRi,lMi,m.p2);
          changed=true;
        }
      });
    });
  }
}
function dropToL(bk,wRi,wMi,loser){
  if(!bk.lRounds.length) return;
  if(wRi===0){
    var lMi=Math.floor(wMi/2);
    if(lMi<bk.lRounds[0].length){
      if(wMi%2===0) bk.lRounds[0][lMi].p1=loser; else bk.lRounds[0][lMi].p2=loser;
    }
  } else {
    var lRi=2*wRi-1;
    if(lRi<bk.lRounds.length&&wMi<bk.lRounds[lRi].length)
      bk.lRounds[lRi][wMi].p1=loser;
  }
  autoAdvanceLIfNeeded(bk);
}
function advanceInL(bk,lRi,lMi,winner){
  var next=lRi+1;
  if(next>=bk.lRounds.length){ bk.grandFinal.p2=winner; return; }
  if(lRi%2===0){
    if(lMi<bk.lRounds[next].length) bk.lRounds[next][lMi].p2=winner;
  } else {
    var nmi=Math.floor(lMi/2);
    if(nmi<bk.lRounds[next].length){
      if(lMi%2===0) bk.lRounds[next][nmi].p1=winner; else bk.lRounds[next][nmi].p2=winner;
    }
  }
}
function pickWinner(bi,side,ri,mi,winner){
  if(!allBrackets[bi]) return;
  var bk=allBrackets[bi];
  if(side==='W'){
    var m=bk.wRounds[ri][mi]; if(!m) return;
    var loser=m.p1===winner?m.p2:m.p1;
    if(m.winner===winner){ m.winner=null; clearWAdvanced(bk,ri,mi); }
    else {
      clearWAdvanced(bk,ri,mi); m.winner=winner;
      if(ri+1<bk.wRounds.length){ var nmi=Math.floor(mi/2); if(mi%2===0) bk.wRounds[ri+1][nmi].p1=winner; else bk.wRounds[ri+1][nmi].p2=winner; }
      else bk.grandFinal.p1=winner;
      if(loser) dropToL(bk,ri,mi,loser);
    }
  } else if(side==='L'){
    var m=bk.lRounds[ri][mi]; if(!m||m.isEmpty) return;
    if(m.winner===winner){ m.winner=null; clearLAdvanced(bk,ri,mi); }
    else { clearLAdvanced(bk,ri,mi); m.winner=winner; advanceInL(bk,ri,mi,winner); }
  } else if(side==='GF'){
    if(bk.grandFinal.winner===winner) bk.grandFinal.winner=null; else bk.grandFinal.winner=winner;
  }
  renderBracket();
}
function clearWAdvanced(bk,ri,mi){
  var m=bk.wRounds[ri][mi]; if(!m||!m.winner) return;
  var winner=m.winner, loser=m.p1===winner?m.p2:m.p1;
  if(ri+1<bk.wRounds.length){
    var nmi=Math.floor(mi/2), nm=bk.wRounds[ri+1][nmi];
    if(nm){ if(mi%2===0) nm.p1=null; else nm.p2=null; if(nm.winner){clearWAdvanced(bk,ri+1,nmi);nm.winner=null;} }
  } else {
    if(bk.grandFinal.p1===winner){ bk.grandFinal.p1=null; bk.grandFinal.winner=null; }
  }
  if(loser&&bk.lRounds.length) clearLoserFromL(bk,ri,mi,loser);
}
function clearLoserFromL(bk,wRi,wMi,loser){
  if(wRi===0){
    var lMi=Math.floor(wMi/2);
    if(lMi<bk.lRounds[0].length){
      var lm=bk.lRounds[0][lMi];
      if(wMi%2===0) lm.p1=null; else lm.p2=null;
      if(lm.winner&&!lm.isBye){clearLAdvanced(bk,0,lMi);lm.winner=null;}
    }
  } else {
    var lRi=2*wRi-1;
    if(lRi<bk.lRounds.length&&wMi<bk.lRounds[lRi].length){
      var lm=bk.lRounds[lRi][wMi]; lm.p1=null;
      if(lm.winner&&!lm.isBye){clearLAdvanced(bk,lRi,wMi);lm.winner=null;}
    }
  }
}
function clearLAdvanced(bk,lRi,lMi){
  var m=bk.lRounds[lRi][lMi]; if(!m||!m.winner||m.isBye) return;
  var next=lRi+1;
  if(next>=bk.lRounds.length){ bk.grandFinal.p2=null; bk.grandFinal.winner=null; return; }
  var nmi, nm;
  if(lRi%2===0){ nmi=lMi; nm=bk.lRounds[next][nmi]; if(nm){nm.p2=null;if(nm.winner&&!nm.isBye){clearLAdvanced(bk,next,nmi);nm.winner=null;}} }
  else { nmi=Math.floor(lMi/2); nm=bk.lRounds[next][nmi]; if(nm){if(lMi%2===0)nm.p1=null;else nm.p2=null;if(nm.winner&&!nm.isBye){clearLAdvanced(bk,next,nmi);nm.winner=null;}} }
}

// -- Seed editor -------------------------------------------------------------
var _editingBracketIdx=0;
var _dragSrcIdx=null;

function toggleSeedEditor(){
  var editor=document.getElementById('seed-editor');
  var wrap=document.getElementById('bracket-wrap');
  if(editor.style.display==='none'){
    _editingBracketIdx=selBracket;
    buildSeedList();
    editor.style.display='';
    wrap.style.display='none';
    document.getElementById('btn-edit-seeds').textContent='Close editor';
  } else {
    cancelSeedEdit();
  }
}

function buildSeedList(){
  var bk=allBrackets[_editingBracketIdx]; if(!bk) return;
  var wrap=document.getElementById('seed-list-wrap'); if(!wrap) return;
  var h='';
  bk.seeds.forEach(function(name,i){
    h+='<div class="seed-item" draggable="true" data-idx="'+i+'" '+
       'ondragstart="onSeedDragStart(event,'+i+')" '+
       'ondragover="onSeedDragOver(event)" '+
       'ondragleave="onSeedDragLeave(event)" '+
       'ondrop="onSeedDrop(event,'+i+')" '+
       'ondragend="onSeedDragEnd(event)">'+
       '<span class="seed-handle">&#8597;</span>'+
       '<span class="seed-num">'+(i+1)+'</span>'+
       '<span class="seed-name">'+name+'</span>'+
       '</div>';
  });
  wrap.innerHTML=h;
}

function onSeedDragStart(e,idx){
  _dragSrcIdx=idx;
  e.target.classList.add('dragging');
  e.dataTransfer.effectAllowed='move';
}
function onSeedDragOver(e){
  e.preventDefault();
  e.dataTransfer.dropEffect='move';
  e.currentTarget.classList.add('drag-over');
}
function onSeedDragLeave(e){ e.currentTarget.classList.remove('drag-over'); }
function onSeedDragEnd(e){ e.target.classList.remove('dragging'); }
function onSeedDrop(e,toIdx){
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  if(_dragSrcIdx===null||_dragSrcIdx===toIdx) return;
  var bk=allBrackets[_editingBracketIdx]; if(!bk) return;
  // Reorder seeds array
  var seeds=bk.seeds.slice();
  var moved=seeds.splice(_dragSrcIdx,1)[0];
  seeds.splice(toIdx,0,moved);
  bk.seeds=seeds;
  _dragSrcIdx=null;
  buildSeedList(); // refresh numbers
}

function confirmSeedEdit(){
  var bk=allBrackets[_editingBracketIdx]; if(!bk) return;
  // Rebuild bracket from current seed order, preserving type and courts
  var sd=SD, allCourts=sd.courts||[], numCourts=Math.max(allCourts.length,1);
  var courtCounter=0;
  var globalMatchNum=1;
  // Recalculate match numbers for all brackets so they stay sequential
  allBrackets.forEach(function(b,bi){
    var wb=buildWRounds(b.seeds);
    b.wRounds=wb.wRounds; b.sz=wb.sz; b.wNR=wb.wNR; b.byeCount=wb.byeCount;
    var lRounds=[], lNR=0;
    if(b.type==='double'&&b.wNR>1){
      lNR=2*(b.wNR-1);
      var lSizes=lRoundSizes(b.sz,b.wNR);
      for(var lr=0;lr<lNR;lr++){
        var lRound=[];
        for(var j=0;j<lSizes[lr];j++)
          lRound.push({p1:null,p2:null,isBye:false,winner:null,matchNum:0,court:null});
        lRounds.push(lRound);
      }
    }
    b.lRounds=lRounds; b.lNR=lNR;
    b.grandFinal={p1:null,p2:null,winner:null,matchNum:0};
    var bracketCourtStart=b*courtsPerBracket;
    var bracketCourtCount=courtsPerBracket;
    var localCourtCounter=0;
    function assignNum(m){
      if(!m.isBye){
        m.matchNum=globalMatchNum++;
        var courtIdx=bracketCourtStart+(localCourtCounter%bracketCourtCount);
        m.court=allCourts[courtIdx]?allCourts[courtIdx].name:'Court '+(courtIdx+1);
        localCourtCounter++;
      }
    }
    b.wRounds[0].forEach(assignNum);
    if(b.lRounds[0]) b.lRounds[0].forEach(assignNum);
    for(var r=1;r<b.wNR;r++){
      b.wRounds[r].forEach(assignNum);
      if(b.lRounds[2*r-1]) b.lRounds[2*r-1].forEach(assignNum);
      if(b.lRounds[2*r])   b.lRounds[2*r].forEach(assignNum);
    }
    if(b.type==='double') b.grandFinal.matchNum=globalMatchNum++;
    markDeadLSlots(b);
  });
  cancelSeedEdit();
}

function cancelSeedEdit(){
  document.getElementById('seed-editor').style.display='none';
  document.getElementById('bracket-wrap').style.display='';
  document.getElementById('btn-edit-seeds').textContent='Edit seeds';
  renderBracket();
}
function renderBracketNav(){
  var navEl=document.getElementById('bracket-sub-nav'); if(!navEl) return;
  navEl.querySelectorAll('.btn-sm').forEach(function(b,i){b.classList.toggle('sel',i===selBracket);});
}
function bkMatchHtml(bi,side,ri,mi,m){
  // Completely empty match (both sides from byes) - don't render
  if(m.isEmpty) return '';
  var p1=dn(m.p1||'TBD'), p2=dn(m.p2||'TBD');
  var rp1=m.p1||'TBD', rp2=m.p2||'TBD';
  var w1=!!(m.winner&&m.winner===rp1), w2=!!(m.winner&&m.winner===rp2);
  var hdr='';
  if(m.court||m.matchNum) hdr='<div style="font-size:10px;color:var(--t3);padding:3px 10px 0;border-bottom:.5px solid var(--b3);">'+(m.court||'')+(m.court&&m.matchNum?' &nbsp;':'')+(m.matchNum?'#'+m.matchNum:'')+'</div>';
  // Auto-advanced bye (one real entry, other side was dead) - show as bye
  if(m.isBye) return '<div class="bk-match bye">'+hdr+'<div class="bk-entry winner"><span class="bk-name">'+p1+'</span><span style="font-size:10px;color:var(--t3)"> bye</span></div></div>';
  // Check if one side is dead (shouldn't be clickable)
  var p1Dead=!!(m.p1Dead&&!m.p1), p2Dead=!!(m.p2Dead&&!m.p2);
  function entryHtml(name,isWinner,isDead,pickCall){
    var btn=isDead?'<span style="font-size:10px;color:var(--t3)">-</span>':
      '<button class="bk-pick'+(isWinner?' picked':'')+'" onclick="'+pickCall+'">'+(isWinner?'Won':'Win?')+'</button>';
    return '<div class="bk-entry'+(isWinner?' winner':'')+'"><span class="bk-name">'+name+'</span>'+btn+'</div>';
  }
  return '<div class="bk-match'+(m.winner?' complete':'')+'">'+hdr+
    entryHtml(p1,w1,p1Dead,'pickWinner('+bi+',\x27'+side+'\x27,'+ri+','+mi+',\x27'+p1+'\x27)')+
    entryHtml(p2,w2,p2Dead,'pickWinner('+bi+',\x27'+side+'\x27,'+ri+','+mi+',\x27'+p2+'\x27)')+
    '</div>';
}
function renderBracketSide(bk,side){
  var rounds=side==='W'?bk.wRounds:bk.lRounds;
  var nr=rounds.length;
  var bi=selBracket;
  var html='<div class="bracket-wrap"><div class="bracket">';
  rounds.forEach(function(round,ri){
    var fromEnd=nr-1-ri;
    var label;
    if(side==='W') label=fromEnd===0?'Final':fromEnd===1?'Semifinals':fromEnd===2?'Quarterfinals':'Round '+(ri+1);
    else label=fromEnd===0?'Contenders Final':'Elim. R'+(ri+1);
    html+='<div class="bk-round"><div class="bk-round-hdr">'+label+'</div>';
    round.forEach(function(m,mi){ html+=bkMatchHtml(bi,side,ri,mi,m)+'<div style="height:6px;"></div>'; });
    html+='</div>';
  });
  return html+'</div></div>';
}
function renderGrandFinal(bk){
  var gf=bk.grandFinal, bi=selBracket;
  var rp1=gf.p1||'TBD (Winners)', rp2=gf.p2||'TBD (Contenders)';
  var p1=dn(rp1), p2=dn(rp2);
  var w1=!!(gf.winner&&gf.winner===rp1), w2=!!(gf.winner&&gf.winner===rp2);
  var hdr='<div style="font-size:10px;color:var(--t3);padding:3px 10px 0;border-bottom:.5px solid var(--b3);">Grand Final'+(gf.matchNum?' #'+gf.matchNum:'')+'</div>';
  var btns=gf.p1&&gf.p2;
  return '<div style="max-width:220px;"><div class="bk-match'+(gf.winner?' complete':'')+'">'+hdr+
    '<div class="bk-entry'+(w1?' winner':'')+'"><span class="bk-name">'+p1+'</span>'+(btns?'<button class="bk-pick'+(w1?' picked':'')+'" onclick="pickWinner('+bi+',\x27GF\x27,0,0,\x27'+p1+'\x27)">'+(w1?'Won':'Win?')+'</button>':'')+'</div>'+
    '<div class="bk-entry'+(w2?' winner':'')+'"><span class="bk-name">'+p2+'</span>'+(btns?'<button class="bk-pick'+(w2?' picked':'')+'" onclick="pickWinner('+bi+',\x27GF\x27,0,0,\x27'+p2+'\x27)">'+(w2?'Won':'Win?')+'</button>':'')+'</div>'+
    (gf.winner?'<div style="padding:6px 10px;font-size:12px;font-weight:600;color:var(--ts);">Champion: '+gf.winner+'</div>':'')+
    '</div></div>';
}
function renderBracket(){
  var el=document.getElementById('bracket-wrap'); if(!el) return;
  if(!allBrackets.length){el.innerHTML='<div class="bk-empty">Click "Seed brackets from pool results" once pool play is complete.</div>';return;}
  if(selBracket>=allBrackets.length) selBracket=0;
  var bk=allBrackets[selBracket];
  var html='';
  if(bk.type==='double') html+='<div class="bk-section-hdr">Winners Bracket</div>';
  html+=renderBracketSide(bk,'W');
  if(bk.type==='double'&&bk.lRounds.length){
    html+='<div class="bk-section-hdr" style="margin-top:20px;">Contenders Bracket</div>';
    html+=renderBracketSide(bk,'L');
    html+='<div class="bk-section-hdr" style="margin-top:20px;">Grand Final</div>';
    html+=renderGrandFinal(bk);
  }
  el.innerHTML=html;
}


/* =======================================================
   SHARED: STANDINGS
======================================================= */
function renderStandings(){
  if(fmt==='kob_league') renderLgStandings();
  else if(fmt==='traditional_tournament') renderTournamentStandings();
  else if(fmt==='traditional_league') renderTradLeagueStandings();
  else if(fmt==='kob_quads') renderQuadsStandings();
  else if(fmt==='kob_random_mix') renderMixStandings();
}
function renderLgStandings(){
  var all=calcLgStandings();
  var fEl=document.getElementById('std-filter');
  if(fEl&&!fEl.innerHTML) fEl.innerHTML='<button class="btn-xs sel" onclick="setGF(\'all\',this)">All</button><button class="btn-xs" onclick="setGF(\'A\',this)">Group A</button><button class="btn-xs" onclick="setGF(\'B\',this)">Group B</button>';
  var list=gf==='all'?all:all.filter(function(p){return p.grp===gf;});
  var tbody='';
  list.forEach(function(p,i){
    var rank=i+1,diff=p.pf-p.pa;
    var m=rank===1?'gold':rank===2?'silver':rank===3?'bronze':'';
    tbody+='<tr class="'+(rank%2===0?'alt':'')+'">' +
      '<td><span class="rnk '+m+'">'+rank+'</span></td><td>'+p.name+'</td>' +
      '<td><span class="gbadge">'+p.grp+'</span></td>' +
      '<td class="r">'+p.w+'</td><td class="r">'+p.l+'</td><td class="r">'+(p.w+p.l)+'</td>' +
      '<td class="r">'+p.pf+'</td><td class="r">'+p.pa+'</td>' +
      '<td class="r"><span class="'+(diff>0?'dpos':diff<0?'dneg':'')+'">'+( diff>0?'+':'')+diff+'</span></td></tr>';
  });
  document.getElementById('std-table').innerHTML='<thead><tr><th>#</th><th>Player</th><th>Grp</th><th class="r">W</th><th class="r">L</th><th class="r">MP</th><th class="r">PF</th><th class="r">PA</th><th class="r">+/-</th></tr></thead><tbody>'+tbody+'</tbody>';
}
function setGF(f,btn){
  gf=f;
  document.querySelectorAll('#std-filter .btn-xs').forEach(function(b){b.classList.remove('sel');});
  btn.classList.add('sel');
  renderStandings();
}
function calcAllPoolStandings(){
  // Aggregate all pools into one globally-ranked list
  var sd=SD, allPlayers=[];
  sd.pools.forEach(function(pool,pi){
    calcPoolStandings(pi).forEach(function(p){
      allPlayers.push(Object.assign({},p,{pool:pool.name}));
    });
  });
  return allPlayers.sort(sortByCoeff);
}
function renderTournamentStandings(){
  var sd=SD;
  var fEl=document.getElementById('std-filter');
  if(!fEl.innerHTML){
    var h='<button class="btn-xs sel" onclick="setTournStdFilter(-1,this)">All</button>';
    sd.pools.forEach(function(p,pi){h+='<button class="btn-xs" onclick="setTournStdFilter('+pi+',this)">'+p.name+'</button>';});
    fEl.innerHTML=h;
  }
  var poolFilter=typeof window._poolFilter==='undefined'?-1:window._poolFilter;
  function pct(v){return(v*100).toFixed(1)+'%';}
  function perG(v,gp){return gp>0?(v/gp).toFixed(2):'-';}
  var tbody='',thead='';
  if(poolFilter===-1){
    // Combined global ranking -- per-game stats shown for cross-pool fairness
    thead='<thead><tr><th>#</th><th>Entry</th><th>Pool</th><th class="r">GP</th><th class="r">W</th><th class="r">L</th><th class="r">W%</th><th class="r">+/-/G</th><th class="r">PF/G</th></tr></thead>';
    var all=calcAllPoolStandings();
    all.forEach(function(p,i){
      var rank=i+1;
      var badge=rank===1?'gold':rank===2?'silver':rank===3?'bronze':'';
      var dpg=p.diffPerGame, pos=dpg>0,neg=dpg<0;
      tbody+='<tr class="'+(rank%2===0?'alt':'')+'">' +
        '<td><span class="rnk '+badge+'">'+rank+'</span></td>' +
        '<td>'+dn(p.name)+'</td>' +
        '<td><span class="gbadge">'+p.pool+'</span></td>' +
        '<td class="r">'+p.gp+'</td>' +
        '<td class="r">'+p.w+'</td>' +
        '<td class="r">'+p.l+'</td>' +
        '<td class="r"><strong>'+pct(p.winRate)+'</strong></td>' +
        '<td class="r"><span class="'+(pos?'dpos':neg?'dneg':'')+'">'+( pos?'+':'')+dpg.toFixed(2)+'</span></td>' +
        '<td class="r">'+p.pfPerGame.toFixed(2)+'</td>' +
        '</tr>';
    });
    // Show a note if pools have different sizes
    var sd=SD, sizes=sd.pools.map(function(p){return p.entries.length;});
    var allSame=sizes.every(function(s){return s===sizes[0];});
    if(!allSame){
      document.getElementById('std-note').textContent='Pools have unequal sizes -- standings use win rate and per-game stats for fair comparison.';
    }
  } else {
    // Single pool view -- show raw stats
    thead='<thead><tr><th>#</th><th>Entry</th><th class="r">GP</th><th class="r">W</th><th class="r">L</th><th class="r">W%</th><th class="r">PF</th><th class="r">PA</th><th class="r">+/-</th></tr></thead>';
    calcPoolStandings(poolFilter).forEach(function(p,i){
      var rank=i+1,diff=p.pf-p.pa;
      var badge=rank===1?'gold':rank===2?'silver':rank===3?'bronze':'';
      tbody+='<tr class="'+(rank%2===0?'alt':'')+'">' +
        '<td><span class="rnk '+badge+'">'+rank+'</span></td><td>'+dn(p.name)+'</td>' +
        '<td class="r">'+p.gp+'</td>' +
        '<td class="r">'+p.w+'</td><td class="r">'+p.l+'</td>' +
        '<td class="r">'+pct(p.winRate)+'</td>' +
        '<td class="r">'+p.pf+'</td><td class="r">'+p.pa+'</td>' +
        '<td class="r"><span class="'+(diff>0?'dpos':diff<0?'dneg':'')+'">'+( diff>0?'+':'')+diff+'</span></td></tr>';
    });
  }
  document.getElementById('std-table').innerHTML=thead+'<tbody>'+tbody+'</tbody>';
}
function setTournStdFilter(pi,btn){
  window._poolFilter=pi;
  document.querySelectorAll('#std-filter .btn-xs').forEach(function(b){b.classList.remove('sel');});
  btn.classList.add('sel');
  renderTournamentStandings();
}


// -- Teams rename tab --------------------------------------------------------
function renderTeamsTab(){
  var wrap=document.getElementById('teams-rename-list'); if(!wrap) return;
  var entries=Object.keys(nameMap);
  if(!entries.length){ wrap.innerHTML='<p style="color:var(--t3);font-size:13px;">No entries loaded yet.</p>'; return; }
  var h='';
  entries.forEach(function(orig){
    h+='<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">'+
      '<span style="font-size:12px;color:var(--t3);width:90px;flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="'+orig+'">'+orig+'</span>'+
      '<span style="color:var(--t3);font-size:12px;">-></span>'+
      '<input type="text" data-orig="'+orig+'" value="'+nameMap[orig]+'" '+
        'style="flex:1;font-size:13px;padding:5px 8px;border:.5px solid var(--b3);border-radius:var(--rm);background:var(--bg2);color:var(--t1);" '+
        'placeholder="'+orig+'">'+
      '</div>';
  });
  wrap.innerHTML=h;
}
function applyRenames(){
  var inputs=document.querySelectorAll('#teams-rename-list input[data-orig]');
  inputs.forEach(function(inp){
    var orig=inp.dataset.orig, val=inp.value.trim();
    nameMap[orig]=val||orig;
  });
  // Refresh all visible tabs
  if(fmt==='traditional_tournament'){
    renderPoolSchedule();
    renderStandings();
    if(allBrackets.length) renderBracket();
  }
  storeSave();
  renderTeamsTab();
}
function resetRenames(){
  Object.keys(nameMap).forEach(function(k){ nameMap[k]=k; });
  renderTeamsTab();
  if(fmt==='traditional_tournament'){
    renderPoolSchedule();
    renderStandings();
    if(allBrackets.length) renderBracket();
  }
}

/* =======================================================
   SHARED: LOOKUP
======================================================= */
function renderLookupSelect(){
  var sd=SD, opt='<option value="">-- select --</option>';
  if(fmt==='traditional_league'){
    SD.teams.forEach(function(t){opt+='<option value="'+t+'">'+dn(t)+'</option>';});
  } else if(fmt==='kob_league'){
    sd.gA.forEach(function(n){opt+='<option value="'+n+'|A">'+n+' (A)</option>';});
    sd.gB.forEach(function(n){opt+='<option value="'+n+'|B">'+n+' (B)</option>';});
  } else {
    sd.entries.forEach(function(e){opt+='<option value="'+e+'">'+e+'</option>';});
  }
  document.getElementById('lookup-sel').innerHTML=opt;
}
function renderLookup(){
  var val=document.getElementById('lookup-sel').value;
  if(!val){document.getElementById('lookup-res').innerHTML='';return;}
  if(fmt==='kob_league') renderLgLookup(val);
  else if(fmt==='traditional_league') renderTradLeagueLookup(val);
  else renderTournLookup(val);
}
function renderLgLookup(val){
  var parts=val.split('|'),name=parts[0],grp=parts[1];
  var sd=SD, rows=[];
  sd.sched.forEach(function(week,wi){week.forEach(function(round,ri){round.forEach(function(m,ni){
    var partner=null,opp1=null,opp2=null,mySc=null,oppSc=null;
    var sc=scores[wi+'-'+ri+'-'+ni];
    if(grp==='A'){
      if(m.p1[0]===name){partner=m.p1[1];opp1=m.p2[0];opp2=m.p2[1];if(sc&&sc.s1!==''&&sc.s2!==''){mySc=parseInt(sc.s1);oppSc=parseInt(sc.s2);}}
      else if(m.p2[0]===name){partner=m.p2[1];opp1=m.p1[0];opp2=m.p1[1];if(sc&&sc.s1!==''&&sc.s2!==''){mySc=parseInt(sc.s2);oppSc=parseInt(sc.s1);}}
    } else {
      if(m.p1[1]===name){partner=m.p1[0];opp1=m.p2[0];opp2=m.p2[1];if(sc&&sc.s1!==''&&sc.s2!==''){mySc=parseInt(sc.s1);oppSc=parseInt(sc.s2);}}
      else if(m.p2[1]===name){partner=m.p2[0];opp1=m.p1[0];opp2=m.p1[1];if(sc&&sc.s1!==''&&sc.s2!==''){mySc=parseInt(sc.s2);oppSc=parseInt(sc.s1);}}
    }
    if(partner) rows.push({label:'W'+(wi+1)+' R'+(ri+1),partner:partner,opp1:opp1,opp2:opp2,mySc:mySc,oppSc:oppSc});
  });});});
  var html='<div class="lk-wrap"><div class="lk-head"><span>Round</span><span>Net</span><span>Partner</span><span></span><span>Opponents</span><span>Result</span></div>';
  rows.forEach(function(r,i){
    var resHtml='<span style="color:var(--t3);font-size:12px;">--</span>';
    if(r.mySc!==null&&!isNaN(r.mySc)){var win=r.mySc>r.oppSc,col=win?'var(--ts)':r.mySc<r.oppSc?'var(--tw)':'var(--t2)';resHtml='<span style="font-family:var(--mono);font-size:12px;color:'+col+'">'+r.mySc+'-'+r.oppSc+'</span>';}
    html+='<div class="lk-row'+(i%2?' alt':'')+'"><span style="font-size:12px;color:var(--t2);">'+r.label+'</span><span></span><span class="pair"><span class="pa">'+r.partner+'</span></span><span class="vsc">vs</span><span class="pair"><span class="pa">'+r.opp1+'</span><span class="plus">+</span><span class="pb">'+r.opp2+'</span></span>'+resHtml+'</div>';
  });
  document.getElementById('lookup-res').innerHTML=html+'</div>';
}
function renderTournLookup(name){
  var sd=SD, rows=[];
  sd.pools.forEach(function(pool,pi){pool.rounds.forEach(function(round,ri){round.forEach(function(m,mi){
    if(m.p1!==name&&m.p2!==name) return;
    var sc=scores['p'+pi+'-r'+ri+'-m'+mi];
    var mySc=null,oppSc=null,opp=m.p1===name?m.p2:m.p1;
    if(sc&&sc.s1!==''&&sc.s2!==''){
      mySc=m.p1===name?parseInt(sc.s1):parseInt(sc.s2);
      oppSc=m.p1===name?parseInt(sc.s2):parseInt(sc.s1);
    }
    rows.push({label:pool.name+' R'+(ri+1),opp:opp,mySc:mySc,oppSc:oppSc,isBye:m.isBye});
  });});});
  var html='<div class="lk-wrap"><div class="lk-head" style="grid-template-columns:80px 1fr 28px 1fr 80px 1fr"><span>Round</span><span>Entry</span><span></span><span>Opponent</span><span>Result</span><span></span></div>';
  rows.forEach(function(r,i){
    var resHtml='<span style="color:var(--t3)">--</span>';
    if(!r.isBye&&r.mySc!==null&&!isNaN(r.mySc)){var win=r.mySc>r.oppSc,col=win?'var(--ts)':r.mySc<r.oppSc?'var(--tw)':'var(--t2)';resHtml='<span style="font-family:var(--mono);font-size:12px;color:'+col+'">'+r.mySc+'-'+r.oppSc+'</span>';}
    html+='<div class="lk-row'+(i%2?' alt':'')+'" style="grid-template-columns:80px 1fr 28px 1fr 80px 1fr"><span style="font-size:12px;color:var(--t2)">'+r.label+'</span><span class="pair"><span class="pa">'+name+'</span></span><span class="vsc">'+(r.isBye?'':'vs')+'</span><span class="pair"><span class="pb">'+r.opp+'</span></span>'+resHtml+'<span></span></div>';
  });
  document.getElementById('lookup-res').innerHTML=html+'</div>';
}

/* =======================================================
   EXPORT
======================================================= */
function exportXLSX(){
  if(fmt==='kob_league') exportLgXLSX();
  else if(fmt==='traditional_tournament') exportTournXLSX();
}
function exportLgXLSX(){
  var sd=SD, wb=XLSX.utils.book_new();
  //    Summary                                                               
  var sumRows=[[sd.title||'KOB League'],[]];
  if(sd.stats) sumRows.push(['Repeat partners',sd.stats.rp],['Repeat matchups',sd.stats.mp],
    ['Repeat opp (indiv)',sd.stats.op!=null?sd.stats.op:' '],[]);
  sumRows.push(['Group A','Group B']);
  for(var i=0;i<Math.max(sd.gA.length,sd.gB.length);i++) sumRows.push([sd.gA[i]||'',sd.gB[i]||'']);
  var sw=XLSX.utils.aoa_to_sheet(sumRows); sw['!cols']=[{wch:28},{wch:22}];
  XLSX.utils.book_append_sheet(wb,sw,'Summary');

  //    Week sheets with live score cells                                     
  // Track every score cell location: {key -> [sheetName, d_cell, f_cell]}
  var scoreLocations={};   // key -> {sheet, d, f}  (D=pair1 score, F=pair2 score)

  sd.sched.forEach(function(week,wi){
    var sheetName='Week '+(wi+1);
    var aoa=[[sheetName],[]];
    var matchRowMap=[];  // [{key, aoaRow}] built after aoa is converted

    week.forEach(function(round,ri){
      aoa.push(['Round '+(ri+1)]);
      aoa.push(['Court','Pair 1a','Pair 1b','Score (P1)','vs','Score (P2)','Pair 2a','Pair 2b','Winner']);
      round.forEach(function(m,ni){
        var key=wi+'-'+ri+'-'+ni;
        var sc=scores[key]||{s1:'',s2:''};
        var court=sd.courts[ni%sd.courts.length]?sd.courts[ni%sd.courts.length].name:(ni+1);
        // Store score values but we'll mark the cells yellow after sheet creation
        aoa.push([court, dn(m.p1[0]), dn(m.p1[1]), sc.s1!==''?parseInt(sc.s1):'', 'vs', sc.s2!==''?parseInt(sc.s2):'', dn(m.p2[0]), dn(m.p2[1]), '']);
        matchRowMap.push({key:key, aoaIdx:aoa.length-1, p1a:dn(m.p1[0]), p1b:dn(m.p1[1]), p2a:dn(m.p2[0]), p2b:dn(m.p2[1])});
      });
      aoa.push([]);
    });

    var ws=XLSX.utils.aoa_to_sheet(aoa);
    ws['!cols']=[{wch:10},{wch:14},{wch:14},{wch:9},{wch:4},{wch:9},{wch:14},{wch:14},{wch:18}];

    // Mark score cells yellow and add winner formula
    matchRowMap.forEach(function(mr){
      var excelRow=mr.aoaIdx+1; // 1-indexed
      var dCell='D'+excelRow, fCell='F'+excelRow;
      var bCell='B'+excelRow, gCell='G'+excelRow;
      var iCell='I'+excelRow;

      // Yellow fill on score cells
      [dCell,fCell].forEach(function(addr){
        if(!ws[addr]) ws[addr]={t:'n',v:''};
        // Restore pre-existing score if any
        ws[addr].s={fill:{fgColor:{rgb:'FFF9C4'},patternType:'solid'},
                    font:{bold:true,sz:11},alignment:{horizontal:'center'}};
      });

      // Winner formula
      var c1c=bCell.replace('B','C'), h1h=gCell.replace('G','H');
      ws[iCell]={t:'s',
        f:'IF(AND('+dCell+'="",'+fCell+'=""),"",IF('+dCell+'>'+fCell+','+bCell+'&" + "&'+c1c+',IF('+fCell+'>'+dCell+','+gCell+'&" + "&'+h1h+',"Tie")))',
        v:''};

      // Record location for standings formulas
      scoreLocations[mr.key]={sheet:sheetName, d:dCell, f:fCell,
        p1a:mr.p1a, p1b:mr.p1b, p2a:mr.p2a, p2b:mr.p2b};
    });

    XLSX.utils.book_append_sheet(wb,ws,sheetName);
  });

  //    Standings with SUMIF-equivalent formulas                               
  var allPlayers=sd.gA.concat(sd.gB);
  var stHeaders=['Rank','Player','Group','GP','W','L','W%','PF','PA','+/-/G'];
  var stData=[stHeaders];

  allPlayers.forEach(function(player,idx){
    var grp=sd.gA.indexOf(player)>=0?'A':'B';
    var gpParts=[], wParts=[], pfParts=[], paParts=[];

    Object.keys(scoreLocations).forEach(function(key){
      var loc=scoreLocations[key];
      var safeSheet=loc.sheet.indexOf(' ')>=0?"'"+loc.sheet+"'":loc.sheet;
      var ref=safeSheet+'!';
      var d=ref+loc.d, f=ref+loc.f;
      var isP1=loc.p1a===player||loc.p1b===player;
      var isP2=loc.p2a===player||loc.p2b===player;
      if(!isP1&&!isP2) return;
      gpParts.push('IF(AND('+d+'<>"",'+f+'<>""),1,0)');
      if(isP1){
        wParts.push('IF(AND('+d+'<>"",'+f+'<>""),IF('+d+'>'+f+',1,0),0)');
        pfParts.push('IF('+d+'<>"",'+d+',0)');
        paParts.push('IF('+f+'<>"",'+f+',0)');
      } else {
        wParts.push('IF(AND('+d+'<>"",'+f+'<>""),IF('+f+'>'+d+',1,0),0)');
        pfParts.push('IF('+f+'<>"",'+f+',0)');
        paParts.push('IF('+d+'<>"",'+d+',0)');
      }
    });

    var gpF=gpParts.length?gpParts.join('+'):'0';
    var wF=wParts.length?wParts.join('+'):'0';
    var pfF=pfParts.length?pfParts.join('+'):'0';
    var paF=paParts.length?paParts.join('+'):'0';
    var r=idx+2; // excel row in standings (1=header)
    var gpCell='D'+r, wCell='E'+r, pfCell='H'+r, paCell='I'+r;

    stData.push([
      idx+1, player, grp,
      {t:'n',f:gpF,v:0},
      {t:'n',f:wF,v:0},
      {t:'n',f:gpCell+'-'+wCell,v:0},
      {t:'n',f:'IF('+gpCell+'>0,'+wCell+'/'+gpCell+',0)',v:0},
      {t:'n',f:pfF,v:0},
      {t:'n',f:paF,v:0},
      {t:'n',f:'IF('+gpCell+'>0,('+pfF+'-'+paF+')/'+gpCell+',0)',v:0},
    ]);
  });

  var stWs=XLSX.utils.aoa_to_sheet(stData);
  stWs['!cols']=[{wch:5},{wch:18},{wch:6},{wch:5},{wch:5},{wch:5},{wch:8},{wch:7},{wch:7},{wch:8}];

  // Format W% as percentage
  allPlayers.forEach(function(_,idx){
    var cell=stWs['G'+(idx+2)];
    if(cell) cell.z='0.0%';
  });

  XLSX.utils.book_append_sheet(wb,stWs,'Standings (Raw)');

  //    Ranked view: SORT formula auto-ranks by W%, +/-/G, PF/G              
  var numPlayers=allPlayers.length;
  var rankedAoa=[
    ['Rank','Player','Group','GP','W','L','W%','+/-/G','PF/G'],
  ];
  // Use SORT to pull from raw standings sorted by W% desc, +/-/G desc, PF/G desc
  // SORT(range, sort_col1, asc1, sort_col2, asc2, ...)
  // Raw standings cols: A=Rank B=Player C=Group D=GP E=W F=L G=W% H=PF I=PA J=+/-/G
  // We want to display: rank# player group gp w l w% +/-/g pf/g
  // SORT gives us cols B:J sorted, we add rank with ROW()-1
  var sq=String.fromCharCode(39);
  var sortFormula='IFERROR(SORT('+sq+'Standings (Raw)'+sq+'!B2:J'+(numPlayers+1)+',6,FALSE,9,FALSE,8,FALSE),"")';
  rankedAoa.push([{t:'n',f:'ROW()-1',v:0},{t:'s',f:sortFormula,v:''},'','','','','','','']);
  // Rows 3..N: just rank numbers + blank (SORT spills automatically in Sheets)
  for(var i=1;i<numPlayers;i++){
    rankedAoa.push([{t:'n',f:'ROW()-1',v:0},'','','','','','','','']);
  }
  var rankWs=XLSX.utils.aoa_to_sheet(rankedAoa);
  rankWs['!cols']=[{wch:5},{wch:18},{wch:6},{wch:5},{wch:5},{wch:5},{wch:8},{wch:9},{wch:9}];

  // Add a note in A1 area explaining the sheet
  rankWs['A1']={t:'s',v:'Rank'};
  rankWs['K1']={t:'s',v:'Auto-sorted by W% > +/-/G > PF/G. Updates live as scores are entered.'};
  rankWs['!cols'].push({wch:55});

  XLSX.utils.book_append_sheet(wb,rankWs,'Standings');
  XLSX.writeFile(wb,(sd.title||'KOB').replace(/[^a-zA-Z0-9]/g,'_')+'_Sheets.xlsx');
}
function exportTournXLSX(){
  var sd=SD, wb=XLSX.utils.book_new();
  // Summary
  var sumRows=[[sd.title||'Tournament'],[],
    ['Pools',sd.pools.length],['Entries',sd.entries.length],['Courts',sd.courts.length]];
  var sw=XLSX.utils.aoa_to_sheet(sumRows); sw['!cols']=[{wch:20},{wch:20}];
  XLSX.utils.book_append_sheet(wb,sw,'Summary');

  // Per-pool sheets
  sd.pools.forEach(function(pool,pi){
    var poolSets=pool.sets||(sd.scoring||{}).numSets||1;
    var aoa=[[pool.name],[]];
    // Header
    var hdrs=['#','Court','Entry 1'];
    for(var si=0;si<poolSets;si++) hdrs.push((poolSets>1?'S'+(si+1)+' ':'')+'Score E1',(poolSets>1?'S'+(si+1)+' ':'')+'Score E2');
    hdrs.push('Entry 2','Ref','Winner');
    aoa.push(hdrs);

    var matchNum=0, matchRowMap=[];
    function pushRow(m,ri,mi,isBonus){
      if(m.isBye) return;
      matchNum++;
      var row=[matchNum, sd.courts[m.court]?sd.courts[m.court].name:'', dn(m.p1)];
      var sets=isBonus?1:poolSets;
      for(var si=0;si<poolSets;si++){
        if(si<sets) row.push('',''); else row.push(' ',' ');
      }
      row.push(dn(m.p2), m.ref||' ', '');
      aoa.push(row);
      matchRowMap.push({excelRow:aoa.length, p1:m.p1, p2:m.p2, sets:sets, isBonus:isBonus, ri:ri, mi:mi});
    }

    pool.rounds.forEach(function(rnd,ri){ rnd.forEach(function(m,mi){ pushRow(m,ri,mi,false); }); });
    if(pool.bonusRounds&&pool.bonusRounds.length){
      aoa.push(['BONUS SETS']);
      pool.bonusRounds.forEach(function(rnd,ri){ rnd.forEach(function(m,mi){ pushRow(m,ri,mi,true); }); });
    }

    var ws=XLSX.utils.aoa_to_sheet(aoa);
    var cols=[{wch:5},{wch:12},{wch:18}];
    for(var si=0;si<poolSets;si++) cols.push({wch:9},{wch:9});
    cols.push({wch:18},{wch:12},{wch:18});
    ws['!cols']=cols;

    // Restore scores + yellow fill + winner formula
    matchRowMap.forEach(function(mr){
      var r=mr.excelRow;
      var e1ScoreCols=[], e2ScoreCols=[];
      for(var si=0;si<mr.sets;si++){
        var c1=4+si*2, c2=5+si*2;
        var addr1=XLSX.utils.encode_col(c1-1)+r, addr2=XLSX.utils.encode_col(c2-1)+r;
        var keyBase=mr.isBonus?('p'+pi+'-b'+mr.ri+'-'+mr.mi):('p'+pi+'-r'+mr.ri+'-m'+mr.mi+'-s'+si);
        var sc=scores[keyBase]||{s1:'',s2:''};
        [addr1,addr2].forEach(function(addr,side){
          if(!ws[addr]) ws[addr]={t:'n',v:null};
          ws[addr].v=side===0?(sc.s1!==''?parseInt(sc.s1):''):(sc.s2!==''?parseInt(sc.s2):'');
          ws[addr].s={fill:{fgColor:{rgb:'FFF9C4'},patternType:'solid'},font:{bold:true,sz:11},alignment:{horizontal:'center'}};
        });
        e1ScoreCols.push(addr1); e2ScoreCols.push(addr2);
      }
      // Winner formula
      var e1Ref=XLSX.utils.encode_col(2)+r, e2Ref=XLSX.utils.encode_col(3+poolSets*2)+r;
      var winAddr=XLSX.utils.encode_col(3+poolSets*2+2)+r;
      var s1parts=e1ScoreCols.map(function(d,i){return 'IF('+d+'>'+e2ScoreCols[i]+',1,0)';}).join('+');
      var s2parts=e2ScoreCols.map(function(d,i){return 'IF('+d+'>'+e1ScoreCols[i]+',1,0)';}).join('+');
      ws[winAddr]={t:'s',f:'IF(AND('+e1ScoreCols[0]+'="",'+e2ScoreCols[0]+'=""),"",IF(('+s1parts+')>('+s2parts+'),'+e1Ref+',IF(('+s2parts+')>('+s1parts+'),'+e2Ref+',"Tie")))',v:''};
    });

    // Standings block
    var stdStart=aoa.length+2;
    XLSX.utils.sheet_add_aoa(ws,[[pool.name+' Standings'],
      ['Rank','Entry','GP','W','L','W%','+/-/G','PF/G']],{origin:{r:stdStart-1,c:0}});

    pool.entries.forEach(function(entry,idx){
      var sr=stdStart+2+idx;
      var gpParts=[],wParts=[],pfParts=[],paParts=[];
      matchRowMap.forEach(function(mr){
        var r2=mr.excelRow;
        for(var si=0;si<mr.sets;si++){
          var c1=4+si*2, c2=5+si*2;
          var d=XLSX.utils.encode_col(c1-1)+r2, f=XLSX.utils.encode_col(c2-1)+r2;
          if(mr.p1===entry){
            if(si===0) gpParts.push('IF(AND('+d+'<>"",'+f+'<>""),1,0)');
            wParts.push('IF(AND('+d+'<>"",'+f+'<>""),IF('+d+'>'+f+',1,0),0)');
            pfParts.push('IF('+d+'<>"",'+d+',0)'); paParts.push('IF('+f+'<>"",'+f+',0)');
          } else if(mr.p2===entry){
            if(si===0) gpParts.push('IF(AND('+d+'<>"",'+f+'<>""),1,0)');
            wParts.push('IF(AND('+d+'<>"",'+f+'<>""),IF('+f+'>'+d+',1,0),0)');
            pfParts.push('IF('+f+'<>"",'+f+',0)'); paParts.push('IF('+d+'<>"",'+d+',0)');
          }
        }
      });
      var gpF=gpParts.join('+')||'0', wF=wParts.join('+')||'0';
      var pfF=pfParts.join('+')||'0', paF=paParts.join('+')||'0';
      var gpC='C'+sr, wC='D'+sr;
      XLSX.utils.sheet_add_aoa(ws,[[idx+1,dn(entry)]],{origin:{r:sr-1,c:0}});
      ws['C'+sr]={t:'n',f:gpF,v:0};
      ws['D'+sr]={t:'n',f:wF,v:0};
      ws['E'+sr]={t:'n',f:gpC+'-'+wC,v:0};
      ws['F'+sr]={t:'n',f:'IF('+gpC+'>0,'+wC+'/'+gpC+',0)',z:'0.0%',v:0};
      ws['G'+sr]={t:'n',f:'IF('+gpC+'>0,('+pfF+'-'+paF+')/'+gpC+',0)',v:0};
      ws['H'+sr]={t:'n',f:'IF('+gpC+'>0,('+pfF+')/'+gpC+',0)',v:0};
    });

    XLSX.utils.book_append_sheet(wb,ws,pool.name);
  });

  XLSX.writeFile(wb,(sd.title||'Tournament').replace(/[^a-zA-Z0-9]/g,'_')+'_Sheets.xlsx');
}


/* =======================================================
   KOB QUADS VIEWER
======================================================= */
var selStage=0, selQuadsPool=0;
var kobStandings={};  // name -> stats, accumulated across scored stages

function initKOBQuads(){
  var sd=SD;
  initNameMap();
  buildTabs([
    {id:'quads-schedule',label:'Schedule'},
    {id:'quads-standings',label:'Standings'},
    {id:'lookup',label:'Lookup'},
    {id:'teams',label:'Teams'}
  ]);
  document.getElementById('page-sub').textContent=
    sd.stages.length+' stages . '+sd.allEntries.length+' entries . '+(sd.isCoed?'Coed Solo':'Mixed Pairs');
  document.getElementById('tab-quads-schedule').style.display='';
  // Init standings
  sd.allEntries.forEach(function(e){ kobStandings[e]=blankEntry(e); });
  renderQuadsSchedule();
}

function renderQuadsSchedule(){
  var sd=SD;
  // Stage tabs
  var stHtml='';
  sd.stages.forEach(function(s,si){
    stHtml+='<button class="btn-sm'+(si===selStage?' sel':'')+
      '" onclick="selStage='+si+';selQuadsPool=0;renderQuadsSchedule()">'+
      (s.isFinal?'Final Stage':'Stage '+s.stage)+'</button>';
  });
  document.getElementById('quads-stage-btns').innerHTML=stHtml;

  var stage=sd.stages[selStage];
  // Pool tabs
  var poolHtml='';
  stage.pools.forEach(function(p,pi){
    poolHtml+='<button class="btn-sm'+(pi===selQuadsPool?' sel':'')+
      '" onclick="selQuadsPool='+pi+';renderQuadsSchedule()">'+p.name+'</button>';
  });
  document.getElementById('quads-pool-btns').innerHTML=poolHtml;

  var pool=stage.pools[selQuadsPool];
  var matchNum=0;
  // Table
  var rows='<div class="net-table">'+
    '<div class="net-head" style="grid-template-columns:70px 1fr 70px 28px 70px 1fr;">'+
    '<span>Court</span><span>Pair 1</span><span style="text-align:center">Score</span>'+
    '<span></span><span style="text-align:center">Score</span><span>Pair 2</span></div>';

  pool.rounds.forEach(function(r,ri){
    matchNum++;
    var key='s'+selStage+'-p'+selQuadsPool+'-m'+ri;
    var sc=scores[key]||{s1:'',s2:''};
    var s1n=parseInt(sc.s1),s2n=parseInt(sc.s2);
    var has=sc.s1!==''&&sc.s2!==''&&!isNaN(s1n)&&!isNaN(s2n);
    var c1=has?(s1n>s2n?'win':s1n<s2n?'lose':''):'';
    var c2=has?(s2n>s1n?'win':s2n<s1n?'lose':''):'';
    var pair1=dn(r.p1[0])+' + '+dn(r.p1[1]);
    var pair2=dn(r.p2[0])+' + '+dn(r.p2[1]);
    rows+='<div class="net-row'+(matchNum%2?' alt':'')+'"'+
      ' style="grid-template-columns:70px 1fr 70px 28px 70px 1fr;">'+
      '<span class="nnum">'+(r.court||'')+'</span>'+
      '<span class="pair" style="font-size:12px;gap:4px;">'+
        '<span class="pa" style="font-size:12px;">'+pair1+'</span></span>'+
      '<input type="number" min="0" max="99" class="score-in '+c1+'" value="'+sc.s1+'"'+
        ' data-key="'+key+'" data-side="0" oninput="onQuadsScore(this)">'+
      '<span class="score-static '+c1+'">'+( sc.s1!==''?sc.s1:'-')+'</span>'+
      '<span class="vsc">vs</span>'+
      '<input type="number" min="0" max="99" class="score-in '+c2+'" value="'+sc.s2+'"'+
        ' data-key="'+key+'" data-side="1" oninput="onQuadsScore(this)">'+
      '<span class="score-static '+c2+'">'+( sc.s2!==''?sc.s2:'-')+'</span>'+
      '<span class="pair" style="font-size:12px;gap:4px;">'+
        '<span class="pb" style="font-size:12px;">'+pair2+'</span></span>'+
      '</div>';
  });
  rows+='</div>';
  document.getElementById('quads-table').innerHTML=rows;
  updateQuadsProgress();
}

function onQuadsScore(input){
  var key=input.dataset.key, side=parseInt(input.dataset.side);
  if(!scores[key]) scores[key]={s1:'',s2:''};
  if(side===0) scores[key].s1=input.value; else scores[key].s2=input.value;
  var sc=scores[key];
  var s1n=parseInt(sc.s1),s2n=parseInt(sc.s2);
  var has=sc.s1!==''&&sc.s2!==''&&!isNaN(s1n)&&!isNaN(s2n);
  var c1=has?(s1n>s2n?'win':s1n<s2n?'lose':''):'';
  var c2=has?(s2n>s1n?'win':s2n<s1n?'lose':''):'';
  var inputs=document.querySelectorAll('[data-key="'+key+'"]');
  if(inputs[0]) inputs[0].className='score-in '+c1;
  if(inputs[1]) inputs[1].className='score-in '+c2;
  storeSave();
  updateQuadsProgress();
}

function updateQuadsProgress(){
  var sd=SD; var total=0,done=0;
  sd.stages.forEach(function(stage,si){
    stage.pools.forEach(function(pool,pi){
      pool.rounds.forEach(function(r,ri){
        total++;
        var sc=scores['s'+si+'-p'+pi+'-m'+ri];
        if(sc&&sc.s1!==''&&sc.s2!==''&&!isNaN(parseInt(sc.s1))&&!isNaN(parseInt(sc.s2))) done++;
      });
    });
  });
  var pEl=document.getElementById('quads-prog-lbl');
  var bEl=document.getElementById('quads-prog-bar');
  if(pEl) pEl.textContent=done+' / '+total+' scored';
  if(bEl) bEl.style.width=total?Math.round(done/total*100)+'%':'0%';
}

function calcQuadsStandings(){
  var sd=SD;
  var st={};
  sd.allEntries.forEach(function(e){ st[e]=blankEntry(e); });
  var h2h={};
  sd.allEntries.forEach(function(e){ h2h[e]={}; });

  sd.stages.forEach(function(stage,si){
    stage.pools.forEach(function(pool,pi){
      pool.rounds.forEach(function(r,ri){
        var sc=scores['s'+si+'-p'+pi+'-m'+ri];
        if(!sc||sc.s1===''||sc.s2==='') return;
        var s1=parseInt(sc.s1),s2=parseInt(sc.s2);
        if(isNaN(s1)||isNaN(s2)) return;
        var p1a=r.p1[0],p1b=r.p1[1],p2a=r.p2[0],p2b=r.p2[1];
        // Accumulate stats for each player in the pair
        [p1a,p1b].forEach(function(p){
          if(!st[p]) return;
          st[p].gp++; st[p].pf+=s1; st[p].pa+=s2;
          if(s1>s2) st[p].w++; else if(s2>s1) st[p].l++;
        });
        [p2a,p2b].forEach(function(p){
          if(!st[p]) return;
          st[p].gp++; st[p].pf+=s2; st[p].pa+=s1;
          if(s2>s1) st[p].w++; else if(s1>s2) st[p].l++;
        });
        // H2H: all p1-pair members vs all p2-pair members
        [p1a,p1b].forEach(function(a){
          [p2a,p2b].forEach(function(b){
            if(!h2h[a]) h2h[a]={};
            if(!h2h[a][b]) h2h[a][b]={w:0,l:0,pf:0,pa:0};
            h2h[a][b].pf+=s1; h2h[a][b].pa+=s2;
            if(s1>s2) h2h[a][b].w++; else if(s2>s1) h2h[a][b].l++;
            if(!h2h[b]) h2h[b]={};
            if(!h2h[b][a]) h2h[b][a]={w:0,l:0,pf:0,pa:0};
            h2h[b][a].pf+=s2; h2h[b][a].pa+=s1;
            if(s2>s1) h2h[b][a].w++; else if(s1>s2) h2h[b][a].l++;
          });
        });
      });
    });
  });
  Object.values(st).forEach(refreshRates);
  return Object.values(st).sort(function(a,b){ return kobSort(a,b,h2h); });
}

function renderQuadsStandings(){
  var all=calcQuadsStandings();
  function pct(v){return(v*100).toFixed(1)+'%';}
  var thead='<thead><tr><th>#</th><th>Entry</th><th class="r">GP</th>'+
    '<th class="r">W</th><th class="r">L</th><th class="r">W%</th>'+
    '<th class="r">+/-/G</th><th class="r">PF/G</th></tr></thead>';
  var tbody='';
  all.forEach(function(p,i){
    var rank=i+1;
    var badge=rank===1?'gold':rank===2?'silver':rank===3?'bronze':'';
    var dpg=p.diffPerGame, pos=dpg>0,neg=dpg<0;
    tbody+='<tr class="'+(rank%2===0?'alt':'')+'">' +
      '<td><span class="rnk '+badge+'">'+rank+'</span></td>'+
      '<td>'+dn(p.name)+'</td>'+
      '<td class="r">'+p.gp+'</td>'+
      '<td class="r">'+p.w+'</td>'+
      '<td class="r">'+p.l+'</td>'+
      '<td class="r"><strong>'+pct(p.winRate)+'</strong></td>'+
      '<td class="r"><span class="'+(pos?'dpos':neg?'dneg':'')+'">'+
        (pos?'+':'')+dpg.toFixed(2)+'</span></td>'+
      '<td class="r">'+p.pfPerGame.toFixed(2)+'</td>'+
      '</tr>';
  });
  document.getElementById('std-table').innerHTML=thead+'<tbody>'+tbody+'</tbody>';
}

/* =======================================================
   KOB RANDOM MIX VIEWER
======================================================= */
var selMixRound=0;

function initKOBRandomMix(){
  var sd=SD;
  initNameMap();
  buildTabs([
    {id:'mix-schedule',label:'Schedule'},
    {id:'mix-standings',label:'Standings'},
    {id:'lookup',label:'Lookup'},
    {id:'teams',label:'Teams'}
  ]);
  document.getElementById('page-sub').textContent=
    sd.rounds.length+' rounds . '+sd.allEntries.length+' entries . '+(sd.isCoed?'Coed Solo':'Mixed Pairs');
  document.getElementById('tab-mix-schedule').style.display='';
  renderMixSchedule();
}

function renderMixSchedule(){
  var sd=SD;
  var roundHtml='';
  sd.rounds.forEach(function(r,ri){
    roundHtml+='<button class="btn-sm'+(ri===selMixRound?' sel':'')+
      '" onclick="selMixRound='+ri+';renderMixSchedule()">Round '+r.round+'</button>';
  });
  document.getElementById('mix-round-btns').innerHTML=roundHtml;

  var round=sd.rounds[selMixRound];
  var matchNum=0;
  var rows='<div class="net-table">'+
    '<div class="net-head" style="grid-template-columns:70px 1fr 70px 28px 70px 1fr;">'+
    '<span>Court</span><span>Pair 1</span><span style="text-align:center">Score</span>'+
    '<span></span><span style="text-align:center">Score</span><span>Pair 2</span></div>';

  round.matches.forEach(function(m,mi){
    if(m.isBye) return;
    matchNum++;
    var key='r'+selMixRound+'-m'+mi;
    var sc=scores[key]||{s1:'',s2:''};
    var s1n=parseInt(sc.s1),s2n=parseInt(sc.s2);
    var has=sc.s1!==''&&sc.s2!==''&&!isNaN(s1n)&&!isNaN(s2n);
    var c1=has?(s1n>s2n?'win':s1n<s2n?'lose':''):'';
    var c2=has?(s2n>s1n?'win':s2n<s1n?'lose':''):'';
    var pair1=dn(m.p1[0])+' + '+dn(m.p1[1]);
    var pair2=dn(m.p2[0])+' + '+dn(m.p2[1]);
    rows+='<div class="net-row'+(matchNum%2?' alt':'')+'"'+
      ' style="grid-template-columns:70px 1fr 70px 28px 70px 1fr;">'+
      '<span class="nnum">'+(m.court||'')+'</span>'+
      '<span class="pair"><span class="pa" style="font-size:12px;">'+pair1+'</span></span>'+
      '<input type="number" min="0" max="99" class="score-in '+c1+'" value="'+sc.s1+'"'+
        ' data-key="'+key+'" data-side="0" oninput="onMixScore(this)">'+
      '<span class="score-static '+c1+'">'+( sc.s1!==''?sc.s1:'-')+'</span>'+
      '<span class="vsc">vs</span>'+
      '<input type="number" min="0" max="99" class="score-in '+c2+'" value="'+sc.s2+'"'+
        ' data-key="'+key+'" data-side="1" oninput="onMixScore(this)">'+
      '<span class="score-static '+c2+'">'+( sc.s2!==''?sc.s2:'-')+'</span>'+
      '<span class="pair"><span class="pb" style="font-size:12px;">'+pair2+'</span></span>'+
      '</div>';
  });
  rows+='</div>';
  document.getElementById('mix-table').innerHTML=rows;
  updateMixProgress();
}

function onMixScore(input){
  var key=input.dataset.key, side=parseInt(input.dataset.side);
  if(!scores[key]) scores[key]={s1:'',s2:''};
  if(side===0) scores[key].s1=input.value; else scores[key].s2=input.value;
  var sc=scores[key];
  var s1n=parseInt(sc.s1),s2n=parseInt(sc.s2);
  var has=sc.s1!==''&&sc.s2!==''&&!isNaN(s1n)&&!isNaN(s2n);
  var c1=has?(s1n>s2n?'win':s1n<s2n?'lose':''):'';
  var c2=has?(s2n>s1n?'win':s2n<s1n?'lose':''):'';
  var inputs=document.querySelectorAll('[data-key="'+key+'"]');
  if(inputs[0]) inputs[0].className='score-in '+c1;
  if(inputs[1]) inputs[1].className='score-in '+c2;
  storeSave();
  updateMixProgress();
}

function updateMixProgress(){
  var sd=SD; var total=0,done=0;
  sd.rounds.forEach(function(round,ri){
    round.matches.forEach(function(m,mi){
      if(m.isBye) return;
      total++;
      var sc=scores['r'+ri+'-m'+mi];
      if(sc&&sc.s1!==''&&sc.s2!==''&&!isNaN(parseInt(sc.s1))&&!isNaN(parseInt(sc.s2))) done++;
    });
  });
  var pEl=document.getElementById('mix-prog-lbl');
  var bEl=document.getElementById('mix-prog-bar');
  if(pEl) pEl.textContent=done+' / '+total+' scored';
  if(bEl) bEl.style.width=total?Math.round(done/total*100)+'%':'0%';
}

function calcMixStandings(){
  var sd=SD;
  var st={};
  sd.allEntries.forEach(function(e){ st[e]=blankEntry(e); });
  var h2h={};
  sd.allEntries.forEach(function(e){ h2h[e]={}; });

  sd.rounds.forEach(function(round,ri){
    round.matches.forEach(function(m,mi){
      if(m.isBye) return;
      var sc=scores['r'+ri+'-m'+mi];
      if(!sc||sc.s1===''||sc.s2==='') return;
      var s1=parseInt(sc.s1),s2=parseInt(sc.s2);
      if(isNaN(s1)||isNaN(s2)) return;
      var p1a=m.p1[0],p1b=m.p1[1],p2a=m.p2[0],p2b=m.p2[1];
      [p1a,p1b].forEach(function(p){
        if(!st[p]) return;
        st[p].gp++; st[p].pf+=s1; st[p].pa+=s2;
        if(s1>s2) st[p].w++; else if(s2>s1) st[p].l++;
      });
      [p2a,p2b].forEach(function(p){
        if(!st[p]) return;
        st[p].gp++; st[p].pf+=s2; st[p].pa+=s1;
        if(s2>s1) st[p].w++; else if(s1>s2) st[p].l++;
      });
      [p1a,p1b].forEach(function(a){
        [p2a,p2b].forEach(function(b){
          if(!h2h[a]) h2h[a]={};
          if(!h2h[a][b]) h2h[a][b]={w:0,l:0,pf:0,pa:0};
          h2h[a][b].pf+=s1; h2h[a][b].pa+=s2;
          if(s1>s2) h2h[a][b].w++; else if(s2>s1) h2h[a][b].l++;
          if(!h2h[b]) h2h[b]={};
          if(!h2h[b][a]) h2h[b][a]={w:0,l:0,pf:0,pa:0};
          h2h[b][a].pf+=s2; h2h[b][a].pa+=s1;
          if(s2>s1) h2h[b][a].w++; else if(s1>s2) h2h[b][a].l++;
        });
      });
    });
  });
  Object.values(st).forEach(refreshRates);
  return Object.values(st).sort(function(a,b){ return kobSort(a,b,h2h); });
}

function renderMixStandings(){
  var all=calcMixStandings();
  function pct(v){return(v*100).toFixed(1)+'%';}
  var thead='<thead><tr><th>#</th><th>Entry</th><th class="r">GP</th>'+
    '<th class="r">W</th><th class="r">L</th><th class="r">W%</th>'+
    '<th class="r">+/-/G</th><th class="r">PF/G</th></tr></thead>';
  var tbody='';
  all.forEach(function(p,i){
    var rank=i+1;
    var badge=rank===1?'gold':rank===2?'silver':rank===3?'bronze':'';
    var dpg=p.diffPerGame,pos=dpg>0,neg=dpg<0;
    tbody+='<tr class="'+(rank%2===0?'alt':'')+'">' +
      '<td><span class="rnk '+badge+'">'+rank+'</span></td>'+
      '<td>'+dn(p.name)+'</td>'+
      '<td class="r">'+p.gp+'</td>'+
      '<td class="r">'+p.w+'</td>'+
      '<td class="r">'+p.l+'</td>'+
      '<td class="r"><strong>'+pct(p.winRate)+'</strong></td>'+
      '<td class="r"><span class="'+(pos?'dpos':neg?'dneg':'')+'">'+
        (pos?'+':'')+dpg.toFixed(2)+'</span></td>'+
      '<td class="r">'+p.pfPerGame.toFixed(2)+'</td>'+
      '</tr>';
  });
  document.getElementById('std-table').innerHTML=thead+'<tbody>'+tbody+'</tbody>';
}


/* =======================================================
   TRADITIONAL LEAGUE VIEWER
======================================================= */
var selTradWeek=0, selTradRound=0;

function initTraditionalLeague(){
  var sd=SD;
  initNameMap();
  buildTabs([
    {id:'trad-lg-schedule',label:'Schedule'},
    {id:'trad-lg-standings',label:'Standings'},
    {id:'bracket',label:'Playoffs'},
    {id:'lookup',label:'Lookup'},
    {id:'teams',label:'Teams'}
  ]);
  var matchesPerRound=Math.floor(sd.teams.length/2);
  document.getElementById('page-sub').textContent=
    sd.teams.length+' teams . '+sd.weeks+'w . '+
    sd.roundsPerWeek+'r/w . '+sd.courts.length+' court'+(sd.courts.length!==1?'s':'');
  document.getElementById('tab-trad-lg-schedule').style.display='';
  if(sd.warnings&&sd.warnings.length){
    var note=document.createElement('div');
    note.style.cssText='font-size:11px;color:var(--tw);padding:8px 12px;background:var(--bg2);border-radius:var(--rm);border:.5px solid var(--tw);margin-bottom:12px;';
    note.textContent=sd.warnings.join(' | ');
    document.querySelector('.page-main .card').prepend(note);
  }
  renderTradLeagueSchedule();
}

function renderTradLeagueSchedule(){
  var sd=SD;
  // Week buttons
  var wb='';
  for(var w=0;w<sd.weeks;w++)
    wb+='<button class="btn-sm'+(w===selTradWeek?' sel':'')+
      '" onclick="selTradWeek='+w+';selTradRound=0;renderTradLeagueSchedule()">Week '+(w+1)+'</button>';
  document.getElementById('trad-week-btns').innerHTML=wb;

  // Round buttons
  var rb='';
  for(var r=0;r<sd.roundsPerWeek;r++)
    rb+='<button class="btn-xs'+(r===selTradRound?' sel':'')+
      '" onclick="selTradRound='+r+';renderTradLeagueSchedule()">Round '+(r+1)+'</button>';
  document.getElementById('trad-round-btns').innerHTML=rb;

  var round=sd.sched[selTradWeek][selTradRound];
  var matchNum=0;
  var rows='<div class="net-table"><div class="net-head">'+
    '<span>Court</span><span>Team 1</span>'+
    '<span style="text-align:center">Score</span><span></span>'+
    '<span style="text-align:center">Score</span><span>Team 2</span></div>';

  round.forEach(function(m,mi){
    if(m.isBye) return;
    matchNum++;
    var key='tl-w'+selTradWeek+'-r'+selTradRound+'-m'+mi;
    var sc=scores[key]||{s1:'',s2:''};
    var s1n=parseInt(sc.s1),s2n=parseInt(sc.s2);
    var has=sc.s1!==''&&sc.s2!==''&&!isNaN(s1n)&&!isNaN(s2n);
    var c1=has?(s1n>s2n?'win':s1n<s2n?'lose':''):'';
    var c2=has?(s2n>s1n?'win':s2n<s1n?'lose':''):'';
    var courtName=sd.courts[m.court]?sd.courts[m.court].name:(m.court!=null?'C'+(m.court+1):'--');
    rows+='<div class="net-row'+(matchNum%2?' alt':'')+'">' +
      '<span class="nnum">'+courtName+'</span>' +
      '<span class="pair"><span class="pa">'+dn(m.p1)+'</span></span>' +
      '<input type="number" min="0" max="99" class="score-in '+c1+'" value="'+sc.s1+'"'+
        ' data-key="'+key+'" data-side="0" oninput="onTradLgScore(this)">'+
      '<span class="score-static '+c1+'">'+(sc.s1!==''?sc.s1:'-')+'</span>'+
      '<span class="vsc">vs</span>' +
      '<input type="number" min="0" max="99" class="score-in '+c2+'" value="'+sc.s2+'"'+
        ' data-key="'+key+'" data-side="1" oninput="onTradLgScore(this)">'+
      '<span class="score-static '+c2+'">'+(sc.s2!==''?sc.s2:'-')+'</span>'+
      '<span class="pair"><span class="pb">'+dn(m.p2)+'</span></span>' +
      '</div>';
  });
  rows+='</div>';
  document.getElementById('trad-lg-table').innerHTML=rows;
  storeSave();
  updateTradLgProgress();
}

function onTradLgScore(input){
  var key=input.dataset.key, side=parseInt(input.dataset.side);
  if(!scores[key]) scores[key]={s1:'',s2:''};
  if(side===0) scores[key].s1=input.value; else scores[key].s2=input.value;
  var sc=scores[key];
  var s1n=parseInt(sc.s1),s2n=parseInt(sc.s2);
  var has=sc.s1!==''&&sc.s2!==''&&!isNaN(s1n)&&!isNaN(s2n);
  var c1=has?(s1n>s2n?'win':s1n<s2n?'lose':''):'';
  var c2=has?(s2n>s1n?'win':s2n<s1n?'lose':''):'';
  var inputs=document.querySelectorAll('[data-key="'+key+'"]');
  if(inputs[0]) inputs[0].className='score-in '+c1;
  if(inputs[1]) inputs[1].className='score-in '+c2;
  updateTradLgProgress();
}

function updateTradLgProgress(){
  var sd=SD; var total=0,done=0;
  sd.sched.forEach(function(week,wi){
    week.forEach(function(round,ri){
      round.forEach(function(m,mi){
        if(m.isBye) return;
        total++;
        var sc=scores['tl-w'+wi+'-r'+ri+'-m'+mi];
        if(sc&&sc.s1!==''&&sc.s2!==''&&!isNaN(parseInt(sc.s1))&&!isNaN(parseInt(sc.s2))) done++;
      });
    });
  });
  var pEl=document.getElementById('trad-prog-lbl');
  var bEl=document.getElementById('trad-prog-bar');
  if(pEl) pEl.textContent=done+' / '+total+' scored';
  if(bEl) bEl.style.width=total?Math.round(done/total*100)+'%':'0%';
}

function calcTradLeagueStandings(){
  var sd=SD;
  var st={};
  sd.teams.forEach(function(t){ st[t]=blankEntry(t); });
  var h2h={};
  sd.teams.forEach(function(t){ h2h[t]={}; });

  sd.sched.forEach(function(week,wi){
    week.forEach(function(round,ri){
      round.forEach(function(m,mi){
        if(m.isBye) return;
        var sc=scores['tl-w'+wi+'-r'+ri+'-m'+mi];
        if(!sc||sc.s1===''||sc.s2==='') return;
        var s1=parseInt(sc.s1),s2=parseInt(sc.s2);
        if(isNaN(s1)||isNaN(s2)) return;
        var t1=m.p1, t2=m.p2;
        st[t1].gp++; st[t1].pf+=s1; st[t1].pa+=s2;
        st[t2].gp++; st[t2].pf+=s2; st[t2].pa+=s1;
        if(s1>s2){st[t1].w++;st[t2].l++;}
        else if(s2>s1){st[t2].w++;st[t1].l++;}
        // H2H
        if(!h2h[t1][t2]) h2h[t1][t2]={w:0,l:0,pf:0,pa:0};
        if(!h2h[t2][t1]) h2h[t2][t1]={w:0,l:0,pf:0,pa:0};
        h2h[t1][t2].pf+=s1; h2h[t1][t2].pa+=s2;
        h2h[t2][t1].pf+=s2; h2h[t2][t1].pa+=s1;
        if(s1>s2){h2h[t1][t2].w++;h2h[t2][t1].l++;}
        else if(s2>s1){h2h[t2][t1].w++;h2h[t1][t2].l++;}
      });
    });
  });
  Object.values(st).forEach(refreshRates);
  return Object.values(st).sort(function(a,b){ return kobSort(a,b,h2h); });
}

function renderTradLeagueStandings(){
  var all=calcTradLeagueStandings();
  function pct(v){return(v*100).toFixed(1)+'%';}
  var thead='<thead><tr><th>#</th><th>Team</th>'+
    '<th class="r">GP</th><th class="r">W</th><th class="r">L</th>'+
    '<th class="r">W%</th><th class="r">+/-/G</th><th class="r">PF/G</th></tr></thead>';
  var tbody='';
  all.forEach(function(p,i){
    var rank=i+1;
    var badge=rank===1?'gold':rank===2?'silver':rank===3?'bronze':'';
    var dpg=p.diffPerGame,pos=dpg>0,neg=dpg<0;
    tbody+='<tr class="'+(rank%2===0?'alt':'')+'">' +
      '<td><span class="rnk '+badge+'">'+rank+'</span></td>'+
      '<td>'+dn(p.name)+'</td>'+
      '<td class="r">'+p.gp+'</td>'+
      '<td class="r">'+p.w+'</td>'+
      '<td class="r">'+p.l+'</td>'+
      '<td class="r"><strong>'+pct(p.winRate)+'</strong></td>'+
      '<td class="r"><span class="'+(pos?'dpos':neg?'dneg':'')+'">'+
        (pos?'+':'')+dpg.toFixed(2)+'</span></td>'+
      '<td class="r">'+p.pfPerGame.toFixed(2)+'</td>'+
      '</tr>';
  });
  document.getElementById('std-table').innerHTML=thead+'<tbody>'+tbody+'</tbody>';
}

function renderTradLeagueLookup(name){
  var sd=SD, rows=[];
  sd.sched.forEach(function(week,wi){
    week.forEach(function(round,ri){
      round.forEach(function(m,mi){
        if(m.isBye) return;
        if(m.p1!==name&&m.p2!==name) return;
        var sc=scores['tl-w'+wi+'-r'+ri+'-m'+mi];
        var opp=m.p1===name?m.p2:m.p1;
        var mySc=null,oppSc=null;
        if(sc&&sc.s1!==''&&sc.s2!==''){
          mySc=m.p1===name?parseInt(sc.s1):parseInt(sc.s2);
          oppSc=m.p1===name?parseInt(sc.s2):parseInt(sc.s1);
        }
        rows.push({label:'W'+(wi+1)+' R'+(ri+1),opp:opp,mySc:mySc,oppSc:oppSc});
      });
    });
  });
  var html='<div class="lk-wrap"><div class="lk-head" style="grid-template-columns:80px 1fr 28px 1fr 80px 1fr">'+
    '<span>Round</span><span>Team</span><span></span><span>Opponent</span><span>Result</span><span></span></div>';
  rows.forEach(function(r,i){
    var resHtml='<span style="color:var(--t3)">-</span>';
    if(r.mySc!==null&&!isNaN(r.mySc)){
      var win=r.mySc>r.oppSc;
      var col=win?'var(--ts)':r.mySc<r.oppSc?'var(--tw)':'var(--t2)';
      resHtml='<span style="font-family:var(--mono);font-size:12px;color:'+col+'">'+r.mySc+'-'+r.oppSc+'</span>';
    }
    html+='<div class="lk-row'+(i%2?' alt':'')+'" style="grid-template-columns:80px 1fr 28px 1fr 80px 1fr">'+
      '<span style="font-size:12px;color:var(--t2)">'+r.label+'</span>'+
      '<span class="pair"><span class="pa">'+dn(name)+'</span></span>'+
      '<span class="vsc">vs</span>'+
      '<span class="pair"><span class="pb">'+dn(r.opp)+'</span></span>'+
      resHtml+'<span></span></div>';
  });
  document.getElementById('lookup-res').innerHTML=html+'</div>';
}


//    Google Sheets export (formula-driven XLSX)                                 
function initSheetsExportBtn(){
  var btn=document.getElementById('btn-export-sheets');
  if(btn&&fmt==='traditional_tournament') btn.style.display='';
}

function exportSheetsXLSX(){
  var sd=SD;
  // Dynamically load SheetJS if not already loaded
  if(typeof XLSX==='undefined'){
    var s=document.createElement('script');
    s.src='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
    s.onload=function(){ _buildSheetsXLSX(sd); };
    document.head.appendChild(s);
  } else {
    _buildSheetsXLSX(sd);
  }
}

function _buildSheetsXLSX(sd){
  var wb=XLSX.utils.book_new();
  var poolSets=0;
  var allPools=sd.pools||[];

  //    Setup sheet                                                           
  var setupData=[
    ['KOB Tournament Tracker',''],
    ['',''],
    ['Event Title', sd.title||'Tournament'],
    ['Format', (sd.format||'').replace(/_/g,' ')],
    ['Pools', allPools.length],
    ['Total Entries', (sd.entries||[]).length],
    ['Courts', (sd.courts||[]).length],
    ['Bracket Type', (sd.config.bracketType||'single')],
    ['Sets Per Match', (sd.scoring||{}).numSets||1],
    ['Score Limit', (sd.scoring||{}).scoreLimit||21],
    ['',''],
    ['Courts',''],
  ];
  (sd.courts||[]).forEach(function(ct,i){ setupData.push([ct.name||'Court '+(i+1),'']); });
  var wsSetup=XLSX.utils.aoa_to_sheet(setupData);
  wsSetup['!cols']=[{wch:22},{wch:28}];
  XLSX.utils.book_append_sheet(wb,wsSetup,'Setup');

  //    Per-pool sheets                                                       
  allPools.forEach(function(pool,pi){
    var sheet=_buildPoolSheet(sd,pi,pool);
    XLSX.utils.book_append_sheet(wb,sheet,pool.name);
  });

  //    Combined standings                                                    
  var wsStd=_buildCombinedStandings(sd,allPools);
  XLSX.utils.book_append_sheet(wb,wsStd,'Standings');

  //    Bracket placeholder                                                   
  var wsBk=XLSX.utils.aoa_to_sheet([
    ['Bracket -- '+((sd.config.bracketType||'single')+' Elimination').replace(/\b\w/g,function(c){return c.toUpperCase();})],
    [''],
    ['Seed brackets from the HTML viewer, then enter bracket scores there.'],
    ['Use this sheet for reference and printing only.'],
  ]);
  wsBk['!cols']=[{wch:60}];
  XLSX.utils.book_append_sheet(wb,wsBk,'Bracket');

  // Download
  XLSX.writeFile(wb,(sd.title||'Tournament').replace(/[^a-zA-Z0-9]/g,'_')+'-Sheets.xlsx');
}

function _poolScoreCol(si){ return 3+si*2; }  // 0-indexed: col 3=D, 5=F, 7=H...

function _buildPoolSheet(sd,pi,pool){
  var courts=sd.courts||[];
  var poolSets=pool.sets||(sd.scoring||{}).numSets||1;
  var entries=pool.entries||[];

  // Column layout (1-indexed for XLSX cell addressing):
  // 1=#  2=Court  3=E1  4=S1E1  5=S1E2  [6=S2E1 7=S2E2 ...]  last-3=E2  last-2=Ref  last-1=Winner
  var COLS=3+poolSets*2+3;  // total columns
  var COL_E2=3+poolSets*2+1;
  var COL_REF=COL_E2+1;
  var COL_WIN=COL_REF+1;

  function R(r,c){ return XLSX.utils.encode_cell({r:r-1,c:c-1}); }
  function RC(r,c){ return XLSX.utils.encode_col(c-1)+r; }

  var data=[]; // array of rows
  // Row 1: title
  data.push([pool.name+' Schedule']);
  // Row 2: headers
  var hdrs=['#','Court','Entry 1'];
  for(var si=0;si<poolSets;si++){
    var lbl=poolSets>1?'S'+(si+1)+' ':'';
    hdrs.push(lbl+'E1 Score', lbl+'E2 Score');
  }
  hdrs.push('Entry 2','Ref','Winner');
  data.push(hdrs);

  var matchNum=0, matchRows=[];

  function pushMatch(m,ri,mi,isBonus){
    if(m.isBye) return;
    matchNum++;
    var row=data.length+1; // 1-indexed Excel row
    var courtName=m.court!=null&&courts[m.court]?courts[m.court].name:'';
    var rowData=[matchNum,courtName,m.p1];
    for(var si=0;si<poolSets;si++){
      if(!isBonus||si===0){ rowData.push(null,null); }
      else { rowData.push(' ',' '); }
    }
    rowData.push(m.p2, m.ref||' ', null);
    data.push(rowData);

    // Store row ref for formula building
    matchRows.push({row:row, p1:m.p1, p2:m.p2,
      e1Cols: Array.from({length:isBonus?1:poolSets},function(_,si){return 4+si*2;}),
      e2Cols: Array.from({length:isBonus?1:poolSets},function(_,si){return 5+si*2;}),
    });
  }

  (pool.rounds||[]).forEach(function(rnd,ri){
    rnd.forEach(function(m,mi){ pushMatch(m,ri,mi,false); });
  });

  if((pool.bonusRounds||[]).length){
    data.push(['BONUS SETS']);
    (pool.bonusRounds||[]).forEach(function(rnd,ri){
      rnd.forEach(function(m,mi){ pushMatch(m,ri,mi,true); });
    });
  }

  // Build winner formulas and score cell markers
  var ws=XLSX.utils.aoa_to_sheet(data);

  // Add yellow fill to score input cells + winner formula
  matchRows.forEach(function(mr){
    mr.e1Cols.forEach(function(c,si){
      var c1=RC(mr.row,c), c2=RC(mr.row,mr.e2Cols[si]);
      // Mark score cells (yellow) -- SheetJS basic cell style
      if(!ws[c1]) ws[c1]={t:'n',v:null};
      if(!ws[c2]) ws[c2]={t:'n',v:null};
    });

    // Winner formula
    var e1parts=mr.e1Cols.map(function(c,si){return RC(mr.row,c)+'>'+RC(mr.row,mr.e2Cols[si]);});
    var e2parts=mr.e1Cols.map(function(c,si){return RC(mr.row,mr.e2Cols[si])+'>'+RC(mr.row,c);});
    var s1='('+e1parts.map(function(x){return 'IF('+x+',1,0)';}).join('+')+'>';
    var s2=e2parts.map(function(x){return 'IF('+x+',1,0)';}).join('+')+')';;
    var firstE1=RC(mr.row,mr.e1Cols[0]), firstE2=RC(mr.row,mr.e2Cols[0]);
    var e1ref=RC(mr.row,3), e2ref=RC(mr.row,COL_E2);
    var winF='=IF(AND('+firstE1+'="",'+firstE2+'=""),"--",IF('+s1+s2+','+e1ref+',IF(('+
             e2parts.map(function(x){return 'IF('+x+',1,0)';}).join('+')+')'+'>'+'('+
             e1parts.map(function(x){return 'IF('+x+',1,0)';}).join('+')+'),'+e2ref+',"Tie")))';
    ws[RC(mr.row,COL_WIN)]={t:'s',f:winF.slice(1),v:''};
  });

  //    Standings block                                                         
  var stdStartRow=data.length+2;
  XLSX.utils.sheet_add_aoa(ws,[
    [pool.name+' Standings'],
    ['Rank','Entry','GP','W','L','W%','+/-/G','PF/G'],
  ],{origin:{r:stdStartRow-1,c:0}});

  entries.forEach(function(entry,idx){
    var sr=stdStartRow+2+idx;
    var gpParts=[],wParts=[],pfParts=[],paParts=[];

    matchRows.forEach(function(mr){
      var f1=RC(mr.row,mr.e1Cols[0]), f2=RC(mr.row,mr.e2Cols[0]);
      if(mr.p1===entry){
        gpParts.push('IF(AND('+f1+'<>"",'+f2+'<>""),1,0)');
        var s1s=mr.e1Cols.map(function(c,si){return 'IF('+RC(mr.row,c)+'>'+RC(mr.row,mr.e2Cols[si])+',1,0)';}).join('+');
        var s2s=mr.e2Cols.map(function(c,si){return 'IF('+RC(mr.row,c)+'>'+RC(mr.row,mr.e1Cols[si])+',1,0)';}).join('+');
        wParts.push('IF(AND('+f1+'<>"",'+f2+'<>""),('+s1s+')>('+s2s+'),FALSE)*1');
        mr.e1Cols.forEach(function(c){ pfParts.push('IF('+RC(mr.row,c)+'<>"",'+RC(mr.row,c)+',0)'); });
        mr.e2Cols.forEach(function(c){ paParts.push('IF('+RC(mr.row,c)+'<>"",'+RC(mr.row,c)+',0)'); });
      } else if(mr.p2===entry){
        gpParts.push('IF(AND('+f1+'<>"",'+f2+'<>""),1,0)');
        var s1s=mr.e1Cols.map(function(c,si){return 'IF('+RC(mr.row,c)+'>'+RC(mr.row,mr.e2Cols[si])+',1,0)';}).join('+');
        var s2s=mr.e2Cols.map(function(c,si){return 'IF('+RC(mr.row,c)+'>'+RC(mr.row,mr.e1Cols[si])+',1,0)';}).join('+');
        wParts.push('IF(AND('+f1+'<>"",'+f2+'<>""),('+s2s+')>('+s1s+'),FALSE)*1');
        mr.e2Cols.forEach(function(c){ pfParts.push('IF('+RC(mr.row,c)+'<>"",'+RC(mr.row,c)+',0)'); });
        mr.e1Cols.forEach(function(c){ paParts.push('IF('+RC(mr.row,c)+'<>"",'+RC(mr.row,c)+',0)'); });
      }
    });

    var gpF=gpParts.length?gpParts.join('+'):'0';
    var wF=wParts.length?wParts.join('+'):'0';
    var pfF=pfParts.length?pfParts.join('+'):'0';
    var paF=paParts.length?paParts.join('+'):'0';
    var gpCell=RC(sr,3),wCell=RC(sr,4);

    XLSX.utils.sheet_add_aoa(ws,[[idx+1,entry]],{origin:{r:sr-1,c:0}});
    ws[RC(sr,3)]={t:'n',f:gpF,v:0};
    ws[RC(sr,4)]={t:'n',f:wF,v:0};
    ws[RC(sr,5)]={t:'n',f:gpCell+'-'+wCell,v:0};
    ws[RC(sr,6)]={t:'n',f:'IF('+gpCell+'>0,'+wCell+'/'+gpCell+',0)',v:0};
    ws[RC(sr,7)]={t:'n',f:'IF('+gpCell+'>0,('+pfF+'-'+paF+')/'+gpCell+',0)',v:0};
    ws[RC(sr,8)]={t:'n',f:'IF('+gpCell+'>0,('+pfF+')/'+gpCell+',0)',v:0};
  });

  // Column widths
  ws['!cols']=[{wch:5},{wch:12},{wch:18}];
  for(var si=0;si<poolSets;si++){ ws['!cols'].push({wch:9},{wch:9}); }
  ws['!cols'].push({wch:18},{wch:12},{wch:18});
  ws['!ref']=XLSX.utils.encode_range({s:{r:0,c:0},e:{r:stdStartRow+2+entries.length,c:COL_WIN-1}});

  return ws;
}

function _buildCombinedStandings(sd,allPools){
  var rows=[['Combined Standings'],
            ['#','Entry','Pool','GP','W','L','W%','+/-/G','PF/G']];

  var rank=1;
  allPools.forEach(function(pool){
    var entries=pool.entries||[];
    var poolSets=pool.sets||(sd.scoring||{}).numSets||1;
    var realMatches=0;
    (pool.rounds||[]).forEach(function(rnd){rnd.forEach(function(m){if(!m.isBye)realMatches++;});});
    var bonusRows=0;
    if((pool.bonusRounds||[]).length){
      var bm=0;
      (pool.bonusRounds||[]).forEach(function(rnd){rnd.forEach(function(m){if(!m.isBye)bm++;});});
      bonusRows=bm+2;
    }
    var stdDataStart=3+realMatches+bonusRows+3; // header+col_header+matches+gap+std_title+std_header+1

    entries.forEach(function(entry,idx){
      var pr=stdDataStart+idx;
      rows.push([rank,
        "='"+pool.name+"'!B"+pr,
        pool.name,
        "='"+pool.name+"'!C"+pr,
        "='"+pool.name+"'!D"+pr,
        "='"+pool.name+"'!E"+pr,
        "='"+pool.name+"'!F"+pr,
        "='"+pool.name+"'!G"+pr,
        "='"+pool.name+"'!H"+pr,
      ]);
      rank++;
    });
  });

  var ws=XLSX.utils.aoa_to_sheet(rows);
  ws['!cols']=[{wch:5},{wch:20},{wch:10},{wch:6},{wch:6},{wch:6},{wch:8},{wch:9},{wch:9}];
  return ws;
}


/* =======================================================
   INIT
======================================================= */
(function(){
  if(!SD||SD==='SCHEDULE_DATA_PLACEHOLDER'){
    document.querySelector('.card').innerHTML='<div class="empty"><p>No schedule loaded.</p><p style="margin-top:8px;font-size:12px;color:var(--t3);">Use the generator to produce a populated viewer.</p></div>';
    return;
  }
  fmt=SD.format||'kob_league';
  document.getElementById('page-title').textContent=SD.title||'KOB Viewer';
  document.title=(SD.title||'KOB Viewer')+' | v3.18';
  // Set storage key unique to this event
  _storeKey=window._storeKey||('kob_'+btoa(encodeURIComponent((SD.title||'ev')+(SD.format||''))).replace(/[^a-zA-Z0-9]/g,'').slice(0,24));
  storeLoad();
  document.body.classList.add('viewer-locked');
  document.title=(SD.title||'KOB Viewer')+' | v3.18';
  if(fmt==='kob_league') initKOBLeague();
  else if(fmt==='traditional_tournament'){ initTournament(); initSheetsExportBtn(); }
  else if(fmt==='traditional_league') initTraditionalLeague();
  else if(fmt==='kob_quads') initKOBQuads();
  else if(fmt==='kob_random_mix') initKOBRandomMix();
})();

