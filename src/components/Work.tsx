import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import ProjectDialog from "./ProjectDialog";

const ALL = "All";

export default function Work() {
  const [active, setActive] = useState<string>(ALL);
  const [selected, setSelected] = useState<Project | null>(null);

  const categories = useMemo<string[]>(
    () => [ALL, ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const visible = useMemo<Project[]>(
    () => projects.filter((p) => active === ALL || p.category === active),
    [active]
  );

  return (
    <section id="work">
      <h2>Selected work</h2>
      <p className="sub">Tap any project to read the brief, my approach, a sample excerpt and the result.</p>
      <div className="chips" role="group" aria-label="Filter by format">
        {categories.map((c) => (
          <button key={c} type="button" aria-pressed={active === c} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid">
        {visible.map((p) => (
          <button key={p.title} type="button" className="card" onClick={() => setSelected(p)}>
            <small>{p.category}</small>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <em>Read the full project</em>
          </button>
        ))}
      </div>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
