import { useState, useEffect } from "react";
import {
  HiOutlineViewList,
  HiX,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineGlobeAlt,
} from "react-icons/hi";

import logo from "../../assets/images/logos/logo.png";

import "./Navbar.scss";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme || "dark";
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState(getInitialTheme);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "lt" : "en"));
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container container">
        <a href="#hero" className="navbar__logo">
          <img src={logo} alt="Logo" />
        </a>

        <ul
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__right">
          <button className="navbar__theme" onClick={toggleTheme}>
            {theme === "dark" ? (
              <HiOutlineSun size={28} />
            ) : (
              <HiOutlineMoon size={28} />
            )}
          </button>

          <button
            className="navbar__lang"
            onClick={() => {
              setLanguage;
            }}
          >
            <HiOutlineGlobeAlt size={28} />
          </button>

          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={28} /> : <HiOutlineViewList size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
