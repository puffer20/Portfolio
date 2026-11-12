import { describe, expect, it } from "vitest";
import { projects } from "@/data/portfolio";
import { askPortfolio, filterProjects } from "@/lib/explorer";

describe("portfolio explorer", () => {
  it("finds Python projects", () => {
    expect(askPortfolio(projects, "Which projects use Python?").ids.length).toBeGreaterThanOrEqual(2);
  });
  it("finds Java project", () => {
    expect(filterProjects(projects, "", "Java").map((p) => p.id)).toEqual(["heart"]);
  });
  it("filter chip narrows to AI", () => {
    expect(filterProjects(projects, "", "AI").map((p) => p.id)).toEqual(["cosmic", "gemma-3-knowledge-graph"]);
  });
});
