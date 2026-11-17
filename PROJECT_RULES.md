# JP Nexus — Project Rules

## 1. Clean-start boundary

This project is independent. Do not import, copy, merge, adapt, or silently reuse any prior project assets, JSON, code, database, lesson records, grammar lists, examples, audio maps, images, or app architecture.

Only materials explicitly supplied or approved for this repository from this point onward may be used.

## 2. Source-of-truth rules

1. Use the official IRODORI Starter A1 material as the reference for lesson titles, Can-do statements, activities, Grammar Notes, Kanji, vocabulary, and listening scripts.
2. Store provenance for every extracted source item: resource title, lesson, printed page where available, PDF page where known, activity/section, and source URL or local source identifier.
3. Never invent a source page, activity number, official grammar allocation, track name, or audio URL.
4. Distinguish:
   - `official_reference`: metadata or concise reference to the official resource;
   - `original_explanation`: newly written teaching explanation;
   - `supplementary_practice`: newly authored practice, not an official textbook question.
5. If a fact is not verified, use an explicit status such as `pending_verification`; do not present it as verified.

## 3. Language requirements

- Japanese script is primary for Japanese learning content.
- Include Romaji where it helps beginner self-study.
- Include accurate Sinhala explanations and meanings.
- Retain natural Japanese wording and explain particles and conjugations clearly.
- Avoid relying on Romaji as a substitute for learning kana.

## 4. Lesson completeness

A lesson is not complete until its applicable source sections have been reviewed and recorded:
- lesson title and topic;
- Can-do statements;
- activities and activity references;
- Grammar Notes;
- Kanji and vocabulary;
- listening scripts and verified audio references, where available;
- original explanations;
- supplementary exercises;
- answer keys and explanations;
- source and asset mappings.

Only mark a section complete after validation. Do not infer the official number of exercises or patterns.

## 5. Data and build rules

- JSON must be valid UTF-8 and parse without errors.
- Every record has a stable unique ID.
- References between lessons, grammar, vocabulary, media, exercises, and answer keys must resolve.
- The master build must be deterministic.
- Generated output belongs in `dist/`; source records remain in `data/`.
- Never manually edit generated master output as the only copy of a change.
- Validate before every commit.

## 6. Copyright and media

Do not copy complete textbook pages or redistribute official MP3s and illustrations unless rights and permissions allow it. Record external references and create original supplementary diagrams/audio where appropriate. Keep all media provenance explicit.

## 7. Change discipline

Use small, auditable commits. Do not overwrite existing user data without checking it first. Update this rules file only when the project owner changes the scope.
