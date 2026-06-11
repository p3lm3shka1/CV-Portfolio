import { useLang } from "../../contexts/LanguageContext";
import { skills } from "../../data/skillsData";

import "./Skills.scss";

const Skills = () => {
  const { trans } = useLang();

  return (
    <section className="skills section" id="skills">
      <div className="skills__container container">
        <h2 className="section__title">
          {trans.skills.title} <span>{trans.skills.titleAccent}</span>
        </h2>
        <div className="skills__grid">
          {skills.map((skill) => (
            <div className="skills__card" key={skill.name}>
              <div className="skills__icon">{skill.icon}</div>
              <span className="skills__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
