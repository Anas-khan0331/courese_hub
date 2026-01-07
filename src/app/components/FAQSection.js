"use client";
import { useState, useEffect } from "react";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);
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

    const element = document.getElementById("faq");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "Simply browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. You'll get instant access to all course materials upon enrollment.",
    },
    {
      question: "Do I get lifetime access to courses?",
      answer:
        "Yes! Once you enroll in a course, you get lifetime access to all course materials, including future updates and additions. Learn at your own pace, anytime, anywhere.",
    },
    {
      question: "Are certificates provided upon completion?",
      answer:
        "Absolutely! Upon completing a course, you'll receive an industry-recognized certificate that you can share on LinkedIn, add to your resume, or showcase to potential employers.",
    },
    {
      question: "What if I need help during the course?",
      answer:
        "We provide 24/7 support through our community forums, where you can ask questions and get help from instructors and fellow students. Premium courses also include direct instructor support.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes! We offer a 30-day money-back guarantee. If you're not completely satisfied with your course, simply contact our support team within 30 days of purchase for a full refund.",
    },
  ];

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className={isVisible ? "fade-in-up" : ""}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className={isVisible ? "fade-in-up stagger-1" : ""}>
            Got questions? We&apos;ve got answers. Can&apos;t find what
            you&apos;re looking for? Contact our support team.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openFaq === index ? "active" : ""} ${
                isVisible ? `fade-in-up stagger-${index + 1}` : ""
              }`}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div
                  className={`faq-icon ${openFaq === index ? "rotate" : ""}`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className={`faq-answer ${openFaq === index ? "show" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
