import React, { useState, useEffect, useRef } from 'react';

const WorkExp = () => {
  const [showImage, setShowImage] = useState(null);
  const modalRef = useRef(null);

  const handleDownload = (fileName) => {
    const link = document.createElement('a');
    link.href = `/internships/${fileName}.pdf`;
    link.target = '_blank';
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShowImage = (imageName) => {
    setShowImage(imageName);
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
        <div className="relative pl-10" aria-labelledby="work-exp-heading" role="list">

          {/* Experience 1 - Teaching Assistant */}
          <div className="mb-12" role="listitem">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full bg-blue-500" aria-hidden="true"></div>
              <button
                onClick={() => handleDownload('teaching-assistant')}
                className="ml-4 text-2xl font-bold text-white cursor-pointer hover:underline focus:outline-none"
                aria-label="Download Teaching Assistant Internship PDF"
              >
                Dwarkadas Jivanlal Sanghvi College of Engineering
              </button>
              <button
                onClick={() => handleShowImage('teaching-assistant.jpg')}
                className="ml-4 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none"
                aria-label="View Certificate for Teaching Assistant role"
              >
                View Certificate
              </button>
            </div>
            <div className="ml-10">
<<<<<<< HEAD
              <h2 className="text-xl font-semibold">Processor Architecture and Information Security</h2>
              <p className="text-sm text-gray-400">Aug 2024 - May 2025</p>
=======
              <h2 className="text-xl font-semibold">Teaching Assistant</h2>
              <p className="text-sm text-gray-400">Aug 2024 - May 2025</p>
              <p className="mt-2 max-w-xl text-gray-300">
                Assisted in teaching Processor Architecture and Organization and Information Security under Asst. Prof. Chinmay Raut, helping 80+ students grasp complex concepts. Created 15+ well-structured notes and interactive slides, improving student comprehension and engagement. Provided 1-on-1 mentorship to struggling students, resulting in a 20% improvement in average test scores.
              </p>
>>>>>>> a20600d (Add terminal-style loading screen and center it)
            </div>
          </div>

          {/* Experience 2 - Web Developer */}
          <div className="mb-12" role="listitem">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full bg-green-500" aria-hidden="true"></div>
              <button
                onClick={() => handleDownload('suvidha')}
                className="ml-4 text-2xl font-bold text-white cursor-pointer hover:underline focus:outline-none"
                aria-label="Download Web Developer Internship PDF"
              >
                Suvidha Foundation
              </button>
              <button
                onClick={() => handleShowImage('suvidha.jpg')}
                className="ml-4 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none"
                aria-label="View Certificate for Web Developer role"
              >
                View Certificate
              </button>
            </div>
            <div className="ml-10">
              <h2 className="text-xl font-semibold">Web Developer</h2>
              <p className="text-sm text-gray-400">Jun 2024 - July 2024</p>
<<<<<<< HEAD
=======
              <p className="mt-2 max-w-xl text-gray-300">
                Designed and developed responsive web pages for organizational campaigns, improving user engagement by 25% and streamlining access to resources for over 500 users, reducing load times by 40%.
              </p>
>>>>>>> a20600d (Add terminal-style loading screen and center it)
            </div>
          </div>

          {/* Experience 3 - Business Development Intern */}
          <div className="mb-12" role="listitem">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full bg-orange-500" aria-hidden="true"></div>
              <button
                onClick={() => handleDownload('parkit')}
                className="ml-4 text-2xl font-bold text-white cursor-pointer hover:underline focus:outline-none"
                aria-label="Download Business Development Internship PDF"
              >
                ParkIt.Biz
              </button>
              <button
                onClick={() => handleShowImage('parkit.jpg')}
                className="ml-4 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none"
                aria-label="View Certificate for Business Development Intern role"
              >
                View Certificate
              </button>
            </div>
            <div className="ml-10">
<<<<<<< HEAD
              <h2 className="text-xl font-semibold">Business and Sales Intern</h2>
              <p className="text-sm text-gray-400">June 2023 - August 2023</p>
=======
              <h2 className="text-xl font-semibold">Business Development and Sales Intern</h2>
              <p className="text-sm text-gray-400">June 2023 - August 2023</p>
              <p className="mt-2 max-w-xl text-gray-300">
                Executed targeted lead generation campaigns through social media channels, resulting in a 60% increase in engagement rates; analyzed campaign performance metrics to refine future strategies and optimize outreach efforts. Partnered with the HR department to optimize recruitment workflows and boost employee engagement, driving organizational growth and efficiency.
              </p>
>>>>>>> a20600d (Add terminal-style loading screen and center it)
            </div>
          </div>

          {/* Experience 4 - Junior Manager */}
          <div className="mb-12" role="listitem">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full bg-red-500" aria-hidden="true"></div>
              <button
                onClick={() => handleDownload('aiesec')}
                className="ml-4 text-2xl font-bold text-white cursor-pointer hover:underline focus:outline-none"
                aria-label="Download Junior Manager Internship PDF"
              >
                AIESEC in Mumbai
              </button>
              <button
                onClick={() => handleShowImage('aiesec.jpg')}
                className="ml-4 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none"
                aria-label="View Certificate for Junior Manager role"
              >
                View Certificate
              </button>
            </div>
            <div className="ml-10">
<<<<<<< HEAD
              <h2 className="text-xl font-semibold">Junior Manager - Incoming Corporate Sector</h2>
              <p className="text-sm text-gray-400">Feb 2022 - Jan 2023</p>
=======
              <h2 className="text-xl font-semibold">Junior Manager for Incoming Corporate Sector</h2>
              <p className="text-sm text-gray-400">Feb 2022 - Jan 2023</p>
              <p className="mt-2 max-w-xl text-gray-300">
                Established partnerships with premier organizations like St. Regis and fostered collaborations with 8 entities across 3 countries to strengthen global ties. Orchestrated a high-impact conference in Silvassa for 100 delegates, generating ₹5.4 lakh in revenue and delivering an exceptional participant experience.
              </p>
>>>>>>> a20600d (Add terminal-style loading screen and center it)
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
