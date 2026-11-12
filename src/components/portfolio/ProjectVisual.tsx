import type { Project } from "@/data/portfolio";

export function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  return (
    <div aria-hidden className="relative h-32 overflow-hidden rounded-md border border-border bg-background/60 grid-lines">
      {kind === "orbit" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="anim-spin relative h-28 w-28 rounded-full border border-foreground/20">
            <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-primary" />
          </div>
          <div className="absolute h-16 w-16 rounded-full border border-foreground/15" />
          <div className="absolute h-3 w-3 rounded-full bg-foreground/80" />
          {[["18%","22%"],["78%","30%"],["66%","78%"],["24%","70%"]].map(([l,t]) => <span key={l} className="absolute h-1 w-1 rounded-full bg-foreground/50" style={{ left: l, top: t }} />)}
        </div>
      )}
      {kind === "client-management" && (
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <svg viewBox="0 0 320 74" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* Clients panel */}
            <rect x="10" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="20" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Clients</text>
            {/* Docs panel */}
            <rect x="110" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="120" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Docs</text>
            {/* Connection line */}
            <line x1="90" y1="35" x2="110" y2="35" stroke="var(--primary)" strokeWidth="1.5" className="anim-dash" />
            {/* Central hub */}
            <circle cx="100" cy="35" r="5" fill="var(--primary)" className="anim-beat" />
          </svg>
          <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <span>client‑mgmt</span>
            <span className="text-primary flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary anim-beat" />
              admin
            </span>
          </div>
        </div>
      )}
      {kind === "rag" && (
        <div className="absolute inset-0 flex items-center justify-center p-2.5">
          <svg viewBox="0 0 320 120" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="rag-dense-flow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="rag-sparse-flow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-foreground)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="var(--color-foreground)" stopOpacity="0.65" />
              </linearGradient>
            </defs>

            {/* Input 1: Dense / Vector (Top-Left) */}
            <g transform="translate(14, 28)">
              <rect x="0" y="0" width="76" height="22" rx="4" fill="oklch(0.2 0.005 90 / 85%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
              <circle cx="10" cy="11" r="3" fill="var(--primary)" />
              <text x="20" y="14.5" fill="var(--color-foreground)" fontSize="8.5" fontFamily="var(--font-mono)" letterSpacing="0.04em">DENSE</text>
              <text x="56" y="14.5" fill="var(--primary)" fontSize="7" fontFamily="var(--font-mono)">VEC</text>
            </g>

            {/* Input 2: Sparse / BM25 (Bottom-Left) */}
            <g transform="translate(14, 70)">
              <rect x="0" y="0" width="76" height="22" rx="4" fill="oklch(0.2 0.005 90 / 85%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
              <circle cx="10" cy="11" r="3" fill="var(--color-foreground)" fillOpacity="0.5" />
              <text x="20" y="14.5" fill="var(--color-foreground)" fontSize="8.5" fontFamily="var(--font-mono)" letterSpacing="0.04em">SPARSE</text>
              <text x="58" y="14.5" fill="var(--color-muted-foreground)" fontSize="7" fontFamily="var(--font-mono)">BM25</text>
            </g>

            {/* Converging Stream Lines */}
            <path d="M 90 39 C 118 39, 126 59, 146 60" stroke="url(#rag-dense-flow)" strokeWidth="1.5" strokeDasharray="4 4" className="anim-dash" />
            <path d="M 90 81 C 118 81, 126 61, 146 60" stroke="url(#rag-sparse-flow)" strokeWidth="1.5" strokeDasharray="4 4" className="anim-dash" />

            {/* Center Reranker Core Node */}
            <g transform="translate(152, 60)">
              {/* Outer pulsing energy halo */}
              <circle cx="0" cy="0" r="19" fill="var(--primary)" fillOpacity="0.08" stroke="var(--primary)" strokeOpacity="0.3" strokeWidth="1" className="anim-beat" />
              {/* Diamond shell */}
              <rect x="-10" y="-10" width="20" height="20" rx="3" fill="oklch(0.18 0.004 90)" stroke="var(--primary)" strokeWidth="1.2" transform="rotate(45)" />
              {/* Core nucleus */}
              <circle cx="0" cy="0" r="3.5" fill="var(--primary)" />
              <text x="0" y="28" textAnchor="middle" fill="var(--primary)" fontSize="7.5" fontFamily="var(--font-mono)" letterSpacing="0.08em">RRF · RERANK</text>
            </g>

            {/* Output Path to Ranked Results */}
            <line x1="172" y1="60" x2="212" y2="60" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="4 4" className="anim-dash" />

            {/* Ranked Output Candidates (Top-K) */}
            <g transform="translate(216, 22)">
              <text x="0" y="9" fill="var(--color-muted-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" letterSpacing="0.06em">TOP-K CONTEXT</text>

              {/* Rank 1 (Top Match - glowing lime) */}
              <g transform="translate(0, 16)">
                <rect x="0" y="0" width="88" height="13" rx="3" fill="var(--primary)" fillOpacity="0.16" stroke="var(--primary)" strokeWidth="1" />
                <rect x="4" y="4" width="58" height="5" rx="1.5" fill="var(--primary)" />
                <text x="82" y="9.5" textAnchor="end" fill="var(--primary)" fontSize="7" fontFamily="var(--font-mono)" fontWeight="bold">0.96</text>
              </g>

              {/* Rank 2 */}
              <g transform="translate(0, 33)">
                <rect x="0" y="0" width="88" height="11" rx="2.5" fill="oklch(1 0 0 / 4%)" stroke="oklch(1 0 0 / 10%)" strokeWidth="0.8" />
                <rect x="4" y="3.5" width="40" height="4" rx="1" fill="var(--color-foreground)" fillOpacity="0.3" />
                <text x="82" y="8" textAnchor="end" fill="var(--color-muted-foreground)" fontSize="6.5" fontFamily="var(--font-mono)">0.74</text>
              </g>

              {/* Rank 3 */}
              <g transform="translate(0, 48)">
                <rect x="0" y="0" width="88" height="11" rx="2.5" fill="oklch(1 0 0 / 3%)" stroke="oklch(1 0 0 / 8%)" strokeWidth="0.8" />
                <rect x="4" y="3.5" width="24" height="4" rx="1" fill="var(--color-foreground)" fillOpacity="0.18" />
                <text x="82" y="8" textAnchor="end" fill="var(--color-muted-foreground)" fontSize="6.5" fontFamily="var(--font-mono)">0.58</text>
              </g>
            </g>
          </svg>
        </div>
      )}
      {kind === "client-management" && (
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <svg viewBox="0 0 320 74" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* Clients panel */}
            <rect x="10" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="20" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Clients</text>
            {/* Docs panel */}
            <rect x="110" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="120" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Docs</text>
            {/* Connection line */}
            <line x1="90" y1="35" x2="110" y2="35" stroke="var(--primary)" strokeWidth="1.5" className="anim-dash" />
            {/* Central hub */}
            <circle cx="100" cy="35" r="5" fill="var(--primary)" className="anim-beat" />
          </svg>
          <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <span>client‑mgmt</span>
            <span className="text-primary flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary anim-beat" />
              admin
            </span>
          </div>
        </div>
      )}
      {kind === "stream" && (
        <div className="absolute inset-0 flex flex-col justify-center gap-3 px-5">
          {[0,1,2,3].map((i) => (
            <div key={i} className="relative h-px overflow-hidden bg-foreground/15">
              <span className="anim-flow absolute -left-1/3 h-px w-1/3 bg-primary" style={{ animationDelay: `${i * 0.5}s` }} />
            </div>
          ))}
          <div className="mt-2 flex gap-2 font-mono text-[10px] text-muted-foreground"><span>txn → model</span><span className="text-primary">flag 0.92</span></div>
        </div>
      )}
      {kind === "client-management" && (
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <svg viewBox="0 0 320 74" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* Clients panel */}
            <rect x="10" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="20" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Clients</text>
            {/* Docs panel */}
            <rect x="110" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="120" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Docs</text>
            {/* Connection line */}
            <line x1="90" y1="35" x2="110" y2="35" stroke="var(--primary)" strokeWidth="1.5" className="anim-dash" />
            {/* Central hub */}
            <circle cx="100" cy="35" r="5" fill="var(--primary)" className="anim-beat" />
          </svg>
          <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <span>client‑mgmt</span>
            <span className="text-primary flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary anim-beat" />
              admin
            </span>
          </div>
        </div>
      )}
      {kind === "pulse" && (
        <svg viewBox="0 0 300 120" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <polyline className="anim-beat" fill="none" stroke="var(--primary)" strokeWidth="1.5" points="0,70 80,70 95,70 105,30 118,100 130,55 140,70 300,70" />
          <line x1="0" x2="300" y1="70" y2="70" stroke="currentColor" strokeOpacity=".1" />
        </svg>
      )}
      {kind === "client-management" && (
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <svg viewBox="0 0 320 74" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* Clients panel */}
            <rect x="10" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="20" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Clients</text>
            {/* Docs panel */}
            <rect x="110" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="120" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Docs</text>
            {/* Connection line */}
            <line x1="90" y1="35" x2="110" y2="35" stroke="var(--primary)" strokeWidth="1.5" className="anim-dash" />
            {/* Central hub */}
            <circle cx="100" cy="35" r="5" fill="var(--primary)" className="anim-beat" />
          </svg>
          <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <span>client‑mgmt</span>
            <span className="text-primary flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary anim-beat" />
              admin
            </span>
          </div>
        </div>
      )}
      {kind === "weather" && (
        <div className="absolute inset-0 flex items-end gap-2 px-5 pb-5">
          {[30,48,42,58,36,50,64,44].map((h, i) => (
            <div key={i} className={`flex-1 rounded-sm ${i === 6 ? "bg-primary" : "bg-foreground/15"}`} style={{ height: `${h}%` }} />
          ))}
          <span className="absolute left-5 top-3 font-mono text-[10px] text-muted-foreground">CITY · CONDITIONS</span>
        </div>
      )}
      {kind === "client-management" && (
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <svg viewBox="0 0 320 74" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* Clients panel */}
            <rect x="10" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="20" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Clients</text>
            {/* Docs panel */}
            <rect x="110" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="120" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Docs</text>
            {/* Connection line */}
            <line x1="90" y1="35" x2="110" y2="35" stroke="var(--primary)" strokeWidth="1.5" className="anim-dash" />
            {/* Central hub */}
            <circle cx="100" cy="35" r="5" fill="var(--primary)" className="anim-beat" />
          </svg>
          <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <span>client‑mgmt</span>
            <span className="text-primary flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary anim-beat" />
              admin
            </span>
          </div>
        </div>
      )}
      {kind === "gemma" && (
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <svg viewBox="0 0 320 74" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* Left: Gemma Base + LoRA Module */}
            <g transform="translate(10, 12)">
              <rect x="0" y="0" width="76" height="50" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 14%)" strokeWidth="1" />
              <text x="8" y="15" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" letterSpacing="0.06em">GEMMA-3</text>
              <circle cx="68" cy="12" r="2.5" fill="var(--primary)" />

              {/* LoRA weight bypass */}
              <rect x="8" y="22" width="60" height="20" rx="2.5" fill="var(--primary)" fillOpacity="0.12" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="0.8" />
              <text x="12" y="32" fill="var(--primary)" fontSize="7" fontFamily="var(--font-mono)" fontWeight="bold">LoRA [A×B]</text>
              <text x="12" y="40" fill="var(--color-muted-foreground)" fontSize="6" fontFamily="var(--font-mono)">r=16 · α=32</text>
            </g>

            {/* Connecting transition beam */}
            <path d="M 86 37 L 142 37" stroke="var(--primary)" strokeWidth="1.2" strokeDasharray="3 3" className="anim-dash" />
            <circle cx="114" cy="37" r="2" fill="var(--primary)" className="anim-beat" />

            {/* Right: Knowledge Graph Network */}
            <g transform="translate(148, 4)">
              {/* Graph Edges */}
              <line x1="32" y1="33" x2="84" y2="18" stroke="oklch(1 0 0 / 18%)" strokeWidth="1" strokeDasharray="3 3" className="anim-dash" />
              <line x1="32" y1="33" x2="68" y2="56" stroke="var(--primary)" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="3 3" className="anim-dash" />
              <line x1="84" y1="18" x2="134" y2="38" stroke="oklch(1 0 0 / 18%)" strokeWidth="1" strokeDasharray="3 3" className="anim-dash" />
              <line x1="68" y1="56" x2="134" y2="38" stroke="var(--primary)" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="3 3" className="anim-dash" />

              {/* Node 1: Primary Entity (Pulsing) */}
              <g transform="translate(32, 33)">
                <circle cx="0" cy="0" r="10" fill="var(--primary)" fillOpacity="0.15" stroke="var(--primary)" strokeWidth="1" className="anim-beat" />
                <circle cx="0" cy="0" r="3.5" fill="var(--primary)" />
              </g>

              {/* Node 2: Concept Node */}
              <g transform="translate(84, 18)">
                <circle cx="0" cy="0" r="7" fill="oklch(0.2 0.005 90)" stroke="oklch(1 0 0 / 25%)" strokeWidth="1" />
                <circle cx="0" cy="0" r="2.5" fill="var(--color-foreground)" fillOpacity="0.7" />
              </g>

              {/* Node 3: Property Node */}
              <g transform="translate(68, 56)">
                <circle cx="0" cy="0" r="7" fill="oklch(0.2 0.005 90)" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="1" />
                <circle cx="0" cy="0" r="2.5" fill="var(--primary)" />
              </g>

              {/* Node 4: Target Object Node */}
              <g transform="translate(134, 38)">
                <circle cx="0" cy="0" r="8" fill="oklch(0.2 0.005 90)" stroke="oklch(1 0 0 / 30%)" strokeWidth="1" />
                <circle cx="0" cy="0" r="3" fill="var(--color-foreground)" fillOpacity="0.8" />
              </g>
            </g>
          </svg>

          {/* Minimal editorial status tag */}
          <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <span>gemma-3 · peft/lora</span>
            <span className="text-primary flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary anim-beat" />
              knowledge_graph
            </span>
          </div>
        </div>
      )}
      {kind === "client-management" && (
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <svg viewBox="0 0 320 74" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* Clients panel */}
            <rect x="10" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="20" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Clients</text>
            {/* Docs panel */}
            <rect x="110" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="120" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Docs</text>
            {/* Connection line */}
            <line x1="90" y1="35" x2="110" y2="35" stroke="var(--primary)" strokeWidth="1.5" className="anim-dash" />
            {/* Central hub */}
            <circle cx="100" cy="35" r="5" fill="var(--primary)" className="anim-beat" />
          </svg>
          <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <span>client‑mgmt</span>
            <span className="text-primary flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary anim-beat" />
              admin
            </span>
          </div>
        </div>
      )}
      {kind === "tracezero" && (
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <svg viewBox="0 0 320 74" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* Stream Lanes: Dirty Input (Left of 160) */}
            <line x1="16" y1="20" x2="148" y2="20" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <line x1="16" y1="37" x2="148" y2="37" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <line x1="16" y1="54" x2="148" y2="54" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />

            {/* Dirty Metadata indicators moving toward center */}
            <line x1="20" y1="20" x2="90" y2="20" stroke="oklch(0.65 0.2 25 / 60%)" strokeWidth="1.5" strokeDasharray="3 3" className="anim-dash" />
            <line x1="40" y1="37" x2="110" y2="37" stroke="oklch(0.65 0.2 25 / 60%)" strokeWidth="1.5" strokeDasharray="3 3" className="anim-dash" />
            <line x1="30" y1="54" x2="100" y2="54" stroke="oklch(0.65 0.2 25 / 60%)" strokeWidth="1.5" strokeDasharray="3 3" className="anim-dash" />

            <circle cx="34" cy="20" r="2.5" fill="oklch(0.65 0.2 25)" />
            <circle cx="58" cy="37" r="2.5" fill="oklch(0.65 0.2 25)" />
            <circle cx="48" cy="54" r="2.5" fill="oklch(0.65 0.2 25)" />

            {/* Center: Sentinel Firewall Laser Barrier */}
            <line x1="160" y1="8" x2="160" y2="66" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="4 2" className="anim-dash" />

            {/* Sentinel Shield Node */}
            <g transform="translate(160, 37)">
              <circle cx="0" cy="0" r="14" fill="var(--primary)" fillOpacity="0.12" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="1" className="anim-beat" />
              <circle cx="0" cy="0" r="6" fill="oklch(0.18 0.004 90)" stroke="var(--primary)" strokeWidth="1" />
              <circle cx="0" cy="0" r="2.5" fill="var(--primary)" />
            </g>

            {/* Stream Lanes: Clean Output (Right of 160) */}
            <line x1="172" y1="20" x2="304" y2="20" stroke="var(--primary)" strokeOpacity="0.25" strokeWidth="1" />
            <line x1="172" y1="37" x2="304" y2="37" stroke="var(--primary)" strokeOpacity="0.4" strokeWidth="1" />
            <line x1="172" y1="54" x2="304" y2="54" stroke="var(--primary)" strokeOpacity="0.25" strokeWidth="1" />

            {/* Clean data flows moving out */}
            <line x1="180" y1="20" x2="260" y2="20" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="4 4" className="anim-dash" />
            <line x1="200" y1="37" x2="280" y2="37" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="4 4" className="anim-dash" />
            <line x1="190" y1="54" x2="270" y2="54" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="4 4" className="anim-dash" />

            {/* Verified Clean Check nodes */}
            <circle cx="280" cy="20" r="2.5" fill="var(--primary)" />
            <circle cx="295" cy="37" r="3" fill="var(--primary)" />
            <circle cx="285" cy="54" r="2.5" fill="var(--primary)" />
          </svg>

          {/* Minimal editorial status tag */}
          <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <span>metadata_filter</span>
            <span className="text-primary flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary anim-beat" />
              sentinel · 0 traces leaked
            </span>
          </div>
        </div>
      )}
      {kind === "client-management" && (
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <svg viewBox="0 0 320 74" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* Clients panel */}
            <rect x="10" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="20" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Clients</text>
            {/* Docs panel */}
            <rect x="110" y="20" width="80" height="30" rx="4" fill="oklch(0.2 0.005 90 / 80%)" stroke="oklch(1 0 0 / 12%)" strokeWidth="1" />
            <text x="120" y="35" fill="var(--color-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" >Docs</text>
            {/* Connection line */}
            <line x1="90" y1="35" x2="110" y2="35" stroke="var(--primary)" strokeWidth="1.5" className="anim-dash" />
            {/* Central hub */}
            <circle cx="100" cy="35" r="5" fill="var(--primary)" className="anim-beat" />
          </svg>
          <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <span>client‑mgmt</span>
            <span className="text-primary flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary anim-beat" />
              admin
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
