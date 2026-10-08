import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "../data/content";
import { projects } from "../data/projects";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <h1>
        Words that make people <span className="hl">read, trust and act.</span>
      </h1>
      <p className="lede">
        I'm Kush Singh, a content writer. I write blogs, website copy, emails, social posts, ads and scripts for brands
        that want clear writing with a point of view.
      </p>
      <div className="cta">
        <a className="btn p" href="#work">
          Read my work
        </a>
        <a className="btn" href={`mailto:${EMAIL}`}>
          Email me
        </a>
        <a className="btn" href={`tel:${PHONE_HREF}`}>
          {`Call ${PHONE_DISPLAY}`}
        </a>
      </div>
      <div className="facts">
        <span>
          <b>{projects.length}</b>writing samples
        </span>
        <span>
          <b>6</b>content formats
        </span>
        <span>
          <b>SEO</b>and brand voice
        </span>
      </div>
    </header>
  );
}
