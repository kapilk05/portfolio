import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello there!!<br></br>
          I am a passionate Computer Engineering student with a deep interest in Machine Learning, Deep Learning, and Business Analytics. Currently pursuing my bachelor's degree, I focus on leveraging advanced algorithms for research and real-world applications. My expertise spans across areas like image classification, natural language processing (NLP), and graph neural networks (GNN), with projects ranging from brain tumor detection to F1 race winner predictions. I have honed my leadership and technical skills through various roles, including Technical Head, Secretary, and Vice Chairperson Marketing for college organizations. I am driven to contribute to cutting-edge research and apply AI technologies to solve impactful problems.
        </p>
        <p className="text-xl mt-20">
         Currently I have a peak rating of 1854 on Codechef (4 STARS)
        </p>
        <br />

    
      </div>
    </div>
  );
};

export default About;
