import React from "react";
import styled from "styled-components";

const iconsMap = {
  web: (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z" />
    </svg>
  ),
  liver: (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2C9.243 2 7 4.243 7 7v10c0 2.757 2.243 5 5 5s5-2.243 5-5V7c0-2.757-2.243-5-5-5z" />
    </svg>
  ),
  customer: (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0113 0v1H5.5v-1z" />
    </svg>
  ),
  github: (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.893 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.982 1.03-2.681-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.025a9.564 9.564 0 012.5-.336 9.58 9.58 0 012.5.336c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.03 1.59 1.03 2.68 0 3.842-2.337 4.687-4.566 4.935.36.31.68.923.68 1.86 0 1.342-.013 2.423-.013 2.753 0 .268.18.58.688.48A10.015 10.015 0 0022 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  codeforces: (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M7 12l5-4v8l-5-4z" fill="#fff" />
    </svg>
  ),
  disease: (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 8h8v8H8z" fill="#fff" />
    </svg>
  ),
  website: (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 4h16v16H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
};

const Card = ({ title, description, demoLink, techStack, onTechStackClick, icon }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="icon">{iconsMap[icon] || iconsMap.web}</div>
          <h3 className="title">{title}</h3>
          <p className="para">{description}</p>
          <div className="buttons">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button demo-btn"
            >
              Demo
            </a>
            <button onClick={onTechStackClick} className="button tech-btn">
              Tech Stack
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: 320px;
    border-radius: 24px;
    line-height: 1.6;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 6px 12px rgba(15, 35, 64, 0.5);
    background: #1f2937; /* Dark slate background */
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 28px 32px;
    border-radius: 22px;
    color: #d1d5db; /* Light gray text */
    background: #111827; /* Darker background inside card */
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    height: 100%;
  }

  .icon {
    width: 48px;
    height: 48px;
    color: #3b82f6; /* Blue accent */
  }

  .title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #60a5fa; /* Lighter blue */
    margin: 0;
  }

  .para {
    font-size: 0.875rem;
    color: #9ca3af; /* Muted gray */
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* limit lines */
    -webkit-box-orient: vertical;
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
  }

  .button {
    cursor: pointer;
    border-radius: 12px;
    font-family: inherit;
    font-size: 0.875rem;
    padding: 8px 16px;
    text-decoration: none;
    border: none;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .demo-btn {
    background-color: #3b82f6;
    color: white;
  }
  .demo-btn:hover {
    background-color: #2563eb;
  }

  .tech-btn {
    background-color: #10b981;
    color: white;
  }
  .tech-btn:hover {
    background-color: #059669;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(59, 130, 246, 0.5);
  }
`;

export default Card;
