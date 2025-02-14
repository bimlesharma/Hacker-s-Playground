"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

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
      "The hackathon will take place on 1st - 2nd March 2025, at MIET Campus, Meerut, Uttar Pradesh.",
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
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-14 md:pl-14 pt-20">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-pink-600 mb-10 uppercase font-squid-game">
        FAQs
      </h2>
      <div className="space-y-4">
        {(showAll ? faqs : faqs.slice(0, 4)).map((faq, index) => (
          <motion.div key={index} layout className="relative">
            <div className="bg-gray-800/60 rounded-lg overflow-hidden shadow-lg">
              <button
                className="w-full text-left px-4 pl-6 py-2 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-white text-lg md:text-xl pr-8">
                  {faq.question}
                </span>
                <div className="bg-pink-500/10 rounded-md p-1.5">
                  <ChevronDown
                    className={`w-8 h-8 text-pink-500 transition-transform duration-200 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: expandedIndex === index ? "auto" : 0, opacity: expandedIndex === index ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-3 bg-gray-800/40 rounded-lg p-3 px-7 shadow-lg">
                <p className="text-white text-base md:text-lg">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      {!showAll && (
        <motion.button
          onClick={() => setShowAll(true)}
          className="mt-6 block mx-auto bg-pink-600 text-white font-bold py-2 px-6 rounded-lg text-lg shadow-lg hover:bg-pink-700 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Show More
        </motion.button>
      )}
      {showAll && (
        <motion.button
          onClick={() => setShowAll(false)}
          className="mt-6 block mx-auto bg-gray-600 text-white font-bold py-2 px-6 rounded-lg text-lg shadow-lg hover:bg-gray-700 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Show Less
        </motion.button>
      )}
    </div>
  );
}
