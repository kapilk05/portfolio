import React, { useState, useEffect, useRef } from 'react';

const WorkExp = () => {
  const [showImage, setShowImage] = useState(null);
  const modalRef = useRef(null);

  const handleShowImage = (fileName) => {
    setShowImage(fileName);
  };

  const handleCloseImage = () => {
    setShowImage(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && showImage) {
        handleCloseImage();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showImage]);

  useEffect(() => {
    if (!showImage) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseImage();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showImage]);

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
        <div
          className="relative pl-10"
          aria-labelledby="work-exp-heading"
          role="list"
        >
          {/* Experience 1 - Teaching Assistant */}
          <div className="mb-12" role="listitem">
            <div className="flex items-center mb-4">
              <div
                className="w-6 h-6 rounded-full bg-blue-500"
                aria-hidden="true"
              ></div>
              <span className="ml-4 text-2xl font-bold text-white select-none">
                Dwarkadas Jivanlal Sanghvi College of Engineering
              </span>
              <button
                type="button"
                onClick={() => handleShowImage('LOR Chinmay sir.jpg')}
                className="ml-4 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none"
                aria-label="View Certificate for Teaching Assistant role"
              >
                View Certificate
              </button>
            </div>
            <div className="ml-10">
              <h2 className="text-xl font-semibold">Teaching Assistant</h2>
              <p className="text-sm text-gray-400">Aug 2024 - May 2025</p>
              <ul className="mt-2 max-w-xl text-gray-300 list-disc list-inside space-y-1">
                <li>Assisted in teaching Processor Architecture and Organization and Information Security under Asst. Prof. Chinmay Raut, helping 80+ students grasp complex concepts.</li>
                <li>Created 15+ well-structured notes and interactive slides, improving student comprehension and engagement.</li>
                <li>Provided 1-on-1 mentorship to struggling students, resulting in a 20% improvement in average test scores.</li>
              </ul>
            </div>
          </div>

          {/* Experience 2 - Web Developer */}
          <div className="mb-12" role="listitem">
            <div className="flex items-center mb-4">
              <div
                className="w-6 h-6 rounded-full bg-green-500"
                aria-hidden="true"
              ></div>
              <span className="ml-4 text-2xl font-bold text-white select-none">
                Suvidha Foundation
              </span>
              <button
                type="button"
                onClick={() => handleShowImage('Suvidha.jpeg')}
                className="ml-4 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none"
                aria-label="View Certificate for Web Developer role"
              >
                View Certificate
              </button>
            </div>
            <div className="ml-10">
              <h2 className="text-xl font-semibold">Web Developer</h2>
              <p className="text-sm text-gray-400">Jun 2024 - July 2024</p>
              <ul className="mt-2 max-w-xl text-gray-300 list-disc list-inside space-y-1">
                <li>Designed and developed responsive web pages for organizational campaigns, improving user engagement by 25%.</li>
                <li>Streamlined access to resources for over 500 users.</li>
                <li>Reduced load times by 40%.</li>
              </ul>
            </div>
          </div>

          {/* Experience 3 - Business Development Intern */}
          <div className="mb-12" role="listitem">
            <div className="flex items-center mb-4">
              <div
                className="w-6 h-6 rounded-full bg-orange-500"
                aria-hidden="true"
              ></div>
              <span className="ml-4 text-2xl font-bold text-white select-none">
                ParkIt.Biz
              </span>
              <button
                type="button"
                onClick={() => handleShowImage('Parkit.jpg')}
                className="ml-4 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none"
                aria-label="View Certificate for Business Development Intern role"
              >
                View Certificate
              </button>
            </div>
            <div className="ml-10">
              <h2 className="text-xl font-semibold">
                Business Development and Sales Intern
              </h2>
              <p className="text-sm text-gray-400">June 2023 - August 2023</p>
              <ul className="mt-2 max-w-xl text-gray-300 list-disc list-inside space-y-1">
                <li>Executed targeted lead generation campaigns through social media channels, resulting in a 60% increase in engagement rates.</li>
                <li>Analyzed campaign performance metrics to refine future strategies and optimize outreach efforts.</li>
                <li>Partnered with the HR department to optimize recruitment workflows and boost employee engagement, driving organizational growth and efficiency.</li>
              </ul>
            </div>
          </div>

          {/* Experience 4 - Junior Manager */}
          <div className="mb-12" role="listitem">
            <div className="flex items-center mb-4">
              <div
                className="w-6 h-6 rounded-full bg-red-500"
                aria-hidden="true"
              ></div>
              <span className="ml-4 text-2xl font-bold text-white select-none">
                AIESEC in Mumbai
              </span>
              <button
                type="button"
                onClick={() => handleShowImage('Aiesec.jpg')}
                className="ml-4 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none"
                aria-label="View Certificate for Junior Manager role"
              >
                View Certificate
              </button>
            </div>
            <div className="ml-10">
              <h2 className="text-xl font-semibold">
                Junior Manager for Incoming Corporate Sector
              </h2>
              <p className="text-sm text-gray-400">Feb 2022 - Jan 2023</p>
              <ul className="mt-2 max-w-xl text-gray-300 list-disc list-inside space-y-1">
                <li>Established partnerships with premier organizations like St. Regis and fostered collaborations with 8 entities across 3 countries to strengthen global ties.</li>
                <li>Orchestrated a high-impact conference in Silvassa for 100 delegates, generating ₹5.4 lakh in revenue.</li>
                <li>Delivered an exceptional participant experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Image Modal */}
      {showImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
        >
          <div
            ref={modalRef}
            className="bg-white p-4 rounded-lg shadow-lg max-w-3xl max-h-full overflow-auto relative"
          >
            <button
              onClick={handleCloseImage}
              aria-label="Close certificate modal"
              className="absolute top-2 right-2 text-3xl font-bold text-gray-600 hover:text-black focus:outline-none"
            >
              &times;
            </button>
            <img
              src={`/workex/${showImage}`}
              alt="Certificate"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExp;
