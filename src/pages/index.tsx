import Head from "next/head";
import Header from "@/components/Header";
import { AnimatePresence } from "framer-motion";
import AboutFixed from "@/components/AboutFixed";
import IntroFixed from "@/components/IntroFixed";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="bg-background h-screen text-white snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden scroll-smooth">
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
    </div>
  );
}
