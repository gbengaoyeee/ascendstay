import React from "react";
import { motion } from "framer-motion";
import "./Benefits.scss";

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="benefits section">
      <div className="container">
        <motion.div className="benefits__header" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2>Benefits</h2>
          <div className="benefits__divider"></div>
        </motion.div>

        <div className="benefits__content">
          <motion.div className="benefits__card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <div className="benefits__card-header">
              <h3>Trust and Safety</h3>
            </div>
            <div className="benefits__card-content">
              <p>
                We prioritize trust and safety, and to that end, we have implemented several measures to ensure your peace of mind. We install video cameras at the entrance of each unit, which monitor
                24/7 for added security. Our noise detector devices inside each unit send alerts to our local on-site support staff if noise levels exceed a certain dB level, enabling us to take
                appropriate action swiftly. In addition, we have installed smart locks on each door that generate a new code for each guest, and all codes are deleted upon checkout for added security.
              </p>
            </div>
          </motion.div>

          <motion.div className="benefits__card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
            <div className="benefits__card-header">
              <h3>Quality & Care</h3>
            </div>
            <div className="benefits__card-content">
              <p>
                We employ professional cleaning staff who are dedicated to upholding our high cleaning standards after each stay. Our team is thoroughly trained, has attention to detail, and take
                immense pride in their work. Whether it's removing tough stains, sanitizing surfaces, or refreshing the ambiance of each room, our staff has the expertise and dedication to deliver
                exceptional results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
