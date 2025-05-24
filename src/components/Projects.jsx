import React, { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTechStack, setSelectedTechStack] = useState(null);

  const portfolios = [
    {
      id: 1,
      name: "Weighted Voting Detection for Liver Fibrosis and Cirrhosis",
      githubLink: "https://kapil-fyp.streamlit.app/",
      description:
        "Integrated clinical data analysis (XGBoost) and ultrasound image classification (DenseNet-201) for non-invasive liver disease detection. Developed a novel soft voting classifier, improving diagnostic accuracy to 92.5%.",
      techStack: "XGBoost, DenseNet-201, Soft Voting Classifier",
    },
    {
      id: 2,
      name: "Automated Feature Extraction From Github Repos",
      githubLink: "https://github.com/kapilk05/github-feature-extraction",
      description:
        "Developed an automated system for extracting and analyzing GitHub repository metadata. Applied NLP and data mining for insights, optimizing machine learning techniques to process commit histories and issue tracking data.",
      techStack: "NLP, Data Mining, Machine Learning",
    },
    {
      id: 3,
      name: "Audio Classification",
      githubLink: "https://github.com/kapilk05/Audio-Classification",
      description:
        "Built an audio classification model using deep learning and reinforcement learning (RL). RL-based optimizations enhanced feature extraction, improving accuracy to 87%, outperforming baseline models.",
      techStack: "Deep Learning, Reinforcement Learning (RL)",
    },
    {
      id: 4,
      name: "Disease Outbreak Prediction",
      githubLink: "https://github.com/kapilk05/Disease-Outbreak-Prediction",
      description:
        "Developed deep learning models and LLMs (DistilBERT) to predict disease outbreaks in India. Created datasets, generated text embeddings, and built a hybrid deep learning model achieving R² = 0.95 on the Influenza dataset.",
      techStack: "Deep Learning, LLMs (DistilBERT)",
    },
    {
      id: 5,
      name: "DJSCE E-Cell Website",
      githubLink: "https://github.com/kapilk05/ecell-iic-website",
      description:
        "Designed and deployed the DJ E-Cell website, improving UI/UX by 40%. Optimized backend performance, leading to a 25% improvement in speed and reliability.",
      techStack: "Web Development, UI/UX Optimization",
    },
  ];

  return (
    <div
      id="projects"  // Important for smooth scroll - matches navbar link 'Projects' but lowercase!
      className="bg-gray-900 w-full text-white min-h-screen p-8"
      style={{ scrollMarginTop: '80px' }} // Prevent content hiding behind fixed navbar
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center border-b-4 border-gray-500 pb-4">
          Projects
        </h1>
        <p className="text-center text-gray-400 mt-4">
          Check out some of my work below
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="p-4 bg-gray-800 rounded-lg shadow-lg"
            >
              {/* Project Title */}
              <h2 className="text-lg font-semibold">{portfolio.name}</h2>

              {/* Buttons */}
              <div className="flex mt-4 gap-4">
                {/* Demo Button */}
                <a
                  href={portfolio.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                >
                  Demo
                </a>

                {/* Tech Stack Button */}
                <button
                  onClick={() => setSelectedTechStack(portfolio)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                >
                  Tech Stack
                </button>

                {/* Info Button */}
                <button
                  onClick={() => setSelectedProject(portfolio)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600"
                >
                  i
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Description Popup */}
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <h2 className="text-xl font-semibold text-gray-800">
                Project Description
              </h2>
              <p className="text-gray-700 mt-2">{selectedProject.description}</p>
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Tech Stack Popup */}
        {selectedTechStack && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <h2 className="text-xl font-semibold text-gray-800">Tech Stack</h2>
              <p className="text-gray-700 mt-2">{selectedTechStack.techStack}</p>
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
