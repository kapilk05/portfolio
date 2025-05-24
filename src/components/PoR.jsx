import React, { useState } from "react";

const PositionOfResponsibility = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const positions = [
    {
      id: 1,
      title: "Secretary, DJSCE Ecell",
      description:
        "Managed a team of 22 core members and 70 committee members and led initiatives in the Entrepreneurship Cell, overseeing events and coordinating with external partners. Organizsed various speaker sessions Business Plan competetions and marketing events.",
      image: "/PoR Images/Secretary E-Cell.jpg",
    },
    {
      id: 2,
      title: "Vice Chairperson Marketing, DJSCE Ecell",
      description:
        "Handled all marketing strategies, social media, and promotional activities for DJSCE Ecell. Brought in 1 lakh of sponsorships while mentoring 2 heads and 12 team members",
      image: "/PoR Images/VCP Marketing E-Cell.jpg",
    },
    {
      id: 3,
      title: "Technical Head, DJSCE Codestars",
      description:
        "Led the technical team of 21 members, organizing coding events, developing questions based on DSA and Competetive Coding and fostering a tech community at DJSCE.",
      image: "/PoR Images/Codestars.jpg",
    },
    {
      id: 4,
      title: "Head of the Finances Department, DJSCE Trinity",
      description:
        "Managed 13 Lakhs in finances and enhanced budget allocation for all the Trinity events, ensuring all transactions were accounted for.",
      image: "/PoR Images/trinity.jpg",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % positions.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + positions.length) % positions.length);
  };

  return (
    <div
      id="position of responsibility"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-16 px-4"
    >
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 border-b-4 inline border-gray-500">
          Positions of Responsibility
        </h2>
        <div className="relative">
          <div className="image-container relative w-full h-[500px] rounded-lg overflow-hidden">
            <img
              src={positions[currentImage].image}
              alt={positions[currentImage].title}
              className="w-full h-full object-contain mx-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
              <p className="text-xl">{positions[currentImage].description}</p>
            </div>
          </div>
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl"
          >
            &#60;
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl"
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PositionOfResponsibility;
