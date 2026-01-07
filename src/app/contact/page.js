"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="landing-page">
      <div className="animated-bg"></div>
      <Header />

      <main className="section" style={{ paddingTop: "120px" }}>
        <div className="container">
          {/* Hero Section */}
          <div className="section-header" style={{ marginBottom: "4rem" }}>
            <h1
              className="fade-in-up"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p
              className="fade-in-up stagger-1"
              style={{
                fontSize: "1.25rem",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "3rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* Contact Form */}
            <div className="card fade-in-up stagger-2">
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
                Send us a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontSize: "0.875rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      background: "var(--color-bg-tertiary)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-sm)",
                      color: "var(--color-text-primary)",
                      fontSize: "1rem",
                      transition: "border-color var(--transition-base)",
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontSize: "0.875rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      background: "var(--color-bg-tertiary)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-sm)",
                      color: "var(--color-text-primary)",
                      fontSize: "1rem",
                      transition: "border-color var(--transition-base)",
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontSize: "0.875rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      background: "var(--color-bg-tertiary)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-sm)",
                      color: "var(--color-text-primary)",
                      fontSize: "1rem",
                      transition: "border-color var(--transition-base)",
                    }}
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontSize: "0.875rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      background: "var(--color-bg-tertiary)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-sm)",
                      color: "var(--color-text-primary)",
                      fontSize: "1rem",
                      resize: "vertical",
                      transition: "border-color var(--transition-base)",
                    }}
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
              className="fade-in-up stagger-3"
            >
              <div className="card">
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div className="check-icon" style={{ fontSize: "1.5rem" }}>
                    📧
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                      Email
                    </h3>
                    <p style={{ fontSize: "0.875rem" }}>
                      support@coursehub.com
                    </p>
                    <p style={{ fontSize: "0.875rem" }}>sales@coursehub.com</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div className="check-icon" style={{ fontSize: "1.5rem" }}>
                    📱
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                      Phone
                    </h3>
                    <p style={{ fontSize: "0.875rem" }}>+1 (555) 123-4567</p>
                    <p style={{ fontSize: "0.875rem" }}>Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div className="check-icon" style={{ fontSize: "1.5rem" }}>
                    📍
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                      Office
                    </h3>
                    <p style={{ fontSize: "0.875rem" }}>123 Learning Street</p>
                    <p style={{ fontSize: "0.875rem" }}>
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                  Follow Us
                </h3>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" />
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
