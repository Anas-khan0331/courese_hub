"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Development",
    "Design",
    "Marketing",
    "Business",
    "Data Science",
  ];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: "15,234",
      price: "$99",
      image: "💻",
      category: "Development",
      duration: "40 hours",
      level: "Beginner",
      description:
        "Master HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive bootcamp.",
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "Mike Chen",
      rating: 4.8,
      students: "12,456",
      price: "$89",
      image: "🎨",
      category: "Design",
      duration: "32 hours",
      level: "Intermediate",
      description:
        "Learn user interface and user experience design from industry experts.",
    },
    {
      id: 3,
      title: "Digital Marketing Pro",
      instructor: "Emma Davis",
      rating: 4.9,
      students: "18,901",
      price: "$79",
      image: "📱",
      category: "Marketing",
      duration: "28 hours",
      level: "Beginner",
      description:
        "Master SEO, social media marketing, email campaigns, and analytics.",
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Dr. James Wilson",
      rating: 4.9,
      students: "14,567",
      price: "$109",
      image: "📊",
      category: "Data Science",
      duration: "45 hours",
      level: "Intermediate",
      description:
        "Learn Python, pandas, NumPy, and machine learning fundamentals.",
    },
    {
      id: 5,
      title: "Business Strategy Essentials",
      instructor: "Lisa Anderson",
      rating: 4.7,
      students: "9,234",
      price: "$69",
      image: "💼",
      category: "Business",
      duration: "24 hours",
      level: "Beginner",
      description: "Develop strategic thinking and business planning skills.",
    },
    {
      id: 6,
      title: "Advanced React & Next.js",
      instructor: "Tom Rodriguez",
      rating: 4.9,
      students: "11,890",
      price: "$119",
      image: "⚛️",
      category: "Development",
      duration: "38 hours",
      level: "Advanced",
      description:
        "Build modern web applications with React, Next.js, and TypeScript.",
    },
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="landing-page">
      <div className="animated-bg"></div>
      <Header />

      <main className="section" style={{ paddingTop: "120px" }}>
        <div className="container">
          {/* Hero Section */}
          <div className="section-header" style={{ marginBottom: "3rem" }}>
            <h1
              className="fade-in-up"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Explore Our <span className="gradient-text">Courses</span>
            </h1>
            <p className="fade-in-up stagger-1" style={{ fontSize: "1.25rem" }}>
              Choose from over 200 expert-led courses and start your learning
              journey today
            </p>
          </div>

          {/* Category Filter */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "3rem",
            }}
            className="fade-in-up stagger-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "btn btn-primary"
                    : "btn btn-secondary"
                }
                style={{ minWidth: "120px" }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="features-grid" style={{ marginBottom: "4rem" }}>
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className={`card fade-in-up stagger-${index + 3}`}
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
                    style={{
                      fontSize: "5rem",
                      position: "relative",
                      zIndex: 1,
                    }}
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
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      padding: "0.25rem 0.75rem",
                      background: "var(--color-secondary)",
                      color: "white",
                      borderRadius: "50px",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                    }}
                  >
                    {course.level}
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

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: "1.6",
                    }}
                  >
                    {course.description}
                  </p>

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
                      ({course.students} students)
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
                    <button className="btn btn-primary">Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className="cta-content card"
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <h2 style={{ marginBottom: "1rem" }}>
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Contact us and we&apos;ll help you find the perfect course for
              your needs
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
