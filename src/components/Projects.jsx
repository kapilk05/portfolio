import React, { useState } from "react";
import Card from "./Card";

const Projects = () => {
  const [selectedTechStack, setSelectedTechStack] = useState(null);

  const portfolios = [
    {
      id: 1,
      name: "Stock Forecasting and Event Impact Analysis Using Time Series Models",
      githubLink:
        "https://app.powerbi.com/groups/me/reports/e27067ca-6478-4656-b829-4f1672332c7e?pbi_source=desktop",
      description:
        "Performed time series forecasting on 15 years of stock data using Prophet and ETS models. Conducted event study on COVID-19 impact and created a Power BI dashboard for insights.",
      techStack:
        "Facebook Prophet, ETS Models, Linear Regression, Event Study, Power BI, Python, Pandas",
      icon: "web",
    },
    {
      id: 2,
      name: "Weighted Voting Detection for Liver Fibrosis and Cirrhosis",
      githubLink: "https://kapil-fyp.streamlit.app/",
      description:
        "Combined clinical and ultrasound data using XGBoost and DenseNet-201 with a soft voting classifier, achieving 92.5% diagnostic accuracy.",
      techStack:
        "XGBoost, DenseNet-201, Soft Voting Classifier, Python, Machine Learning, Deep Learning",
      icon: "liver",
    },
    {
      id: 4,
      name: "Automated Feature Extraction From Github Repos",
      githubLink: "https://github.com/kapilk05/github-feature-extraction",
      description:
        "Automated extraction and analysis of GitHub repo metadata using ML and NLP to identify development trends.",
      techStack: "NLP, Data Mining, Machine Learning, Python, GitHub API",
      icon: "github",
    },
    {
      id: 5,
      name: "CF Progress Pulse",
      githubLink: "https://github.com/kapilk05/cf-progress-pulse",
      description:
        "Built a tool to track Codeforces user ranking progress and send notifications, fostering engagement and competition.",
      techStack: "Python, Web Scraping, Data Analysis, Notifications, Flask",
      icon: "codeforces",
    },
    {
      id: 6,
      name: "Disease Outbreak Prediction",
      githubLink: "https://github.com/kapilk05/Disease-Outbreak-Prediction",
      description:
        "Predicted disease outbreak severity using deep learning and DistilBERT embeddings with strong accuracy (R²=0.95).",
      techStack: "Deep Learning, LLMs (DistilBERT), Python, Data Science, TensorFlow",
      icon: "disease",
    },
    {
      id: 7,
      name: "DJSCE E-Cell Website",
      githubLink: "https://djsceecell.com/",
      description:
        "Revamped the E-Cell website with React.js, TailwindCSS, and Three.js, adding dynamic features and Instagram integration.",
      techStack: "React.js, TailwindCSS, Three.js, API Integration, Web Development",
      icon: "website",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gray-900 w-full text-white min-h-screen p-8"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center border-b-4 border-gray-500 pb-4">
          Projects
        </h1>
        <p className="text-center text-gray-400 mt-4">
          Check out some of my work below
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {portfolios.map((portfolio) => (
            <Card
              key={portfolio.id}
              title={portfolio.name}
              description={portfolio.description}
              demoLink={portfolio.githubLink}
              techStack={portfolio.techStack}
              onTechStackClick={() => setSelectedTechStack(portfolio.techStack)}
              icon={portfolio.icon}
            />
          ))}
        </div>

        {/* Tech Stack Popup */}
        {selectedTechStack && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <h2 className="text-xl font-semibold text-gray-800">Tech Stack</h2>
              <p className="text-gray-700 mt-2 whitespace-pre-wrap">
                {selectedTechStack}
              </p>
              <button
                onClick={() => setSelectedTechStack(null)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
