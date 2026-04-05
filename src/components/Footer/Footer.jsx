import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/images/logos/logo.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <a href="#hero" className="footer__logo">
            <img src={logo} alt="Vitalij Lazarev Logo" />
          </a>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/vitalij-lazarev-353857213/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/p3lm3shka1"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a href="mailto:edovsky@hotmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Vitalij Lazarev.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
