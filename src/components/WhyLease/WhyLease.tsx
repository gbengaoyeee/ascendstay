import React from "react";
import { motion } from "framer-motion";
import "./WhyLease.scss";

const WhyLease: React.FC = () => {
  return (
    <section className="why-lease section">
      <div className="container">
        <div className="why-lease__content">
          <motion.div className="why-lease__image" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="why-lease__image-placeholder">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Beautiful modern living room interior"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div className="why-lease__text" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <div className="why-lease__header">
              <h2>Why Should I Lease My Property To You?</h2>
              <div className="why-lease__divider"></div>
            </div>

            <div className="why-lease__feature">
              <h3>Less Wear & Tears</h3>
              <p>
                Experience less wear and tear on your property as our cleaning staff ensures that your property is in top-notch condition on a daily basis. Many landlords are surprised to find their
                property in poor condition after a two-year tenant moves out, but with our dedicated cleaning staff, you can be rest assured that your property will remain in excellent condition for
                our guests throughout their stay.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyLease;
