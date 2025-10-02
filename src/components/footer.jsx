import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { SiCodechef, SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer style={{ padding: "48px 20px", borderTop: "1px solid #ddd" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#06b6d4", marginBottom: "16px" }}>
          Kapil Kashyap
        </h3>

        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "24px" }}>
          <a
            href="mailto:kapilkashyap3105@gmail.com"
            style={{ color: "#555", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#06b6d4"}
            onMouseLeave={e => e.currentTarget.style.color = "#555"}
          >
            <Mail size={24} />
          </a>
          <a
            href="https://linkedin.com/in/kapilkashyap05"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#555", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#06b6d4"}
            onMouseLeave={e => e.currentTarget.style.color = "#555"}
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/kapilk05"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#555", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#06b6d4"}
            onMouseLeave={e => e.currentTarget.style.color = "#555"}
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.codechef.com/users/kashyap_kapil"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#555", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#06b6d4"}
            onMouseLeave={e => e.currentTarget.style.color = "#555"}
          >
            <SiCodechef size={24} />
          </a>
          <a
            href="https://leetcode.com/kashyap_kapil/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#555", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#06b6d4"}
            onMouseLeave={e => e.currentTarget.style.color = "#555"}
          >
            <SiLeetcode size={24} />
          </a>
        </div>

        <p style={{ color: "#555", fontSize: "0.875rem" }}>
          © 2025 Kapil Kashyap. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
