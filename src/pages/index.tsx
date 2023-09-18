import Head from "next/head";
import Header from "@/components/Header";
import { AnimatePresence } from "framer-motion";
import AboutFixed from "@/components/AboutFixed";
import IntroFixed from "@/components/IntroFixed";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import { HomeModernIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="bg-background h-screen text-white snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-shade2/70">
      <Head>
        <title>Chahine's portfolio</title>
      </Head>
      <Header />
      <section id="Intro" className="snap-start">
        <AnimatePresence>
          <IntroFixed />
        </AnimatePresence>
      </section>
      <section id="About" className="snap-center">
        <AboutFixed />
      </section>
      <section id="Experience" className="snap-center">
        <Experience />
      </section>
      <section id="Skills" className="snap-start">
        <Skills />
      </section>
      <section id="Projects" className="snap-center">
        <Projects />
      </section>
      <section id="Contact" className="snap-center">
        <Contact />
      </section>
      <Link href="#Intro ">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center md:justify-start md:pl-4">
            <HomeModernIcon className="w-10 h-10 hover:text-shade2 transition duration-300 cursor-pointer" />
          </div>
        </footer>
      </Link>
    </div>
  );
}
