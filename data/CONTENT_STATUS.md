# Content Status — JP Nexus

## Course scope
Complete IRODORI Starter A1, Lessons 01–18. This project must not be treated as finished from sample or metadata-only records.

## This bulk — official word-list audio

- [x] Opened the Japan Foundation's official Word lists Starter audio index for Lessons 01–06
- [x] Opened the official audio index for Lessons 07–12
- [x] Opened the official audio index for Lessons 13–18
- [x] Transcribed the exact MP3 filenames listed for every lesson
- [x] Added `data/audio/official-wordlist-audio-manifest.json`
- [x] Added per-lesson `asset_mappings.audio_wordlist` to all 18 lesson JSON files
- [x] Verified 79 exact official word-list MP3 filenames across 18 lessons

## Verified word-list audio track counts

| Lesson | Tracks | Lesson | Tracks | Lesson | Tracks |
|---:|---:|---:|---:|---:|---:|
| 01 | 4 | 07 | 5 | 13 | 5 |
| 02 | 3 | 08 | 4 | 14 | 4 |
| 03 | 4 | 09 | 4 | 15 | 5 |
| 04 | 4 | 10 | 5 | 16 | 5 |
| 05 | 5 | 11 | 4 | 17 | 5 |
| 06 | 5 | 12 | 4 | 18 | 4 |

**Total exact filenames indexed: 79.** These are word-list audio assets only. They are not the main lesson listening audio tracks. The audio pages expose the filenames; the actual MP3 contents have not yet been listened to, transcribed or aligned to individual vocabulary rows.

Official source pages:
- https://www.irodori.jpf.go.jp/en/wordlists/audio/starter_01.html
- https://www.irodori.jpf.go.jp/en/wordlists/audio/starter_02.html
- https://www.irodori.jpf.go.jp/en/wordlists/audio/starter_03.html

## Vocabulary extraction status
- [x] Official word-list PDF lesson ranges mapped for all 18 lessons
- [x] Lesson 1: 23 entries entered with Sinhala glosses (first pass)
- [x] Lesson 2: 50 entries entered with Sinhala glosses (first pass)
- [ ] Lessons 03–18: full entries still need extraction and cross-checking
- [ ] Pitch-accent symbols and gray/reference vocabulary classifications need page-image audit

## Remaining full-course work
- [ ] Page-by-page lesson PDF audit for all 18 lessons
- [ ] Full vocabulary extraction and source checks for Lessons 03–18
- [ ] Full Starter grammar coverage, Sinhala explanations, Romaji and original examples
- [ ] Complete Kanji Words and Kana Words mapping
- [ ] Main lesson audio exact filename mapping and listening-script alignment
- [ ] Full original exercises, homework and answer keys for every lesson
- [ ] Full master JSON build, schema validation and cross-reference audit

**Integrity:** 79 official word-list audio filenames are verified from the publisher's three index pages. They are not a verification of the main lesson audio ZIP contents. No lesson is marked complete until all required sections are populated and audited.


## This bulk — Starter Grammar Notes (Lessons 03–04)

- [x] Lesson 03: six grammar patterns entered with Sinhala explanations and Romaji
- [x] Lesson 03: original Japanese examples with Romaji and Sinhala meanings
- [x] Lesson 03: five original practice exercises and three homework tasks
- [x] Lesson 04: four grammar patterns entered with Sinhala explanations and Romaji
- [x] Lesson 04: original Japanese examples with Romaji and Sinhala meanings
- [x] Lesson 04: five original practice exercises and three homework tasks
- [x] Separate lesson grammar JSON files committed under `data/grammar/`

Files:
- `data/grammar/lesson-03.json`
- `data/grammar/lesson-04.json`

Source: https://www.irodori.jpf.go.jp/assets/data/Grammar_all.pdf
The explanations and exercises are JP Nexus original learning material, checked against the official grammar notes. They are not official Japan Foundation translations.

## Outstanding correction
- [ ] Lesson 02 official Table of Contents lists a third activity, `これは日本語で何と言いますか？`; the lesson JSON currently contains only the first two activities. This discrepancy was identified in this batch but the attempted GitHub correction did not complete. Do not mark Lesson 02 activity coverage complete.


## This bulk — Official Grammar Worksheet Audio (Starter L03–L18)

- [x] Audited all three official Japan Foundation Starter Grammar Worksheet audio index pages
- [x] Added `data/audio/official-grammar-worksheet-audio-manifest.json`
- [x] Added `asset_mappings.audio_grammar_worksheets` to all 18 lesson JSON files
- [x] Lessons 01–02 explicitly marked not applicable because Starter L01–L02 have no Grammar Notes / Grammar Worksheets
- [x] Preserved exact publisher filenames, including `_Org` reorganized review tracks and Lesson 9 split practice tracks
- [x] Indexed 79 exact official worksheet MP3 filenames across Lessons 03–18

