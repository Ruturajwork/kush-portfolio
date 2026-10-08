import { values } from "../data/content";

export default function About() {
  return (
    <section id="about">
      <h2>About me</h2>
      <div className="ab">
        <div>
          <p className="big">I write so that busy people understand quickly and feel something while they do.</p>
          <p>
            I'm Kush Singh, a content writer who treats every brief like a conversation with one real reader. Before I
            write a word, I ask who is reading, what they already believe and what we want them to do next. The answers
            decide the structure, the tone and the length.
          </p>
          <p>
            My writing is simple on purpose. I use short sentences, concrete examples and plain words, because clear
            writing is kind writing. I research properly, check every claim and keep the brand's own voice, so the work
            sounds like you and not like me.
          </p>
          <p>
            Whether it's a 2,000-word guide, a five-email series or a single headline, I give it the same care: a strong
            opening, one idea at a time and an ending that makes the next step obvious. I take feedback well, meet
            deadlines and keep communication easy.
          </p>
        </div>
        <div className="vals">
          {values.map((v) => (
            <div key={v.title}>
              <b>{v.title}</b>
              <span>{v.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
