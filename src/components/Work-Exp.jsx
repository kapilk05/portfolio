import React from "react";
import { useTheme } from "./theme-provider";
import djsceImg from '../assets/djsce_1753465150215.jpg';
import skimaLogo from "../assets/skima.png";
import parkitLogo from "../assets/parkit.png";
import suvidhaLogo from "../assets/suvidha.png";
import wedoraLogo from "../assets/wedora.png";

// Company logos
const CompanyLogos = {
  SkimaAI: () => (
    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
      <img src={skimaLogo} alt="Skima AI" className="w-full h-full object-contain p-[2px]" />
    </div>
  ),
  DJSCE: () => (
    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
      <img src={djsceImg} alt="DJSCE" className="w-full h-full object-contain p-[2px]" />
    </div>
  ),
  SuvidhaFoundation: () => (
    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
      <img src={suvidhaLogo} alt="Suvidha Foundation" className="w-full h-full object-contain p-[2px]" />
    </div>
  ),
  ParkItBiz: () => (
    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
      <img src={parkitLogo} alt="ParkIt.biz" className="w-full h-full object-contain p-[2px]" />
    </div>
  ),
  WedoraLogo: () => (
    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
      <img src={wedoraLogo} alt="Wedora" className="w-full h-full object-contain p-[2px]" />
    </div>
  ),
};

const experiences = [
  {
    title: "Cofounder & CTO",
    company: "Wedora",
    period: "August 2025 - Present",
    description: "Co-founded Wedora and led the technology vision, building scalable web solutions and managing the engineering team.",
    details: [
      "Architected and launched Wedora's core platform.",
      "Oversaw a team of developers, ensuring timely delivery and high code quality.",
      "Integrated modern tech stack including React, Node.js, and cloud services.",
      "Managed a team of 3 backend developers and 2 AI devs to develop the AI Agent for the platform."

    ],
    logo: CompanyLogos.WedoraLogo,
  },
  {
    title: "Software Developer",
    company: "Skima AI",
    period: "July 2025 - Present",
    description: "Backend Ruby on Rails developer. Star Employee Award - September 2025",
    details: [
      "Optimized backend performance to <250ms response time.",
      "Centralized batch statistics into a reusable Rails service.",
      "Integrated Notion and Zapier automations.",
      "Designed Notification Center system from scratch.",
      "Integrated Unified.to and Knit ATS APIs for automating ATS Integration workflows."
    ],
    logo: CompanyLogos.SkimaAI,
  },
  {
    title: "Web Developer",
    company: "Suvidha Foundation",
    period: "June 2024 - July 2024",
    description: "Built efficient, low-latency campaign APIs using Spring Boot and MongoDB aggregation pipelines.",
    details: [
      "Used Redis caching for hot queries.",
      "Delivered performance-focused React components.",
      "Documented weekly metrics and improvements."
    ],
    logo: CompanyLogos.SuvidhaFoundation,
  },
  {
    title: "Teaching Assistant",
    company: "Dwarkadas J. Sanghvi College of Engineering",
    period: "August 2024 - May 2025",
    description: "Assisted in core courses: Processor Architecture and Information Security.",
    details: [
      "Created structured lecture materials.",
      "Supported 100+ students with 1:1 guidance.",
      "Facilitated understanding of advanced topics."
    ],
    logo: CompanyLogos.DJSCE,
  },
  {
    title: "Founders Office Intern",
    company: "ParkIt.biz",
    period: "June 2023 - August 2023",
    description: "Generated leads, conducted market research, and fostered partnerships.",
    details: [
      "Conducted market analysis to identify growth opportunities.",
      "Generated revenue leads through targeted outreach campaigns and raised 1.5 lakhs in potential business.",
      "Worked as an HR in managing attendance and payroll for other interns.",
      "Looked out for potential tendors that could aid the company in growth."
    ],
    logo: CompanyLogos.ParkItBiz,
  },
];

export default function ExperienceSection() {
  const { theme } = useTheme();

  return (
    <section
      className="py-20 px-5"
      style={{
        backgroundColor: `var(--app-bg)`,
        color: `var(--app-text)`,
      }}
    >
      <div className="max-w-3xl mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>

        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-accent" />

        <div className="flex flex-col gap-10 relative">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex items-start relative">
              {/* Timeline dot */}
              <div className="w-4 h-4 rounded-full bg-accent absolute left-6 top-2" />

              {/* Card */}
              <div
                className="ml-20 p-5 rounded-xl shadow-lg transition-transform hover:scale-105"
                style={{
                  backgroundColor: "var(--app-bg)",
                  color: "var(--app-text)",
                }}
              >
                <div className="flex justify-between flex-wrap mb-3">
                  <div className="flex items-center gap-4">
                    <exp.logo />
                    <div>
                      <h3 className="text-lg font-semibold text-accent">{exp.title}</h3>
                      <p className="font-medium">{exp.company}</p>
                    </div>
                  </div>
                  {exp.period && <span className="text-muted mt-1">{exp.period}</span>}
                </div>

                <p className="text-muted mb-3">{exp.description}</p>

                {exp.details && (
                  <ul className="pl-4 list-disc space-y-1">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-muted">{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
