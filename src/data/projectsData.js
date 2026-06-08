import restcountries from "../assets/images/photo/restcountries.jpg";
import landing from "../assets/images/photo/landing-page.png";
import todo from "../assets/images/photo/todo.jpg";
import wordle from "../assets/images/photo/wordle.png";
import tvmaze from "../assets/images/photo/tvmaze.png";
import weather from "../assets/images/photo/weather.png";

export const projectsData = [
  {
    tech: ["React", "Vite", "SCSS", "REST API"],
    image: restcountries,
    github: "https://github.com/p3lm3shka1/API-Countries-React-Vite",
    live: "https://rest-api-countries-react-vite.vercel.app/",
    title: "Rest Countries",
    description:
      "Implemented REST API requests and client-side navigation with React Router.",
  },
  {
    tech: ["React", "Vite", "SCSS", "JSON"],
    image: landing,
    github: "https://github.com/p3lm3shka1/Landing-page-VCS-exercise-",
    live: "https://landing-page-vcs-exercise.vercel.app/",
    title: "Landing Page",
    description: "Created a responsive landing page with React and SCSS.",
  },
  {
    tech: ["React", "TypeScript", "Vite", "SCSS", "API"],
    image: todo,
    github: "https://github.com/p3lm3shka1/Todo-ts",
    live: "https://todo-ts-prod.vercel.app/",
    title: "Full Stack Todo App",
    description:
      "A full-stack Todo application built with Vite, TypeScript, and Render.",
  },
  {
    tech: ["React", "Vite", "SCSS", "JSON"],
    image: wordle,
    github: "https://github.com/p3lm3shka1/wordle-game",
    live: "https://wordle-game-kohl-three.vercel.app/",
    title: "Wordle Game",
    description: "A web-based implementation of the popular Wordle game.",
  },
  {
    tech: ["JavaScript", "CSS", "HTML", "API"],
    image: tvmaze,
    github: "https://github.com/p3lm3shka1/TV-API-TVmaze-",
    live: "https://p3lm-tv-api-tvmaze.vercel.app/",
    title: "TV Maze API",
    description:
      "A web application for browsing TV shows using the TVMaze API.",
  },
  {
    tech: ["React", "TypeScript", "Vite", "SCSS", "API"],
    image: weather,
    github: "https://github.com/p3lm3shka1/weather-app-tsx",
    live: "https://weather-app-tsx-indol.vercel.app/",
    title: "Weather App",
    description:
      "A weather application built with React and TypeScript for real-time weather data.",
  },
];

export default projectsData;
