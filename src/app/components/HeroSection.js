"use client";
import Link from "next/link";

const HeroSection = () => {
  const stats = [
    { value: "50K+", label: "Students" },
    { value: "200+", label: "Courses" },
    { value: "95%", label: "Success Rate" },
    { value: "4.9/5", label: "Rating" },
  ];

  return (
    <section className="hero section" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge fade-in-up">
            <span className="badge-dot pulse"></span>
            <span>Trusted by 50K+ students worldwide</span>
          </div>

          <h1 className="hero-title fade-in-up stagger-1">
            Master New Skills with{" "}
            <span className="gradient-text">Expert-Led Courses</span>
          </h1>

          <p className="hero-description fade-in-up stagger-2">
            Learn from industry experts and transform your career with our
            comprehensive online courses. Get lifetime access to premium
            content.
          </p>

          <div className="hero-cta fade-in-up stagger-3">
            <Link href="/courses" className="btn btn-primary">
              Browse Courses
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <button className="btn btn-secondary">
              Watch Demo
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6.667 5L13.333 10L6.667 15V5Z" fill="currentColor" />
              </svg>
            </button>
          </div>

          <div className="hero-stats fade-in-up stagger-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
