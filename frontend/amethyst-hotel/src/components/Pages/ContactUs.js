import React from "react";
import Header from "../Extras/Header";
import Footer from "../Extras/Footer";
import "../styles.css";

function ContactUs() {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="heading">Contact Us</h2>
        <p className="paragraph">
          If you have any questions or inquiries, feel free to get in touch with
          us using the form below.
        </p>
        <div className="contact-form-container">
          <form className="contact-form">
            <label className="contact-form-label">Name</label>
            <input
              type="text"
              className="contact-form-input"
              placeholder="Enter your name"
            />

            <label className="contact-form-label">Email</label>
            <input
              type="email"
              className="contact-form-input"
              placeholder="Enter your email"
            />

            <label className="contact-form-label">Message</label>
            <textarea
              className="contact-form-textarea"
              placeholder="Enter your message"
            ></textarea>

            <button className="button contact-form-button">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
