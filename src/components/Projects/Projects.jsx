import { FaGithub } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";

import { useLang } from "../../contexts/LanguageContext";

import { projectsData } from "../../data/projectsData";

import "./Projects.scss";

const Projects = () => {
  const { trans } = useLang();

  return (
    <section className="projects section" id="projects">
      <div className="projects__container container">
        <header>
          <h2 className="section__title">
            {trans.projects.title} <span>{trans.projects.titleAccent}</span>
          </h2>
        </header>

        <ul className="projects__grid">
          {projectsData.map((project) => {
            const projectTrans = trans.projects.items[project.id];

            return (
              <li className="projects__card" key={project.id}>
                <div className="projects__preview">
                  <img
                    src={project.image}
                    alt={`${projectTrans.title} preview`}
                  />

                  <div className="projects__overlay">
                    <article className="projects__overlay-content">
                      <h3 className="projects__overlay-title">
                        {projectTrans.title}
                      </h3>
                      <p className="projects__overlay-desc">
                        {projectTrans.description}
                      </p>

                      <ul className="projects__overlay-tech">
                        {project.tech.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>

                      <nav className="projects__overlay-links">
                        <a
                          href={project.github}
                          aria-label="GitHub"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub size={30} />
                        </a>
                        <a
                          href={project.live}
                          aria-label="Live Demo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IoOpenOutline size={30} />
                        </a>
                      </nav>
                    </article>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
