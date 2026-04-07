import { useEffect, useRef } from "react";
import { useLang } from "../../contexts/LanguageContext";

import "./Hero.scss";

function Hero() {
  const { t } = useLang();
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const handleMouseMove = (e) => {
      const { left, top } = hero.getBoundingClientRect();
      hero.style.setProperty("--spotlight-x", `${e.clientX - left}px`);
      hero.style.setProperty("--spotlight-y", `${e.clientY - top}px`);
    };
    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero__spotlight" />
      <div className="hero__content container">
        <p className="hero__greeting">{t.hero.greeting}</p>
        <h1 className="hero__name">
          Vitalijus
          <br />
          <span>Lazarevas</span>
        </h1>
        <h2 className="hero__role">{t.hero.role}</h2>
        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            {t.hero.viewProjects}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
