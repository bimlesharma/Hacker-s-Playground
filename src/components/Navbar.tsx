"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Link from "next/link";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const [isMobileJoinUsOpen, setIsMobileJoinUsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full">
      <motion.nav
        className="fixed top-3 left-3 right-3 md:left-[5vw] md:right-[5vw] lg:left-[10vw] lg:right-[10vw] rounded-md md:top-2 md:transform md:-translate-x-1/2 z-40 bg-black/30 backdrop-blur shadow-2xl px-6 py-3 border border-pink-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Desktop menu */}
        <div className="hidden md:flex container items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <motion.img
              src="/images/logo.png"
              alt="logo"
              className="h-8"
              draggable="false"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          <div className="flex items-center space-x-6 font-mono uppercase text-sm">
            {["About", "Tracks", "Schedule", "Prizes", "Sponsors", "Team"].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-white cursor-pointer font-semibold relative"
              >
                <a href={`#${item.toLowerCase()}`} className="relative">
                  {item}
                </a>
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-pink-500 w-0"
                  initial={{ width: "0" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}

            {/* Join Us Dropdown */}
            <div 
              className="relative text-white font-semibold cursor-pointer"
              onMouseEnter={() => setIsJoinUsOpen(true)}
              onMouseLeave={() => setIsJoinUsOpen(false)}
            >
              <span>Join Us</span>
              {isJoinUsOpen && (
                <motion.div 
                  className="absolute left-0 mt w-48 bg-black/80 backdrop-blur border border-pink-500 rounded-md shadow-lg z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {["Participants", "Sponsors", "Community Partners"].map((option, idx) => (
                    <a 
                      key={idx} 
                      href={option === "Participants" ? "https://dorahacks.io/hackathon/hackersplayground/" : option === "Community Partners" ? "https://docs.google.com/forms/d/e/1FAIpQLSdmff4sf8ZUyn4D_0IhnhGWpqUQCB1HuHGuBKZEEdiIqsCjTQ/viewform" : "#sponsors"} 
                      className="block px-4 py-2 text-white hover:bg-pink-500/80 transition"
                    >
                      {option}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          <HoverBorderGradient
            containerClassName="rounded-[7px]"
            as="button"
            className=" bg-none h-auto bg-pink-600 text-white flex items-center justify-center rounded-md"
          >
            <a href="https://dorahacks.io/hackathon/hackersplayground/" className="text-sm font-bold">Register Now</a>
          </HoverBorderGradient>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Link href="/">
            <motion.img
              src="/images/logo.png"
              alt="logo"
              className="h-8"
              draggable="false"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-white font-semibold cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            ☰
          </motion.div>
        </div>

        {/* Mobile menu links */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden flex flex-col items-center mt-4 space-y-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {["About", "Tracks", "Schedule", "Prizes", "Sponsors", "Team"].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-white font-semibold cursor-pointer relative"
                onClick={closeMobileMenu} 
              >
                <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="relative">
                  {item}
                </a>
              </motion.div>
            ))}
            
            <div className="text-white font-semibold cursor-pointer" onClick={() => setIsMobileJoinUsOpen((prev) => !prev)}>
              Join Us
            </div>
            {isMobileJoinUsOpen && (
              <div className="flex flex-col items-center bg-black/80 border border-pink-500 rounded-md w-48">
                {["Participants", "Sponsors", "Community Partners"].map((option, idx) => (
                  <a key={idx} href={option === "Participants" ? "https://dorahacks.io/hackathon/hackersplayground/" : option === "Community Partners" ? "https://docs.google.com/forms/d/e/1FAIpQLSdmff4sf8ZUyn4D_0IhnhGWpqUQCB1HuHGuBKZEEdiIqsCjTQ/viewform" : "#sponsors"} className="block px-4 py-2 text-white hover:bg-pink-500/80 transition">
                    {option}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default NavBar;
