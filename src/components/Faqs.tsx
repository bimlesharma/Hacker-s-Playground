"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// Define the interface for FAQ items
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Hackers' Playground 2025?",
    answer:
      "Hackers' Playground 2025 is a 30-hour offline, overnight hackathon hosted in collaboration with GDG on Campus MIET and TechNexus Community. It is designed to push your skills to the limit while tackling real-world challenges and unleashing your creativity.",
  },
  {
    question: "When and where will the hackathon take place?",
    answer:
      "The hackathon will take place on 8th - 9th March 2025, at MIET Campus, Meerut, Uttar Pradesh.",
  },
  {
    question: "Who can participate in Hackers' Playground 2025?",
    answer:
      "Hackers' Playground is open to 200+ tech enthusiasts, developers, designers, and innovators from all over India. All skill levels are welcome!",
  },
  {
    question: "What is the duration of the event?",
    answer:
      "The hackathon will be 30 hours long, running overnight, and will feature non-stop coding, collaboration, and innovation.",
  },
  {
    question: "What are the themes for the hackathon?",
    answer:
      "The hackathon will focus on the following themes: Web3 and Blockchain, Artificial Intelligence and Machine Learning, Internet of Things (IoT), Web/Android Development, Augmented Reality/Virtual Reality (AR/VR), Open Innovation.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "Bring your laptop, charger, any necessary software tools, and most importantly, your collaborative spirit. Food and drinks will be provided!",
  },
  {
    question: "Can I participate solo or do I need a team?",
    answer:
      "While we encourage you to form a team to foster collaboration and networking, you are welcome to participate solo.",
  },
  {
    question: "Are inter-college teams allowed to participate?",
    answer:
      "Yes! Teams can consist of participants from different colleges or universities, so feel free to join forces with others.",
  },
  {
    question: "Will there be food and drinks during the event?",
    answer:
      "Absolutely! We will provide food and snacks throughout the event to keep you fueled and energized.",
  },
  {
    question: "Will there be charging ports available?",
    answer:
      "Yes, charging ports will be available for all teams to ensure that you stay powered throughout the event.",
  },
  {
    question: "What activities will be available during breaks?",
    answer:
      "In addition to the intense coding sessions, we have exciting games planned, including the popular Squid Game to keep the fun rolling and the energy high.",
  },
  {
    question: "How can I register for the event?",
    answer:
      "Registration details will be available on our official website. Keep an eye out for updates!",
  },
  {
    question: "Can my travel expenses be reimbursed?",
    answer:
      "Unfortunately, we are unable to cover travel costs. However, food and accommodation will be provided for the duration of the hackathon.",
  },
  {
    question: "What if I have issues or questions during the event?",
    answer:
      "For any queries, feel free to reach out to us at technexus.community2024@gmail.com or contact us on Instagram @tech_nexus_community.",
  },
  {
    question: "What makes Hackers' Playground 2025 unique?",
    answer:
      "The hackathon combines 30 hours of non-stop coding, real-world challenges, and fun activities like Squid Game to keep the atmosphere energized, making it a truly memorable and exciting event.",
  },
];

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-14 md:pl-14 pt-20">
      {/* Background Shapes */}
      <div className="relative inset-0 z-0">
        {/*  */}
        <motion.div
          className="absolute top-32 right-1/3 h-24 w-24 bg-pink-500 square blur-lg opacity-30"
          animate={{ rotate: [0, 360], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* New Animated Elements */}
        <motion.div
          className="absolute bottom-10 left-1/4 h-16 w-16 bg-pink-500 rounded-lg blur-lg opacity-50"
          animate={{ x: [0, 100, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/*  */}

        <motion.div
          className="absolute top-48 left-1/4 h-24 w-24 bg-pink-500 rounded-full blur-lg opacity-30"
          animate={{ scale: [1, 0.8, 1.2, 1], opacity: [0.3, 0.5, 0.3, 0.4] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <motion.div
          className="absolute top-20 right-12 h-18 w-18 bg-pink-500 rounded-md blur-lg opacity-40"
          animate={{ rotate: [0, 180, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-10 right-10 h-16 w-16 bg-pink-500 diamond blur-lg opacity-50"
          animate={{ y: [0, 40, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <h2 className="md:text-6xl text-4xl font-squid-game uppercase font-bebas text-pink-600 font-bold mb-[3rem] md:mb-[5rem] text-center">
        FAQS
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="relative">
            <div className="bg-gray-800/60 rounded-lg overflow-hidden shadow-lg">
              <button
                className="w-full text-left px-4 pl-6 py-2 focus:outline-none flex justify-between items-center"
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
              <div className="mt-3 bg-gray-800/40 rounded-lg p-3 px-7 shadow-lg transform transition-all duration-700 ease-in-out">
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
