import { navLinks } from "../data/content";

export default function Nav() {
  return (
    <nav>
      <a className="logo" href="#top" aria-label="Kush Singh, home">
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect x="2" y="2" width="44" height="44" rx="6" ry="16" style={{ fill: "var(--pri)" }} />
          <path d="M11 36h26" stroke="#FFE14D" strokeWidth="5" strokeLinecap="round" fill="none" />
          <text
            x="24"
            y="30"
            textAnchor="middle"
            fontFamily="Fraunces,Georgia,serif"
            fontWeight="800"
            fontSize="22"
            style={{ fill: "var(--onpri)" }}
          >
            KS
          </text>
        </svg>
        <span>
          Kush Singh<small>Content Writer</small>
        </span>
      </a>
      <div className="nl">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
