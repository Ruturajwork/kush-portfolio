import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "../data/content";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact">
        <h2>Have a brief? Send it over.</h2>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <a href={`tel:${PHONE_HREF}`}>{PHONE_DISPLAY}</a>
      </div>
      <footer>&copy; 2026 Kush Singh</footer>
    </section>
  );
}
