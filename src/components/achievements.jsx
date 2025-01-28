import React, { useState } from "react";

const Achievements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [certificateImage, setCertificateImage] = useState("");

  const achievements = [
    {
      id: 1,
      title: "International Informatics Olympiad 2017",
      description: "International rank 3 (and State rank 1) in IIO 2017 Level 2. Also recieved a scholarship worth 5000 rupees.",
      certificate: "public\\IIO 2017 Level 1_page-0001.jpg", // Image name in public folder
      year: 2017,
      rank: "State rank 1, International rank 3",
    },
    {
      id: 2,
      title: "International Informatics Olympiad 2017",
      description: "State rank 1 in IIO 2017 Level 1.",
      certificate: "public\\IIO 2017 Level 2_page-0001.jpg",
      year: 2017,
      rank: "State rank 1",
    },
    {
      id: 3,
      title: "International Informatics Olympiad 2018",
      description: "State rank 1 in IIO 2018 Level 1.",
      certificate: "public\\IIO 2018 Level 1_page-0001.jpg",
      year: 2018,
      rank: "State rank 1",
    },
    {
      id: 4,
      title: "International Mathematics Olympiad 2017",
      description: "State rank 1 in IMO 2017 Level 2.",
      certificate: "public\\IMO 2017 Level 2_page-0001.jpg",
      year: 2017,
      rank: "State rank 1",
    },
    {
      id: 5,
      title: "International Mathematics Olympiad 2017",
      description: "State rank 3 in IMO 2018 Level 1.",
      certificate: "public\\IIO 2017 Level 2_page-0001.jpg",
      year: 2017,
      rank: "State rank 3",
    },
    {
      id: 6,
      title: "International Reasoning Olympiad 2017",
      description: "State rank 3 in IRao Level 1.",
      certificate: "public\\IRaO 2017 Level 1_page-0001.jpg",
      year: 2017,
      rank: "State rank 3",
    },
  ];

  const handleViewCertificate = (image) => {
    setCertificateImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      name="achievements"
      className="bg-gradient-to-b from-black via-black to-gray-800 text-white py-16 px-4 w-full"
    >
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">My Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ${
                achievement.rank.includes("International rank 3")
                  ? "border-4 border-platinum" // Platinum border for International Rank 3
                  : achievement.rank.includes("State rank 1")
                  ? "border-4 border-yellow-500" // Gold border for State Rank 1
                  : achievement.rank.includes("State rank 3")
                  ? "border-4 border-amber-500" // Bronze border for State Rank 3
                  : ""
              }`}
            >
              <h3 className="text-2xl font-semibold">{achievement.title}</h3>
              <p className="text-gray-400 my-2">{achievement.description}</p>
              <button
                onClick={() => handleViewCertificate(achievement.certificate)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal to view certificate */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              X
            </button>
            <img
              src={`/public/${certificateImage}`}
              alt="Certificate"
              className="max-w-lg max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
