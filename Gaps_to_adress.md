This is a well-thought-out blueprint. A few observations and targeted upgrades to make it truly production-ready:

**What's already solid**

The page-level component co-location (`pages/Home/components/`) is the right call for a 10+ page app — it prevents the `components/` folder from becoming a dumping ground. The `server/services/` isolation for Gemini is also correct and will pay off when you upgrade model versions.

**Gaps worth addressing**

---

**1. Missing `shared/types/` bridge**

Your `src/types/` only covers the frontend. Since your SSE streaming contracts, AI request/response shapes, and lead form payloads are consumed by *both* runtimes, you need a neutral types layer:

```
y-arc-systems/
├── shared/
│   ├── types/
│   │   ├── ai.types.ts         # GeminiRequest, StreamChunk, ParsedDocument
│   │   ├── erp.types.ts        # Invoice, Ledger, PayrollEntry (DTOs)
│   │   └── api.types.ts        # ApiResponse<T>, ErrorEnvelope
│   └── constants/
│       └── routes.ts           # ROUTES.DASHBOARD = '/dashboard' — single source of truth
```

Without this, you'll eventually have diverging `GeminiRequest` types in `src/types/` and `server/routes/` that silently drift apart.

---

**2. SSE needs its own hook architecture**

`useGeminiStream()` is the right idea, but SSE streams need careful teardown or you'll get memory leaks on route changes. The hook should own the `EventSource` lifecycle:

```ts
// src/hooks/useGeminiStream.ts
export function useGeminiStream(endpoint: string) {
  const [chunks, setChunks] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'streaming' | 'done' | 'error'>('idle');

  const start = useCallback((payload: GeminiRequest) => {
    const es = new EventSource(`/api/ai/${endpoint}?...`);
    es.onmessage = (e) => setChunks(prev => [...prev, e.data]);
    es.onerror = () => { setStatus('error'); es.close(); };
    es.addEventListener('done', () => { setStatus('done'); es.close(); });
    return () => es.close(); // caller stores the cleanup
  }, [endpoint]);

  return { chunks, status, start };
}
```

---

**3. The `/dashboard` route needs a guard layer**

You've marked it `Protected: Yes` but there's no guard in the structure. Add this explicitly:

```
src/
├── router/
│   ├── AppRouter.tsx           # All <Route> declarations live here, not in App.tsx
│   └── ProtectedRoute.tsx      # Wraps auth check + redirect to /login
```

Keeping routes in `App.tsx` works until you have 10+ routes with mixed protection levels — at that point it becomes unreadable.

---

**4. `server/` needs a `config/` layer for env safety**

Raw `process.env.GEMINI_API_KEY` access scattered across services is a common failure point. Add:

```
server/
├── config/
│   └── env.ts      # Validates + exports all env vars with Zod or manual checks
```

```ts
// server/config/env.ts
if (!process.env.GEMINI_API_KEY) throw new Error('GEMINI_API_KEY is required');
export const env = {
  geminiKey: process.env.GEMINI_API_KEY,
  port: Number(process.env.PORT) || 3001,
};
```

`gemini.service.ts` imports from `config/env.ts`, never from `process.env` directly.

---

**5. Minor naming tightening**

| Current | Suggested | Why |
|---|---|---|
| `ai.routes.ts` | `gemini.routes.ts` | More specific; "ai" is vague when you add a second AI provider |
| `src/api/` (bare) | `src/api/` + one file per domain | `financeApi.ts`, `aiApi.ts` — mirrors your `server/routes/` shape |
| `tailwind.config.js` | `tailwind.config.ts` | You're already on TS everywhere — keep it consistent |

---

**Revised server structure:**

```
server/
├── config/
│   └── env.ts                  # ← new: validated env exports
├── routes/
│   └── gemini.routes.ts        # renamed from ai.routes.ts
├── services/
│   └── gemini.service.ts
├── middleware/
│   ├── authGuard.ts
│   ├── errorHandler.ts
│   └── requestLogger.ts
└── index.ts
```

The core architecture decisions you've made — SSE streaming, page-level co-location, service isolation — are the right foundation. These additions close the gaps around type safety, auth enforcement, and runtime stability without changing the shape of the project you've already designed.