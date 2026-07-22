import restcountries from "../assets/images/photo/restcountries.jpg";
import landing from "../assets/images/photo/landing-page.png";
import todo from "../assets/images/photo/todo.jpg";
import wordle from "../assets/images/photo/wordle.png";
import coffeeShop from "../assets/images/photo/coffee-shop.png";
import weather from "../assets/images/photo/weather.png";

export const projectsData = [
  {
    id: "Countries",
    tech: ["React", "SCSS", "REST API"],
    image: restcountries,
    github: "https://github.com/p3lm3shka1/API-Countries-React-Vite",
    live: "https://rest-api-countries-react-vite.vercel.app/",
  },
  {
    id: "Landing",
    tech: ["React", "SCSS", "JSON"],
    image: landing,
    github: "https://github.com/p3lm3shka1/Landing-page-VCS-exercise-",
    live: "https://landing-page-vcs-exercise.vercel.app/",
  },
  {
    id: "Todo",
    tech: ["React", "TypeScript", "SCSS"],
    image: todo,
    github: "https://github.com/p3lm3shka1/Todo-ts",
    live: "https://todo-ts-prod.vercel.app/",
  },
  {
    id: "Wordle",
    tech: ["React", "SCSS", "JSON"],
    image: wordle,
    github: "https://github.com/p3lm3shka1/wordle-game",
    live: "https://wordle-game-kohl-three.vercel.app/",
  },
  {
    id: "CoffeeShop",
    tech: ["React", "SCSS", "MongoDB", "Render"],
    image: coffeeShop,
    github: "https://github.com/p3lm3shka1/coffee-exam",
    live: "https://coffeeshop-exam.vercel.app/",
  },
  {
    id: "Weather",
    tech: ["React", "TypeScript", "SCSS", "API"],
    image: weather,
    github: "https://github.com/p3lm3shka1/weather-app-tsx",
    live: "https://weather-app-tsx-indol.vercel.app/",
  },
];
