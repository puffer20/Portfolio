import type { Category, Project } from "@/data/portfolio";

const STOP = new Set("what which who how show me my your you the a an of and or with in on for to is are did do does use uses used using build built projects project work about all any that".split(" "));

const SYNONYMS: Record<string, string[]> = {
  ml: ["machine learning"], ai: ["machine learning"], "machine": ["machine learning"], learning: ["machine learning"],
  streaming: ["kafka"], dashboard: ["streamlit", "dashboard"], api: ["apis", "cloud & apis"], apis: ["apis"],
  data: ["data"], visualization: ["visualization"], frontend: ["frontend"], web: ["frontend", "flask"],
};

export function haystack(p: Project) {
  return [p.title, p.subtitle, p.description, p.category, ...(p.technology ?? []), ...(p.tags ?? []), ...p.categories].join(" ").toLowerCase();
}

export function filterProjects(list: Project[], query: string, filter: "All" | Category) {
  const q = query.trim().toLowerCase();
  return list.filter((p) => (filter === "All" || p.category.includes(filter)) && (!q || haystack(p).includes(q)) );
}

export function askPortfolio(list: Project[], question: string): { answer: string; ids: string[]; terms: string[] } {
  const words = question.toLowerCase().replace(/[^a-z0-9&+\s-]/g, " ").split(/\s+/).filter((w) => w && !STOP.has(w));
  const terms = Array.from(new Set(words.flatMap((w) => SYNONYMS[w] ?? [w])));
  if (!terms.length) return { answer: "Try asking about a tool or topic, e.g. “Which projects use Python?”", ids: [], terms };
  const matches = list.filter((p) => terms.some((t) => haystack(p).includes(t)));
  if (!matches.length) return { answer: `No projects match “${terms.join(", ")}” yet.`, ids: [], terms };
  const names = matches.map((p) => p.title);
  const joined = names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names.at(-1)}` : names[0];
  return { answer: `${matches.length} project${matches.length > 1 ? "s" : ""} match: ${joined}.`, ids: matches.map((p) => p.id), terms };
}
