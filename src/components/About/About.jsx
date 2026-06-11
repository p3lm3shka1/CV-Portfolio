import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

import profilePhoto from "../../assets/images/photo/profile-photo.jpg";

import { contacts, cvFiles } from "../../data/aboutData";
import { useLang } from "../../contexts/LanguageContext";

import "./About.scss";

const About = () => {
  const [cvOpen, setCvOpen] = useState(false);
  const { lang, trans } = useLang();

  return (
    <section className="about section" id="about">
      <header className="about__container container">
        <h2 className="section__title">
          {trans.about.title} {""}
          <span>{trans.about.titleAccent}</span>
        </h2>

        <section className="about__content">
          <div className="about__image">
            <img src={profilePhoto} alt="Vitalij Lazarev" />
          </div>

          <aside className="about__info">
            <section className="about__text">
              <p>{trans.about.text1}</p>
              <p>
                {trans.about.text2} <span>{trans.about.text2Accent}</span>
              </p>
              <p>{trans.about.text3}</p>
            </section>
            <section className="about__contacts">
              {contacts.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  className="about__contact-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon && (
                    <div className="about__contact-icon">
                      {<item.icon size={20} />}
                    </div>
                  )}

                  <div className="about__contact-info">
                    <span className="about__contact-label">{item.label}</span>
                    <span className="about__contact-value">{item.value}</span>
                  </div>
                </a>
              ))}

              <nav className="about__cv-wrapper">
                <button
                  className={`about__contact-card about__contact-card--cv ${cvOpen ? "active" : ""}`}
                  onClick={() => setCvOpen(!cvOpen)}
                >
                  <div className="about__contact-icon">
                    <SiReaddotcv size={20} />
                  </div>
                  <section className="about__contact-info">
                    <span className="about__contact-label">
                      {trans.about.cvLabel}
                    </span>
                    <span className="about__contact-value">
                      {trans.about.cvValue}
                    </span>
                  </section>
                  <span
                    className={`about__cv-arrow ${cvOpen ? "about__cv-arrow--open" : ""}`}
                  >
                    ›
                  </span>
                </button>

                <menu
                  className={`about__cv-dropdown ${cvOpen ? "about__cv-dropdown--open" : ""}`}
                >
                  <li>
                    {cvFiles.map((cv) => (
                      <a
                        href={cv.href}
                        key={cv.label}
                        className="about__cv-option"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        {cv.label}
                      </a>
                    ))}
                  </li>
                </menu>
              </nav>
            </section>
          </aside>
        </section>
      </header>
    </section>
  );
};

export default About;
