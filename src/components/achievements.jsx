import React from "react";

const achievements = [
  {
    title: "Subject Topper",
    description: "Business Analytics securing 85/100 marks and an A Grade",
    icon: "🏆",
    color: "#facc15", // yellow
  },
  {
    title: "Global Rank 20",
    description: "Codechef Starters 135 (Div 3) - Peak Rating 1790",
    icon: "💻",
    color: "#06b6d4", // cyan
  },
  {
    title: "B-Plan Winner",
    description: "DJSCE TRINITY Business Plan Competition",
    icon: "🥇",
    color: "#22c55e", // green
  },
  {
    title: "Creative Arts",
    description: "Stage Play Writer 3rd place & Rap Battle 2nd place",
    icon: "🎭",
    color: "#a855f7", // purple
  },
  {
    title: "International Rank 3",
    description: "Informatics Olympiad",
    icon: "🌍",
    color: "#3b82f6", // blue
  },
  {
    title: "State Rank 1",
    description: "Informatics Olympiad State Level",
    icon: "🥇",
    color: "#f97316", // orange
  },
  {
    title: "State Rank 2",
    description: "Mathematics Olympiad",
    icon: "📐",
    color: "#06b6d4", // cyan
  },
  {
    title: "Multi-Olympiad Winner",
    description: "State Rank 3 in Reasoning & French Olympiads",
    icon: "🏅",
    color: "#4ade80", // light green
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Heading */}
        <div
          style={{
            background: "var(--app-bg)",
            color: "var(--app-text)",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            padding: "20px",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            fontSize: "1.5rem",
            fontWeight: 700,
            justifyContent: "center"
          }}
        >
          Achievements
        </div>

        {/* Horizontal scroll container */}
        <div style={{ overflowX: "auto", paddingBottom: "16px" }}>
          <div style={{ display: "flex", gap: "20px" }}>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                style={{
                  flex: "0 0 300px",
                  background: "var(--app-card-bg)",
                  color: "var(--app-text)",
                  borderRadius: "12px",
                  padding: "20px",
                  textAlign: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "12px",
                    color: achievement.color,
                  }}
                >
                  {achievement.icon}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {achievement.title}
                </h3>
                <p style={{ color: "var(--app-text)", fontSize: "14px" }}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hint to scroll */}
        <div style={{ textAlign: "center", marginTop: "12px" }}>
          <p style={{ fontSize: "14px", color: "var(--app-text)" }}>
            ← Scroll to see more achievements →
          </p>
        </div>
      </div>
    </section>
  );
}
