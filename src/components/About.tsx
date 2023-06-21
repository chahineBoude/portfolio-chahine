import React from "react";
import { motion } from "framer-motion";
import chahine from "../../public/assets/1654079263654.jpg";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex relative flex-col md:flex-row text-center md:text-left h-screen max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h1 className="absolute top-24 text-2xl text-gray-300 uppercase pb-5 pt-5 tracking-[25px] font-teko">
        About
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center text-left w-full h-1/2">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="mt-48 md:mt-10 flex justify-center items-center text-center"
        >
          <Image
            src={chahine}
            alt="about_pic"
            className="m-0 md:m-0 flex-shrink-0 w-64 h-64 lg:h-80 2xl:w-[500px] 2xl:h-[600px] rounded-full lg:rounded-3xl object-cover"
          />
        </motion.div>
        <motion.div
          className="space-y-15 md:space-y-0 px-0 2xl:px-24 max-w-3xl"
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

export default About;
