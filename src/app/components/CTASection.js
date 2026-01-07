"use client";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-content card">
          <h2 className="fade-in-up">Ready to Start Learning?</h2>
          <p className="fade-in-up stagger-1">
            Join thousands of students already transforming their careers with
            our expert-led courses
          </p>
          <div className="cta-buttons fade-in-up stagger-2">
            <Link href="/courses" className="btn btn-primary">
              Browse Courses
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
