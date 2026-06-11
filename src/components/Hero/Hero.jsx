import { useRef } from "react";
import { useLang } from "../../contexts/LanguageContext";

import "./Hero.scss";

const Hero = () => {
  const heroRef = useRef(null);
  const { trans } = useLang();

  const handleMouseMove = (e) => {
    const flashlight = heroRef.current;
    if (!flashlight) return;

    const { left, top } = flashlight.getBoundingClientRect();
    flashlight.style.setProperty("--spotlight-x", `${e.clientX - left}px`);
    flashlight.style.setProperty("--spotlight-y", `${e.clientY - top}px`);
  };

  return (
    <section
      className="hero"
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      <div className="hero__spotlight" />
      <div className="hero__content container">
        <p className="hero__greeting">{trans.hero.greeting}</p>
        <h1 className="hero__name">
          {trans.hero.name}
          <br />
          <span>{trans.hero.surname}</span>
        </h1>
        <h2 className="hero__role">{trans.hero.role}</h2>

        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            {trans.hero.viewProjects}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
