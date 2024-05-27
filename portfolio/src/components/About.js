import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Faizan, nice to meet you . Please take a look around</p>
          </div>
          <div>
            <p>
              I want to utilize my skills in the best possible way to achieve
              the company's goals as well as gain new experience and enhance my
              professional growth along with the organization's objective. My
              career goal is to become associated with a company where I can
              fully use my skills for success and gain further experience while
              enhancing the company's productivity and reputation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
