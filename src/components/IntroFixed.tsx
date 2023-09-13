import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AnimatePresence, motion, Variants } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import chahine from "../../public/assets/IMG_20230610_165231.jpg";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";

type Props = {};

function IntroFixed({}: Props) {
  const [index, setIndex] = useState(0);
  const [phrases, setPhrases] = useState([
    "Chahine",
    "a software developer",
    "a system administrator",
    "a fullstack developer",
    "a devops Engineer",
  ]);
  const [typing, setTyping] = useState(true);
  const [btnShow, setBtnShow] = useState(false);
  const [showCursor, setCursor] = useState(true);
  const buttons = ["About", "Experience", "Skills", "Projects"];
  const [isSmallerThanMd] = useMediaQuery("(max-width: 850px)");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % phrases.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTypingComplete = () => {
    setTyping(false);
    setBtnShow(true);
    setCursor(false);
  };

  const handleBtnShow = () => {
    setBtnShow(true);
  };

  const buttonVarients: Variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center md:items-start text-center font-teko "
      onClick={handleBtnShow}
    >
      <motion.div
        initial={{
          x: -500,
          y: 0,
          opacity: 0,
        }}
        animate={{
          x: isSmallerThanMd ? 0 : 100,
          y: isSmallerThanMd ? 150 : 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex relative justify-center items-center w-full md:justify-end md:h-screen text-3xl md:text-4xl 2xl:text-7xl text-gray-300 uppercase tracking-[15px] md:w-2/12 animate-pulse h-1/12"
      >
        <h1>chahine</h1>
      </motion.div>
      <div className="relative  h-screen md:mt-24 flex flex-col justify-center items-center w-full md:w-8/12 ">
        <BackgroundCircles />
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.1,
          }}
        >
          <Image
            className="h-36 w-36 rounded-full mx-auto object-cover"
            src={chahine}
            alt="profile_pic"
          />
        </motion.div>
        <div className="z-20 flex justify-center flex-col text-center items-center">
          <h2 className="text-sm md:text-xl text-gray-300 uppercase pb-5 pt-5 tracking-[15px]">
            software engineer
          </h2>
          <div className="text-4xl md:text-5xl text-center ">
            <span>
              <Typewriter
                words={["Hello !", " Welcome to my portfolio page ", " I am "]}
                loop={1}
                cursor={showCursor}
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={500}
                onLoopDone={handleTypingComplete}
              />
            </span>
            {!typing && (
              <motion.span
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.1,
                }}
                className=" text-shade4 "
              >
                <Typewriter
                  words={phrases}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={500}
                />

                {/* <TextTransition springConfig={presets.gentle} delay={1500}> 
              {phrases[index % phrases.length]}
            </TextTransition> */}
              </motion.span>
            )}
          </div>
          {btnShow && (
            <div className=" pt-8 md:pt-8">
              <AnimatePresence>
                {buttons.map((button, id) => (
                  <motion.button
                    key={id}
                    initial="initial"
                    animate="animate"
                    variants={buttonVarients}
                    transition={{ delay: id * 1 }}
                    className="customButton"
                  >
                    <Link href={`#${button}`}>{button}</Link>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
      <motion.div
        initial={{
          x: 500,
          y: 0,
          opacity: 0,
        }}
        animate={{
          x: isSmallerThanMd ? 0 : -100,
          y: isSmallerThanMd ? -200 : 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex relative justify-center items-center w-full md:justify-end md:h-screen text-3xl md:text-4xl 2xl:text-7xl text-gray-300 uppercase tracking-[15px] md:w-2/12 animate-pulse h-1/12"
      >
        <h1>boudemagh</h1>
      </motion.div>
    </div>
  );
}

export default IntroFixed;
