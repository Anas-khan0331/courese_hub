"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const PopularCoursesSection = () => {
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

    const element = document.getElementById("popular-courses");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: "15,234",
      price: "$99",
      image: "💻",
      category: "Development",
      duration: "40 hours",
    },
    {
      title: "UI/UX Design Masterclass",
      instructor: "Mike Chen",
      rating: 4.8,
      students: "12,456",
      price: "$89",
      image: "🎨",
      category: "Design",
      duration: "32 hours",
    },
    {
      title: "Digital Marketing Pro",
      instructor: "Emma Davis",
      rating: 4.9,
      students: "18,901",
      price: "$79",
      image: "📱",
      category: "Marketing",
      duration: "28 hours",
    },
  ];

  return (
    <section
      className="section"
      id="popular-courses"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, var(--color-bg-secondary) 100%)",
      }}
    >
      <div className="container">
        <div className="section-header">
          <h2 className={isVisible ? "fade-in-up" : ""}>
            Most Popular <span className="gradient-text">Courses</span>
          </h2>
          <p className={isVisible ? "fade-in-up stagger-1" : ""}>
            Join thousands of students learning from our top-rated courses
          </p>
        </div>

        <div className="features-grid" style={{ marginBottom: "3rem" }}>
          {courses.map((course, index) => (
            <div
              key={index}
              className={`card ${
                isVisible ? `fade-in-up stagger-${index + 2}` : ""
              }`}
            >
              {/* Course Image */}
              <div
                style={{
                  position: "relative",
                  height: "200px",
                  background: "var(--gradient-primary)",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  opacity: 0.2,
                }}
              >
                <div
                  style={{ fontSize: "5rem", position: "relative", zIndex: 1 }}
                >
                  {course.image}
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    padding: "0.25rem 0.75rem",
                    background: "var(--color-primary)",
                    color: "white",
                    borderRadius: "50px",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  {course.category}
                </div>
              </div>

              {/* Course Info */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {course.title}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <span>👨‍🏫</span>
                  <span>{course.instructor}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                  }}
                >
                  <span>⭐</span>
                  <span
                    style={{
                      color: "var(--color-text-primary)",
                      fontWeight: "600",
                    }}
                  >
                    {course.rating}
                  </span>
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    ({course.students})
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <span>⏱️</span>
                  <span>{course.duration}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="gradient-text"
                    style={{ fontSize: "1.75rem", fontWeight: "700" }}
                  >
                    {course.price}
                  </span>
                  <Link href="/courses" className="btn btn-primary">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{ textAlign: "center" }}
          className={isVisible ? "fade-in-up stagger-5" : ""}
        >
          <Link href="/courses" className="btn btn-primary">
            View All Courses
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
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;
