"use client";
import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="relative bg-black py-12 px-6 lg:px-24 text-gray-300">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-8 left-12 h-16 w-16 bg-pink-500 rounded-full blur-xl opacity-30"
        //   animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        //   transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-16 right-20 h-16 w-16 bg-pink-500 triangle blur-xl opacity-30"
        //   animate={{ rotate: [0, 360] }}
        //   transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-20 right-1/3 h-24 w-24 bg-pink-500 square blur-lg opacity-20"
        //   animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        //   transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <motion.h3
            className="text-2xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hacker&apos;s Playground
          </motion.h3>
          <p className="text-gray-400 text-sm max-w-md">
            Dare to play, innovate, and win. Join us for a one-of-a-kind
            hackathon experience inspired by the thrilling challenges of Squid
            Game. The clock is ticking—are you ready?
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-8">
          {[
            { icon: "🌐", link: "https://example.com", label: "Website" },
            { icon: "🐦", link: "https://twitter.com", label: "Twitter" },
            { icon: "📘", link: "https://facebook.com", label: "Facebook" },
            { icon: "📷", link: "https://instagram.com", label: "Instagram" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-300 hover:text-pink-500 focus:text-pink-500"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-3xl">{social.icon}</span>
              <span className="text-sm">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mt-12 flex justify-center border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Hacker&apos;s Playground. All rights reserved.
        </p>
        <motion.div
          className="absolute top-0 bg-pink-500 h-1 w-[50vw] rounded-full"
        //   animate={{ scaleX: [1, 1.5, 1] }}
        //   transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </footer>
  );
};

export default FooterSection;
