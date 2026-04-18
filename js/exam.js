// ═══════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════
let ACTIVE_Q = [];  // filtered + shuffled subset used for current session
let TOTAL = 0;
let cur = 0;
let answers = {};
let flagged = {};
let checked = {};
let dragSlots = {};
let catMap = {};
let fwAns = {};
let vpnAns = {};
let secondsLeft = 90*60;
let timerInt;
let examStartTime = 0;
let strikeMode = false;
let highlightMode = false;
let logAns = {};
let hardenAns = {};
let dragItem = null;
let dragFromCat = null;

let selectedDomains = new Set(JSON.parse(localStorage.getItem('secplus_pref_doms') || '[1,2,3,4,5]'));
let selectedQCount = parseInt(localStorage.getItem('secplus_pref_count') || '90');
let isExamMode = false;
let isReviewMistakesMode = false;
let currentSessionMissedIds = [];

// ═══════════════════════════════════════════════════════
// SPLASH — DOMAIN & COUNT SELECTION
// ═══════════════════════════════════════════════════════
function toggleDomain(d){
  const chip = document.getElementById('dc'+d);
  const rowEl = document.getElementById('row-'+d);
  if(selectedDomains.has(d)){
    selectedDomains.delete(d);
    chip.classList.remove('active');
    rowEl.classList.remove('selected');
  } else {
    selectedDomains.add(d);
    chip.classList.add('active');
    rowEl.classList.add('selected');
  }
  localStorage.setItem('secplus_pref_doms', JSON.stringify([...selectedDomains]));
  updateSplashInfo();
}
function selectAllDomains(){
  [1,2,3,4,5].forEach(d=>{
    selectedDomains.add(d);
    document.getElementById('dc'+d)?.classList.add('active');
    document.getElementById('row-'+d)?.classList.add('selected');
  });
  localStorage.setItem('secplus_pref_doms', JSON.stringify([...selectedDomains]));
  updateSplashInfo();
}
function clearAllDomains(){
  [1,2,3,4,5].forEach(d=>{
    selectedDomains.delete(d);
    document.getElementById('dc'+d)?.classList.remove('active');
    document.getElementById('row-'+d)?.classList.remove('selected');
  });
  localStorage.setItem('secplus_pref_doms', JSON.stringify([...selectedDomains]));
  updateSplashInfo();
}
function setQCount(n, btn){
  selectedQCount = n;
  document.querySelectorAll('.qcount-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  localStorage.setItem('secplus_pref_count', n);
  updateSplashInfo();
}
function updateSplashInfo(){
  const pool = Q.filter(q=>selectedDomains.has(q.domain));
  const avail = pool.length;
  const actual = Math.min(selectedQCount, avail);
  const mins = actual;
  document.getElementById('splashQCount').textContent = actual;
  document.getElementById('splashMins').textContent = mins;
  const msg = document.getElementById('qAvailMsg');
  if(selectedDomains.size===0){
    msg.textContent='Select at least one domain.';
    msg.style.color='var(--danger)';
  } else if(avail < selectedQCount){
    msg.textContent=`${avail} questions available in selected domains — exam will use all ${avail}.`;
    msg.style.color='var(--warn)';
  } else {
    msg.textContent=`${avail} questions available · ${actual} will be randomly selected.`;
    msg.style.color='var(--text-muted)';
  }
}

// ═══════════════════════════════════════════════════════
// START EXAM
// ═══════════════════════════════════════════════════════
function startExam(onlyMissed = false, specificIds = null){
  if(selectedDomains.size===0){
    document.getElementById('startErr').style.display='block';
    return;
  }
  document.getElementById('startErr').style.display='none';

  // Read exam mode toggle; reset review mode unless explicitly set
  const examToggle = document.getElementById('examModeToggle');
  isExamMode = examToggle ? examToggle.checked : false;
  if(!specificIds) isReviewMistakesMode = false;

  // Filter by selected domains
  let pool = Q.filter(q=>selectedDomains.has(q.domain));

  if (specificIds) {
    pool = pool.filter(q => specificIds.includes(q.id));
    if (pool.length === 0) return alert("No questions found to review!");
  } else if (onlyMissed) {
    const missedIds = JSON.parse(localStorage.getItem('secplus_missed_ids') || '[]');
    pool = pool.filter(q => missedIds.includes(q.id));
    if (pool.length === 0) return alert("No missed questions found for the selected domains!");
  }

  // Separate PBQs and MCQs
  const pbqs = pool.filter(q=>['order','cat','firewall','vpn','log','harden'].includes(q.type));
  const mcqs = pool.filter(q=>!['order','cat','firewall','vpn','log','harden'].includes(q.type));

  // Fisher-Yates shuffle (unbiased)
  const shuffle = arr=>{const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};

  // Load previously seen question IDs to prioritize unseen questions
  const seenIds = new Set();
  try{ JSON.parse(localStorage.getItem('secplus_progress_v2')||'[]').forEach(a=>{(a.questionIds||[]).forEach(id=>seenIds.add(id));}); }catch(e){}
  const unseenFirst = arr=>[...arr.filter(q=>!seenIds.has(q.id)),...arr.filter(q=>seenIds.has(q.id))];

  // Pick questions — scale PBQs proportionally to session size (real exam = ~5 per 90Q)
  const total = Math.min(selectedQCount, pool.length);
  const targetPBQ = Math.max(1, Math.round(total * (5 / 90)));
  const pbqTake = Math.min(pbqs.length, targetPBQ);
  const mcqTake = total - pbqTake;

  // Fair domain distribution for MCQs: round-robin, unseen questions prioritized
  const mcqByDomain = {};
  [...selectedDomains].forEach(d => { mcqByDomain[d] = shuffle(unseenFirst(mcqs.filter(q=>q.domain===d))); });
  const pickedMCQ = [];
  let round = 0;
  const domList = shuffle([...selectedDomains]);
  while(pickedMCQ.length < mcqTake) {
    let added = false;
    for(const d of domList){
      if(pickedMCQ.length >= mcqTake) break;
      if(round < mcqByDomain[d].length){
        pickedMCQ.push(mcqByDomain[d][round]);
        added = true;
      }
    }
    if(!added) break;
    round++;
  }

  const rawPool = [...shuffle(unseenFirst(pbqs)).slice(0, pbqTake), ...shuffle(pickedMCQ)];

  // Dynamic option shuffling for MCQs/Multi — re-maps correct index + explanation letters
  const LETTERS = 'ABCDE';
  ACTIVE_Q = rawPool.map(q => {
    if (q.type === 'mcq' || q.type === 'multi') {
      const newQ = { ...q, opts: [...q.opts] };
      const originalOpts = [...q.opts];
      const correctTexts = q.type === 'mcq'
        ? [originalOpts[q.correct]]
        : q.correct.map(i => originalOpts[i]);
      newQ.opts = shuffle(newQ.opts);
      if (q.type === 'mcq') {
        newQ.correct = newQ.opts.indexOf(correctTexts[0]);
      } else {
        newQ.correct = correctTexts.map(t => newQ.opts.indexOf(t)).sort();
      }
      // Remap letter references in explanation text (e.g. "(A)" → "(C)")
      const oldToNew = {};
      originalOpts.forEach((opt, oldIdx) => {
        const newIdx = newQ.opts.indexOf(opt);
        oldToNew[LETTERS[oldIdx]] = LETTERS[newIdx];
      });
      // Use placeholders to avoid double-replacing (A→C then C→B)
      let exp = newQ.exp;
      originalOpts.forEach((_, oldIdx) => {
        const oldLetter = LETTERS[oldIdx];
        exp = exp.replace(new RegExp('\\(' + oldLetter + '\\)', 'g'), '(__' + oldIdx + '__)');
      });
      originalOpts.forEach((_, oldIdx) => {
        exp = exp.replace(new RegExp('__' + oldIdx + '__', 'g'), oldToNew[LETTERS[oldIdx]]);
      });
      newQ.exp = exp;
      return newQ;
    }
    return q;
  });

  TOTAL = ACTIVE_Q.length;
  secondsLeft = TOTAL * 60;

  // Reset state
  cur=0; answers={}; flagged={}; checked={};
  dragSlots={}; catMap={}; fwAns={}; vpnAns={}; logAns={}; hardenAns={};

  examStartTime = Date.now();

  document.getElementById('splash').style.display='none';
  document.getElementById('exam').style.display='flex';
  buildNav();
  renderQ(0);
  startTimer();
}

function startTimer(){
  const totalTime = TOTAL * 60;         // total seconds for this session
  const warnAt   = Math.floor(totalTime * 0.25); // yellow at last 25% of time
  const dangerAt = Math.floor(totalTime * 0.10); // red at last 10% of time
  timerInt = setInterval(()=>{
    secondsLeft--;
    const m=Math.floor(secondsLeft/60),s=secondsLeft%60;
    document.getElementById('timerTxt').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    const el=document.getElementById('timerEl');
    el.className='hdr-timer';
    if(secondsLeft<=dangerAt) el.classList.add('danger-t');
    else if(secondsLeft<=warnAt) el.classList.add('warn-t');
    if(secondsLeft<=0){clearInterval(timerInt);submitExam();}
  },1000);
}

// ═══════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════
function buildNav(){
  const pbqEl=document.getElementById('navPBQ');
  const mcqEl=document.getElementById('navMCQ');
  ACTIVE_Q.forEach((q,i)=>{
    const btn=document.createElement('button');
    btn.className='nb';
    btn.textContent=i+1;
    btn.id=`nb-${i}`;
    btn.onclick=()=>renderQ(i);
    if(['order','cat','firewall','vpn','log','harden'].includes(q.type)) pbqEl.appendChild(btn);
    else mcqEl.appendChild(btn);
  });
}

function updateNav(){
  ACTIVE_Q.forEach((_,i)=>{
    const b=document.getElementById(`nb-${i}`);
    if(!b)return;
    b.className='nb';
    if(i===cur)b.classList.add('cur');
    if(isAnswered(i))b.classList.add('ans');
    if(flagged[i])b.classList.add('flagged');
  });
  const ans=ACTIVE_Q.filter((_,i)=>isAnswered(i)).length;
  document.getElementById('progFill').style.width=`${(ans/TOTAL)*100}%`;
  document.getElementById('progTxt').textContent=`${ans} / ${TOTAL}`;
}

function isAnswered(i){
  const q=ACTIVE_Q[i];
  if(q.type==='mcq') return answers[i]!==undefined;
  if(q.type==='multi') return answers[i]&&answers[i].length>0;
  if(q.type==='order') return dragSlots[q.id]&&dragSlots[q.id].some(v=>v);
  if(q.type==='cat') return catMap[q.id]&&Object.values(catMap[q.id]).some(a=>a.length>0);
  if(q.type==='firewall') return fwAns[q.id]&&fwAns[q.id].some(v=>v);
  if(q.type==='vpn') return vpnAns[q.id]&&[...((vpnAns[q.id]||{}).p1||[]),...((vpnAns[q.id]||{}).p2||[])].some(v=>v);
  if(q.type==='log') return logAns[q.id]&&Object.keys(logAns[q.id].classifications||{}).length>0;
  if(q.type==='harden') return hardenAns[q.id]&&hardenAns[q.id].some(s=>s.some(v=>v));
  return false;
}

function navigate(dir){
  const n=cur+dir;
  if(n>=0&&n<TOTAL)renderQ(n);
}
function toggleFlag(idx){
  flagged[idx]=!flagged[idx];
  updateNav();renderQ(idx);
}

// ═══════════════════════════════════════════════════════
// RENDER — QUESTION DISPATCHER
// ═══════════════════════════════════════════════════════
function renderQ(idx){
  cur=idx;
  const q=ACTIVE_Q[idx];
  updateNav();
  let html='';

  // top bar
  html+=`<div class="q-top">
    <span class="q-badge ${q.badgeClass||'mcq-b'}">${q.badge}</span>
    <div class="q-meta">
      <span class="q-num">Q${idx+1} of ${TOTAL} &nbsp;·&nbsp; Domain ${q.domain}.0</span>
      <button class="flag-btn ${flagged[idx]?'on':''}" onclick="toggleFlag(${idx})">${flagged[idx]?'⚑ Flagged':'⚐ Flag'}</button>
    </div>
  </div>`;

  if(q.type==='order') html+=renderOrder(q,idx);
  else if(q.type==='cat') html+=renderCat(q,idx);
  else if(q.type==='firewall') html+=renderFW(q,idx);
  else if(q.type==='vpn') html+=renderVPN(q,idx);
  else if(q.type==='log') html+=renderLog(q,idx);
  else if(q.type==='harden') html+=renderHarden(q,idx);
  else if(q.type==='mcq') html+=renderMCQ(q,idx);
  else if(q.type==='multi') html+=renderMulti(q,idx);

  // answer section
  html+=`<div class="ans-section">
    <div class="ans-result" id="ansResult"></div>
    <div class="q-foot">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-ghost" onclick="navigate(-1)" ${idx===0?'disabled':''}>← Prev</button>
        <button class="btn btn-skip" onclick="navigate(1)" ${idx===TOTAL-1?'disabled':''}>Skip →</button>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-chk" onclick="checkAnswer(${idx})">Check Answer</button>
        ${idx===TOTAL-1
          ?`<button class="btn btn-end" onclick="goReview()">Review & Submit</button>`
          :`<button class="btn btn-pri" onclick="navigate(1)">Next →</button>`}
      </div>
    </div>
  </div>`;

  document.getElementById('qContent').innerHTML=html;

  // Hide "Check Answer" in Exam Mode (but keep visible in Review Mistakes mode)
  const chkBtn = document.querySelector('.btn-chk');
  if (chkBtn) {
    chkBtn.style.display = isExamMode && !isReviewMistakesMode ? 'none' : 'inline-block';
  }

  if(q.type==='order') initOrder(q,idx);
  else if(q.type==='cat') initCat(q,idx);
  else if(q.type==='firewall') initFW(q,idx);
  else if(q.type==='vpn') initVPN(q,idx);
  else if(q.type==='log') initLog(q,idx);
  else if(q.type==='harden') initHarden(q,idx);

  if(checked[idx]) restoreCheck(idx);
  if(isReviewMistakesMode) checkAnswer(idx); // auto-show explanation in review mode
  if(typeof highlightAcronyms==='function') highlightAcronyms(document.getElementById('qContent'));
  window.scrollTo(0,0);
}

function fmt(s){
  return (s||'').replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\n/g,' ');
}

