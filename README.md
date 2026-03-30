# CompTIA Security+ SY0-701 — Exam Simulator

Every decent Security+ practice resource is behind a paywall. I built my own — 604 questions, full exam simulation, real scoring, progress tracking. Open it and go.

---

> **Disclaimer:** Independently developed for study purposes. Not affiliated with or endorsed by CompTIA.

---

## What it does

**604 questions** written to match the style and difficulty of the real SY0-701 exam — scenario-based, no trivia, no trick wording. Every question is mapped to a specific CompTIA sub-objective (1.1 through 5.6) so your weak spots actually show up in the stats.

**Tracks everything.** Every attempt is saved. The dashboard shows your average score, pass rate, how long you're spending per question, which domains are pulling you down, and how many of the 604 questions you've actually seen — so you know when it's time to ask for more.

**Looks and feels like the real exam.** PBQs (drag-and-drop, firewall config, VPN setup) are front-loaded in the sidebar, the timer is always visible, and you can flag questions and come back just like Pearson VUE. Toggle Exam Mode to hide answers and explanations completely for a true simulation.

---

## Features

### Exam Engine
- **Timer** — 1 minute per question (10Q = 10 min, 90Q = 90 min). Turns yellow at last 25%, red at last 10%. Auto-submits at zero.
- **Free navigation** — jump anywhere, change answers freely before submitting
- **Flag questions** for review — filter by All / Answered / Unanswered / Flagged
- **Exam Mode** — hides Check Answer and explanations for full simulation
- **Practice Mode** (default) — Check Answer shows the correct option + full explanation instantly
- **Practice Missed Questions** — one-click to re-drill everything in your Weakness Vault

### Question Types
| Type | Description |
|------|-------------|
| MCQ | Single-answer multiple choice (A–E) |
| Multi-select | Select exactly N correct answers |
| Order (PBQ) | Drag-and-drop sequencing — e.g. Incident Response lifecycle |
| Category (PBQ) | Classify items by dragging into labelled buckets |
| Firewall (PBQ) | Configure ACL rules in a simulated Network Policy Manager |
| VPN (PBQ) | Configure IPSec Phase 1 (IKE) and Phase 2 settings |

PBQs carry **2.5× the weight** of MCQs and support **partial credit** — 3 of 5 correct steps still earns 60% of the PBQ weight.

### Progress Dashboard
Every stat updates automatically after each exam.

| Stat | What it means |
|------|---------------|
| **Attempts** | Total exams completed |
| **Avg Score** | Average of all your scaled scores |
| **Best Score** | Your highest scaled score |
| **Pass Rate** | % of attempts that scored ≥ 750 |
| **Avg / Question** | Your average seconds per question across all attempts |
| **Qs Seen** | Unique questions seen out of 604 — know when you're getting repeats |
| **In Vault** | Questions sitting in your Weakness Vault |
| **Pass Streak** | Consecutive passing attempts |

Plus: score history chart with the 750 pass-line marked, domain breakdown from your last attempt, sub-objective accuracy across all attempts, and personalised study tips for your five weakest areas.

### Study Tools
- **Strikethrough** — click to visually eliminate options (same as real exam)
- **Highlight** — drag-select text to mark it yellow
- **Scratch Pad** — notepad overlay for working through problems
- **Weakness Vault** — missed questions persist across sessions
- **Review Mistakes** — appears after each exam to immediately re-drill wrong answers

### Data
- Saved automatically to `localStorage` after every exam
- Export / Import as JSON — back up or transfer between devices
- Optional auto-save to a file on disk (Chrome/Edge only, uses File System Access API)

---

## How to Run

No install. No build step. No server.

**Just open `index.html` in a browser.**

For development, use VS Code Live Server (right-click `index.html` → Open with Live Server) for auto-reload on save.

---

## File Structure

```
sec+/
├── index.html              All screens: splash, exam, review, results, dashboard
├── styles.css              Dark theme, IBM Plex fonts, responsive layout
│
├── questions/
│   ├── questions_d1.js     Domain 1: General Security Concepts       (109 questions)
│   ├── questions_d2.js     Domain 2: Threats, Vulnerabilities         (144 questions)
│   ├── questions_d3.js     Domain 3: Security Architecture            (134 questions)
│   ├── questions_d4.js     Domain 4: Security Operations              (108 questions)
│   ├── questions_d5.js     Domain 5: Security Program Management      (109 questions)
│   └── questions.js        Combines all domains into one Q array
│
└── js/
    ├── exam.js             Exam engine, renderers, scoring, toolbar
    └── dashboard.js        Persistence, analytics, dashboard, init
```

---

## Question Bank

| Domain | Title | Exam Weight | Questions |
|--------|-------|-------------|-----------|
| 1.0 | General Security Concepts | 12% | 109 |
| 2.0 | Threats, Vulnerabilities & Mitigations | 22% | 144 |
| 3.0 | Security Architecture | 18% | 134 |
| 4.0 | Security Operations | 28% | 108 |
| 5.0 | Security Program Management & Oversight | 20% | 109 |
| **Total** | | **100%** | **604** |

Includes 5 PBQs covering incident response sequencing, control classification, firewall ACL configuration, VPN/IPSec setup, and attack kill-chain ordering.

MCQ answer options are shuffled on every exam start — same question, different order each time.

---

## Scoring

Matches CompTIA's scaled scoring system:

```
Scaled Score = 100 + (points_earned / max_possible_points) × 800
Pass: 750 / 900
```

- MCQ / Multi-select: **1 point** each
- PBQ: **2.5 points** (partial credit supported)
- Unanswered: 0 points, but still counted in max possible

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` / `→` | Previous / Next question |
| `F` | Flag current question |
| `A` – `E` | Select answer option |

Active only when the exam screen is open.

---

## Tech Stack

Vanilla HTML / CSS / JavaScript. No frameworks, no build tools, no dependencies.

- Drag and Drop API — PBQ interactions
- File System Access API — optional disk save
- localStorage — primary persistence
- SVG — score history chart

---

## Adding Questions

Open the relevant file in `questions/` and add an object to the array:

```js
// Single-answer MCQ
{
  id: 9999,        // unique integer
  type: 'mcq',
  domain: 1,       // 1–5
  obj: '1.2',      // CompTIA sub-objective
  stem: 'Scenario text here.',
  opts: ['Option A', 'Option B', 'Option C', 'Option D'],
  correct: 2,      // 0-indexed
  exp: 'Explanation text.'
}

// Select TWO
{
  id: 9998,
  type: 'multi',
  domain: 2,
  obj: '2.3',
  stem: 'Which TWO actions should the analyst take?',
  opts: ['Option A', 'Option B', 'Option C', 'Option D'],
  correct: [1, 3],
  exp: '...'
}
```
