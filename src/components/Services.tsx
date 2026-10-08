import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services">
      <h2>What I write</h2>
      <p className="sub">Every piece starts with who is reading and what they should do next.</p>
      <div className="svc">
        {services.map((s) => (
          <div key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
