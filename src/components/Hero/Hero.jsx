import { useRef } from "react";

import "./Hero.scss";

const Hero = () => {
  const heroRef = useRef("");

  const handleMouseMove = (e) => {
    const flashlight = heroRef.current;

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
        <p className="hero__greeting">Hi, my name is</p>
        <h1 className="hero__name">
          Vitalijus
          <br />
          <span>Lazarev</span>
        </h1>
        <h2 className="hero__role">Junior Web Developer</h2>
        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
