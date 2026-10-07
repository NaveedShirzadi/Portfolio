import { profile, glance } from "../data";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <h1>{profile.name}</h1>
        <p className="hero-lede">{profile.headline}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Get in touch
          </a>
          <a className="btn btn-secondary" href="#projects">
            See my work
          </a>
          {profile.resume && (
            <a
              className="btn btn-secondary"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              Download resume
            </a>
          )}
        </div>
      </div>
      <dl className="ledger">
        {glance.map((row) => (
          <div key={row.label} className="ledger-row">
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
