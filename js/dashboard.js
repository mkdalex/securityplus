// ═══════════════════════════════════════════════════════
// SUB-OBJECTIVE NAMES MAP
// ═══════════════════════════════════════════════════════
const OBJ_NAMES = {
  '1.1':'Control Types','1.2':'Security Concepts & Zero Trust','1.3':'Change Mgmt & Deception Tech',
  '1.4':'Cryptography & PKI',
  '2.1':'Threat Actors & Motivations','2.2':'Threat Vectors & Attack Surfaces',
  '2.3':'Vulnerability Types & Management','2.4':'Indicators of Malicious Activity',
  '2.5':'Mitigation Techniques',
  '3.1':'Cloud & Architecture Models','3.2':'Network Security & Infrastructure',
  '3.3':'Data Protection & Resilience',
  '4.1':'Identity & Access Management','4.2':'Endpoint & Application Security',
  '4.3':'SIEM, Monitoring & Alerting','4.4':'Vulnerability Management',
  '4.5':'Incident Response & Forensics','4.6':'Penetration Testing',
  '4.7':'Email & DNS Security','4.8':'Network Analysis & Tools',
  '4.9':'Scripting & DevSecOps',
  '5.1':'Governance & Policies','5.2':'Risk Management & BIA',
  '5.3':'Compliance & Data Privacy','5.4':'Audits & Assessments',
  '5.5':'Security Assessments & Testing','5.6':'Security Awareness Training',
};

// ═══════════════════════════════════════════════════════
// PERSISTENCE — localStorage + File System Access API
// ═══════════════════════════════════════════════════════
const STORAGE_KEY = 'secplus_progress_v2';

function loadHistory(){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]'); }
  catch(e){ return []; }
}

