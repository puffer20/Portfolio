import { useMemo, useState } from "react";
import { RotateCcw, Search } from "lucide-react";
import { FILTERS, projects, type Category } from "@/data/portfolio";
import { filterProjects } from "@/lib/explorer";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Explorer() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"All" | Category>("All");

  const visible = useMemo(() => {
    return filterProjects(projects, query, filter);
  }, [query, filter]);

  const reset = () => {
    setQuery("");
    setFilter("All");
  };
  const dirty = Boolean(query || filter !== "All");

  return (
    <section id="work" aria-labelledby="work-h" className="scroll-mt-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="work-h" className="mt-1 font-display text-4xl">
            Featured projects
          </h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground" aria-live="polite">
          {visible.length} / {projects.length}
        </span>
      </div>

      <div className="glass rounded-lg p-4">
        <label htmlFor="search" className="sr-only">
          Search projects
        </label>
        <div className="flex items-center gap-2 rounded-md border border-input bg-background/60 px-3 focus-within:border-primary">
          <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
          <input
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects by name, tag or tech..."
            className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div role="group" aria-label="Filter by category" className="mt-3 flex flex-wrap gap-1.5">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {dirty && (
          <button
            type="button"
            onClick={reset}
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Reset search &amp; filters
          </button>
        )}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {visible.length ? (
          visible.map((p, i) => (
            <Reveal key={p.id} delay={i * 60} className="h-full">
              <ProjectCard project={p} highlighted={!!query} />
            </Reveal>
          ))
        ) : (
          <div className="rounded-lg border border-dashed border-border p-10 text-center md:col-span-2">
            <p className="text-sm">No projects match that search.</p>
            <button type="button" onClick={reset} className="mt-3 text-sm text-primary hover:underline">
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
