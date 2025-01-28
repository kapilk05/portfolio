import React, { useState } from "react";

const PositionOfResponsibility = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const positions = [
    {
      id: 1,
      title: "Secretary, DJSCE Ecell",
      description: "Managed a team of 22 core members and 70 committee members and led initiatives in the Entrepreneurship Cell, overseeing events and coordinating with external partners.",
      image: "/Secretary E-Cell.jpg", // Corrected path
    },
    {
      id: 2,
      title: "Vice Chairperson Marketing, DJSCE Ecell",
      description: "Handled all marketing strategies, social media, and promotional activities for DJSCE Ecell. Brought in 1 lakh of sponsorships while mentoring 2 heads and 12 team members",
      image: "/VCP Marketing E-Cell.jpg", // Corrected path
    },
    {
      id: 3,
      title: "Technical Head, DJSCE Codestars",
      description: "Led the technical team of 21 members, organizing coding events, and fostering a tech community at DJSCE.",
      image: "/Core 23-24 Certificates_page-0001.jpg", // Corrected path
    },
    {
      id: 4,
      title: "Treasurer, DJSCE Trinity",
      description: "Managed finances and budget allocation for the Trinity event, ensuring all transactions were accounted for.",
      image: "/trinity.jpg", // Corrected path
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % positions.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + positions.length) % positions.length);
  };

  return (
    <div className="position-responsibility-section bg-black text-white py-16 px-4 w-full">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Positions of Responsibility</h2>
        <div className="relative">
          <div className="image-container relative w-full h-[500px] rounded-lg overflow-hidden">
            <img
              src={positions[currentImage].image}
              alt={positions[currentImage].title}
              className="w-full h-full object-contain mx-auto" // Center image and maintain aspect ratio
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
