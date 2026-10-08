import { steps } from "../data/content";

export default function Process() {
  return (
    <section id="process">
      <h2>How I work</h2>
      <p className="sub">A simple process, so you always know what happens next.</p>
      <div className="steps">
        {steps.map((s) => (
          <div key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
