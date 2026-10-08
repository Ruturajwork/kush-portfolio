import { faqs } from "../data/content";

export default function Faq() {
  return (
    <section id="faq">
      <h2>Common questions</h2>
      {faqs.map((f) => (
        <details key={f.question}>
          <summary>{f.question}</summary>
          <p>{f.answer}</p>
        </details>
      ))}
    </section>
  );
}
