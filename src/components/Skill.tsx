import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import react from "../../public/assets/react_logo-512.webp";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className="border rounded-full border-gray-400 p-1 md:p-2">
          <Image
            src={react}
            alt="skill"
            className="h-16 w-16 md:h-20 md:w-20 2xl:h-32 2xl:w-32 rounded-full object-cover object-center filter group-hover:blur-sm transition duration-300 ease-in-out"
          />
        </div>
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out h-16 w-16 md:h-20 md:w-20 2xl:h-32 2xl:w-32 rounded-full m-1 md:m-2 z-0">
        <div className="flex items-center justify-center h-full ">
          <p className="text-3xl font-semibold font-PT opacity-100 text-white ">
            100%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
