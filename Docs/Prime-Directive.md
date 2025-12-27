## Cursor Agent Rules (RR Standard)

We build apps using Cursor + GitHub + Vercel. Every repo must have BOTH:
1) Global User Rules (Cursor Settings)
2) Project Rules committed in the repo

### A) Global User Rules (Always Apply)
- RR User Core
- RR User Safety

Purpose: These protect every workspace and prevent unsafe actions.

### B) Project Rules (Always Apply, committed to GitHub)
Location: `.cursor/rules/`

Required files:
- `.cursor/rules/rr-core.mdc`
- `.cursor/rules/rr-safety.mdc`
- `.cursor/rules/rr-ship-loop.mdc`

Why: These rules follow the repo to GitHub/Vercel and keep Agent behavior consistent.

### RR Core (Project)
- If a task touches >2 files: write a short plan first (files + steps + how we’ll test)
- Keep changes small and clear (one concern at a time)
- Never paste/commit secrets (use `.env`, keep it in `.gitignore`)
- After changes: run lint/tests or clearly state what you ran
- If unsure: ask before guessing

### RR Safety (Project)
- Ask before deleting files, changing DB schema, or editing auth/payment logic
- No destructive commands without approval (rm -rf, deleting migrations/tables)
- If a secret leaks: stop and rotate it immediately

### RR Ship Loop (Project)
- Branch per feature → small commits
- PR → Vercel Preview → fix issues → merge → ship production