// ── MCQ ──
function renderMCQ(q,idx){
  const sel=answers[idx];
  let html=`<div class="q-stem">${fmt(q.stem)}</div><div class="q-inst">Select the BEST answer.</div><div class="opts">`;
  q.opts.forEach((o,oi)=>{
    html+=`<div class="opt ${sel===oi?'sel':''}" onclick="pickMCQ(${idx},${oi})">
      <div class="opt-let">${'ABCDE'[oi]}</div>
      <div class="opt-text" data-oi="${oi}">${fmt(o.replace(/^[A-E]\.\s*/,''))}</div>
    </div>`;
  });
  html+=`</div>`;
  return html;
}
function pickMCQ(idx,oi){
  if(checked[idx])return;
  answers[idx]=oi;
  updateNav();
  document.querySelectorAll('.opt').forEach((el,i)=>el.classList.toggle('sel',i===oi));
}

// ── MULTI-SELECT ──
function renderMulti(q,idx){
  const need=q.correct.length;
  const sel=answers[idx]||[];
  let html=`<div class="q-stem">${fmt(q.stem)}</div><div class="multi-pill">☑ Select exactly ${need} answers</div><div class="opts">`;
  q.opts.forEach((o,oi)=>{
    html+=`<div class="opt ${sel.includes(oi)?'msel':''}" onclick="pickMulti(${idx},${oi},${need})">
      <div class="opt-let" style="border-radius:3px">${'ABCDE'[oi]}</div>
      <div class="opt-text">${fmt(o.replace(/^[A-E]\.\s*/,''))}</div>
    </div>`;
  });
  html+=`</div>`;
  return html;
}
function pickMulti(idx,oi,need){
  if(checked[idx])return;
  let sel=[...(answers[idx]||[])];
  if(sel.includes(oi)) sel=sel.filter(x=>x!==oi);
  else if(sel.length<need) sel.push(oi);
  answers[idx]=sel;
  updateNav();
  document.querySelectorAll('.opt').forEach((el,i)=>el.classList.toggle('msel',sel.includes(i)));
}

