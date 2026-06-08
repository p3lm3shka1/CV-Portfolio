import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

import profilePhoto from "../../assets/images/photo/profile-photo.jpg";

import cvEng from "../../assets/cv/Vitalijus-Lazarevas-ENG.pdf";
import cvLt from "../../assets/cv/Vitalijus-Lazarevas-LT.pdf";

import "./About.scss";

const contacts = [
  {
    icon: <FaLinkedinIn size={20} />,
    label: "LinkedIn",
    value: "Linkedin.com/in/vitalijus-lazarevas",
    href: "https://www.linkedin.com/in/vitalijus-lazarevas-353857213/",
  },
  {
    icon: <FaGithub size={20} />,
    label: "GitHub",
    value: "Github.com/p3lm3shka1",
    href: "https://github.com/p3lm3shka1",
  },
  {
    icon: <FaEnvelope size={20} />,
    label: "Email",
    value: "Edovsky@hotmail.com",
    href: "mailto:Edovsky@hotmail.com",
  },
];

const cvFiles = [
  { label: " English", href: cvEng },
  { label: " Lietuvių", href: cvLt },
];

function About() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="about section" id="about">
      <header className="about__container container">
        <h2 className="section__title">
          About {""}
          <span>Me</span>
        </h2>

        <article className="about__content">
          <div className="about__image">
            <img src={profilePhoto} alt="Vitalij Lazarev" />
          </div>

          <aside className="about__info">
            <article className="about__text">
              <p>
                I am a Junior Full Stack Developer currently studying at Vilnius
                Coding School in the JavaScript Full Stack program. I specialize
                in frontend development, focusing on modern technologies and
                best practices.
              </p>
              <p>
                <span> Now improving my skills in backend development..</span>
              </p>
              <p>
                In my free time, I'm continuously expanding my knowledge by
                learning new technologies and improving my technical skills.
              </p>
            </article>
            <section className="about__contacts">
              {contacts.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  className="about__contact-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="about__contact-icon">{item.icon}</div>
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
                    <span className="about__contact-label">CV</span>
                    <span className="about__contact-value">View CV</span>
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
        </article>
      </header>
    </section>
  );
}

export default About;
