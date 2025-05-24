import React, { useState } from "react";

const achievementsData = [
  {
    key: "deakin",
    title: "Deakin India Merit Scholarship",
    description:
      "Awarded Deakin University Merit Scholarship for outstanding academic performance during Bachelor's.",
    certificate: "/Achievements/Deakin Scholarship.jpg",
  },
  {
    key: "stageplay",
    title: "Stage Play Writer",
    description: "Wrote and directed an acclaimed stage play during my Bachelor's degree.",
    certificate: "/Achievements/Stage Play.jpg",
  },
  {
    key: "rapbattle",
    title: "Rap Battle Champion",
    description: "Won the college rap battle competition showcasing creativity and performance skills.",
    certificate: "/Achievements/Rap Battle.jpg",
  },
  {
    key: "olympiad1",
    title: "International Informatics Olympiad 2017 - Level 2",
    description:
      "International rank 3 (and State rank 1) in IIO 2017 Level 2. Also received a scholarship worth 5000 rupees.",
    certificate: "/Achievements/IIO 2017 Level 2_page-0001.jpg",
  },
  {
    key: "olympiad2",
    title: "International Informatics Olympiad 2017 - Level 1",
    description: "State rank 1 in IIO 2017 Level 1.",
    certificate: "/Achievements/IIO 2017 Level 1_page-0001.jpg",
  },
  {
    key: "olympiad3",
    title: "International Informatics Olympiad 2018 - Level 1",
    description: "State rank 1 in IIO 2018 Level 1.",
    certificate: "/Achievements/IIO 2018 Level 1_page-0001.jpg",
  },
  {
    key: "olympiad4",
    title: "International Mathematics Olympiad 2017 - Level 2",
    description: "State rank 1 in IMO 2017 Level 2.",
    certificate: "/Achievements/IMO 2017 Level 2_page-0001.jpg",
  },
  {
    key: "olympiad5",
    title: "International Mathematics Olympiad 2018 - Level 1",
    description: "State rank 3 in IMO 2018 Level 1.",
    certificate: "/Achievements/IMO 2018 Level 1_page-0001.jpg",
  },
  {
    key: "olympiad6",
    title: "International Reasoning Olympiad 2017 - Level 1",
    description: "State rank 3 in IRao Level 1.",
    certificate: "/Achievements/IRaO 2017 Level 1_page-0001.jpg",
  },
];

const PodiumStyle = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "50px",
    marginBottom: "30px",
  },
  centerPodium: {
    width: "260px",
    height: "360px",
    backgroundColor: "transparent", // Transparent to inherit background
    borderRadius: "12px 12px 0 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "18px",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  },
  sidePreview: {
    width: "100px",
    height: "140px",
    backgroundColor: "#444",
    borderRadius: "12px 12px 0 0",
    opacity: 0.6,
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.3s ease, opacity 0.3s ease",
  },
  certificateImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    opacity: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
    transition: "opacity 0.3s ease",
  },
  overlayVisible: {
    opacity: 1,
  },
  navButton: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "3rem",
    cursor: "pointer",
    userSelect: "none",
  },
};

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [hovered, setHovered] = useState(false);

  const total = achievementsData.length;
  const current = achievementsData[currentIndex];
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const openModal = (img) => {
    setModalImage(img);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      id="achievements"
      className="bg-gray-900 text-white min-h-screen p-8 flex flex-col items-center font-sans"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">My Key Achievements</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <button
          onClick={() => setCurrentIndex(prevIndex)}
          aria-label="Previous achievement"
          style={PodiumStyle.navButton}
          title="Previous"
        >
          &#8592;
        </button>

        <div style={PodiumStyle.container}>
          <div
            style={PodiumStyle.sidePreview}
            onClick={() => setCurrentIndex(prevIndex)}
            title={achievementsData[prevIndex].title}
          >
            <img
              src={achievementsData[prevIndex].certificate}
              alt="Previous Achievement"
              style={PodiumStyle.certificateImage}
              loading="lazy"
            />
          </div>

          <div
            style={PodiumStyle.centerPodium}
            title={current.description}
            onClick={() => openModal(current.certificate)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div style={{ position: "relative", width: "220px", height: "280px" }}>
              <img
                src={current.certificate}
                alt={current.title}
                style={{
                  ...PodiumStyle.certificateImage,
                  transform: hovered ? "scale(1.05)" : "scale(1)",
                }}
                loading="lazy"
              />
              <div
                style={{
                  ...PodiumStyle.overlay,
                  ...(hovered ? PodiumStyle.overlayVisible : {}),
                }}
              >
                Click to view
              </div>
            </div>
            <div style={{ fontWeight: "600", fontSize: "1.25rem", textAlign: "center", paddingTop: "12px" }}>
              {current.title}
            </div>
          </div>

          <div
            style={PodiumStyle.sidePreview}
            onClick={() => setCurrentIndex(nextIndex)}
            title={achievementsData[nextIndex].title}
          >
            <img
              src={achievementsData[nextIndex].certificate}
              alt="Next Achievement"
              style={PodiumStyle.certificateImage}
              loading="lazy"
            />
          </div>
        </div>

        <button
          onClick={() => setCurrentIndex(nextIndex)}
          aria-label="Next achievement"
          style={PodiumStyle.navButton}
          title="Next"
        >
          &#8594;
        </button>
      </div>

      <p className="max-w-xl mt-8 text-center text-gray-400">{current.description}</p>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
        >
          <div
            className="relative bg-transparent p-4 rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold focus:outline-none"
              aria-label="Close certificate view"
            >
              ×
            </button>
            <img
              src={modalImage}
              alt="Certificate"
              className="max-w-[90vw] max-h-[80vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
