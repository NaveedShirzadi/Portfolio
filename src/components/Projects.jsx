import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="section-body project-list">
        {projects.map((project) => (
          <article key={project.name} className="project">
            <h3>{project.name}</h3>
            <p className="project-period">{project.period}</p>
            <p className="project-description">{project.description}</p>
            <ul className="tag-row">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
            {project.link && (
              <a
                className="text-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
