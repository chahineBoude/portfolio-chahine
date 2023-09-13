import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 1],
        opacity: [0.2, 0.4, 0.6, 0.2, 1],
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute border border-shade2 rounded-full h-[75px] w-[75px] md:h-[100px] md:w-[100px] lg:h-[200px] lg:w-[200px] mt-36 animate-ping" />
      <div className=" absolute border border-shade2 rounded-full  h-[325px] w-[325px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] mt-36 animate-ping" />
      <div className=" absolute border border-shade3 rounded-full opacity-10  h-[250px] w-[250px] md:h-[400px] md:w-[400px] lg:h-[500px] mt-36 lg:w-[500px]  animate-pulse" />
      <div />
    </motion.div>
  );
}

export default BackgroundCircles;
