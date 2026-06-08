import { FaGithub } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";

import restcountries from "../../assets/images/photo/restcountries.jpg";
import landing from "../../assets/images/photo/landing-page.png";
import todo from "../../assets/images/photo/todo.jpg";
import wordle from "../../assets/images/photo/wordle.png";
import tvmaze from "../../assets/images/photo/tvmaze.png";
// import fakeShop from "../../assets/images/photo/fakeshop.png";
import weather from "../../assets/images/photo/weather.png";

import "./Projects.scss";

const projectsData = [
  {
    tech: ["React+Vite", "SCSS", "API"],
    image: restcountries,
    github: "https://github.com/p3lm3shka1/API-Countries-React-Vite",
    live: "https://rest-api-countries-react-vite.vercel.app/",
    title: "Rest Countries",
    description:
      "Implemented GET requests to the RestCountries API and used React Router for client-side navigation.",
  },
  {
    tech: ["React+Vite", "SCSS", "JSON"],
    image: landing,
    github: "https://github.com/p3lm3shka1/Landing-page-VCS-exercise-",
    live: "https://landing-page-vcs-exercise.vercel.app/",
    title: "Landing Page",
    description: "Created a responsive landing page using React and SCSS.",
  },
  {
    tech: ["React+Typescript+Vite", "SCSS", "API"],
    image: todo,
    github: "https://github.com/p3lm3shka1/Todo-ts",
    live: "https://todo-ts-prod.vercel.app/",
    title: "Full Stack Todo App (TS + Render)",
    description:
      "A fullstack Todo application built with Vite TS, and deployed on Render.",
  },
  {
    tech: ["React+Vite", "SCSS", "JSON"],
    image: wordle,
    github: "https://github.com/p3lm3shka1/wordle-game",
    live: "https://wordle-game-kohl-three.vercel.app/",
    title: "Wordle Game",
    description: "A web-based implementation of the popular Wordle game.",
  },
  {
    tech: ["JS", "CSS", "HTML"],
    image: tvmaze,
    github: "https://github.com/p3lm3shka1/TV-API-TVmaze-",
    live: "https://p3lm-tv-api-tvmaze.vercel.app/",
    title: "TV Maze API",
    description:
      "A web application for browsing TV shows using the TVMaze API.",
  },
  // {
  //   tech: ["React+Vite", "SCSS", "API", "Route"],
  //   image: fakeShop,
  //   github: "https://github.com/p3lm3shka1/Fake-Store-API-Route",
  //   live: "https://pelm-apistore.space/",
  // },
  {
    tech: ["React+Typescript+Vite", "SCSS", "API"],
    image: weather,
    github: "https://github.com/p3lm3shka1/weather-app-tsx",
    live: "https://weather-app-tsx-indol.vercel.app/",
    title: "Weather App",
    description:
      "A weather application built with React and TypeScript, utilizing an API for real-time weather data.",
  },
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <header className="projects__container container">
        <h2 className="section__title">
          Projects <span>Overview</span>
        </h2>

        <ul className="projects__grid">
          {projectsData.map((project, ind) => (
            <li className="projects__card" key={ind}>
              <section className="projects__preview">
                <img src={project.image} alt={`${project.title} preview`} />

                <div className="projects__overlay">
                  <article className="projects__overlay-content">
                    <h3 className="projects__overlay-title">{project.title}</h3>
                    <p className="projects__overlay-desc">
                      {project.description}
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
              </section>
            </li>
          ))}
        </ul>
      </header>
    </section>
  );
};

export default Projects;
