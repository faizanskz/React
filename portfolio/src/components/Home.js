import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-600">Hi,my Name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Faizan Shaikh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am Front-end Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I want to utilize my skills in the best possible way to achieve the
          company's goals as well as gain new experience and enhance my
          professional growth along with the organization's objective. My career
          goal is to become associated with a company where I can fully use my
          skills for success and gain further experience while enhancing the
          company's productivity and reputation
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <FaArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
