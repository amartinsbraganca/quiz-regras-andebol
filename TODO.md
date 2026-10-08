# Improvements backlog

Suggested improvements from a full project review (2026-10-07). Tick items off as they are done.

Suggested order: **1–6**, then **8 + 10**, then **14 + 15**.

## Decisions

- **PDF export (#2):** exporting must not be possible on an incomplete quiz. Hide "Exportar Resultados" during the quiz, show it only on the "Quiz terminado!" screen, and hide it again on back / new quiz. Also show the options the user selected in the PDF.
- **SAR questions (#1):** "SAR" = Substitution Area Regulations (Regulamento da Zona de Substituição). Decided: `"regra": "SAR"` plus a "SAR - Zona de Substituições" button after Regra 18 (not folded into Rule 4). New SAR questions just need `"regra": "SAR"`.

## 1. Bugs

- [x] 1. `SAR1` / `SAR2` (last 2 questions) have no `regra`, so they never appear in rules mode.
- [x] 2. PDF export lists every question, marks unanswered ones as "Incorreto", and calculates the percentage over all questions instead of answered ones. Fix per the decision above.
- [x] 3. Service worker is cache-first, so users keep stale questions unless `CACHE_NAME` is bumped. Switch to network-first for `index.html` / `script.js`.
- [x] 4. Offline cache is missing Tailwind, jsPDF, the logos and the sounds.
- [x] 5. Service worker is registered twice in `index.html` (keep the bottom block with the update banner).
- [x] 6. Random mode shuffle `sort(() => Math.random() - 0.5)` is biased. Use Fisher–Yates.
- [x] 7. `arraysIguais` sorts both arrays in place, mutating the question's `correta`.

## 2. Code and data structure

- [x] 8. Move the questions out of `script.js` into `questions.json` (or one file per rule).
- [ ] 9. Delete the stale `perguntas_andebol_completas_corrigido.txt` (not used by the app).
- [x] 10. Add a data validation script / GitHub Action: `regra` present, `correta` in range, numbering unique.
- [ ] 11. Generate the rules list from the data instead of hardcoding "Regra 1…18"; show question counts.
- [ ] 12. `coresRegras` repeats colours (pink ×4).
- [ ] 13. Replace inline styles with CSS classes.

## 3. Learning features

- [ ] 14. Optional `explicacao` field shown after answering (with the rule reference).
- [ ] 15. End-of-quiz review of wrong answers, with retry.
- [ ] 16. Save stats in `localStorage` (accuracy per rule, most-missed questions).
- [ ] 17. "Practise weak spots" mode.
- [ ] 18. Select several rules at once.
- [ ] 19. Exam mode with a timer (the `#timer` element already exists but is unused).
- [ ] 20. Shuffle answer options (strip the "a) " prefixes and render the letters).
- [ ] 21. Build the Video Test module, or hide the button until it's ready.

## 4. User experience

- [ ] 22. Indicate multi-answer questions (all use checkboxes), or state the exam rule on the start screen.
- [ ] 23. Remember dark mode; default to the system preference.
- [ ] 24. Remove the dead Tailwind `dark:` classes (dark mode is off in the Tailwind 2 CDN; the real one is `.dark-mode` in `style.css`).
- [ ] 25. Better end screen: score, %, time, "Rever erradas" / "Repetir" / "Início".
- [ ] 26. Sound on/off toggle.
- [ ] 27. Only confirm leaving when a quiz is in progress; fix typo "Decerteza" → "De certeza".
- [ ] 28. Replace `alert()` with the app's modal.
- [ ] 29. Keyboard shortcuts (1–5 / a–e to select, Enter to confirm/next).
- [ ] 30. Accessibility: `<fieldset>`/`<legend>`, `aria-live` feedback, ✓/✗ icons instead of colour alone.

## 5. Assets and performance

- [ ] 31. Replace the ~3 MB Tailwind 2 CDN with a small built CSS file or just `style.css`.
- [x] 32. Self-host the sound files (currently loaded from Google URLs).
- [ ] 33. Load jsPDF only when Export is clicked.
- [ ] 34. Compress the logos and icons.

## 6. Project hygiene

- [ ] 35. README: what the app is, running locally (`python3 -m http.server`), adding questions, releasing (cache version bump).
- [ ] 36. Automatic deploy (e.g. GitHub Pages) with an automatic cache version.
- [ ] 37. Clearer commit messages and short-lived branches.