// ── ORDER DRAG (PBQ) ──
function renderOrder(q,_idx){
  if(!dragSlots[q.id]) dragSlots[q.id]=new Array(q.correctOrder.length).fill(null);
  const placed=dragSlots[q.id];
  const remaining=q.items.filter(it=>!placed.includes(it));
  let html=`<div class="q-stem">${fmt(q.stem)}</div>
  <div class="q-inst">Drag items from the left into the numbered sequence on the right.</div>
  <div class="pbq-wrap"><div class="pbq-cols">
    <div class="pbq-panel">
      <div class="pbq-ph">📦 Available Items</div>
      <div class="pbq-items" id="srcPool">`;
  remaining.forEach(it=>{
    html+=`<div class="drag-chip" draggable="true" data-item="${it}">${it}</div>`;
  });
  html+=`</div></div>
    <div class="pbq-panel">
      <div class="pbq-ph">🔢 Ordered Sequence</div>
      <div class="drop-zone" id="orderDrop">`;
  placed.forEach((val,si)=>{
    html+=`<div class="drop-slot ${val?'filled':''}" data-slot="${si}" id="oSlot-${si}">
      <span class="slot-lbl">Step ${si+1}</span>
      <span>${val||'<span style="opacity:.35">Drop here</span>'}</span>
    </div>`;
  });
  html+=`</div></div></div></div>`;
  return html;
}
function initOrder(q,idx){
  document.querySelectorAll('.drag-chip').forEach(el=>{
    el.addEventListener('dragstart',()=>{dragItem=el.dataset.item;el.classList.add('dragging');});
    el.addEventListener('dragend',()=>el.classList.remove('dragging'));
  });
  document.querySelectorAll('.drop-slot').forEach(slot=>{
    slot.addEventListener('dragover',e=>{e.preventDefault();slot.classList.add('over');});
    slot.addEventListener('dragleave',()=>slot.classList.remove('over'));
    slot.addEventListener('drop',e=>{
      e.preventDefault();slot.classList.remove('over');
      if(!dragItem)return;
      const si=parseInt(slot.dataset.slot);
      dragSlots[q.id]=dragSlots[q.id].map(v=>v===dragItem?null:v);
      dragSlots[q.id][si]=dragItem;
      answers[idx]=dragSlots[q.id];
      updateNav();renderQ(idx);
    });
  });
  document.querySelectorAll('.drop-slot.filled').forEach(slot=>{
    slot.addEventListener('click',()=>{
      const si=parseInt(slot.dataset.slot);
      dragSlots[q.id][si]=null;
      answers[idx]=dragSlots[q.id];
      updateNav();renderQ(idx);
    });
  });
}

