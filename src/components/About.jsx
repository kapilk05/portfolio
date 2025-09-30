import React from "react";

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "80px 20px", background: "#f3f4f6" }}>
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
            <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
              Recent Computer Engineering graduate with strong foundation in
              machine learning, data analytics, and software development. Over
              four years, I've combined technical research with leadership in
              business and student-led initiatives.
            </p>
            <p style={{ fontSize: "16px", color: "#555" }}>
              My journey includes published research on neural networks,
              impactful ML projects, and leadership roles across
              entrepreneurship and technical cells. Passionate about using data
              to solve real-world problems.
            </p>
          </div>

          {/* Right Side - Quick Facts */}
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "30px",
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
