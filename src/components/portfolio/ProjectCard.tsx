import { ArrowUpRight, Clock } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, highlighted }: { project: Project; highlighted: boolean }) {
  return (
    <article
      aria-labelledby={`p-${project.id}`}
      className={`group glass flex h-full flex-col rounded-lg p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 ${highlighted ? "border-primary/60 shadow-[0_0_0_1px_var(--primary)]" : ""}`}
    >
      <ProjectVisual kind={project.visual} />
      <div className="mt-5 flex items-center justify-between">
        <span className="eyebrow">{project.number} / {project.category}</span>
        {highlighted && <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Match</span>}
      </div>
      <h3 id={`p-${project.id}`} className="mt-2 text-xl font-medium tracking-tight">
        {project.title} <span className="font-display text-lg italic text-muted-foreground">— {project.subtitle}</span>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
        {(project.technology ?? project.tags ?? []).map((t) => (
          <li key={t} className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-foreground/80">
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-5"><div className="border-t border-border pt-4 text-sm">
        {project.link ? (
          <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary">
            {project.link.label} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="sr-only">(opens in new tab)</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-muted-foreground"><Clock className="h-4 w-4" /> Case study coming soon</span>
        )}
      </div></div>
    </article>
  );
}
