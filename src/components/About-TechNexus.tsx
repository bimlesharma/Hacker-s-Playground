"use client";
import { motion } from "framer-motion";
import PastEvents from "./PastEvents";
// import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black pt-24 pb-16 px-6 lg:px-24">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-10 left-20 h-20 w-20 bg-pink-500 rounded-full blur-lg opacity-40"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-24 h-20 w-20 bg-pink-500 triangle blur-lg opacity-40"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-32 right-1/3 h-24 w-24 bg-pink-500 square blur-lg opacity-30"
          animate={{ rotate: [0, 360], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-white mb-6 font-squid-game uppercase"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About <span className="text-pink-500">Tech Nexus Community</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg leading-8 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >Tech Nexus is more than just a community—it&apos;s a movement that bridges the gap between innovation and execution. We are a dynamic group of tech enthusiasts, developers, designers, and problem-solvers dedicated to fostering a culture of learning, collaboration, and innovation.
          </motion.p>
          <motion.p
            className="text-gray-300 text-lg leading-8 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We are proud to present the ultimate battleground for coders! Inspired by{" "}
            <span className="text-pink-500 font-bold">Squid Game</span>, our
            hackathon challenges you to think, create, and innovate. It is a 30-hour offline overnight hackathon, designed to push the boundaries of innovation, creativity, and collaboration. This event goes beyond just being a competition—it’s packed with exciting activities, engaging games, and real-world problem-solving to keep the energy high and the ideas flowing!
          </motion.p>

          <PastEvents />
          
        </div>
        

        {/* Right Section */}
        <motion.div
          className="relative w-full max-w-md h-auto "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/technexus-logo.png"
            alt="Squid Game Doll"
            draggable="false"
            className="scale-105 mx-auto shadow-pink-500 backdrop-brightness-150 w-auto"
          />
          {/* <Image src={`/images/about-img.png`} width={400} height={300} alt="about"/> */}
          <motion.div
            className="absolute p-4 inset-0 border-2 border-pink-500 rounded-lg pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.07  }}
          />
          <div className="flex justify-center mt-2">
          <a
          href="https://linktr.ee/Technexus.community" // Replace with actual location
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-transform transform hover:scale-105"
        >
          Learn More
        </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