// ── CATEGORY DRAG (PBQ) ──
function renderCat(q,idx){
  if(!catMap[q.id]){catMap[q.id]={};q.categories.forEach(c=>catMap[q.id][c]=[]);}
  const placed=Object.values(catMap[q.id]).flat();
  const remaining=q.items.filter(it=>!placed.includes(it));
  let html=`<div class="q-stem">${fmt(q.stem)}</div>
  <div class="q-inst">Drag items from the source list into the correct category. Click a placed item to return it.</div>
  <div class="pbq-wrap">
    <div class="pbq-panel" style="margin-bottom:12px">
      <div class="pbq-ph">📦 Items to Classify</div>
      <div class="pbq-items" id="catSrc">`;
  remaining.forEach(it=>{
    html+=`<div class="drag-chip" draggable="true" data-item="${it}">${it}</div>`;
  });
  html+=`</div></div><div class="cat-zones">`;
  q.categories.forEach(cat=>{
    const safeId=cat.replace(/[^a-zA-Z0-9]/g,'-');
    html+=`<div class="cat-zone">
      <div class="cat-zone-h">${cat}</div>
      <div class="cat-zone-body" id="cz-${safeId}" data-cat="${cat}">`;
    (catMap[q.id][cat]||[]).forEach(it=>{
      html+=`<div class="drag-chip" draggable="true" data-item="${it}" data-fromcat="${cat}" style="cursor:pointer" onclick="returnToPool('${it}','${cat}',${idx},${q.id})">${it}</div>`;
    });
    html+=`</div></div>`;
  });
  html+=`</div></div>`;
  return html;
}
function initCat(q,idx){
  document.querySelectorAll('.drag-chip').forEach(el=>{
    el.addEventListener('dragstart',()=>{
      dragItem=el.dataset.item;dragFromCat=el.dataset.fromcat||null;
      el.classList.add('dragging');
    });
    el.addEventListener('dragend',()=>el.classList.remove('dragging'));
  });
  document.querySelectorAll('.cat-zone-body').forEach(zone=>{
    zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('over');});
    zone.addEventListener('dragleave',()=>zone.classList.remove('over'));
    zone.addEventListener('drop',e=>{
      e.preventDefault();zone.classList.remove('over');
      const cat=zone.dataset.cat;
      if(!cat||!dragItem)return;
      if(dragFromCat&&catMap[q.id][dragFromCat])
        catMap[q.id][dragFromCat]=catMap[q.id][dragFromCat].filter(x=>x!==dragItem);
      if(!catMap[q.id][cat])catMap[q.id][cat]=[];
      if(!catMap[q.id][cat].includes(dragItem))catMap[q.id][cat].push(dragItem);
      answers[idx]=catMap[q.id];
      updateNav();renderQ(idx);
    });
  });
}
function returnToPool(item,fromCat,idx,qid){
  if(catMap[qid][fromCat])catMap[qid][fromCat]=catMap[qid][fromCat].filter(x=>x!==item);
  answers[idx]=catMap[qid];
  updateNav();renderQ(idx);
}

// ── FIREWALL ACL (PBQ) ──
function renderFW(q,idx){
  if(!fwAns[q.id])fwAns[q.id]=q.rules.map(()=>'');
  let html=`<div class="q-stem">${fmt(q.stem)}</div>
  <div class="sim-win">
    <div class="sim-bar">
      <span class="sim-bar-dots">
        <span style="background:#ff5f56"></span>
        <span style="background:#ffbd2e"></span>
        <span style="background:#27c93f"></span>
      </span>
      <span class="sim-title-txt">Firewall ACL Configuration — Network Policy Manager</span>
    </div>
    <div class="sim-body">
    <table class="fw-table">
      <thead><tr><th>#</th><th>Description</th><th>Source</th><th>Destination</th><th>Port</th><th>Protocol</th><th>Action</th></tr></thead>
      <tbody>`;
  q.rules.forEach((r,ri)=>{
    html+=`<tr>
      <td>${ri+1}</td><td>${r.desc}</td>
      <td style="font-family:var(--mono)">${r.src}</td>
      <td style="font-family:var(--mono)">${r.dst}</td>
      <td style="font-family:var(--mono)">${r.port}</td>
      <td style="font-family:var(--mono)">${r.proto}</td>
      <td><select id="fw-${q.id}-${ri}" onchange="setFW(${idx})">
        <option value="">— Select —</option>
        ${r.opts.map(o=>`<option value="${o}" ${fwAns[q.id][ri]===o?'selected':''}>${o}</option>`).join('')}
      </select></td>
    </tr>`;
  });
  html+=`</tbody></table></div></div>`;
  return html;
}
function initFW(){}
function setFW(idx){
  const q=ACTIVE_Q[idx];
  fwAns[q.id]=q.rules.map((_,ri)=>document.getElementById(`fw-${q.id}-${ri}`)?.value||'');
  if(fwAns[q.id].every(v=>v)) answers[idx]=fwAns[q.id];
  updateNav();
}

