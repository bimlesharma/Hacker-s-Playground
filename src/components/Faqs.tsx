'use client'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// Define the interface for FAQ items
interface FAQ {
  question: string;
  answer: string;
}

// Define the faqs array with the FAQ type
const faqs: FAQ[] = [
    {
      question: "What is Hackers' Playground and what makes it special?",
      answer:
        "Hackers' Playground is a thrilling 30-hour offline competition, brought to you by TechNexus Community in collaboration with GDG on Campus MIET. It’s a place where innovation, technology, and creativity collide. Join us to push boundaries and solve challenging problems in an exciting, fun-filled environment!",
    },
    {
      question: "I can't find my answer here. How can I contact you?",
      answer:
        "Things are coming together, so stay tuned! In the meantime, feel free to connect with us on our social media handles for updates and inquiries.",
    },
  ];
  

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-14 md:pl-14">
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
      <h2 className="md:text-6xl text-4xl font-squid-game uppercase font-bebas text-pink-500 font-bold mb-[3rem] md:mb-[5rem] text-center">
        FAQS
      </h2>

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="relative">
            <div className="bg-gray-800/60 rounded-lg overflow-hidden shadow-lg">
              <button
                className="w-full text-left px-4 pl-6 py-3 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-white text-lg md:text-2xl pr-8">
                  {faq.question}
                </span>
                <div className="bg-pink-500/10 rounded-md p-1.5 flex-shrink-0">
                  <ChevronDown
                    className={`w-8 h-8 text-pink-500 transition-transform duration-200 ${
                      expandedIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                expandedIndex === index
                  ? "max-h-screen opacity-100 scale-100"
                  : "max-h-0 opacity-0 scale-95"
              }`}
            >
              <div className="mt-3 bg-gray-800/40 rounded-lg p-7 shadow-lg transform transition-all duration-700 ease-in-out">
                <p className="text-white text-base md:text-lg font-semibold">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
