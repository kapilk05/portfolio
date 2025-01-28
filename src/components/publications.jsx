import React, { useState } from 'react';

const Publications = () => {
  // Publications data array with description added
  const publications = [
    {
      name: 'Enhancing Brain Tumor Detection using Federated Learning',
      codeLink: 'https://github.com/your-repo/brain-tumor-detection',
      paperLink: 'https://scholar.google.com/brain-tumor-detection',
      description:
        'This paper explores the use of federated learning and explainable AI to improve the accuracy and interpretability of brain tumor detection models.',
      underReview: true,
    },
    {
      name: 'Hybrid Predictive Modeling for F1 Race Outcomes: Integrating Random Forest and Graph Neural Networks',
      codeLink: 'https://github.com/your-repo/f1-race-gnn',
      paperLink: 'https://scholar.google.com/f1-race-prediction',
      description:
        'A novel approach combining Random Forest and Graph Neural Networks for predicting F1 race outcomes, incorporating temporal and relational data for better predictions.',
      underReview: true,
    },
    {
      name: 'Dynamic Neural Style Transfer for Artistic Image Generation using VGG19',
      codeLink: 'https://github.com/kapilk05/Artisitic-Neural-Style-Transfer',
      paperLink: 'https://ijercse.com/dynamic-neural-style.php',
      description:
        'Throughout history, humans have created remark- able works of art, but artificial intelligence has only recently started to make strides in generating visually compelling art. Breakthroughs in the past few years have focused on using convolutional neural networks (CNNs) to separate and manipulate the content and style of images, applying texture synthesis techniques. Nevertheless, a number of current techniques continue to encounter obstacles, including lengthy processing times, restricted choices of style images, and the inability to modify the weight ratio of styles. We proposed a neural style transfer system that can add various artistic styles to a desired image to address these constraints allowing flexible adjustments to style weight ratios and reducing processing time. The system uses the VGG19 model for feature extraction, ensuring high-quality, flexible stylization without compromising content integrity.'
    },
    {
      name: 'Patent Novelty Assessment: Accelerating Innovation and Patent Prosecution',
      codeLink: 'https://github.com/kapilk05/IPD',
      paperLink: 'https://ijirt.org/Article?manuscript=169704',
      description:
        'In the rapidly evolving landscape of technological innovation, safeguarding intellectual property rights through patents is crucial for fostering progress and stimulating research and development investments. This report introduces a ground- breaking Patent Novelty Assessment and Claim Generation System, meticulously crafted to dissect the inventive aspects of intellectual property and simplify access to extensive patent claim data. Addressing a crucial gap in academic institutions, our system provides college students and researchers with an intuitive platform to navigate and grasp the intricacies of patent claims, particularly tailored for the nuances of Chinese patents. Unlike conventional analysis systems, our initiative harnesses a proprietary Chinese API to ensure unparalleled precision and relevance. The primary challenge lies in the complexity of accessing and comprehending diverse patent claims, inhibiting effective innovation upon existing ideas. Our solution aims to overcome these barriers by offering a bespoke approach that seamlessly retrieves comprehensive claim information, finely tuned to the specifics of the Chinese patent landscape. By equipping users with efficient access to comprehensive patent claim information, our transformative platform seeks to ignite informed exploration and innovation in the ever-evolving domain of intellectual property. Its envisioned impact transcends individual colleges, nurturing an environment conducive to research and development while deepening the understanding of patented concepts within the academic community.',
      underReview: false,
    },
  ];

  // State for managing the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');
  const [isUnderReviewModalOpen, setIsUnderReviewModalOpen] = useState(false);

  // Function to open the modal with the description
  const openModal = (description) => {
    setCurrentDescription(description);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setIsUnderReviewModalOpen(false);
  };

  // Function to show the under review popup
  const showUnderReviewPopup = () => {
    setIsUnderReviewModalOpen(true);
  };

  return (
    <div
      name="publications"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Publications
          </p>
        </div>

        {/* Publications Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center"
            >
              {/* Publication Name */}
              <h2 className="text-2xl font-semibold text-white mb-4">
                {publication.name}
              </h2>

              {/* Buttons */}
              <div className="flex space-x-4">
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
                {/* Info Button */}
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
