import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0  flex items-start justify-between max-w-7xl mx-auto z-40 font-PT text-lg">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.75,
        }}
        className="flex flex-row items-center "
      >
        <div className="flex justify-around">
          <SocialIcon
            url="https://www.linkedin.com/in/chahine-boudemagh-1b1b761b8/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/chahineBoude"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
      </motion.div>

      <div className="font-Kufi p-3 text-3xl text-gray-300">
        {/* LOGO */} <span>بُودْمَاغْ شَاهِينْ</span>{" "}
      </div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.75,
        }}
        className="flex flex-row items-center  cursor-pointer"
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="uppercase hidden md:inline-flex text-sm ">Get in touch</p>
      </motion.div>
    </header>
  );
}

export default Header;
