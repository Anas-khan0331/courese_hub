"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
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
              About <span className="gradient-text">CourseHub</span>
            </h1>
            <p
              className="fade-in-up stagger-1"
              style={{
                fontSize: "1.25rem",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              We&apos;re on a mission to democratize education and empower
              learners worldwide with accessible, high-quality online courses.
            </p>
          </div>

          {/* Mission & Vision */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            <div className="card fade-in-up stagger-2">
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎯</div>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
                Our Mission
              </h2>
              <p>
                To make quality education accessible to everyone, everywhere. We
                believe that learning should be a lifelong journey, and
                we&apos;re committed to providing the tools and resources needed
                for success.
              </p>
            </div>

            <div className="card fade-in-up stagger-3">
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀</div>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
                Our Vision
              </h2>
              <p>
                To become the world&apos;s leading online learning platform,
                connecting millions of learners with expert instructors and
                creating a global community of lifelong learners.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div
            className="hero-stats fade-in-up stagger-4"
            style={{ marginBottom: "4rem" }}
          >
            <div className="stat-item">
              <div className="stat-value">50K+</div>
              <div className="stat-label">Active Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">200+</div>
              <div className="stat-label">Expert Courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">150+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>

          {/* Team Values */}
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2
              className="section-header fade-in-up"
              style={{ textAlign: "center", marginBottom: "3rem" }}
            >
              Our <span className="gradient-text">Values</span>
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div className="card fade-in-up stagger-1">
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div className="check-icon" style={{ fontSize: "1.5rem" }}>
                    💡
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                      Innovation
                    </h3>
                    <p>
                      We constantly innovate to provide the best learning
                      experience with cutting-edge technology and teaching
                      methods.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card fade-in-up stagger-2">
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div className="check-icon" style={{ fontSize: "1.5rem" }}>
                    🤝
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                      Community
                    </h3>
                    <p>
                      We foster a supportive community where learners and
                      instructors collaborate and grow together.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card fade-in-up stagger-3">
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div className="check-icon" style={{ fontSize: "1.5rem" }}>
                    ⭐
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                      Excellence
                    </h3>
                    <p>
                      We maintain the highest standards in course quality,
                      instructor expertise, and student support.
                    </p>
                  </div>
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
