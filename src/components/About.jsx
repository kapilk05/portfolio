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
          My name is Kapil Kashyap and I am a Front-End Web developer 
          and a Ui-Ux Designer. I am also a avid block-chain enthusiast 
          who is looking forward for doing more porjects under the 
          blockchain domain.
        </p>

        <br />

        <p className="text-xl">
          I have Served 2 Internships in the field of Business Development
          <br></br>
          1. Aiesec in Mumbai ( Jan 2022 - March 2023)<br></br>
          2. ParkIt.biz (June 2023 - August 2023)<br></br>
          I am having a lot of connections in the industry and I am looking forward for 
          improving the experience that I have under this domain, while 
          I continue to work on myself 
        </p>
      </div>
    </div>
  );
};

export default About;
