import React from "react";
import { useTheme } from "./theme-provider";

export default function AboutSection() {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        backgroundColor: "var(--app-bg)",
        color: "var(--app-text)",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          About Me
        </h2>

        {/* Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Left Side - Text */}
          <div>
            <p style={{ fontSize: "16px", color: "var(--app-text)", marginBottom: "20px" }}>
              As a Computer Engineering graduate with a focus on AI and Machine Learning,
              I've developed a unique blend of technical expertise and practical implementation
              skills. My research in neural networks has been published, and I've successfully
              applied these concepts to real-world projects in computer vision and natural
              language processing.
            </p>
            <p style={{ fontSize: "16px", color: "var(--app-text)", marginBottom: "20px" }}>
              Beyond the code, I've taken on leadership roles that have shaped my
              understanding of technology's business impact. As the Vice Chairperson of
              Marketing at E-Cell DJSCE, I learned to bridge the gap between technical
              innovation and market needs. My experience extends to organizing technical
              events and mentoring junior developers.
            </p>
            <p style={{ fontSize: "16px", color: "var(--app-text)" }}>
              I'm particularly interested in the ethical implications of AI and actively
              work towards developing responsible AI systems. In my free time, I contribute
              to open-source projects and share my knowledge through technical writing
              and community workshops.
            </p>
          </div>

          {/* Right Side - Quick Facts */}
          <div
            style={{
              backgroundColor: theme === "dark" ? "#23272f" : "#f3f4f6",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "30px",
              color: theme === "dark" ? "#f3f4f6" : "#18181b",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#06b6d4",
              }}
            >
              Quick Facts
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ marginRight: "10px" }}>📍</span>
                Mumbai, Maharashtra, India
              </li>
              <li style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ marginRight: "10px" }}>✉️</span>
                kapilkashyap3105@gmail.com
              </li>
              <li style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ marginRight: "10px" }}>📞</span>
                +91 8591425664
              </li>
              <li style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ marginRight: "10px" }}>🔗</span>
                linkedin.com/in/kapilkashyap05
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
