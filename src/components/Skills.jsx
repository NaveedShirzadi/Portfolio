import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Toolkit</h2>
      <dl className="section-body skills-list">
        {skills.map((row) => (
          <div key={row.group} className="skills-row">
            <dt>{row.group}</dt>
            <dd>
              <ul className="tag-row">
                {row.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
