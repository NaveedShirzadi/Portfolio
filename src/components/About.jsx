import { profile } from "../data";

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="section-body about-body">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
