import Image from "next/image";
import React from "react";
import chahine from "../../public/assets/IMG20230610164805.jpg";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article>
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
      <div>
        <h4>job title</h4>
        <p>Company name</p>
        <div>{/* tech used */}</div>
        <p>date</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>tasks</li>
          <li>tasks</li>
          <li>tasks</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
