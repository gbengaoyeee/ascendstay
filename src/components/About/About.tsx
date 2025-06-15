import React from "react";
import { motion } from "framer-motion";
import "./About.scss";

const About: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div className="about__content" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="about__header">
            <h2>About Us</h2>
            <div className="about__divider"></div>
          </div>

          <div className="about__text">
            <p>Hello &amp; Welcome, we would like to invite you to, Ascend Stay Properties.</p>

            <p>
              We provide fully-furnished homes for relocation, short-term, and long term stays for business travelers and vacationers. Our team works closely with each client to ensure that they find
              the perfect accommodations to meet their needs, all located in prime areas.
            </p>

            <p>
              For corporate clients, we offer customized corporate housing solutions for employees on extended business trips or relocations, as well as temporary housing for interns and new hires.
              For vacationers, we offer a range of homes that are perfect for families or groups of friends looking for a comfortable and Ascend vacation.
            </p>

            <p>
              Our properties are located in some of the most desirable neighborhoods in the area, and we take great pride in maintaining them to the highest standards. Keeping our guests feeling Ascended &amp;
              our properties at 5 star standard.
            </p>
          </div>

          <motion.button className="btn btn--primary" onClick={() => scrollToSection("contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
