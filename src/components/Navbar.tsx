"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className="fixed md:left-[16vw] rounded-md md:top-2 md:transform md:-translate-x-1/2 z-50 md:flex items-center bg-pink-800 shadow-2xl px-8 py-4 border border-pink-500"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* desktop menu */}
      <div className="hidden container space-x-24 mx-auto md:flex items-center justify-between gap-24">
        <div className="flex items-center justify-between ">
          <motion.img src="/images/logo.png" alt="logo" className="h-8" />
        </div>

        <div className="hidden md:flex items-center justify-center">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="ml-4 text-white font-semibold cursor-pointer"
            >
              {item}
            </motion.div>
          ))}
        </div>
        <div className="hidden md:flex">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="ml-4 text-white font-semibold cursor-pointer"
          >
            Register Now
          </motion.button>
        </div>
      </div>

      {/* mobile menu */}
      <div className="md:hidden flex items-center justify-between w-screen">
        <motion.img src="/images/logo.png" alt="logo" className="h-8" />
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="ml-4 text-white font-semibold cursor-pointer"
          onClick={toggleMobileMenu}
        >
          ☰
        </motion.div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4 w-full">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="text-white font-semibold cursor-pointer"
            >
              {item}
            </motion.div>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-white font-semibold custom-square-hover"
          >
            Register Now
          </motion.button>
        </div>
      )}
    </motion.nav>
  );
};

export default NavBar;