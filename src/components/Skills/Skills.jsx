import {
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaReact,
  FaSass,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa6";

import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import "./Skills.scss";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaSquareJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Sass", icon: <FaSass /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "Vercel", icon: <IoLogoVercel /> },
  { name: "Git", icon: <FaGitAlt /> },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="skills__container container">
        <h2 className="section__title">
          My <span>Skills</span>
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
}

export default Skills;
