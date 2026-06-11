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
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

export const skills = [
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
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
];
