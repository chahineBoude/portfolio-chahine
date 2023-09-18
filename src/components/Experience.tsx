import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <div className="relative flex text-center h-screen justify-evenly items-center overflow-hidden flex-col md:flex-row">
      <div className="w-full md:w-3/12 absolute top-32 lg:top-20 text-4xl uppercase tracking-[25px] font-teko text-gray-300 text-center ">
        <h1>Experience</h1>
      </div>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory xl:mt-12 xl:pt-28 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-shade2/70 scrollbar-thin md:text-left">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
}

export default Experience;
