"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Spotlight } from "./ui/spotlight-new";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState("00:00:00:00");
  const [regTimeLeft, setRegTimeLeft] = useState("00:00:00:00");

  useEffect(() => {
    const eventDate = new Date("2025-03-01T08:00:00").getTime();
    const regDeadline = new Date("2025-02-23T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const eventDiff = eventDate - now;
      const regDiff = regDeadline - now;

      if (eventDiff <= 0) {
        clearInterval(interval);
        setTimeLeft("00:00:00:00");
      } else {
        setTimeLeft(formatTime(eventDiff));
      }

      if (regDiff <= 0) {
        setRegTimeLeft("00:00:00:00");
      } else {
        setRegTimeLeft(formatTime(regDiff));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (difference: number) => {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center p-8 bg-gray-900"
      style={{
        backgroundImage: "url('/images/web-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-0">
        <Spotlight />
      </div>
      
      <div className="relative mt-12 z-10 text-center flex flex-col justify-center text-white max-w-4xl">
        <div className="flex justify-center z-50 items-center gap-4 mb-1 md:mb-2 scale-100 md:scale-95">
          <img src="/images/technexus-logo.png" width={100} height={100} draggable="false" alt="logo" />
        </div>
        <div className=" text-sm text-center ">PRESENTS</div>
        <Image src="/images/logo.png" width={640} height={64} alt="logo" className="hidden md:block self-center" draggable="false"/>
        <img src="/images/about-img.png" alt="logo" className="md:hidden w-auto px-12" draggable="false" />

        <p className="mt-4 text-lg md:text-3xl pb-4">
          The Ultimate <span className="text-pink-500 font-semibold"><i>30-Hour Offline</i></span> Showdown
        </p>
        <h1 className="text-xl font-squid-game md:text-3xl font-extrabold tracking-wide text-pink-500">
          1<span className="">-</span>2nd<span className="text-gray-100"> March 2025</span>
        </h1>

        {/* Registration Deadline Timer */}
        <div className="mt-4 text-lg md:text-2xl font-bold text-yellow-400 bg-yellow-800/40 w-fit px-6 py-2 rounded-lg shadow-lg border border-yellow-500 animate-pulse mx-auto">
          Registration Closes In: {regTimeLeft}
        </div>

        {/* Event Timer */}
        <div className="mt-3 flex justify-center gap-4 text-xl font-mono bg-gray-950/40 w-fit scale-90 md:scale-100 self-center p-2 rounded-lg">
          {timeLeft.split(":").map((time, index) => (
            <div key={index} className="flex font-squid-game flex-col items-center bg-gray-900 rounded-lg pb-1">
              <span className="bg-gray-800/60 px-6 w-20 py-4 rounded-lg text-pink-500 shadow-lg">
                {time}
              </span>
              <span className="text-sm mt-2">
                {["DAYS", "HOURS", "MIN", "SEC"][index]}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center items-center gap-6 text-pink-500">
          <img src="/images/shape.svg" className="w-[45%] md:w-[27%]" alt="shapes" />
        </div>

        <div className="mt-4">
          <motion.button
            className="px-8 py-3 bg-pink-600 text-lg font-bold rounded-lg shadow-xl hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-300 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            disabled
          >
            <a href="https://dorahacks.io/hackathon/hackersplayground/">Register Now</a>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
