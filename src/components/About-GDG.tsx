"use client";
import { motion } from "framer-motion";
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
            About <span className="text-pink-500">GDG on Campus MIET</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg leading-8 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            GDG on Campus MIET is more than just a tech club—it’s a community of innovators, learners, and changemakers. Now in its third year, our chapter continues to empower students by fostering growth, collaboration, and real-world impact. We provide a platform where students can learn new skills, engage in hands-on experiences, and connect with industry experts to stay ahead in the ever-evolving tech landscape.
          </motion.p>

          <motion.p
          className="text-gray-300 text-lg leading-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          >
          From technical workshops and bootcamps to Google-led challenges like the Solution Challenge and Cloud Study Jams, we create opportunities for students to sharpen their skills and build innovative solutions. Our supportive network of peers and mentors encourages collaboration, helping students navigate their tech journey with guidance and motivation.
          </motion.p>
          <motion.p
          className="text-gray-300 text-lg leading-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          >At GDG on Campus MIET, we believe in Unity, Growth, and Innovation—where every student is encouraged to learn, share, and build. If you&apos;re passionate about technology and eager to make an impact, this is the community for you. Join us and be part of something bigger!
          </motion.p>
          {/* <ul className="space-y-4">
            {[
              "Exciting themes inspired by real-world problems.",
              "30-hour intense coding battles.",
              "Prizes and rewards worth lakhs!",
              "Fun with lots of engaging mini-games & activities.",
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-center text-gray-300 text-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
              >
                <span className="text-pink-500 mr-3">•</span> {point}
              </motion.li>
            ))}
          </ul> */}
        </div>

        {/* Right Section */}
        <motion.div
          className="relative w-full max-w-md h-auto "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/gdg.png"
            alt="Squid Game Doll"
            draggable="false"
            className="rounded-lg shadow-lg w-auto"
          />
          {/* <Image src={`/images/about-img.png`} width={400} height={300} alt="about"/> */}
          <motion.div
            className="absolute p-4 inset-0 border-2 border-pink-500 rounded-lg pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.07  }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
