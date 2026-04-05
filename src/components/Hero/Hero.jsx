import { useEffect, useRef } from "react";
import "./Hero.scss";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    const handleMouseMove = (e) => {
      const { left, top } = hero.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      hero.style.setProperty("--spotlight-x", `${x}px`);
      hero.style.setProperty("--spotlight-y", `${y}px`);
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero__spotlight" />
      <div className="hero__content container">
        <p className="hero__greeting">Hi, my name is</p>
        <h1 className="hero__name">
          Vitalij
          <br />
          <span>Lazarev</span>
        </h1>
        <h2 className="hero__role">Frontend Developer</h2>

        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
