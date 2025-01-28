import React, { useState } from 'react';

const WorkExp = () => {
  const [showDescription, setShowDescription] = useState(null);

  const handleDownload = (fileName) => {
    const link = document.createElement('a');
    link.href = `/internships/${fileName}.pdf`; // Corrected path
    link.target = '_blank'; // Open in a new tab
    link.download = `${fileName}.pdf`; // Optional: triggers download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShowDescription = (description) => {
    setShowDescription(description);
  };

  const handleCloseDescription = () => {
    setShowDescription(null);
  };

  return (
    <div
      name="work experience"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Work Experience
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-10">
          <div className="border-l-2 border-gray-500 absolute left-0 h-full"></div>

          {/* Experience 1 - Teaching Assistant */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full bg-blue-500"></div>
              <h1
                onClick={() => handleDownload('teaching-assistant')}
                className="ml-4 text-2xl font-bold text-white cursor-pointer hover:underline"
              >
                Teaching Assistant | DJSCE
              </h1>
              <button
                onClick={() => handleShowDescription('Assisted in teaching Processor Architecture and Information Security, created lecture materials, and guided students in labs.')}
                className="ml-4 w-6 h-6 rounded-full bg-gray-600 text-white text-xs flex justify-center items-center hover:bg-gray-500"
              >
                i
              </button>
            </div>
            <div className="ml-10">
              <h2 className="text-xl font-semibold">Processor Architecture and Information Security</h2>
              <p className="text-sm text-gray-400">Date: Oct 2022 - Present</p>
            </div>
          </div>

          {/* Experience 2 - Web Developer */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <h1
                onClick={() => handleDownload('suvidha')}
                className="ml-4 text-2xl font-bold text-white cursor-pointer hover:underline"
              >
                Web Developer | Suvidha Foundation
              </h1>
              <button
                onClick={() => handleShowDescription('Developed web applications, focusing on improving user experience and increasing the foundation’s digital outreach.')}
                className="ml-4 w-6 h-6 rounded-full bg-gray-600 text-white text-xs flex justify-center items-center hover:bg-gray-500"
              >
                i
              </button>
            </div>
            <div className="ml-10">
              <h2 className="text-xl font-semibold">Web Developer</h2>
              <p className="text-sm text-gray-400">Date: Jun 2023 - Aug 2023</p>
            </div>
          </div>

          {/* Experience 3 - Business Development Intern */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full bg-orange-500"></div>
              <h1
                onClick={() => handleDownload('parkit')}
                className="ml-4 text-2xl font-bold text-white cursor-pointer hover:underline"
              >
                Business Development Intern | ParkIt.Biz
              </h1>
              <button
                onClick={() => handleShowDescription('Worked in business development, focusing on lead generation, improving user acquisition, and assisting with sales strategies.')}
                className="ml-4 w-6 h-6 rounded-full bg-gray-600 text-white text-xs flex justify-center items-center hover:bg-gray-500"
              >
                i
              </button>
            </div>
            <div className="ml-10">
              <h2 className="text-xl font-semibold">Business and Sales Intern</h2>
              <p className="text-sm text-gray-400">Date: Mar 2023 - Present</p>
            </div>
          </div>

          {/* Experience 4 - Junior Manager */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full bg-red-500"></div>
              <h1
                onClick={() => handleDownload('aiesec')}
                className="ml-4 text-2xl font-bold text-white cursor-pointer hover:underline"
              >
                Junior Manager | AIESEC in Mumbai
              </h1>
              <button
                onClick={() => handleShowDescription('Led and managed incoming corporate sector internships, coordinated with corporates, and collaborated with international teams for smooth operations.')}
                className="ml-4 w-6 h-6 rounded-full bg-gray-600 text-white text-xs flex justify-center items-center hover:bg-gray-500"
              >
                i
              </button>
            </div>
            <div className="ml-10">
              <h2 className="text-xl font-semibold">Junior Manager - Incoming Corporate Sector</h2>
              <p className="text-sm text-gray-400">Date: Feb 2022 - Jan 2023</p>
            </div>
          </div>

        </div>
      </div>

      {/* Role Description Popup */}
      {showDescription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
            <button
              onClick={handleCloseDescription}
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <p className="text-xl font-semibold text-black">Role Description</p>
            <p className="mt-4 text-black">{showDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExp;
