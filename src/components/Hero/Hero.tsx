import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__background"></div>
      <div className="container">
        <div className="hero__content">
          <motion.div className="hero__text" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="hero__title">
              <span className="hero__title-main">Ascend Stay</span>
              <span className="hero__title-sub">Premium Short-Term Rentals</span>
            </h1>
            <p className="hero__description">
              Fully-furnished homes for relocation, short-term, and long-term stays. We provide exceptional accommodations for business travelers and vacationers in prime locations with 5-star
              service.
            </p>
            <div className="hero__actions">
              <motion.button className="btn btn--primary" onClick={() => scrollToSection("contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get Started
              </motion.button>
              <motion.button className="btn btn--secondary" onClick={() => scrollToSection("about")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div className="hero__scroll-indicator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
        <div className="hero__scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
