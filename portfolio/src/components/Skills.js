import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACTIMG from "../assets/react.png";
import TAILWIND from "../assets/tailwind.png";
const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      <div className=" w-full h-screen max-w-[1000px] mx-auto p-4 flex flex-col justify-center">
        <div>
          <p className="text-4xl  inline font-bold border-blue-600 border-b-4">
            Skills
          </p>
          <p className="py-4">
            // These are the Technologies I have worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} className="w-20 mx-auto" alt="HTML" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} className="w-20 mx-auto" alt="HTML" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={JAVASCRIPT} className="w-20 mx-auto" alt="HTML" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={REACTIMG} className="w-20 mx-auto" alt="HTML" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={TAILWIND} className="w-20 mx-auto" alt="HTML" />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
