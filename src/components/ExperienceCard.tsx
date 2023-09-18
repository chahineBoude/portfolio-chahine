import Image from "next/image";
import React from "react";
import chahine from "../../public/assets/IMG20230610164805.jpg";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-3xl items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[700px] 2xl:w-[900px] snap-center bg-shade7 py-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity">
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          src={chahine}
          alt="about_pic"
          className="h-32 w-32 rounded-full object-cover object-center"
        />
      </motion.div>
      <div className="px-0 md:px-5 sm:px-10">
        <h4 className="font-light font-teko text-5xl 2xl:text-6xl">
          job title
        </h4>
        <p className="pt-2 font-bold font-PT text-2xl 2xl:text-3xl">
          Company name
        </p>
        <div>{/* tech used */}</div>
        <p className="pt-2 font-extralight font-PT 2xl:text-xl">2021-2023</p>
        <ul className="list-disc space-y-4 ml-5 text-xl 2xl:text-2xl pt-2 font-PT">
          <li>task</li>
          <li>tasks</li>
          <li>tasks</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