function saveAttempt(attemptData){
  const history = loadHistory();
  history.push(attemptData);
  if(history.length > 50) history.splice(0, history.length - 50); // cap at 50 attempts
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function buildAttemptData(scaled, domScores, objScores, qCount, domainsUsed){
  const durationSec = Math.round((Date.now() - examStartTime) / 1000);
  return {
    ts: Date.now(),
    date: new Date().toLocaleDateString('en-AU', {day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}),
    score: scaled,
    qCount,
    durationSec,
    questionIds: ACTIVE_Q.map(q => q.id),
    domainsUsed: [...domainsUsed],
    domains: domScores,   // {1:{c,t}, ...}
    objectives: objScores // {'1.1':{c,t}, ...}
  };
}

// ─── Hook into submitExam to save progress after each attempt ───
const _origSubmit = submitExam;
submitExam = function(){
  _origSubmit();
  let missedIds = JSON.parse(localStorage.getItem('secplus_missed_ids') || '[]');
  const objScores = {};
  const domScores = {};
  ACTIVE_Q.forEach((q,i)=>{
    const obj = q.obj || (q.domain+'.0');
    if(!objScores[obj]) objScores[obj]={c:0,t:0};
    if(!domScores[q.domain]) domScores[q.domain]={c:0,t:0};
    const isPBQ=['order','cat','firewall','vpn'].includes(q.type);
    if(!isAnswered(i)){objScores[obj].t++;domScores[q.domain].t++;return;}
    let correct=false, partialScore=0;
    if(q.type==='mcq') correct=answers[i]===q.correct;
    else if(q.type==='multi') correct=[...(answers[i]||[])].sort().join()===q.correct.slice().sort().join();
    else { partialScore=pbqPartial(q); correct=partialScore===1; }

    // Weakness Vault: add if wrong, remove if now correct
    if (!correct && partialScore < 1) {
      if (!missedIds.includes(q.id)) missedIds.push(q.id);
    } else if (correct) {
      missedIds = missedIds.filter(id => id !== q.id);
    }

    objScores[obj].t += 1;
    domScores[q.domain].t += 1;
    if(correct||partialScore>0){
      const pts = isPBQ ? partialScore : (correct?1:0);
      objScores[obj].c += pts;
      domScores[q.domain].c += pts;
    }
  });
  currentSessionMissedIds = missedIds.filter(id => ACTIVE_Q.some(q => q.id === id));
  localStorage.setItem('secplus_missed_ids', JSON.stringify(missedIds));
  localStorage.setItem('secplus_last_session_missed_ids', JSON.stringify(currentSessionMissedIds));
  const scaledEl = document.getElementById('scoreNum');
  const scaled = scaledEl ? parseInt(scaledEl.textContent)||0 : 0;
  const attempt = buildAttemptData(scaled, domScores, objScores, TOTAL, selectedDomains);
  saveAttempt(attempt);
  autoSaveJSON();
};

let _fileHandle = null;

async function autoSaveJSON(){
  const history = loadHistory();
  const json = JSON.stringify(history, null, 2);
  if(window.showSaveFilePicker){
    try {
      if(!_fileHandle){
        _fileHandle = await window.showSaveFilePicker({
          suggestedName: 'progress.json',
          types: [{description:'JSON',accept:{'application/json':['.json']}}]
        });
      }
      const writable = await _fileHandle.createWritable();
      await writable.write(json);
      await writable.close();
      return;
    } catch(e){
      if(e.name !== 'AbortError') _fileHandle = null;
    }
  }
  // Fallback: data is already persisted in localStorage via saveAttempt()
}

function clearHistory(){
  if(!confirm('Clear all attempt history? This cannot be undone.')) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('secplus_missed_ids');
  localStorage.removeItem('secplus_last_session_missed_ids');
  renderDashboard();
}

function deleteAttempt(ts){
  if(!confirm('Delete this attempt? Stats and charts will be recalculated without it. The Weakness Vault is not affected.')) return;
  const history = loadHistory().filter(a => a.ts !== ts);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  renderDashboard();
}

function startReviewMistakes(){
  const reviewIds = JSON.parse(localStorage.getItem('secplus_last_session_missed_ids') || '[]');
  if(reviewIds.length === 0) return alert('No mistakes from the last session to review!');
  isReviewMistakesMode = true;
  startExam(false, reviewIds);
}

function copyRawData(){
  const ta = document.getElementById('rawDataTextarea');
  if(!ta) return;
  navigator.clipboard.writeText(ta.value).then(()=>alert('Data copied to clipboard!')).catch(()=>{
    ta.select();
    document.execCommand('copy');
    alert('Data copied to clipboard!');
  });
}

function importRawData(){
  const input = prompt('Paste your exported JSON data here:');
  if(!input) return;
  try {
    const data = JSON.parse(input);
    if(!Array.isArray(data)) throw new Error('Invalid format');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    renderDashboard();
    alert('Data imported successfully! ' + data.length + ' attempts loaded.');
  } catch(e){
    alert('Invalid JSON data. Please paste the exact exported data.');
  }
}

function exportJSON(){
  const history = loadHistory();
  const blob = new Blob([JSON.stringify(history, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `secplus_progress_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// ═══════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════
function showDashboard(){
  document.getElementById('results').style.display='none';
  document.getElementById('splash').style.display='none';
  document.getElementById('dashboard').style.display='block';
  renderDashboard();
}

function hideDashboard(){
  document.getElementById('dashboard').style.display='none';
  const hasScore = document.getElementById('scoreNum')?.textContent !== '---';
  if(hasScore) document.getElementById('results').style.display='block';
  else document.getElementById('splash').style.display='flex';
}

function renderDashboard(){
  const history = loadHistory();
  if(!history.length){
    const placeholder = '<p style="color:var(--text-muted);font-size:13px;padding:16px 0;text-align:center">Complete an exam to populate this section.</p>';
    document.getElementById('dashTopStats').innerHTML = `
      <div class="dash-card" style="grid-column:1/-1;text-align:center;padding:32px 20px">
        <div style="font-size:40px;margin-bottom:8px;opacity:.4">📊</div>
        <div style="color:var(--text);font-size:16px;font-weight:600;margin-bottom:6px">No attempts recorded yet</div>
        <div style="color:var(--text-muted);font-size:13px">Take your first exam to start tracking your progress.<br>Stats, charts, and weak-area recommendations will appear here.</div>
      </div>`;
    document.getElementById('scoreChart').innerHTML = placeholder;
    document.getElementById('dashDomains').innerHTML = placeholder;
    document.getElementById('dashSubtopics').innerHTML = '<p style="color:var(--text-muted);font-size:13px;padding:16px 0;text-align:center;grid-column:1/-1">Complete an exam to populate this section.</p>';
    document.getElementById('dashRecommend').innerHTML = placeholder;
    document.getElementById('dashHistory').innerHTML = placeholder;
    const rawTA = document.getElementById('rawDataTextarea');
    if(rawTA) rawTA.value = '';
    return;
  }

  const latest = history[history.length-1];
  const allScores = history.map(a=>a.score);
  const best = Math.max(...allScores);

  // Simple average score across all attempts (every attempt counts equally)
  const weightedAvg = Math.round(allScores.reduce((s,v)=>s+v,0)/allScores.length);

  // Pass rate
  const passes = history.filter(a=>a.score>=750).length;
  const passRate = Math.round((passes/history.length)*100);

  // Avg seconds per question (total time across all timed attempts / total questions)
  const timedAttempts = history.filter(a=>a.durationSec>0);
  const totalTimedSec = timedAttempts.reduce((s,a)=>s+a.durationSec,0);
  const totalTimedQs  = timedAttempts.reduce((s,a)=>s+a.qCount,0);
  const avgSecPerQ = totalTimedQs ? Math.round(totalTimedSec/totalTimedQs) : 0;
  const avgTimeStr = avgSecPerQ ? `${avgSecPerQ}s` : '—';

  // Unique questions seen across all attempts
  const seenIds = new Set();
  history.forEach(a=>{ (a.questionIds||[]).forEach(id=>seenIds.add(id)); });
  const totalBank = Q.length;
  const seenPct = totalBank ? Math.round((seenIds.size/totalBank)*100) : 0;

  // Consecutive pass streak (most recent first)
  let streak = 0;
  for(let i=history.length-1;i>=0;i--){ if(history[i].score>=750) streak++; else break; }

  const missedCount = JSON.parse(localStorage.getItem('secplus_missed_ids') || '[]').length;

  // Top stats — 2 rows of 4
  document.getElementById('dashTopStats').innerHTML = `
    <div class="dash-card" style="text-align:center"><span class="stat-val" style="font-size:28px;color:var(--accent)">${history.length}</span><br><span style="font-size:11px;color:var(--text-muted);font-family:var(--mono);letter-spacing:1px">ATTEMPTS</span></div>
    <div class="dash-card" style="text-align:center"><span class="stat-val" style="font-size:28px;color:${weightedAvg>=750?'var(--success)':'var(--danger)'}">${weightedAvg}</span><br><span style="font-size:11px;color:var(--text-muted);font-family:var(--mono);letter-spacing:1px">AVG SCORE</span></div>
    <div class="dash-card" style="text-align:center"><span class="stat-val" style="font-size:28px;color:${best>=750?'var(--success)':'var(--danger)'}">${best}</span><br><span style="font-size:11px;color:var(--text-muted);font-family:var(--mono);letter-spacing:1px">BEST SCORE</span></div>
    <div class="dash-card" style="text-align:center"><span class="stat-val" style="font-size:28px;color:${passRate>=80?'var(--success)':passRate>=50?'var(--accent)':'var(--danger)'}">${passRate}%</span><br><span style="font-size:11px;color:var(--text-muted);font-family:var(--mono);letter-spacing:1px">PASS RATE</span></div>
    <div class="dash-card" style="text-align:center"><span class="stat-val" style="font-size:28px;color:var(--accent)">${avgTimeStr}</span><br><span style="font-size:11px;color:var(--text-muted);font-family:var(--mono);letter-spacing:1px">AVG / QUESTION</span></div>
    <div class="dash-card" style="text-align:center"><span class="stat-val" style="font-size:28px;color:var(--warn)">${seenIds.size}/${totalBank}</span><br><span style="font-size:11px;color:var(--text-muted);font-family:var(--mono);letter-spacing:1px">Qs SEEN (${seenPct}%)</span></div>
    <div class="dash-card" style="text-align:center"><span class="stat-val" style="font-size:28px;color:var(--warn)">${missedCount}</span><br><span style="font-size:11px;color:var(--text-muted);font-family:var(--mono);letter-spacing:1px">IN VAULT</span></div>
    <div class="dash-card" style="text-align:center"><span class="stat-val" style="font-size:28px;color:${streak>=3?'var(--success)':'var(--accent)'}">${streak}</span><br><span style="font-size:11px;color:var(--text-muted);font-family:var(--mono);letter-spacing:1px">PASS STREAK</span></div>`;

  renderScoreChart(history);

  // Domain performance (latest attempt)
  const dNames={1:'General Security Concepts',2:'Threats & Vulnerabilities',3:'Security Architecture',4:'Security Operations',5:'Security Program Mgmt'};
  let domHtml = '';
  Object.entries(latest.domains||{}).forEach(([d,{c,t}])=>{
    if(!t) return;
    const pct = Math.round((c/t)*100);
    const col = pct>=80?'var(--success)':pct>=60?'var(--accent)':'var(--danger)';
    domHtml += `<div class="subtopic-row"><span class="subtopic-name">${d}.0 ${dNames[d]}</span><div class="subtopic-bw"><div class="subtopic-b" style="width:${pct}%;background:${col}"></div></div><span class="subtopic-pct" style="color:${col}">${pct}% <span style="font-size:9px;color:var(--text-dimmer)">(${Math.round(c)}/${Math.round(t)})</span></span></div>`;
  });
  document.getElementById('dashDomains').innerHTML = domHtml || '<p style="color:var(--text-muted);font-size:13px">No domain data</p>';

  // Sub-objective aggregation across ALL attempts
  const objAgg = {};
  history.forEach(attempt=>{
    Object.entries(attempt.objectives||{}).forEach(([obj,{c,t}])=>{
      if(!objAgg[obj]) objAgg[obj]={c:0,t:0};
      objAgg[obj].c += c;
      objAgg[obj].t += t;
    });
  });
  const objEntries = Object.entries(objAgg).filter(([,{t}])=>t>0).sort(([a],[b])=>a.localeCompare(b));
  let subHtml = '';
  objEntries.forEach(([obj,{c,t}])=>{
    const pct = Math.round((c/t)*100);
    const col = pct>=80?'var(--success)':pct>=60?'var(--accent)':'var(--danger)';
    const name = OBJ_NAMES[obj] || obj;
    subHtml += `<div class="subtopic-row"><span class="subtopic-name" style="font-size:11px"><span style="font-family:var(--mono);color:var(--text-muted)">${obj}</span> ${name}</span><div class="subtopic-bw"><div class="subtopic-b" style="width:${pct}%;background:${col}"></div></div><span class="subtopic-pct" style="color:${col}">${pct}% <span style="font-size:9px;color:var(--text-dimmer)">(${Math.round(c)}/${t})</span></span></div>`;
  });
  document.getElementById('dashSubtopics').innerHTML = subHtml || '<p style="color:var(--text-muted);font-size:13px">Complete more attempts to see sub-topic breakdown.</p>';

  // Recommendations — weakest 5 sub-objectives with ≥3 questions attempted
  const weakObjs = objEntries
    .filter(([,{t}])=>t>=3)
    .map(([obj,{c,t}])=>({obj, pct:Math.round((c/t)*100), t}))
    .sort((a,b)=>a.pct-b.pct)
    .slice(0,5);

  const studyTips = {
    '1.1':'Review control type categories: preventive, detective, corrective, deterrent, compensating, directive — and physical/admin/technical classifications.',
    '1.2':'Focus on Zero Trust principles (verify explicitly, least privilege, assume breach) and gap analysis concepts.',
    '1.3':'Study deception technologies: honeypot vs honeynet vs honeyfile vs honeytoken. Change management process steps.',
    '1.4':'Drill symmetric vs asymmetric use cases, hashing properties, PKI certificate chain, and hybrid encryption patterns.',
    '2.1':'Learn threat actor categories and their motivations. Nation-state vs organised crime vs hacktivist vs insider vs script kiddie.',
    '2.2':'Study attack vectors: phishing/smishing/vishing channels, supply chain, watering hole, and social engineering techniques.',
    '2.3':'Practice CVSS scoring context and vulnerability prioritisation — base score + environmental factors. Authenticated vs unauthenticated scans.',
    '2.4':'Study MITRE ATT&CK tactics (Initial Access → Persistence → Lateral Movement → Exfiltration). Malware type identification from symptoms.',
    '2.5':'Review compensating controls, application allowlisting bypasses, Living off the Land (LOLBins), and Credential Guard for PtH.',
    '3.1':'Drill IaaS/PaaS/SaaS shared responsibility boundaries. Hybrid vs multi-cloud security implications.',
    '3.2':'Study network segmentation, VLAN design, DMZ architecture, firewall rule ordering, and cloud security group concepts.',
    '3.3':'Review data states (at rest/in transit/in use), FDE, DLP policy actions (monitor vs block), tokenisation vs masking vs encryption.',
    '4.1':'Study federated identity (SAML/OIDC), privileged access (PAM/PAW), and access review/recertification.',
    '4.2':'Understand EDR vs AV differences, application allowlisting and bypass techniques, fileless malware.',
    '4.3':'Practice log correlation and SIEM alert analysis. Learn SOAR playbook automation and alert tuning.',
    '4.4':'Study the vulnerability management lifecycle: discover → prioritise (CVSS + context) → remediate → verify.',
    '4.5':'Drill order of volatility: CPU/cache → RAM → network state → hard disk. Forensic tools: write blockers, imaging, chain of custody.',
    '4.6':'Know black/grey/white box test differences. Red vs blue vs purple team. Vulnerability scan vs penetration test.',
    '4.7':'Study SPF/DKIM/DMARC purposes and policy values (none/quarantine/reject). Email spoofing attack vectors.',
    '4.8':'Memorise key port numbers: 22=SSH, 23=Telnet, 25=SMTP, 53=DNS, 80=HTTP, 443=HTTPS, 445=SMB, 3306=MySQL, 3389=RDP.',
    '4.9':'Review change management steps and separation of duties in DevSecOps/SDLC contexts.',
    '5.1':'Study governance structures, policy lifecycle management, and CISO board communication.',
    '5.2':'Practise ALE/SLE/ARO calculations. Know MTD vs RTO vs RPO hierarchy. BIA methodology.',
    '5.3':'Memorise compliance framework mappings: PCI-DSS=credit cards, HIPAA=US health, GDPR=EU personal data, SOX=public company financials.',
    '5.4':'Study access reviews/recertification, legal hold vs data retention, breach notification timelines (GDPR 72h).',
    '5.5':'Know assessment types: vulnerability scan vs pen test vs red team vs tabletop. Purple team concept.',
    '5.6':'Review security awareness training components: phishing simulations, role-based training, measuring behaviour change.',
  };

  let recHtml = weakObjs.length
    ? weakObjs.map(({obj,pct})=>`<div class="recommend-item"><div class="ri-title">${obj} ${OBJ_NAMES[obj]||obj} — ${pct}% accuracy</div><div class="ri-body">${studyTips[obj]||'Review this sub-objective in your study materials.'}</div></div>`).join('')
    : '<p style="color:var(--success);font-size:13px">Great performance! Keep practising all domains to maintain your knowledge.</p>';
  document.getElementById('dashRecommend').innerHTML = recHtml;

  // Attempt history (last 10)
  const recentAttempts = [...history].reverse().slice(0,10);
  let histHtml = '';
  recentAttempts.forEach((a,i)=>{
    const col = a.score>=750?'var(--success)':a.score>=650?'var(--accent)':'var(--danger)';
    const domPills = Object.entries(a.domains||{}).map(([d,{c,t}])=>{
      if(!t) return '';
      const p=Math.round((c/t)*100);
      const c2=p>=80?'rgba(16,185,129,.4)':p>=60?'rgba(59,130,246,.4)':'rgba(239,68,68,.4)';
      return `<span class="dom-pill" style="border-color:${c2};color:var(--text-dim)">${d}.0 ${p}%</span>`;
    }).join('');
    const dur = a.durationSec ? `${Math.floor(a.durationSec/60)}m ${a.durationSec%60}s` : '—';
    const perQ = a.durationSec ? `${Math.round(a.durationSec/a.qCount)}s/Q` : '';
    histHtml += `<div class="attempt-row">
      <span class="attempt-score" style="color:${col}">${a.score}</span>
      <span class="attempt-date">${a.date}</span>
      <span style="font-family:var(--mono);font-size:11px;color:var(--text-muted)">${a.qCount}Q · ${dur}${perQ?' · '+perQ:''}</span>
      <div class="attempt-domains">${domPills}</div>
      <button onclick="deleteAttempt(${a.ts})" title="Delete this attempt (e.g. AFK / interrupted)" style="background:transparent;border:1px solid var(--border);color:var(--text-muted);width:24px;height:24px;border-radius:3px;cursor:pointer;font-size:14px;line-height:1;flex-shrink:0;padding:0" onmouseover="this.style.color='var(--danger)';this.style.borderColor='var(--danger)'" onmouseout="this.style.color='var(--text-muted)';this.style.borderColor='var(--border)'">×</button>
    </div>`;
  });
  document.getElementById('dashHistory').innerHTML = histHtml || '<p style="color:var(--text-muted);font-size:13px">No attempts yet.</p>';

  // Data Vault
  const rawTA = document.getElementById('rawDataTextarea');
  if(rawTA) rawTA.value = JSON.stringify(history, null, 2);
}

function renderScoreChart(history){
  const wrap = document.getElementById('scoreChart');
  if(!history.length){ wrap.innerHTML=''; return; }
  const scores = history.map(a=>a.score);
  const W=wrap.offsetWidth||500, H=160, PAD=30;
  const min=Math.max(0,Math.min(...scores)-50), max=Math.min(900,Math.max(...scores)+50);
  const xScale = i=>(scores.length===1)?W/2:PAD + (i/(scores.length-1))*(W-PAD*2);
  const yScale = v=>H-PAD - ((v-min)/(max-min||1))*(H-PAD*2);

  let pathD='', points='';
  scores.forEach((s,i)=>{
    const x=xScale(i), y=yScale(s);
    pathD += i===0?`M${x},${y}`:`L${x},${y}`;
    const col=s>=750?'#10b981':s>=650?'#3b82f6':'#ef4444';
    points += `<circle cx="${x}" cy="${y}" r="4" fill="${col}" stroke="var(--panel)" stroke-width="2"><title>${s}/900 — ${history[i].date}</title></circle>`;
  });

  const py = yScale(750);
  const svg = `<svg width="100%" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    <line x1="${PAD}" y1="${py}" x2="${W-PAD}" y2="${py}" stroke="rgba(16,185,129,.3)" stroke-dasharray="4,3" stroke-width="1"/>
    <text x="${W-PAD+4}" y="${py+4}" fill="rgba(16,185,129,.6)" font-size="9" font-family="monospace">750</text>
    <path d="${pathD}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round"/>
    ${points}
  </svg>`;
  wrap.innerHTML = svg;
}

// ═══════════════════════════════════════════════════════
// INIT — runs after DOM is ready
// ═══════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded',()=>{
  // Restore domain selection UI from localStorage
  [1,2,3,4,5].forEach(d => {
    const row = document.getElementById('row-'+d);
    const chip = document.getElementById('dc'+d);
    if (row && chip) {
      if(selectedDomains.has(d)) {
        row.classList.add('selected');
        chip.classList.add('active');
      } else {
        row.classList.remove('selected');
        chip.classList.remove('active');
      }
    }
  });

  // Restore question count button
  document.querySelectorAll('.qcount-btn').forEach(b => {
    const val = parseInt(b.textContent);
    if (val === selectedQCount || (isNaN(val) && selectedQCount === 90)) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
  updateSplashInfo();

  // Show "Practice Missed Questions" button if vault has items
  const missedIds = JSON.parse(localStorage.getItem('secplus_missed_ids') || '[]');
  const missedBtn = document.getElementById('missedBtn');
  if (missedBtn && missedIds.length > 0) {
    missedBtn.style.display = 'block';
    missedBtn.textContent = `PRACTICE ${missedIds.length} MISSED QUESTIONS`;
  }

  // Keyboard shortcuts (exam screen only)
  window.addEventListener('keydown', e => {
    if (document.getElementById('exam').style.display === 'flex') {
      const key = e.key.toLowerCase();
      if (key === 'arrowleft') navigate(-1);
      if (key === 'arrowright') navigate(1);
      if (key === 'f') toggleFlag(cur);
      const options = ['a', 'b', 'c', 'd', 'e'];
      if (options.includes(key)) {
        const optIdx = options.indexOf(key);
        const q = ACTIVE_Q[cur];
        if (q.type === 'mcq') pickMCQ(cur, optIdx);
        if (q.type === 'multi') pickMulti(cur, optIdx, q.correct.length);
      }
    }
  });

  // Show dashboard button on splash if there's history
  const splash = document.getElementById('splash');
  if(splash && loadHistory().length>0){
    const btn = document.createElement('button');
    btn.className='tool-btn';
    btn.style='margin-top:14px;font-size:12px;padding:8px 18px';
    btn.textContent='📊 View Progress Dashboard';
    btn.onclick=()=>{ document.getElementById('splash').style.display='none'; showDashboard(); };
    splash.appendChild(btn);
  }
});
