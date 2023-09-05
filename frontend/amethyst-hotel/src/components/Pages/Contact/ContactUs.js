import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [isMessageSent, setMessageSent] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add logic to send the message here (e.g., send an API request).
    // For this example, we'll simulate a successful message send after a delay.
    setTimeout(() => {
      setMessageSent(true);
    }, 1000); // Simulate a 1-second delay

    // Optionally, you can reset the form fields here.
    e.target.reset();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="w-75">
        <h2 className="text-center mb-4">Contact Us</h2>
        {isMessageSent ? (
          <div className="alert alert-success" role="alert">
            Message sent successfully!
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="d-grid">
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
