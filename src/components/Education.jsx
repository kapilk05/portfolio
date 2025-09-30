import React from "react";

const education = [
  {
    degree: "Bachelor of Technology - Computer Engineering",
    institution: "Dwarkadas J. Sanghvi College of Engineering",
    period: "December 2021 - May 2025",
  },
  {
    degree: "Foundations of Data Science",
    institution: "IIT Madras",
    period: "May 2022 - May 2023",
  },
  {
    degree: "HSC Grade 12 PCM",
    institution: "Pace Junior Science College",
    period: "April 2019 - August 2021",
  },
];

export default function EducationSection() {
  return (
    <section style={{ padding: "80px 20px", background: "#f3f4f6" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Education
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {education.map((edu, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#06b6d4",
                  marginBottom: "8px",
                }}
              >
                {edu.degree}
              </h3>
              <p style={{ fontSize: "1.1rem", fontWeight: "500", marginBottom: "6px" }}>
                {edu.institution}
              </p>
              <p style={{ color: "#555" }}>{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
