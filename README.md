# 🗣️ Polyglot Tracker

A personal, spoken-first language library and progress tracker for **Italian, Spanish, French, Kannada, and Malayalam** — structured lessons, a beautiful interactive dashboard, and curated listening resources (no bundled audio files, since quality native recordings are freely available online and stay up to date better than anything baked into a repo).

**🔗 Live dashboard: [sandy-262.github.io/polyglot-tracker](https://sandy-262.github.io/polyglot-tracker/)**

## Why this exists

The goal is conversational fluency, not grammar-exam fluency. Each language gets the same 8-lesson arc so you can track apples-to-apples progress across languages, with extra scaffolding for Kannada and Malayalam since they use their own scripts and SOV (subject-object-verb) word order — a bigger jump from English than the Romance languages.

## Quick start

1. Open the [live dashboard](https://sandy-262.github.io/polyglot-tracker/) (or `index.html` locally — double-click it).
2. Click a lesson link to open it, work through it, then check it off on the dashboard.
3. Your progress, streak, and completion % are saved automatically in your browser (`localStorage`).
4. Use **Export progress** occasionally to back up your progress as a JSON file (browser storage is per-device/per-browser, so it won't sync across devices on its own — export on one, import on another).

## Repo structure

```
polyglot-tracker/
├── index.html                  # Interactive progress dashboard
├── languages/
│   ├── italian/     01–08 lessons + README.md
│   ├── spanish/     01–08 lessons + README.md
│   ├── french/      01–08 lessons + README.md
│   ├── kannada/     01–08 lessons + README.md
│   └── malayalam/   01–08 lessons + README.md
└── README.md                    # You are here
```

Every language follows the same lesson arc:

| # | Lesson | Focus |
|---|--------|-------|
| 01 | Alphabet & Pronunciation | Sounds, script, stress/accent rules |
| 02 | Greetings & Introductions | First contact, formal vs informal |
| 03 | Numbers, Days & Time | Counting, calendar, clock |
| 04 | Essential Phrases | Survival phrases, question words |
| 05 | Food & Dining | Ordering, dietary needs, restaurant dialogue |
| 06 | Travel & Directions | Transport, directions, airport/hotel |
| 07 | Grammar Basics | Sentence structure, core verbs, pronouns |
| 08 | Conversation Practice | Full dialogue + role-play prompts |

## Listening & pronunciation

Since the goal is **spoken** fluency, every lesson ends with a "Listen & Practice" section pointing to real audio sources instead of static files that go stale:

- **[Forvo](https://forvo.com)** — native-speaker word pronunciations
- **YouTube search links** — pre-built search queries for key phrases in each lesson
- **[Google Translate](https://translate.google.com)** — paste any phrase, pick the language, hit the speaker icon for instant TTS (works well for all five languages, including Kannada and Malayalam)
- **[Omniglot](https://www.omniglot.com)** — script/writing-system reference (linked in every Lesson 01)

For Kannada and Malayalam specifically, recorded resources online are thinner than for European languages — the lesson READMEs call this out and suggest leaning on native-speaking friends/family for real practice, which is the best resource anyway.

## Suggested pace

Each language's own README has a 4-week starter plan (2 lessons/week). A reasonable overall approach:

- **Phase 1 (now):** Pick one language and go lesson 01 → 08, speaking out loud every session.
- **Phase 2:** Rotate — e.g. Spanish/Italian/French share enough Latin roots that momentum carries over; Kannada/Malayalam are better tackled with dedicated, unhurried time.
- **Ongoing:** Revisit each Lesson 08 (Conversation Practice) weekly — active recall and speaking matter more than adding new vocabulary.

## License

MIT — this is a personal learning repo, feel free to fork it for your own languages.
