import React, { useState, useEffect, useRef } from 'react';

const WorkExp = () => {
  const [showDescription, setShowDescription] = useState(null);
  const modalRef = useRef(null);

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

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && showDescription) {
        handleCloseDescription();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showDescription]);

  // Close modal if clicking outside modal content
  useEffect(() => {
    if (!showDescription) return; // If no modal, no event listener

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseDescription();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDescription]); // Now handleClickOutside is inside useEffect, no missing deps

  return (
    <div
      id="work experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            id="work-exp-heading"
            className="text-4xl font-bold inline border-b-4 border-gray-500"
          >
            Work Experience
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-10" aria-labelledby="work-exp-heading" role="list">
          {/* Experience 1 - Teaching Assistant */}
          <div className="mb-12" role="listitem">
            <div className="flex items-center mb-4">
              <div
                className="w-6 h-6 rounded-full bg-blue-500"
                aria-hidden="true"
              ></div>
              <button
                onClick={() => handleDownload('teaching-assistant')}
                className="ml-4 text-2xl font-bold text-white cursor-pointer hover:underline focus:outline-none"
                aria-label="Download Teaching Assistant Internship PDF"
              >
                Teaching Assistant | DJSCE
              </button>
              <button
                onClick={() =>
                  handleShowDescription(
                    'Assisted in teaching Processor Architecture and Information Security, created lecture materials, and guided students in labs.'
                  )
                }
                className="ml-4 w-6 h-6 rounded-full bg-gray-600 text-white text-xs flex justify-center items-center hover:bg-gray-500 focus:outline-none"
                aria-label="Show description for Teaching Assistant role"
              >
                i
              </button>
            </div>
            <div className="ml-10">
              <h2 className="text-xl font-semibold">Processor Architecture and Information Security</h2>
              <p className="text-sm text-gray-400">Aug 2024 - May 2025</p>
            </div>
          </div>

          {/* Experience 2 - Web Developer */}
          <div className="mb-12" role="listitem">
            <div className="flex items-center mb-4">
              <div
                className="w-6 h-6 rounded-full bg-green-500"
                aria-hidden="true"
              ></div>
              <button
                onClick={() => handleDownload('suvidha')}
                className="ml-4 text-2xl font-bold text-white cursor-pointer hover:underline focus:outline-none"
                aria-label="Download Web Developer Internship PDF"
              >
                Web Developer | Suvidha Foundation
              </button>
              <button
                onClick={() =>
                  handleShowDescription(
                    'Developed web applications, focusing on improving user experience and increasing the foundation’s digital outreach.'
                  )
                }
                className="ml-4 w-6 h-6 rounded-full bg-gray-600 text-white text-xs flex justify-center items-center hover:bg-gray-500 focus:outline-none"
                aria-label="Show description for Web Developer role"
              >
                i
              </button>
            </div>
            <div className="ml-10">
              <h2 className="text-xl font-semibold">Web Developer</h2>
              <p className="text-sm text-gray-400">Jun 2024 - July 2024</p>
            </div>
          </div>

          {/* Experience 3 - Business Development Intern */}
          <div className="mb-12" role="listitem">
            <div className="flex items-center mb-4">
              <div
                className="w-6 h-6 rounded-full bg-orange-500"
                aria-hidden="true"
              ></div>
              <button
                onClick={() => handleDownload('parkit')}
                className="ml-4 text-2xl font-bold text-white cursor-pointer hover:underline focus:outline-none"
                aria-label="Download Business Development Internship PDF"
              >
                Business Development Intern | ParkIt.Biz
              </button>
              <button
                onClick={() =>
                  handleShowDescription(
                    'Worked in business development, focusing on lead generation, improving user acquisition, and assisting with sales strategies.'
                  )
                }
                className="ml-4 w-6 h-6 rounded-full bg-gray-600 text-white text-xs flex justify-center items-center hover:bg-gray-500 focus:outline-none"
                aria-label="Show description for Business Development Intern role"
              >
                i
              </button>
            </div>
            <div className="ml-10">
              <h2 className="text-xl font-semibold">Business and Sales Intern</h2>
              <p className="text-sm text-gray-400">June 2023 - August 2023</p>
            </div>
          </div>

          {/* Experience 4 - Junior Manager */}
          <div className="mb-12" role="listitem">
            <div className="flex items-center mb-4">
              <div
                className="w-6 h-6 rounded-full bg-red-500"
                aria-hidden="true"
              ></div>
              <button
                onClick={() => handleDownload('aiesec')}
                className="ml-4 text-2xl font-bold text-white cursor-pointer hover:underline focus:outline-none"
                aria-label="Download Junior Manager Internship PDF"
              >
                Junior Manager | AIESEC in Mumbai
              </button>
              <button
                onClick={() =>
                  handleShowDescription(
                    'Led and managed incoming corporate sector internships, coordinated with corporates, and collaborated with international teams for smooth operations.'
                  )
                }
                className="ml-4 w-6 h-6 rounded-full bg-gray-600 text-white text-xs flex justify-center items-center hover:bg-gray-500 focus:outline-none"
                aria-label="Show description for Junior Manager role"
              >
                i
              </button>
            </div>
            <div className="ml-10">
              <h2 className="text-xl font-semibold">Junior Manager - Incoming Corporate Sector</h2>
              <p className="text-sm text-gray-400">Feb 2022 - Jan 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Role Description Popup */}
      {showDescription && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
          >
            <button
              onClick={handleCloseDescription}
              aria-label="Close description modal"
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-black focus:outline-none"
            >
              &times;
            </button>
            <h2
              id="modal-title"
              className="text-xl font-semibold text-black mb-4"
            >
              Role Description
            </h2>
            <p className="text-black">{showDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExp;
