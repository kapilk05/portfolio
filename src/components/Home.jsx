import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full px-4 md:flex-row md:items-start md:justify-start">
        <div className="flex flex-col justify-center items-start h-full">
          <div
            style={{
              width: 200,
              height: 300,
              overflow: "hidden",
              borderRadius: 20,
              marginBottom: 24,
            }}
          >
            <img
              src="/Me.png"
              alt="Me"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
              }}
            />
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold text-white text-left">
           Kapil Kashyap
          </h2>

          <p className="text-gray-500 py-4 max-w-md text-left">
            Aspiring ML developer and Software Engineer based in Mumbai.
          </p>

          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Myself
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
