import React from "react";
import { motion } from "framer-motion";
import chahine from "../../public/assets/IMG20230610164805.jpg";
import Image from "next/image";

type Props = {};

function AboutFixed({}: Props) {
  return (
    <div className=" relative flex text-center md:text-left h-screen justify-evenly items-center">
      <div className="w-full md:w-3/12 absolute top-20 md:top-20 text-4xl uppercase tracking-[25px] font-teko text-gray-300 text-center mt-8">
        <h1>About</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center text-left w-full h-1/2 mt-12 md:mt-8">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Image
            src={chahine}
            alt="about_pic"
            className="m-0 md:m-0 flex-shrink-0 w-44 h-44 md:w-64 md:h-64 lg:h-80 2xl:w-[500px] 2xl:h-[600px] rounded-full lg:rounded-3xl object-cover"
          />
        </motion.div>
        <motion.div
          className="w-8/12 text-center md:text-left"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="text-3xl font-semibold font-PT py-10 2xl:text-5xl">
            My background
          </h2>
          <p className="sm:text-base md:text-lg font-PT lg:text-xl 2xl:text-2xl">
            Master's degree in{" "}
            <span className="text-shade4">software engineering</span> and
            currently working as a{" "}
            <span className="text-shade4">Linux system administrator</span>,
            passionate in fullstack developpement, profecient JavaScript,
            &nbsp;Python and Java I have worked on many personal and
            professional fullstack application projects on top of my work as a
            sysadmin on Redhat linux systems and CI/CD projects with tools such
            as Docker, &nbsp;Kubernetes, &nbsp;Ansible and Nagios. <br /> I am
            always open to new challenges and experiences and am always on the
            journey of constant learning and self-improvement.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutFixed;
