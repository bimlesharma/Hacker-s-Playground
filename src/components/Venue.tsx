// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// const VenueReveal = () => {
//   const [isRevealed, setIsRevealed] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsRevealed(true);
//     }, 1000); // Reveal after 2 seconds
//   }, []);

//   return (
//     <div className="relative w-full bg-black flex px-5 flex-col items-center justify-center overflow-hidden">
//       <div className="text-4xl md:text-6xl font-bold font-squid-game text-center text-pink-600 mb-8">
//         VENUE
//       </div>
//       {/* Floating Squid Game Symbols */}
//       <div className="absolute top-40 inset-0 flex justify-center items-center">
//         <motion.div
//           className="absolute w-24 h-24 border-4 border-pink-500 rounded-full opacity-20"
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//         />
//         <motion.div
//           className="absolute w-24 h-24 border-4 border-pink-500 opacity-20"
//           animate={{ rotate: -360 }}
//           transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//         />
//       </div>

//       {/* Hidden Panels Revealing the Venue */}
//       <div className="relative w-auto h-auto rounded-lg bg-gray-900 flex items-center justify-center overflow-hidden">
//         {/* Left Sliding Panel */}
//         <motion.div
//           initial={{ x: 0 }}
//           animate={isRevealed ? { x: "-100%" } : {}}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//           className="absolute left-0 top-0 h-full w-1/2 bg-pink-600"
//         />
        
//         {/* Right Sliding Panel */}
//         <motion.div
//           initial={{ x: 0 }}
//           animate={isRevealed ? { x: "100%" } : {}}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//           className="absolute right-0 top-0 h-full w-1/2 bg-pink-600"
//         />

//         {/* Image Reveal */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={isRevealed ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 1.2, delay: 1.5 }}
//         >
//           <Image
//             src="/images/venue.png" // Replace with actual image
//             alt="MIET College"
//             width={800}
//             height={500}
//             className="rounded-lg shadow-lg object-cover border-4 border-white/20"
//           />
//         </motion.div>
//       </div>

//       {/* Venue Name Reveal */}
//       <motion.h1
//         className="mt-6 text-5xl font-bold text-pink-500 text-center"
//         initial={{ opacity: 0, y: -20 }}
//         animate={isRevealed ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, delay: 2 }}
//       >
//         MIET College
//       </motion.h1>

//       {/* Description & Google Maps Button */}
//       <motion.div
//         className="mt-6 text-center max-w-lg"
//         initial={{ opacity: 0, y: 20 }}
//         animate={isRevealed ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, delay: 2.5 }}
//       >
//         <p className="text-lg text-gray-300 mb-4">
//           Join us at <span className="text-pink-500 font-semibold">Meerut Institute of Engineering and Technology</span>, where innovation meets creativity!
//         </p>
//         <a
//           href="https://maps.app.goo.gl/DNtchCJazZWm2KtdA" // Replace with actual location
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-transform transform hover:scale-105"
//         >
//           View on Google Maps
//         </a>
//       </motion.div>
//     </div>
//   );
// };

// export default VenueReveal;




"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const VenueReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsRevealed(true);
    }, 1000); // Reveal after 2 seconds
  }, []);

  return (
    <div className="relative w-full bg-black flex px-5 flex-col items-center justify-center overflow-hidden mb-10">
      <div className="text-4xl md:text-6xl font-bold font-squid-game text-center text-pink-600 mb-8">
        VENUE
      </div>
      {/* Floating Squid Game Symbols */}
      <div className="absolute top-40 inset-0 flex justify-center items-center">
        <motion.div
          className="absolute w-24 h-24 border-4 border-pink-500 rounded-full opacity-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        <motion.div
          className="absolute w-24 h-24 border-4 border-pink-500 opacity-20"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        />
      </div>

      {/* Venue Reveal Section */}
      <div className="relative w-full max-w-5xl flex flex-col md:flex-row items-center justify-center bg-gray-900 rounded-lg overflow-hidden p-6">
        {/* Image on the Left */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isRevealed ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 1.5 }}
          >
            <Image
              src="/images/venue.png" // Replace with actual image
              alt="MIET College"
              width={800}
              height={500}
              className="rounded-lg shadow-lg object-cover border-4 border-white/20"
            />
          </motion.div>
        </div>

        {/* College Details on the Right */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-6">
          <motion.h1
            className="text-5xl font-bold text-pink-500"
            initial={{ opacity: 0, y: -20 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 2 }}
          >
            MIET College
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 2.5 }}
          >
            Join us at <span className="text-pink-500 font-semibold">Meerut Institute of Engineering and Technology</span>, where innovation meets creativity!
          </motion.p>

          <motion.a
            href="https://maps.app.goo.gl/DNtchCJazZWm2KtdA" // Replace with actual location
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 3 }}
          >
            View on Google Maps
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default VenueReveal;
