import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

import cvEng from "../assets/cv/Vitalijus-Lazarevas-ENG.pdf";
import cvLt from "../assets/cv/Vitalijus-Lazarevas-LT.pdf";

export const contacts = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/vitalijus-lazarevas",
    href: "https://www.linkedin.com/in/vitalijus-lazarevas-353857213/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/p3lm3shka1",
    href: "https://github.com/p3lm3shka1",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "Edovsky@hotmail.com",
    href: "mailto:Edovsky@hotmail.com",
  },
];

export const cvFiles = [
  { label: "English", href: cvEng },
  { label: "Lietuvių", href: cvLt },
];
