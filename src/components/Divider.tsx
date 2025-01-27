"use client";
import { motion } from "framer-motion";

const SquidGameDivider = () => {
  return (
    <div className="relative top-4 z-20 flex items-center justify-center">
      {/* Fading Horizontal Line - Left */}
      <div className="absolute left-0 h-1 bg-gradient-to-r from-gray-700 to-transparent w-1/4" />
      
      {/* Animated Shapes */}
      <motion.div
        className="relative z-10 flex items-center space-x-6 px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Circle */}
        <motion.div
          className="h-12 w-12 bg-pink-500 rounded-full shadow-lg"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          style={{ boxShadow: "0 0 15px #FF0077, 0 0 30px #FF0077" }}
        />
        {/* Triangle */}
        <motion.div
          className="h-12 w-12 bg-pink-500"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            boxShadow: "0 0 15px #FF0077, 0 0 30px #FF0077",
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
        {/* Square */}
        <motion.div
          className="h-12 w-12 bg-pink-500"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          style={{ boxShadow: "0 0 15px #FF0077, 0 0 30px #FF0077" }}
        />
      </motion.div>

      {/* Fading Horizontal Line - Right */}
      <div className="absolute right-0 h-1 bg-gradient-to-l from-gray-700 to-transparent w-1/4" />
    </div>
  );
};

export default SquidGameDivider;
