import { FaGithub } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";

import restcountries from "../../assets/images/photo/restcountries.jpg";
import bookmark from "../../assets/images/photo/bookmark.jpg";
import todo from "../../assets/images/photo/todo.jpg";
import extensions from "../../assets/images/photo/extensions.jpg";
import tvmaze from "../../assets/images/photo/tvmaze.png";
import ecommerce from "../../assets/images/photo/ecommerce.jpg";

import "./Projects.scss";

const projectsData = [
  {
    title: "API-Countries-React-Vite",
    description:
      "I used GET requests to the RestCountriesAPI and React Router for page navigation.",
    tech: ["React+Vite", "SCSS", "REST API"],
    image: restcountries,
    github: "https://github.com/p3lm3shka1/API-Countries-React-Vite",
    live: "https://rest-api-countries-react-vite.vercel.app/",
  },
  {
    title: "Bookmark-landing-page",
    description: "A responsive Frontend Mentor challenge of landing page",
    tech: ["React+Vite", "Tailwind CSS"],
    image: bookmark,
    github: "https://github.com/p3lm3shka1/Bookmark-landing-page-master",
    live: "https://bookmark-page-react-tailwind.vercel.app/",
  },
  {
    title: "React Todo App",
    description:
      "Challenge Todo App, featuring dark/light theme switching, todo filtering, and localStorage persistence.",
    tech: ["React+Vite", "SCSS", "JS"],
    image: todo,
    github: "https://github.com/p3lm3shka1/React-Todo-with-Local-Storage",
    live: "https://react-todo-rust-chi.vercel.app/",
  },
  {
    title: "Browser Extension",
    description:
      "Browser extension with filtering All/Active/Inactive and theme switching.",
    tech: ["JS", "CSS", "HTML"],
    image: extensions,
    github: "https://github.com/p3lm3shka1/browser-ext",
    live: "https://browser-ext.vercel.app/",
  },
  {
    title: "TV Maze API",
    description: "A simple web app for browsing TV shows using the TVMaze API.",
    tech: ["JS", "CSS", "HTML"],
    image: tvmaze,
    github: "https://github.com/p3lm3shka1/TV-API-TVmaze-",
    live: "https://p3lm-tv-api-tvmaze.vercel.app/",
  },
  {
    title: "E-commerce Product Page",
    description:
      "Product page with interactive image gallery and shopping cart functionality.",
    tech: ["React+Vite", "SCSS"],
    image: ecommerce,
    github:
      "https://github.com/p3lm3shka1/-E-commerce-product-page-React-Vite-pelme",
    live: "https://e-commerce-product-page-react-vite.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <header className="projects__container container">
        <h2 className="section__title">
          My <span>Projects</span>
        </h2>

        <ul className="projects__grid">
          {projectsData.map((project, ind) => (
            <li className="projects__card" key={ind}>
              <figure className="projects__preview">
                <img src={project.image} alt={`${project.title} preview`} />

                <figcaption className="projects__overlay">
                  <article className="projects__overlay-content">
                    <h3 className="projects__overlay-title">{project.title}</h3>
                    <p className="projects__overlay-desc">
                      {project.description}
                    </p>
                    <ul className="projects__overlay-tech">
                      {project.tech.map((t) => (
                        <li key={t}>{t}</li>
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
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </header>
    </section>
  );
}

export default Projects;
