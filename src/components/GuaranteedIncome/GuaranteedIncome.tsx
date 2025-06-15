import React from "react";
import { motion } from "framer-motion";
import "./GuaranteedIncome.scss";

const GuaranteedIncome: React.FC = () => {
  return (
    <section className="guaranteed-income section">
      <div className="container">
        <div className="guaranteed-income__content">
          <motion.div className="guaranteed-income__image" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="guaranteed-income__image-placeholder">
              <img
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern property with financial documents"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div className="guaranteed-income__text" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <div className="guaranteed-income__header">
              <h2>Guaranteed Rental Income</h2>
              <div className="guaranteed-income__divider"></div>
            </div>

            <div className="guaranteed-income__feature">
              <h3>Reliable Monthly Returns</h3>
              <p>
                Maximize your property investment with our guaranteed rental income program. We provide consistent monthly payments regardless of occupancy rates, giving you peace of mind and
                predictable cash flow. Our professional management ensures your property is always market-ready and generating optimal returns while maintaining the highest standards of care and
                maintenance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteedIncome;
