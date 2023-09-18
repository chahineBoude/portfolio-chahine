import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import next from "../../public/assets/Rlogical-Blog-Images-thumbnail.webp";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4];
  return (
    <div className="h-screen relative flex overflow-hidden text-left flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="w-full  absolute top-20 text-4xl uppercase tracking-[25px] font-teko text-gray-300 text-center ">
        Projects
      </h3>
      <motion.div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex flex-col flex-shrink-0 snap-center justify-center items-center space-y-8 mt-12 md:mt-32 md:p-96 h-screen font-PT"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: -200,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src={next}
                alt="skill"
                className="h-80 w-80 xl:h-72 xl:w-72 2xl:h-96 2xl:w-96 object-cover object-center"
              />
            </motion.div>
            <div className="space-y-5 px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-shade3/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Project title
              </h4>
              <p className="text-xl text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="w-full absolute top-[35%] bg-shade6/20 left-0 h-[300px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
