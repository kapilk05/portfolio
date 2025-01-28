import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import tensorflow from "../assets/portfolio/tensorflow.png";
import keras from "../assets/portfolio/keras.png";
import numpy from "../assets/portfolio/numpy.png";
import pandas from "../assets/portfolio/pandas.png";
import matplotlib from "../assets/portfolio/matplotlib.jpg";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: tensorflow,
      title: "TensorFlow",
      style: "shadow-gray-600",
    },
    {
      id: 9,
      src: keras,
      title: "Keras",
      style: "shadow-red-500",
    },
    {
      id: 10,
      src: numpy,
      title: "NumPy",
      style: "shadow-blue-600",
    },
    {
      id: 11,
      src: pandas,
      title: "Pandas",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: matplotlib,
      title: "Matplotlib",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Tech Stack
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        {/* Technologies Section */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
