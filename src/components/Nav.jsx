import { profile } from "../data";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#involvement", label: "Involvement" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          {profile.name}
        </a>
        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          {profile.resume && (
            <a
              className="nav-resume"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
