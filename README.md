# Quiz de Regras de Andebol

An interactive quiz on the rules of handball, built by referees for referees. It runs in the browser, works offline once it has been opened, and can be installed on a phone's home screen.

Live site: <https://amartinsbraganca.github.io/quiz-regras-andebol/> (published by GitHub Pages from `main`).

## Project structure

| File | What it is |
|---|---|
| `index.html` | The page: start screen, mode selection, quiz, modals |
| `script.js` | Quiz logic: modes, grading, score, PDF export |
| `style.css` | Styles (including dark mode) |
| `questions.json` | **All the questions** |
| `service-worker.js` | Offline support and updates |
| `manifest.json`, `icons/` | Home-screen install (PWA) |
| `sounds/` | Correct / wrong answer sounds |
| `scripts/validate-questions.js` | Checks `questions.json` for mistakes |
| `.github/workflows/` | GitHub Action that runs the checker |
| `TODO.md` | Improvements backlog |

## Running locally

The questions are loaded from `questions.json`, so the app needs a web server. Opening `index.html` by double-clicking it won't load the questions.

```sh
python3 -m http.server
```

Then open <http://localhost:8000>. In Codespaces, open the forwarded port 8000 instead.

## Editing or adding questions

1. **Edit `questions.json`.** Copy an existing question as a template:

   ```json
   {
       "pergunta": "8.80) Texto da pergunta?",
       "opcoes": [
           "a) Primeira opção",
           "b) Segunda opção"
       ],
       "correta": 0,
       "regra": 8
   }
   ```

   - `pergunta` starts with the question number. Its first part must match `regra` (`8.80)` goes with `"regra": 8`).
   - `opcoes` are written `a) `, `b) `, `c) `… in order.
   - `correta` counts from 0: `a)` = 0, `b)` = 1, and so on. If several answers are correct, use a list: `[1, 4]`.
   - `regra` is a number from 1 to 18, or `"SAR"` for the Substitution Area Regulations (Zona de Substituições). Number SAR questions `SAR1)`, `SAR2)`…
   - Questions for rules 1–18 and SAR appear in "Regras" mode automatically. A brand-new category still needs a button added in `script.js` (until TODO #11).

2. **Check it:**

   ```sh
   node scripts/validate-questions.js
   ```

   - ❌ **ERRO** means the data is broken and must be fixed: invalid JSON, a missing field, `correta` pointing at an option that doesn't exist, a duplicate number…
   - ⚠️ **AVISO** is a style warning (double spaces, a missing space after `a)`…). It doesn't block anything, but it's worth fixing.

   Each message shows the line and the question number, e.g. `questions.json:3 [1.1]`.

3. **Try it in the app** (optional): run it locally (see above) and do a quick quiz.

4. **Commit on a branch, push and open a pull request to `main`.** GitHub runs the same checker automatically and shows ✓ or ✗ on the commit and the PR.

5. **Merge once it's green.** GitHub Pages republishes the site in about a minute, and users get the new questions on their next visit. There's no version number to bump.

## Changing the app (HTML / JS / CSS)

The flow is the same as for questions, without the checker step. Changes to `index.html`, `script.js`, `style.css` and `questions.json` reach users on their next visit.

### When to bump `CACHE_NAME`

In `service-worker.js`, bump `CACHE_NAME` (e.g. `quiz-cache-v7` → `quiz-cache-v8`) **only** when you:

- add, remove or rename a file the app uses (images, sounds, libraries). Also update the `urlsToCache` list.
- change `service-worker.js` itself.

Returning users then see a **"Nova versão disponível!"** banner. The new version applies when they click it, or the next time they open the app after closing all its tabs. Nobody is interrupted mid-quiz.

## How offline and updates work

The service worker (`service-worker.js`) keeps a copy of everything the app needs. That way it opens without an internet connection.

- **App files** (`index.html`, `script.js`, `style.css`, `questions.json`, `manifest.json`) are fetched from the network first, so users always get the latest version. The saved copy is used only when there's no connection.
- **Images, sounds and libraries** are served from the saved copy, since they rarely change.
- **A broken `questions.json` (invalid or missing) doesn't take the app down for returning users.** They keep the last good questions until a fixed file is published. A new app version whose `questions.json` is broken refuses to install. First-time visitors have no saved copy, though, which is why the checker matters.

## Known gaps

- **The checker doesn't block merges yet.** To make a red ✗ block merging into `main`, an admin has to make the `validar` check (workflow "Validar perguntas") required: *Settings → Branches → Branch protection rule for `main` → Require status checks to pass*.
- **Pushing straight to `main` skips the pull request.** The checker still runs, but only after the change is already live. Prefer short-lived branches and PRs.
