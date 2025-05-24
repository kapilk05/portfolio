import React from "react";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your message was sent!");
    window.location.reload();
  };

  return (
    <div
      id="get in touch"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Reach Out to Me :)
          </p>
          <p className="py-4 text-lg text-gray-300">
            📧 Email: <a href="mailto:your.email@example.com" className="underline text-cyan-400">kapilkashyap3105@gmail.com</a>  
            <br />
            📱 Phone: <span className="text-gray-100">+91-85914245664</span>
          </p>
          <p className="py-4 text-gray-400">...or just send a message using the form below!</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/da0e92ee-769a-464f-81e8-17d1347cc7c7"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
