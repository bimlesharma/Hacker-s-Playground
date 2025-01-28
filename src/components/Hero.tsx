"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { FloatingDock } from './ui/floating-doct';
import Image from "next/image";
// import {
//   IconBrandGithub,
//   IconBrandX,
//   IconExchange,
//   IconHome,
//   IconNewSection,
//   IconTerminal2,
// } from "@tabler/icons-react";
import { Spotlight } from "./ui/spotlight-new";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState("00:00:00:00");
  // const links = [
  //   {
  //     title: "Home",
  //     icon: (
  //       <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },

  //   {
  //     title: "Products",
  //     icon: (
  //       <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  //   {
  //     title: "Components",
  //     icon: (
  //       <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  //   {
  //     title: "Aceternity UI",
  //     icon: (
  //       <Image
  //         src=""
  //         width={20}
  //         height={20}
  //         alt="Aceternity Logo"
  //       />
  //     ),
  //     href: "#",
  //   },
  //   {
  //     title: "Changelog",
  //     icon: (
  //       <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },

  //   {
  //     title: "Twitter",
  //     icon: (
  //       <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  //   {
  //     title: "GitHub",
  //     icon: (
  //       <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  // ];

  useEffect(() => {
    const targetDate = new Date("2025-02-20T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft("00:00:00:00");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(
        `${days.toString().padStart(2, "0")}:${hours
          .toString()
          .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center p-8"
      style={{
        backgroundImage: "url('/images/web-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Spotlight />
      {/* Static gradient overlay */}
      <div className=" absolute inset-0 bg-gradient-to-b from-pink-800 via-pink-600 to-pink-900 opacity-0"></div>

      {/* Static shapes */}
      <div className="absolute hidden md:block left-10 inset-0">
        {["circle", "triangle", "square"].map((shape, i) => (
          <div
            key={i}
            className={`absolute bg-pink-500 opacity-10 ${
              shape === "circle"
                ? "rounded-full h-96 w-96"
                : shape === "triangle"
                ? "h-96 w-96"
                : "h-96 w-96"
            } ${shape === "triangle" ? "triangle" : ""}`}
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 30}%`,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative mt-16 z-10 text-center flex flex-col justify-center text-white max-w-4xl">
        {/* Top logos */}
        <div className="flex justify-center items-center gap-4 mb-10 md:mb-2 ml-5 scale-110 md:scale-95">
          <Image
            src="/images/technexus-logo.png"
            width={80}
            height={80}
            alt="logo"
          />
          <div className="antialiased font-squid-game text-3xl">X</div>
          <Image src="/images/gdg-logo.png" width={110} height={80} alt="logo" />
        </div>

        {/* Title */}
        {/* <h1 className="text-6xl font-squid-game md:text-8xl font-extrabold tracking-wide text-pink-500">
          HACKER&apos;S <span className="text-gray-300">PLAYGROUND</span>
        </h1> */}
        {/* <img src="/images/logo.png" alt="logo" /> */}
        <Image src="/images/logo.png" width={640} height={64} alt="logo" className="hidden md:block self-center"/>
        <img src="/images/about-img.png" alt="logo" width={500} className="md:hidden" />

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-4xl pb-4">
        The Ultimate <span className="text-pink-500 font-semibold"><i>30-Hour Offline</i></span> Showdown
        </p>

        <h1 className="text-2xl font-squid-game md:text-4xl font-extrabold tracking-wide text-pink-500">
          8<span className="text-gray-100">-</span>9th<span className="text-gray-100"> March 2025</span>
        </h1>

        {/* Timer */}
        <div className="mt-6 flex justify-center gap-4 text-xl font-mono bg-gray-950/40 w-fit self-center p-2 rounded-lg">
          {timeLeft.split(":").map((time, index) => (
            <div
              key={index}
              className="flex font-squid-game flex-col items-center bg-gray-900 rounded-lg pb-1"
            >
              <span className="bg-gray-800/60 px-6 w-20 py-4 rounded-lg text-pink-500 shadow-lg">
                {time}
              </span>
              <span className="text-sm mt-2">
                {["DAYS", "HOURS", "MIN", "SEC"][index]}
              </span>
            </div>
          ))}
        </div>

        {/* Shapes */}
        <div className="mt-4 flex justify-center items-center gap-6 text-pink-500">
          <motion.div
            className="text-5xl"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            ○
          </motion.div>
          <motion.div
            className="text-5xl"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            △
          </motion.div>
          <motion.div
            className="text-7xl -mt-5"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            □
          </motion.div>
        </div>

        {/* Register button */}
        <div className="mt-4">
          <motion.button
            className="px-8 py-3 bg-pink-600 text-lg font-bold rounded-lg shadow-xl hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-300 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            disabled
          >
            Register Now
          </motion.button>
        </div>
      </div>
      {/* <div>
          <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
          </div> */}
    </div>
  );
};

export default Hero;
