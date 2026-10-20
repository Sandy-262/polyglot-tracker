// Shared state/data for index.html and lesson.html
const LANGUAGES = [
  { id: 'italian',   name: 'Italian',   flag: '🇮🇹', color: '#2ea86f' },
  { id: 'spanish',   name: 'Spanish',   flag: '🇪🇸', color: '#d9534f' },
  { id: 'french',    name: 'French',    flag: '🇫🇷', color: '#4a7fd6' },
  { id: 'kannada',   name: 'Kannada',   flag: '🇮🇳', color: '#e0923c' },
  { id: 'malayalam', name: 'Malayalam', flag: '🇮🇳', color: '#2bb5a0' },
];

const LESSONS = [
  { id: 1, title: 'Alphabet & Pronunciation', file: '01-alphabet-pronunciation.md' },
  { id: 2, title: 'Greetings & Introductions', file: '02-greetings-introductions.md' },
  { id: 3, title: 'Numbers, Days & Time',      file: '03-numbers-time.md' },
  { id: 4, title: 'Essential Phrases',         file: '04-essential-phrases.md' },
  { id: 5, title: 'Food & Dining',             file: '05-food-dining.md' },
  { id: 6, title: 'Travel & Directions',       file: '06-travel-directions.md' },
  { id: 7, title: 'Grammar Basics',            file: '07-grammar-basics.md' },
  { id: 8, title: 'Conversation Practice',     file: '08-conversation-practice.md' },
];

const STORAGE_KEY = 'polyglot-tracker:v1';

function ptLoadState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch (e) { return {}; }
}
function ptSaveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

let ptState = ptLoadState();

function ptIsDone(lang, lessonId) {
  return !!(ptState[lang] && ptState[lang][lessonId]);
}

function ptUpdateStreak(today) {
  ptState._streak = ptState._streak || { count: 0, last: null };
  const last = ptState._streak.last;
  if (last === today) return;
  const y = new Date(); y.setDate(y.getDate() - 1);
  const yesterday = y.toISOString().slice(0, 10);
  ptState._streak.count = (last === yesterday) ? ptState._streak.count + 1 : 1;
  ptState._streak.last = today;
}

function ptSetDone(lang, lessonId, value) {
  ptState[lang] = ptState[lang] || {};
  ptState[lang][lessonId] = value;
  if (value) ptUpdateStreak(new Date().toISOString().slice(0, 10));
  ptSaveState(ptState);
}

function ptToggleDone(lang, lessonId) {
  ptSetDone(lang, lessonId, !ptIsDone(lang, lessonId));
}

function ptLangProgress(lang) {
  const done = LESSONS.filter(l => ptIsDone(lang, l.id)).length;
  return { done, total: LESSONS.length, pct: Math.round((done / LESSONS.length) * 100) };
}

function ptExportProgress() {
  const blob = new Blob([JSON.stringify(ptState, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'polyglot-progress.json';
  a.click();
  URL.revokeObjectURL(url);
}

function ptImportProgress(file, onDone) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      ptState = JSON.parse(e.target.result) || {};
      ptSaveState(ptState);
      onDone && onDone(true);
    } catch (err) { onDone && onDone(false); }
  };
  reader.readAsText(file);
}

function ptResetAll() {
  ptState = {};
  ptSaveState(ptState);
}