Official source index pages:
- https://www.irodori.jpf.go.jp/en/worksheet/audio/starter_01.html
- https://www.irodori.jpf.go.jp/en/worksheet/audio/starter_02.html
- https://www.irodori.jpf.go.jp/en/worksheet/audio/starter_03.html

| Lesson | Files | Lesson | Files | Lesson | Files |
|---:|---:|---:|---:|---:|---:|
| 01 | 0 (N/A) | 07 | 6 | 13 | 7 |
| 02 | 0 (N/A) | 08 | 6 | 14 | 4 |
| 03 | 6 | 09 | 4 | 15 | 2 |
| 04 | 4 | 10 | 3 | 16 | 3 |
| 05 | 6 | 11 | 5 | 17 | 7 |
| 06 | 4 | 12 | 6 | 18 | 6 |

**Important audit boundary:** These 79 records verify filenames and lesson association on the publisher's index pages only. They do not verify playback, audio duration, transcript content, or exact worksheet-question alignment. Do not merge them with the 79 Word List Audio filenames or the Main Lesson Audio family.

## Official source structure reminder
The Japan Foundation describes Starter as Lessons 1–18 with activities, listening scripts, Kanji Words, Grammar Notes and Tips for Life in Japan; Grammar Notes are absent from Starter Lessons 1 and 2. Source: https://www.irodori.jpf.go.jp/assets/data/starter/pdf/X_howto_en.pdf


## This bulk — Expanded self-study practice for all 18 lessons

The earlier 5-exercise / 3-homework allowance was too small for independent study. It has been replaced with a larger practice bank for every Starter lesson.

- [x] Created one dedicated practice JSON for each lesson, L01–L18
- [x] 20 exercise tasks per lesson = 360 tasks
- [x] 10 homework tasks per lesson = 180 tasks
- [x] Total new practice workload: 540 task records
- [x] Exercises use varied modes: recognition, matching, MCQ, fill-in, ordering, short answer, translation, speaking, role-play, listening notes, reading scan, form completion, dialogue completion, error correction, sentence building, information gap, writing, real-life simulation and mixed review
- [x] Homework includes recall, vocabulary flashcards, sentence writing, speaking recordings, listening shadowing, real-world reading, messages, partner role-play, observation and weekly review
- [x] Each pack is aligned to the official lesson activity titles and Can-do objectives
- [x] Expanded existing Lesson 03 and 04 grammar JSON practice arrays to 20 exercises and 10 homework tasks each

Files: `data/exercises/lesson-01-practice.json` through `data/exercises/lesson-18-practice.json`.

**Practice quality boundary:** These are original JP Nexus task prompts and study assignments, not copied official workbook questions. They are aligned to the official activity/Can-do map. Detailed Japanese model answers, accepted variants, and exact grammar-level answer keys remain pending full source and grammar audit. Listening tasks are assignments, not claims that audio transcripts have been aligned.

## Current expanded practice totals
- 18 lesson packs
- 360 exercises
- 180 homework tasks
- 540 total practice tasks

Do not mark the course or practice answer-key audit complete.


## This bulk — Practice quality upgrade, Lessons 01–18

The 20-exercise / 10-homework volume remains in place. This batch improves the task-level instructions and assessment structure rather than merely increasing counts.

- [x] Updated all 360 exercises with task-specific Sinhala instructions by exercise type
- [x] Corrected response formats so listening, matching, role-play, ordering, form completion, writing and other tasks use appropriate UI response types
- [x] Added five-part assessment rubric to each exercise
- [x] Added success criteria, 5 marks per exercise, two attempts and review-after-one-day metadata
- [x] Updated all 180 homework tasks with estimated completion times
- [x] Added homework completion checklists and submission formats
- [x] Added spaced review schedule metadata (same day, next day, day 3, day 7)
- [x] Added 100-mark lesson assessment model and mastery bands to every lesson pack

Totals: 18 lessons × 20 exercises = 360; 18 × 10 homework = 180; 540 practice records overall.

**Accuracy boundary:** Task instructions and assessment scaffolds are now more explicit, but they are not yet fully authored textbook-specific questions with verified Japanese model answers. Open speaking/writing tasks require rubric-based assessment. Listening tasks remain dependent on future transcript/audio alignment. Do not mark answer keys verified.
