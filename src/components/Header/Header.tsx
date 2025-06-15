import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import logo from "../../assets/images/logo-transparent.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header className={`header ${isScrolled ? "header--scrolled" : ""}`} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            {/* <h1>Ascend Stay</h1> */}
            <img src={logo} alt="Ascend Stay" className="header__logo-img" />
           
           
          </div>

          <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
            <ul className="header__nav-list">
              <li>
                <button onClick={() => scrollToSection("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")}>About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("benefits")}>Benefits</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")}>Contact</button>
              </li>
            </ul>
          </nav>

          <button className={`header__mobile-toggle ${isMenuOpen ? "header__mobile-toggle--open" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
