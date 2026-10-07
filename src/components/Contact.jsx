import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get in touch</h2>
      <div className="section-body">
        <p className="contact-text">
          I'm looking for fintech and financial software engineering
          internships. If you work in that space, or know someone who does, a
          short note is plenty. I'm happy to share my resume or walk through any
          of these projects.
        </p>
        <div className="contact-links">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          {profile.linkedin && (
            <a
              className="btn btn-secondary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          )}
          <a
            className="btn btn-secondary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {profile.resume && (
            <a
              className="btn btn-secondary"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