// ── VPN CONFIGURATION (PBQ) ──
function renderVPN(q,idx){
  if(!vpnAns[q.id])vpnAns[q.id]={p1:q.phase1.map(()=>''),p2:q.phase2.map(()=>'')};
  let html=`<div class="q-stem">${fmt(q.stem)}</div>
  <div class="sim-win">
    <div class="sim-bar">
      <span class="sim-bar-dots">
        <span style="background:#ff5f56"></span><span style="background:#ffbd2e"></span><span style="background:#27c93f"></span>
      </span>
      <span class="sim-title-txt">VPN Concentrator Configuration — HQ ↔ Branch Tunnel</span>
    </div>
    <div class="sim-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
        <div>
          <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--accent);margin-bottom:12px;text-transform:uppercase">Phase 1 — IKE (Key Exchange)</div>`;
  q.phase1.forEach((f,fi)=>{
    html+=`<div style="margin-bottom:12px">
      <label style="display:block;font-size:11px;color:var(--text-dim);margin-bottom:4px;font-family:var(--mono)">${f.label}</label>
      <select id="p1-${q.id}-${fi}" onchange="setVPN(${idx})" style="background:var(--panel);border:1px solid var(--border);color:var(--text);font-family:var(--mono);font-size:12px;padding:5px 8px;border-radius:3px;width:100%;cursor:pointer">
        <option value="">— Select —</option>
        ${f.opts.map(o=>`<option value="${o}" ${vpnAns[q.id].p1[fi]===o?'selected':''}>${o}</option>`).join('')}
      </select></div>`;
  });
  html+=`</div><div>
        <div style="font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--accent2);margin-bottom:12px;text-transform:uppercase">Phase 2 — IPSec (Data Protection)</div>`;
  q.phase2.forEach((f,fi)=>{
    html+=`<div style="margin-bottom:12px">
      <label style="display:block;font-size:11px;color:var(--text-dim);margin-bottom:4px;font-family:var(--mono)">${f.label}</label>
      <select id="p2-${q.id}-${fi}" onchange="setVPN(${idx})" style="background:var(--panel);border:1px solid var(--border);color:var(--text);font-family:var(--mono);font-size:12px;padding:5px 8px;border-radius:3px;width:100%;cursor:pointer">
        <option value="">— Select —</option>
        ${f.opts.map(o=>`<option value="${o}" ${vpnAns[q.id].p2[fi]===o?'selected':''}>${o}</option>`).join('')}
      </select></div>`;
  });
  html+=`</div></div></div></div>`;
  return html;
}
function initVPN(){}
function setVPN(idx){
  const q=ACTIVE_Q[idx];
  vpnAns[q.id]={
    p1:q.phase1.map((_,fi)=>document.getElementById(`p1-${q.id}-${fi}`)?.value||''),
    p2:q.phase2.map((_,fi)=>document.getElementById(`p2-${q.id}-${fi}`)?.value||'')
  };
  if([...vpnAns[q.id].p1,...vpnAns[q.id].p2].every(v=>v)) answers[idx]=vpnAns[q.id];
  updateNav();
}

