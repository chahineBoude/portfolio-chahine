import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <div className="relative flex text-center md:text-left h-screen justify-evenly items-center overflow-hidden flex-col md:flex-row">
      <div className="w-full md:w-3/12 absolute top-20 text-4xl uppercase tracking-[25px] font-teko text-gray-300 text-center ">
        <h1>Experience</h1>
      </div>
      <div>
        <ExperienceCard />
      </div>
    </div>
  );
}

export default Experience;
