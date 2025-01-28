import React, { useState } from 'react';

const Publications = () => {
  const publications = [
    // Publication data...
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');
  const [isUnderReviewModalOpen, setIsUnderReviewModalOpen] = useState(false);

  const openModal = (description) => {
    setCurrentDescription(description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsUnderReviewModalOpen(false);
  };

  const showUnderReviewPopup = () => {
    setIsUnderReviewModalOpen(true);
  };

  return (
    <div name="publications" className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Publications
          </p>
        </div>

        {/* Publications Container */}
        <div className="space-y-8"> {/* Adds spacing between the publications */}
          {publications.map((publication, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-start"
            >
              {/* Publication Name */}
              <h2 className="text-2xl font-semibold text-white mb-4">
                {publication.name}
              </h2>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={publication.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Code
                </a>
                {publication.underReview ? (
                  <button
                    onClick={showUnderReviewPopup}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Link to Paper
                  </button>
                ) : (
                  <a
                    href={publication.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Link to Paper
                  </a>
                )}
                <button
                  onClick={() => openModal(publication.description)}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  i
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying the description */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg w-80">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Paper Description</h2>
              <button
                onClick={closeModal}
                className="text-2xl font-bold cursor-pointer"
              >
                X
              </button>
            </div>
            <p className="mt-4">{currentDescription}</p>
          </div>
        </div>
      )}

      {/* Modal for under review */}
      {isUnderReviewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg w-80">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Paper Under Review</h2>
              <button
                onClick={closeModal}
                className="text-2xl font-bold cursor-pointer"
              >
                X
              </button>
            </div>
            <p className="mt-4">This paper is currently under review. Please check back later.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Publications;
