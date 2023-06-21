import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import { AnimatePresence } from "framer-motion";
import About from "@/components/About";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-background h-screen text-white snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden scroll-smooth">
      <Head>
        <title>Chahine's portfolio</title>
      </Head>
      <Header />
      <section id="Intro" className="snap-start">
        <AnimatePresence>
          <Intro />
        </AnimatePresence>
      </section>
      <section id="About" className="snap-center">
        <About />
      </section>
    </div>
  );
}
