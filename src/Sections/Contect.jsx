import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <>
      <style>{`
        .contact {
          width: 100%;
          padding: 80px 7%;
          background: #f8fafc;
        }

        .contact-heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .contact-heading h2 {
          font-size: 36px;
          color: #111827;
          margin-bottom: 12px;
        }

        .contact-heading p {
          color: #666;
          font-size: 16px;
        }

        .contact-container {
          max-width: 650px;
          margin: auto;
          padding: 35px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.04);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 15px;
          font-weight: 600;
          color: #111827;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 13px 15px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 15px;
          font-family: inherit;
          outline: none;
          transition: 0.3s;
        }

        .contact-btn {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 8px;
          background: green;
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .contact-btn:hover {
          background: darkgreen;
          transform: translateY(-2px);
        }

        .success-message {
          padding: 15px;
          margin-bottom: 20px;
          border: 1px solid #86efac;
          border-radius: 8px;
          background: #dcfce7;
          color: #166534;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
        }

        .footer {
          width: 100%;
          padding: 20px 7% 20px;
          background: #111827;
          color: white;
          text-align: center;
        }

        .footer-bottom p {
          color: #9ca3af;
          font-size: 14px;
        }

        @media (max-width: 768px) {

          .contact {
            padding: 55px 20px;
          }

          .contact-heading h2 {
            font-size: 29px;
          }

          .contact-heading p {
            font-size: 14px;
          }

          .contact-container {
            padding: 25px 18px;
          }
        }

      `}</style>

      <section className="contact" id="contect">
        <div className="contact-heading">
          <h2>Contect Us</h2>
          <p>
            Have a project in mind? Let's talk!
          </p>
        </div>
        <div className="contact-container">
          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been submitted successfully.
            </div>
          )}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-btn">
              Submit Message
            </button>
          </form>
        </div>

      </section>

      <footer className="footer">
          <p>
            © 2026 My Website. All Rights Reserved.
          </p>
      </footer>
    </>
  );
}

export default Contact;