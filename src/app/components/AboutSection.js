"use client";
import { useState, useEffect } from "react";

const AboutSection = () => {
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

    const element = document.getElementById("about");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className={isVisible ? "fade-in-up" : ""}>
              Empowering Learners{" "}
              <span className="gradient-text">Worldwide</span>
            </h2>

            <p className={isVisible ? "fade-in-up stagger-1" : ""}>
              We&apos;re on a mission to make quality education accessible to
              everyone. Our platform connects passionate learners with expert
              instructors from around the globe.
            </p>

            <div
              className={`about-features ${
                isVisible ? "fade-in-up stagger-2" : ""
              }`}
            >
              <div className="about-feature">
                <div className="check-icon">✓</div>
                <div>
                  <h4>Learn at Your Pace</h4>
                  <p>
                    Flexible learning schedules that fit your lifestyle and
                    commitments
                  </p>
                </div>
              </div>

              <div className="about-feature">
                <div className="check-icon">✓</div>
                <div>
                  <h4>Industry-Relevant Skills</h4>
                  <p>
                    Courses designed with input from leading companies and
                    professionals
                  </p>
                </div>
              </div>

              <div className="about-feature">
                <div className="check-icon">✓</div>
                <div>
                  <h4>Proven Results</h4>
                  <p>
                    95% of our students report career advancement within 6
                    months
                  </p>
                </div>
              </div>
            </div>

            <button
              className={`btn btn-primary ${
                isVisible ? "fade-in-up stagger-3" : ""
              }`}
            >
              Learn More About Us
            </button>
          </div>

          <div className="about-visual">
            <div
              className={`about-image ${
                isVisible ? "fade-in-up stagger-2" : ""
              }`}
            >
              <div className="image-placeholder">
                <div className="placeholder-grid">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="grid-item"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
