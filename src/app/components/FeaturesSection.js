"use client";
import { useState, useEffect } from "react";

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("features");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🎯",
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of real-world experience and proven track records.",
    },
    {
      icon: "📚",
      title: "Lifetime Access",
      description:
        "Get unlimited access to all course materials, updates, and resources forever.",
    },
    {
      icon: "🎥",
      title: "HD Video Lessons",
      description:
        "High-quality video content with crystal-clear audio and professional production.",
    },
    {
      icon: "💬",
      title: "Community Support",
      description:
        "Join a vibrant community of learners and get help from peers and instructors.",
    },
    {
      icon: "📜",
      title: "Certificates",
      description:
        "Earn industry-recognized certificates upon course completion to boost your career.",
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description:
        "Access career resources, job boards, and networking opportunities to advance your career.",
    },
  ];

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className={isVisible ? "fade-in-up" : ""}>
            Why Choose <span className="gradient-text">Our Platform</span>
          </h2>
          <p className={isVisible ? "fade-in-up stagger-1" : ""}>
            Everything you need to succeed in your learning journey and achieve
            your career goals
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card card ${
                isVisible ? `fade-in-up stagger-${index + 1}` : ""
              }`}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
