import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between w-full mx-auto z-40 font-PT text-lg">
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
        className="flex flex-row items-center w-3/12"
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

      <div className="font-Kufi p-3 text-3xl text-gray-300 w-6/12 text-center">
        <a href="/">
          {/* LOGO */} <span className="select-none">بُودْمَاغْ شَاهِينْ</span>{" "}
        </a>
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
        className="flex flex-row items-center justify-end cursor-pointer w-3/12"
      >
        <div className="mr-4">
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
          <a
            href="mailto:boudjellaliabiryasmine@gmail.com"
            className="uppercase hidden md:inline-flex text-sm text-center items-center hover:text-gray-400"
          >
            get in touch
          </a>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
