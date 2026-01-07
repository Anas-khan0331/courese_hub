"use client";
import Link from "next/link";

import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="logo">
            <span className="logo-text">CourseHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <button className="btn btn-primary">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span
              style={{
                transform: mobileMenuOpen
                  ? "rotate(45deg) translateY(8px)"
                  : "none",
              }}
            ></span>
            <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
            <span
              style={{
                transform: mobileMenuOpen
                  ? "rotate(-45deg) translateY(-8px)"
                  : "none",
              }}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/courses" onClick={() => setMobileMenuOpen(false)}>
              Courses
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <button className="btn btn-primary">Get Started</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
