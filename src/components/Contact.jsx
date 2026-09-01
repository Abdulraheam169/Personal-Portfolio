import React, { useState } from "react";
import { personalInfo } from "../data";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
// import "./App.css";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thanks for reaching out! I will get back to you soon.");
    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Let's Build Something</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-text">
            I'm currently looking for new opportunities to join a professional
            team. Whether you have a project in mind, a role to fill, or just
            want to say hi, my inbox is open!
          </p>
          <div className="social-links">
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            {/* <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a> */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>{" "}
            <a
              href={personalInfo.telegram}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>{" "}
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <textarea
              rows="5"
              placeholder="How can I help you?"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Send Message
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
