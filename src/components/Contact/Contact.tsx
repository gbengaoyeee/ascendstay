import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS Configuration - Replace these with your actual EmailJS credentials
      const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID; // Replace with your EmailJS service ID
      const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Replace with your EmailJS template ID
      const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // Replace with your EmailJS public key

      const messageTemplate = `
      Hello,

You have received a new contact form submission from the Ascend Stay website.

---

Name: ${data.name}\n
Email: ${data.email}\n

Message:\n
${data.message}\n

Their phone number is ${data.phone}\n

---

This message was sent via the Ascend Stay contact form.
Best regards,
Ascend Stay Website
      `;

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: messageTemplate,
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result.text);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact__background"></div>
      <div className="container">
        <motion.div className="contact__header" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2>Contact Us</h2>
          <div className="contact__divider"></div>
        </motion.div>

        <motion.div className="contact__content" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="contact__form-group">
              <input
                type="text"
                placeholder="Name..."
                className={`contact__input ${errors.name ? "contact__input--error" : ""}`}
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters" },
                })}
              />
              {errors.name && <span className="contact__error">{errors.name.message}</span>}
            </div>

            <div className="contact__form-group">
              <input
                type="email"
                placeholder="Email..."
                className={`contact__input ${errors.email ? "contact__input--error" : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <span className="contact__error">{errors.email.message}</span>}
            </div>

            <div className="contact__form-group">
              <input
                type="tel"
                placeholder="Phone..."
                className={`contact__input ${errors.phone ? "contact__input--error" : ""}`}
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: { value: 10, message: "Phone number must be at least 10 digits" },
                })}
              />
              {errors.phone && <span className="contact__error">{errors.phone.message}</span>}
            </div>

            <div className="contact__form-group">
              <textarea
                placeholder="Message..."
                rows={5}
                className={`contact__input contact__textarea ${errors.message ? "contact__input--error" : ""}`}
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Message must be at least 10 characters" },
                })}
              />
              {errors.message && <span className="contact__error">{errors.message.message}</span>}
            </div>

            <motion.button
              type="submit"
              className="btn btn--primary contact__submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}>
              {isSubmitting ? "Sending..." : "Send"}
            </motion.button>

            {submitStatus === "success" && (
              <motion.div className="contact__success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div className="contact__error-message" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Sorry, there was an error sending your message. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