// ── LOG TRIAGE (PBQ) ──
function renderLog(q,idx){
  if(!logAns[q.id]) logAns[q.id]={selected:0,classifications:{}};
  const la=logAns[q.id];
  const sel=la.selected||0;
  const m=q.machines[sel];
  let html=`<div class="q-stem">${fmt(q.stem)}</div>
  <div class="sim-win">
    <div class="sim-bar">
      <span class="sim-bar-dots"><span style="background:#ff5f56"></span><span style="background:#ffbd2e"></span><span style="background:#27c93f"></span></span>
      <span class="sim-title-txt">Incident Response — Network Investigation Console</span>
    </div>
    <div class="sim-body" style="padding:0">
      <div class="log-layout">
        <div class="log-machines">
          <div class="log-machines-hdr">NETWORK HOSTS</div>`;
  q.machines.forEach((mc,mi)=>{
    const cls=la.classifications[mc.name]||'';
    const statusCls=cls==='clean'?'log-m-clean':cls==='infected'?'log-m-infected':cls==='source'?'log-m-source':'';
    html+=`<div class="log-machine ${mi===sel?'log-m-active':''} ${statusCls}" onclick="selectLogMachine(${idx},${mi})">
      <div class="log-m-icon">${mc.role==='Server'?'▣':'▢'}</div>
      <div class="log-m-info">
        <div class="log-m-name">${mc.name}</div>
        <div class="log-m-role">${mc.role}</div>
      </div>
      <div class="log-m-tag">${cls?cls.toUpperCase():'?'}</div>
    </div>`;
  });
  html+=`</div>
        <div class="log-detail">
          <div class="log-detail-hdr">
            <span>${m.name} — ${m.role}</span>
            <span class="log-entry-count">${m.logs.length} log entries</span>
          </div>
          <div class="log-entries">`;
  m.logs.forEach(line=>{
    const isAlert=line.match(/\[!\]|ALERT|CRITICAL|malicious|suspicious|failed|unauthorized|denied/i);
    html+=`<div class="log-line ${isAlert?'log-line-alert':''}">${line}</div>`;
  });
  html+=`</div>
          <div class="log-classify">
            <span class="log-classify-lbl">Classify this host:</span>
            <button class="log-cls-btn log-cls-clean ${la.classifications[m.name]==='clean'?'active':''}" onclick="classifyLog(${idx},'${m.name}','clean')">Clean</button>
            <button class="log-cls-btn log-cls-infected ${la.classifications[m.name]==='infected'?'active':''}" onclick="classifyLog(${idx},'${m.name}','infected')">Infected</button>
            <button class="log-cls-btn log-cls-source ${la.classifications[m.name]==='source'?'active':''}" onclick="classifyLog(${idx},'${m.name}','source')">Source</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  return html;
}
function initLog(){}
function selectLogMachine(idx,mi){
  const q=ACTIVE_Q[idx];
  if(!logAns[q.id]) logAns[q.id]={selected:0,classifications:{}};
  logAns[q.id].selected=mi;
  renderQ(idx);
}
function classifyLog(idx,machineName,cls){
  const q=ACTIVE_Q[idx];
  if(checked[idx])return;
  if(!logAns[q.id]) logAns[q.id]={selected:0,classifications:{}};
  // Toggle off if clicking same classification
  if(logAns[q.id].classifications[machineName]===cls) delete logAns[q.id].classifications[machineName];
  else logAns[q.id].classifications[machineName]=cls;
  // Mark answered if all machines classified
  if(Object.keys(logAns[q.id].classifications).length===q.machines.length) answers[idx]=logAns[q.id].classifications;
  updateNav();renderQ(idx);
}

// ── SERVER HARDENING (PBQ) ──
function renderHarden(q,idx){
  if(!hardenAns[q.id]) hardenAns[q.id]=q.sections.map(s=>s.settings.map(()=>''));
  let html=`<div class="q-stem">${fmt(q.stem)}</div>
  <div class="sim-win">
    <div class="sim-bar">
      <span class="sim-bar-dots"><span style="background:#ff5f56"></span><span style="background:#ffbd2e"></span><span style="background:#27c93f"></span></span>
      <span class="sim-title-txt">${q.device}</span>
    </div>
    <div class="sim-body">`;
  q.sections.forEach((sec,si)=>{
    html+=`<div class="harden-section">
      <div class="harden-sec-hdr">${sec.name}</div>
      <div class="harden-settings">`;
    sec.settings.forEach((st,sti)=>{
      html+=`<div class="harden-row">
        <label class="harden-label">${st.label}</label>
        <select id="h-${q.id}-${si}-${sti}" onchange="setHarden(${idx})" class="harden-select">
          <option value="">— Select —</option>
          ${st.opts.map(o=>`<option value="${o}" ${hardenAns[q.id][si][sti]===o?'selected':''}>${o}</option>`).join('')}
        </select>
      </div>`;
    });
    html+=`</div></div>`;
  });
  html+=`</div></div>`;
  return html;
}
function initHarden(){}
function setHarden(idx){
  const q=ACTIVE_Q[idx];
  hardenAns[q.id]=q.sections.map((sec,si)=>sec.settings.map((_,sti)=>document.getElementById(`h-${q.id}-${si}-${sti}`)?.value||''));
  if(hardenAns[q.id].every(s=>s.every(v=>v))) answers[idx]=hardenAns[q.id];
  updateNav();
}

// ═══════════════════════════════════════════════════════
// CHECK ANSWER (PRACTICE MODE)
// ═══════════════════════════════════════════════════════
function stripLetterPrefix(s){ return s.replace(/^[A-E]\.\s*/,''); }

function checkAnswer(idx){
  const q=ACTIVE_Q[idx];
  const res=document.getElementById('ansResult');
  if(!res)return;
  let ok=false,correctStr='';

  if(q.type==='mcq'){
    if(answers[idx]===undefined){res.style.display='block';res.className='ans-result bad';res.innerHTML=`<div class="rl">⚠ No answer selected</div><div class="exp">Please select an answer before checking.</div>`;return;}
    ok=answers[idx]===q.correct;
    correctStr=`<div class="correct-ans">✓ Correct answer: <strong>${'ABCDE'[q.correct]}. ${stripLetterPrefix(q.opts[q.correct])}</strong></div>`;
    document.querySelectorAll('.opt').forEach((el,i)=>{
      if(i===q.correct)el.classList.add('correct-hi');
      else if(i===answers[idx]&&!ok)el.classList.add('wrong-hi');
    });
  } else if(q.type==='multi'){
    const sel=answers[idx]||[];
    ok=[...sel].sort().join()===q.correct.slice().sort().join();
    correctStr=`<div class="correct-ans">✓ Correct answers: <strong>${q.correct.map(i=>'ABCDE'[i]+'. '+stripLetterPrefix(q.opts[i])).join(', ')}</strong></div>`;
    document.querySelectorAll('.opt').forEach((el,i)=>{
      if(q.correct.includes(i))el.classList.add('correct-hi');
      else if(sel.includes(i)&&!q.correct.includes(i))el.classList.add('wrong-hi');
    });
  } else if(q.type==='order'){
    const placed=dragSlots[q.id]||[];
    ok=JSON.stringify(placed)===JSON.stringify(q.correctOrder);
    correctStr=`<div class="correct-ans">✓ Correct order: <strong>${q.correctOrder.join(' → ')}</strong></div>`;
  } else if(q.type==='cat'){
    const map=catMap[q.id]||{};
    ok=q.categories.every(c=>JSON.stringify([...(map[c]||[])].sort())===JSON.stringify([...q.correctMap[c]].sort()));
    correctStr=`<div class="correct-ans">✓ Correct mapping:<br>${q.categories.map(c=>`<strong>${c}:</strong> ${q.correctMap[c].join(', ')}`).join('<br>')}</div>`;
  } else if(q.type==='firewall'){
    const vals=fwAns[q.id]||[];
    ok=q.rules.every((r,i)=>vals[i]===r.correct);
    correctStr=`<div class="correct-ans">✓ Correct actions: ${q.rules.map((r,i)=>`Rule ${i+1}: <strong>${r.correct}</strong>`).join(' | ')}</div>`;
  } else if(q.type==='vpn'){
    const va=vpnAns[q.id]||{p1:[],p2:[]};
    const p1ok=q.phase1.every((f,i)=>va.p1[i]===f.correct);
    const p2ok=q.phase2.every((f,i)=>va.p2[i]===f.correct);
    ok=p1ok&&p2ok;
    correctStr=`<div class="correct-ans">✓ Phase 1: ${q.phase1.map(f=>`${f.label}: <strong>${f.correct}</strong>`).join(' | ')}<br>✓ Phase 2: ${q.phase2.map(f=>`${f.label}: <strong>${f.correct}</strong>`).join(' | ')}</div>`;
  } else if(q.type==='log'){
    const la=logAns[q.id]||{classifications:{}};
    const cls=la.classifications||{};
    ok=q.machines.every(mc=>cls[mc.name]===mc.status);
    correctStr=`<div class="correct-ans">✓ Correct classifications:<br>${q.machines.map(mc=>`<strong>${mc.name}</strong> (${mc.role}): ${mc.status.toUpperCase()}`).join('<br>')}</div>`;
  } else if(q.type==='harden'){
    const ha=hardenAns[q.id]||[];
    ok=q.sections.every((sec,si)=>sec.settings.every((st,sti)=>(ha[si]||[])[sti]===st.correct));
    correctStr=`<div class="correct-ans">✓ Correct settings:<br>${q.sections.map(sec=>`<strong>${sec.name}:</strong> ${sec.settings.map(st=>`${st.label} = ${st.correct}`).join(', ')}`).join('<br>')}</div>`;
  }

  checked[idx]=true;
  res.style.display='block';
  res.className=`ans-result ${ok?'ok':'bad'}`;
  res.innerHTML=`<div class="rl">${ok?'✓ Correct':'✗ Incorrect'}</div>${correctStr}<div class="exp"><strong>Explanation:</strong> ${q.exp}</div>`;
  if(typeof highlightAcronyms==='function') highlightAcronyms(res);
}
function restoreCheck(idx){setTimeout(()=>checkAnswer(idx),0);}

// ═══════════════════════════════════════════════════════
// TOOLBAR
// ═══════════════════════════════════════════════════════
function toggleScratch(){
  const el=document.getElementById('scratchPad');
  const btn=document.getElementById('scratchBtn');
  el.classList.toggle('open');
  btn.classList.toggle('active');
}
function toggleStrike(){
  strikeMode=!strikeMode;
  document.getElementById('strikeBtn').classList.toggle('active',strikeMode);
  if(strikeMode){
    document.querySelectorAll('.opt-text').forEach(el=>{
      el.style.cursor='pointer';
      el.onclick=(e)=>{
        e.stopPropagation();
        el.style.textDecoration=el.style.textDecoration==='line-through'?'':'line-through';
        el.style.opacity=el.style.opacity==='0.4'?'1':'0.4';
      };
    });
  } else {
    document.querySelectorAll('.opt-text').forEach(el=>{el.style.cursor='';el.onclick=null;});
  }
}
function toggleHighlight(){
  highlightMode=!highlightMode;
  document.getElementById('highlightBtn').classList.toggle('active',highlightMode);
  document.body.style.cursor=highlightMode?'text':'';
  if(highlightMode){
    document.querySelectorAll('.q-stem,.scenario p,.opt-text').forEach(el=>{
      el.style.userSelect='text';
    });
    if(!window._hlHandler){
      window._hlHandler=()=>{
        if(!highlightMode)return;
        const sel=window.getSelection();
        if(!sel||sel.isCollapsed)return;
        try{
          const range=sel.getRangeAt(0);
          const mark=document.createElement('mark');
          mark.style.background='rgba(251,191,36,.35)';
          mark.style.color='inherit';
          mark.style.borderRadius='2px';
          range.surroundContents(mark);
          sel.removeAllRanges();
        }catch(e){}
      };
      document.addEventListener('mouseup',window._hlHandler);
    }
  }
}

// ═══════════════════════════════════════════════════════
// REVIEW SCREEN
// ═══════════════════════════════════════════════════════
function goReview(){
  document.getElementById('exam').style.display='none';
  document.getElementById('review').style.display='block';
  buildReview('all');
}
function closeReview(){
  document.getElementById('review').style.display='none';
  document.getElementById('exam').style.display='flex';
  renderQ(cur);
}
function buildReview(filter){
  const total=TOTAL;
  const ans=ACTIVE_Q.filter((_,i)=>isAnswered(i)).length;
  const unans=total-ans;
  const fl=Object.values(flagged).filter(Boolean).length;
  document.getElementById('revStats').innerHTML=`
    <div class="rev-stat"><span class="sv" style="color:var(--text)">${total}</span><span class="sl">Total</span></div>
    <div class="rev-stat"><span class="sv" style="color:var(--success)">${ans}</span><span class="sl">Answered</span></div>
    <div class="rev-stat"><span class="sv" style="color:var(--danger)">${unans}</span><span class="sl">Unanswered</span></div>
    <div class="rev-stat"><span class="sv" style="color:var(--warn)">${fl}</span><span class="sl">Flagged</span></div>`;
  let grid='';
  ACTIVE_Q.forEach((q,i)=>{
    const ans_d=isAnswered(i);
    const flag_d=flagged[i];
    if(filter==='unanswered'&&ans_d)return;
    if(filter==='flagged'&&!flag_d)return;
    if(filter==='answered'&&!ans_d)return;
    const cls=`rev-qb ${ans_d?'ans-d':'unans-d'} ${flag_d?'flag-d':''}`;
    const type=['order','cat','firewall','vpn','log','harden'].includes(q.type)?'PBQ':'MCQ';
    grid+=`<div class="${cls}" onclick="jumpToQ(${i})">
      <div class="rq-n">${i+1}</div>
      <div class="rq-s">${type}</div>
    </div>`;
  });
  document.getElementById('revGrid').innerHTML=grid||'<p style="color:var(--text-muted);font-size:13px;padding:16px">No questions match this filter.</p>';
}
function filterReview(f,btn){
  document.querySelectorAll('.rev-filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  buildReview(f);
}
function jumpToQ(idx){
  document.getElementById('review').style.display='none';
  document.getElementById('exam').style.display='flex';
  renderQ(idx);
}

// ═══════════════════════════════════════════════════════
// SCORING
// ═══════════════════════════════════════════════════════
function pbqPartial(q){
  if(q.type==='order'){
    const placed=dragSlots[q.id]||[];
    const hits=q.correctOrder.filter((v,i)=>placed[i]===v).length;
    return hits/q.correctOrder.length;
  }
  if(q.type==='cat'){
    const map=catMap[q.id]||{};
    let total=0,hits=0;
    q.categories.forEach(c=>{
      const ci=q.correctMap[c];const placed=map[c]||[];
      total+=ci.length;ci.forEach(it=>{if(placed.includes(it))hits++;});
    });
    return total>0?hits/total:0;
  }
  if(q.type==='firewall'){
    const vals=fwAns[q.id]||[];
    return q.rules.filter((r,ri)=>vals[ri]===r.correct).length/q.rules.length;
  }
  if(q.type==='vpn'){
    const va=vpnAns[q.id]||{p1:[],p2:[]};
    const all=[...q.phase1.map((f,i)=>va.p1[i]===f.correct),...q.phase2.map((f,i)=>va.p2[i]===f.correct)];
    return all.filter(Boolean).length/all.length;
  }
  if(q.type==='log'){
    const cls=(logAns[q.id]||{}).classifications||{};
    const hits=q.machines.filter(mc=>cls[mc.name]===mc.status).length;
    return hits/q.machines.length;
  }
  if(q.type==='harden'){
    const ha=hardenAns[q.id]||[];
    let total=0,hits=0;
    q.sections.forEach((sec,si)=>{sec.settings.forEach((st,sti)=>{total++;if((ha[si]||[])[sti]===st.correct)hits++;});});
    return total>0?hits/total:0;
  }
  return 0;
}

function submitExam(){
  clearInterval(timerInt);
  document.getElementById('review').style.display='none';
  document.getElementById('exam').style.display='none';
  document.getElementById('results').style.display='block';

  let correct=0,skipped=0;
  const dom={1:{c:0,t:0},2:{c:0,t:0},3:{c:0,t:0},4:{c:0,t:0},5:{c:0,t:0}};
  const PBQ_W=2.5;

  ACTIVE_Q.forEach((q,i)=>{
    const isPBQ=['order','cat','firewall','vpn','log','harden'].includes(q.type);
    if(!isAnswered(i)){skipped++;dom[q.domain].t+=isPBQ?PBQ_W:1;return;}

    if(isPBQ){
      const frac=pbqPartial(q);
      const pts=frac*PBQ_W;
      correct+=pts;
      dom[q.domain].t+=PBQ_W;
      dom[q.domain].c+=pts;
    } else {
      let ok=false;
      if(q.type==='mcq') ok=answers[i]===q.correct;
      else if(q.type==='multi') ok=[...(answers[i]||[])].sort().join()===q.correct.slice().sort().join();
      dom[q.domain].t+=1;
      if(ok){correct+=1;dom[q.domain].c+=1;}
    }
  });

  const maxPts=ACTIVE_Q.reduce((s,q)=>s+(['order','cat','firewall','vpn','log','harden'].includes(q.type)?PBQ_W:1),0);
  const scaled=Math.round(100+(correct/maxPts)*800);
  const pass=scaled>=750;

  document.getElementById('scoreNum').textContent=scaled;
  document.getElementById('scoreRing').className=`score-ring ${pass?'pass':'fail'}`;
  document.getElementById('resVerdict').className=`res-verdict ${pass?'pass':'fail'}`;
  document.getElementById('resVerdict').textContent=pass?'✓ PASS':'✗ FAIL';

  const fullCorr=ACTIVE_Q.filter((q,i)=>{
    if(!isAnswered(i))return false;
    if(q.type==='mcq') return answers[i]===q.correct;
    if(q.type==='multi') return [...(answers[i]||[])].sort().join()===q.correct.slice().sort().join();
    return pbqPartial(q)===1;
  }).length;
  const partCorr=ACTIVE_Q.filter((q,i)=>{
    if(!isAnswered(i))return false;
    const isPBQ=['order','cat','firewall','vpn','log','harden'].includes(q.type);
    if(!isPBQ)return false;
    const f=pbqPartial(q);
    return f>0&&f<1;
  }).length;

  const examDurSec = Math.round((Date.now() - examStartTime) / 1000);
  const examDurStr = `${Math.floor(examDurSec/60)}m ${examDurSec%60}s`;
  const perQStr = `${Math.round(examDurSec/TOTAL)}s/question`;
  document.getElementById('resNote').textContent=`${fullCorr} fully correct, ${partCorr} partial · ${scaled}/900 · Time: ${examDurStr} (${perQStr})`;
  document.getElementById('rC').textContent=fullCorr;
  document.getElementById('rI').textContent=TOTAL-fullCorr-partCorr-skipped;
  document.getElementById('rS').textContent=skipped;

  const oldPartial = document.getElementById('partialCard');
  if(oldPartial) oldPartial.remove();
  if(partCorr>0){
    document.getElementById('rI').closest('.res-card').insertAdjacentHTML('afterend',
      `<div class="res-card" id="partialCard"><span class="rv" style="color:var(--warn)">${partCorr}</span><span class="rl">Partial (PBQ)</span></div>`);
  }

  const dNames={1:'General Security Concepts',2:'Threats & Vulnerabilities',3:'Security Architecture',4:'Security Operations',5:'Security Program Mgmt'};
  let db='';
  for(let d=1;d<=5;d++){
    const {c,t}=dom[d];
    const pct=t>0?Math.round((c/t)*100):0;
    const col=t===0?'var(--text-dimmer)':pct>=80?'var(--success)':pct>=60?'var(--accent)':'var(--danger)';
    const label=t===0?'— (0 Qs)':`${pct}% (${Math.round(c)}/${Math.round(t)})`;
    db+=`<div class="dom-res-row">
      <span class="drn">${d}.0 ${dNames[d]}</span>
      <div class="drbw"><div class="drb" style="width:${t>0?pct:0}%;background:${col}"></div></div>
      <span class="drs" style="color:${col}">${label}</span>
    </div>`;
  }
  document.getElementById('domBreak').innerHTML=db;

  const reviewMistakesBtn = document.getElementById('reviewMistakesBtn');
  if (reviewMistakesBtn && currentSessionMissedIds.length > 0) {
    reviewMistakesBtn.style.display = 'inline-block';
    reviewMistakesBtn.textContent = `Review ${currentSessionMissedIds.length} Mistakes`;
  } else if (reviewMistakesBtn) {
    reviewMistakesBtn.style.display = 'none';
  }
}

function exitExam(){
  document.getElementById('exitModal').style.display='flex';
}
function closeExitModal(){
  document.getElementById('exitModal').style.display='none';
}
function confirmExit(){
  closeExitModal();
  clearInterval(timerInt);
  document.getElementById('exam').style.display='none';
  document.getElementById('review').style.display='none';
  document.getElementById('navPBQ').innerHTML='';
  document.getElementById('navMCQ').innerHTML='';
  document.getElementById('splash').style.display='flex';
  updateSplashInfo();
}

function restartExam(){
  clearInterval(timerInt);
  document.getElementById('results').style.display='none';
  document.getElementById('review').style.display='none';
  document.getElementById('exam').style.display='none';
  document.getElementById('navPBQ').innerHTML='';
  document.getElementById('navMCQ').innerHTML='';
  document.getElementById('reviewMistakesBtn').style.display = 'none';
  document.getElementById('splash').style.display='flex';
  updateSplashInfo();
}
