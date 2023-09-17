import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      className="relative flex text-center flex-col md:flox-row md:text-left min-h-screen justify-center mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="w-full  absolute top-20 text-4xl uppercase tracking-[25px] font-teko text-gray-300 text-center ">
        Skills
      </h3>
      <h3 className="w-full absolute top-32 text-xl uppercase tracking-[5px] font-teko text-gray-400 text-center ">
        Hover skill for current profeciency level
      </h3>
      <div className="grid grid-cols-4 gap-4 md:mt-32 2xl:mt-16 ">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
