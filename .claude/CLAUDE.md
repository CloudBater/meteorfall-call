# Claude Code — Project Instructions

## Architecture
- `backend/` — Express + TypeScript, port 3001. The only place that touches GEMINI_API_KEY.
- `frontend/` — Vite + React + TypeScript, port 5173. No API keys, ever.
- `data/users.json` — static snapshot of DummyJSON /users (208 records). Always read from file; never make network calls to DummyJSON.

## Key constraints
- Never pass sensitive user fields (bank, address, ssn, ein) to Gemini. Only use `safeProfile()` when building prompts.
- Never embed or log GEMINI_API_KEY. It lives in root `.env` only.
- Do not commit node_modules/, dist/, or any build artifacts.

## Test runner
```
npm test               # from repo root (delegates to backend)
cd backend && npm test # direct
```
Uses Node built-in test runner via `--require ts-node/register`.

## Dev server
```
npm run dev   # from repo root — starts both backend and frontend via concurrently
```

## Gemini model
Using `gemini-2.5-flash`. Prompt must request JSON-only output (no markdown fences).
