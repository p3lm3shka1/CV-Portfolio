import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

import { useLang } from "../../contexts/LanguageContext";

import profilePhoto from "../../assets/images/photo/profile-photo.jpg";

import cvEng from "../../assets/cv/Vitalijus-Lazarevas-ENG.pdf";
import cvLt from "../../assets/cv/Vitalijus-Lazarevas-LT.pdf";

import "./About.scss";

const contacts = [
  {
    icon: <FaLinkedinIn size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/vitalij-lazarev-353857213",
    href: "https://www.linkedin.com/in/vitalijus-lazarevas-353857213/",
  },
  {
    icon: <FaGithub size={20} />,
    label: "GitHub",
    value: "github.com/p3lm3shka1",
    href: "https://github.com/p3lm3shka1",
  },
  {
    icon: <FaEnvelope size={20} />,
    label: "Email",
    value: "edovsky@hotmail.com",
    href: "mailto:edovsky@hotmail.com",
  },
];

const cvFiles = [
  { label: " English", href: cvEng },
  { label: " Lietuvių", href: cvLt },
];

function About() {
  const [cvOpen, setCvOpen] = useState(false);
  const { t } = useLang();

  return (
    <section className="about section" id="about">
      <header className="about__container container">
        <h2 className="section__title">
          {t.about.title} <span>{t.about.titleAccent}</span>
        </h2>

        <article className="about__content">
          <figure className="about__image">
            <img src={profilePhoto} alt="Vitalij Lazarev" />
          </figure>

          <aside className="about__info">
            <article className="about__text">
              <p>{t.about.text1}</p>
              <p>
                {t.about.text2}
                <span>{t.about.text2Accent}</span>
              </p>
              <p>{t.about.text3}</p>
            </article>

            <address className="about__contacts">
              {contacts.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  className="about__contact-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="about__contact-icon">{item.icon}</figure>
                  <figcaption className="about__contact-info">
                    <span className="about__contact-label">{item.label}</span>
                    <span className="about__contact-value">{item.value}</span>
                  </figcaption>
                </a>
              ))}

              <nav className="about__cv-wrapper">
                <button
                  className={`about__contact-card about__contact-card--cv ${cvOpen ? "active" : ""}`}
                  onClick={() => setCvOpen(!cvOpen)}
                >
                  <figure className="about__contact-icon">
                    <SiReaddotcv size={20} />
                  </figure>
                  <section className="about__contact-info">
                    <span className="about__contact-label">CV</span>
                    <span className="about__contact-value">
                      {t.about.cvValue}
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
            </address>
          </aside>
        </article>
      </header>
    </section>
  );
}

export default About;
