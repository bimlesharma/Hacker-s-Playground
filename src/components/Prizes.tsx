"use client";

import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaTshirt,
  FaBoxOpen,
} from "react-icons/fa";

const prizes = [
  {
    title: "Winner",
    amount: "₹(to be announced)",
    icon: <FaTrophy size={60} className="text-yellow-500" />,
    border: "border-yellow-500",
    badge: "🥇 Gold",
    badgeColor: "bg-yellow-500 text-black",
    size: "scale-100",
  },
  {
    title: "1st Runner-up",
    amount: "₹(to be announced)",
    icon: <FaMedal size={60} className="text-gray-300" />,
    border: "border-gray-400",
    badge: "🥈 Silver",
    badgeColor: "bg-gray-400 text-black",
    size: "scale-100",
  },
  {
    title: "2nd Runner-up",
    amount: "₹(to be announced)",
    icon: <FaAward size={60} className="text-orange-400" />,
    border: "border-orange-400",
    badge: "🥉 Bronze",
    badgeColor: "bg-orange-400 text-black",
    size: "scale-100",
  },
];

export default function Prizes() {
  return (
    <section className="bg-black text-white pt-20 text-center flex flex-col items-center">
      {/* Total Prize Pool */}
      <motion.h2
        className="text-4xl md:text-6xl font-squid-game font-bold mb-6 text-pink-600 uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-white">Prize</span> Pool
      </motion.h2>

      <motion.div
        className="text-3xl font-extrabold text-gray-300 mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        ₹(to be announced)
      </motion.div>

      <motion.h2
        className="text-4xl md:text-6xl font-squid-game font-bold mb-6 text-pink-600 uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-white">Cash</span> Prize
      </motion.h2>

      {/* Prize Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 lg:px-[15%]">
        {prizes.map((prize, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
            whileTap={{ scale: 0.95 }}
            className={`relative p-10 border-4 ${prize.border} rounded-2xl shadow-lg bg-gray-900 flex flex-col items-center transition-all duration-300 ${prize.size}`}
          >
            {/* Badge */}
            <motion.div
              className={`absolute top-[-15px] right-[-15px] px-4 py-2 text-sm font-bold rounded-lg ${prize.badgeColor}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {prize.badge}
            </motion.div>

            <motion.div
              className="text-white"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {prize.icon}
            </motion.div>

            <h3 className="text-2xl font-semibold tracking-wide mt-4">
              {prize.title}
            </h3>
            <p className="text-3xl font-bold text-yellow-400">{prize.amount}</p>
          </motion.div>
        ))}
      </div>
      <div className="pt-10 px-6 lg:px-[15%]">
        <motion.div
          whileHover={{ scale: 1.05, rotate: [0, 0] }}
          whileTap={{ scale: 0.95 }}
          className={`relative p-10 border-4 border-pink-500 rounded-2xl shadow-lg bg-gray-900 flex flex-col items-center transition-all duration-300`}
        >
          {/* Badge */}
          <motion.div
            className={`absolute top-[-15px] right-[-15px] px-4 py-2 text-sm font-bold rounded-lg bg-pink-500 text-black`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex gap-2">
              <FaBoxOpen size={20} />
              Swag Kit{" "}
            </div>
          </motion.div>

          <motion.div
            className="text-white"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex gap-2 text-pink-500">
              <FaTshirt size={50} />
            </div>
          </motion.div>

          <h3 className="text-2xl font-semibold tracking-wide mt-4">
            Exclusive T-Shirt & Swag Kit for All!
          </h3>
          <p className="text-lg text-gray-400">
            Get ready to receive some awesome goodies with your participation!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
