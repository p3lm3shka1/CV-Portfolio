import { useState } from "react";
import { useLang } from "../../contexts/LanguageContext";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import profilePhoto from "../../assets/images/photo/profile-photo.jpg";

import "./About.scss";

const contacts = [
  {
    icon: <FaLinkedinIn size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/vitalij-lazarev-353857213",
    href: "https://www.linkedin.com/in/vitalij-lazarev-353857213/",
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
  { label: " English", href: "/cv/vitalij-lazarev-ENG.pdf" },
  { label: " Lietuvių", href: "/cv/vitalij-lazarev-LT.pdf" },
];

function About() {
  const { t } = useLang();
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="about section" id="about">
      <div className="about__container container">
        <h2 className="section__title">
          {t.about.title} <span>{t.about.titleAccent}</span>
        </h2>

        <div className="about__content">
          <div className="about__image">
            <img src={profilePhoto} alt="Vitalij Lazarev" />
          </div>

          <div className="about__info">
            <div className="about__text">
              <p>{t.about.text1}</p>
              <p>
                {t.about.text2} <span>{t.about.text2Accent}</span>
              </p>
              <p>{t.about.text3}</p>
            </div>

            <div className="about__contacts">
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

              <div className="about__cv-wrapper">
                <button
                  className={`about__contact-card about__contact-card--cv ${cvOpen ? "active" : ""}`}
                  onClick={() => setCvOpen(!cvOpen)}
                >
                  <div className="about__contact-icon">
                    <SiReaddotcv size={20} />
                  </div>
                  <div className="about__contact-info">
                    <span className="about__contact-label">CV</span>
                    <span className="about__contact-value">Download CV</span>
                  </div>
                  <span
                    className={`about__cv-arrow ${cvOpen ? "about__cv-arrow--open" : ""}`}
                  >
                    ›
                  </span>
                </button>

                <div
                  className={`about__cv-dropdown ${cvOpen ? "about__cv-dropdown--open" : ""}`}
                >
                  <div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
