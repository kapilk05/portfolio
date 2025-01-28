import React from "react";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      name: "CF Progress Pulse",
      githubLink: "https://github.com/kapilk05/CF-Progress-Pulse",
    },
    {
      id: 2,
      name: "Disease Outbreak Prediction",
      githubLink: "https://github.com/kapilk05/Disease-Outbreak-Prediction",
    },
    {
      id: 3,
      name: "DJSCE E-Cell Website",
      githubLink: "https://github.com/kapilk05/ecell-iic-website",
    },
    {
      id: 4,
      name: "Suvidha Foundation Website",
      githubLink: "https://github.com/kapilk05/suvidha-web-dev",
    },
    {
      id: 5,
      name: "Supply Chain Management",
      githubLink: "https://github.com/kapilk05/Supply-chain-management-dapp",
    },
    {
      id: 6,
      name: "Patent Novelty Assesment",
      githubLink: "https://github.com/kapilk05/IPD",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="p-4 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg shadow-lg">
              {/* Project Name with Link */}
              <a
                href={portfolio.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-black font-semibold text-xl"
              >
                {portfolio.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
