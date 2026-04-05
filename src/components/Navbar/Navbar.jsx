import { useState, useEffect } from "react";

import "./Navbar.scss";

import logo from "../../assets/images/logos/logo.png";
import navIcon from "../../assets/images/logos/nav-icon.svg";
import closeIcon from "../../assets/images/logos/close-icon.svg";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <img src={logo} alt="Logo" className="" />
        </a>

        <ul
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <img
              src={closeIcon}
              alt="Close menu"
              className="navbar__icon--close"
            />
          ) : (
            <img src={navIcon} alt="Open menu" className="navbar__icon--open" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
