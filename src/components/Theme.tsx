// 'use client';

// import { motion } from 'framer-motion';
// import { FaEthereum, FaBrain, FaMicrochip, FaMobileAlt, FaLightbulb } from "react-icons/fa";

// const themes = [
//   { title: "Web3 & Blockchain", icon: <FaEthereum size={50} />, color: "border-pink-500", shape: "\u25B3" },
//   { title: "Artificial Intelligence & Machine Learning", icon: <FaBrain size={50} />, color: "border-blue-500", shape: "\u25CF" },
//   { title: "Internet of Things", icon: <FaMicrochip size={50} />, color: "border-green-500", shape: "\u25A1" },
//   { title: "Web & Android Development", icon: <FaMobileAlt size={50} />, color: "border-yellow-500", shape: "\u25B3" },
//   { title: "AR/VR", icon: <FaLightbulb size={50} />, color: "border-red-500", shape: "\u25CF" },
//   { title: "Open Innovation", icon: <FaLightbulb size={50} />, color: "border-red-500", shape: "\u25CF" }
// ];

// export default function HackathonThemes() {
//   return (
//     <section className="min-h-screen bg-black text-white py-12 text-center flex flex-col items-center">
//       <motion.h2
//         className="text-5xl font-bold mb-8 text-pink-500 font-squid-game uppercase"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Tracks
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
//         {themes.map((theme, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05, rotate: 5 }}
//             whileTap={{ scale: 0.95 }}
//             className={`relative p-8 border-2 rounded-xl ${theme.color} shadow-lg bg-gray-900`}
//           >
//             <span className="absolute top-2 right-4 text-4xl text-gray-500">
//               {theme.shape}
//             </span>
//             <div className="flex flex-col items-center gap-4">
//               <motion.div
//                 className="text-pink-400"
//                 animate={{ rotate: [0, 360] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//               >
//                 {theme.icon}
//               </motion.div>
//               <h3 className="text-xl font-semibold tracking-wide text-white">
//                 {theme.title}
//               </h3>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  FaEthereum,
  FaBrain,
  FaMicrochip,
  FaMobileAlt,
  FaLightbulb,
  FaGlasses ,
} from "react-icons/fa";

const themes = [
  { title: "Web3 & Blockchain", icon: <FaEthereum size={50} /> },
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: <FaBrain size={50} />,
  },
  { title: "Internet of Things", icon: <FaMicrochip size={50} /> },
  { title: "Web & Android Development", icon: <FaMobileAlt size={50} /> },
  { title: "AR/VR", icon: <FaGlasses size={50} /> },
  { title: "Open Innovation", icon: <FaLightbulb size={50} /> },
];

export default function HackathonThemes() {
  return (
    <section className="bg-black text-white pt-20 py-16 text-center flex flex-col items-center">
      <motion.h2
        className="text-6xl font-bold mb-12 text-pink-500 font-squid-game uppercase tracking-wider"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Tracks
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 px-8 lg:px-[25%]">
        {themes.map((theme, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-10 border-2 items-center flex flex-col border-pink-500 rounded-2xl shadow-lg bg-gray-900 transition-all duration-300"
          >
            <motion.div
              className="text-white"
              animate={{
                y: [-5, 5, -5], // Floating effect
                rotate: [-5, 5, -5], // Subtle rotation
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {theme.icon}
            </motion.div>

            <h3 className="text-2xl font-semibold tracking-wide text-white mt-6">
              {theme.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
