import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col md:flex-row justify-center items-start gap-10 h-full">
        
        {/* LEFT DIV - ABOUT TEXT + COMPETITIVE PROFILES */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About Me
            </p>

            <p className="text-xl mt-6">
              Hello there!!<br />
              Aspiring Software Developer & Machine Learning Enthusiast with a passion for building scalable tech and solving real-world problems using data.
            </p>
          </div>

          {/* Competitive Profiles with hover enlarge */}
          <div className="bg-gray-700 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-mono tracking-wide mb-2">Competitive Profiles</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.codechef.com/users/kodekarra"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <img
                  src="https://img.shields.io/badge/CodeChef-3%20Star-5C1E10?style=for-the-badge&logo=codechef&logoColor=white"
                  alt="CodeChef Badge"
                />
              </a>
              <a
                href="https://leetcode.com/kashyap_kapil/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <img
                  src="https://img.shields.io/badge/LeetCode-Silver-0A74DA?style=for-the-badge&logo=leetcode&logoColor=white"
                  alt="LeetCode Badge"
                />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT DIV - LEETCODE STATS ONLY */}
        <div className="md:w-1/2">
          <div className="bg-gray-700 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-mono tracking-wide mb-2">LeetCode Stats</h3>
            <img
              src="https://leetcard.jacoblin.cool/kashyap_kapil?theme=dark&font=ABeeZee&ext=activity"
              alt="LeetCode Stats"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
