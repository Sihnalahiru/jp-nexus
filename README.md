# JP Nexus — IRODORI Starter A1

A clean, standalone Japanese self-study project for **IRODORI Starter (A1), Lessons 01–18**.

## Project principles

- This repository is a new beginning. No previous project files, databases, JSON datasets, or generated content are imported.
- The official Japan Foundation IRODORI Starter A1 material is the reference source.
- Official source material and newly authored supplementary learning material must remain distinguishable.
- Japanese text, Romaji, Sinhala explanations, examples, exercises, and answer keys are organized as structured data.
- A validated master JSON is the single source of truth for future PDF and PWA outputs.
- Source citations, page/activity references, and asset mappings must be recorded wherever content is extracted or authored.

## Repository layout

```text
jp-nexus/
├── README.md
├── PROJECT_RULES.md
├── package.json
├── .gitignore
├── schema/
│   └── master.schema.json
├── data/
│   ├── book.json
│   ├── lessons/
│   │   └── lesson-01.json ... lesson-18.json
│   ├── grammar/
│   ├── vocabulary/
│   ├── conversations/
│   ├── listening/
│   ├── reading/
│   ├── exercises/
│   └── answer-keys/
├── assets/
│   ├── images/
│   └── audio/
├── scripts/
│   ├── validate-json.mjs
│   └── build-master.mjs
└── dist/
    └── .gitkeep
```

Directories for future content are created by tracked placeholder files as data is added. No lesson content is marked complete until it has been checked against the official source.

## Getting started

```bash
npm install
npm run validate
npm run build
```

## Content status

The initial commit contains architecture and empty, explicitly incomplete lesson records only. It does not claim that the 18-lesson study content has been extracted or completed.

## License and source use

IRODORI is a Japan Foundation learning resource. This repository is an independent study aid. Do not redistribute copyrighted textbook pages, illustrations, recordings, or substantial verbatim content without confirming the applicable permissions. Prefer original explanations and exercises with source references.
