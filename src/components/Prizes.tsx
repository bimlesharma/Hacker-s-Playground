"use client";

import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaTshirt,
  FaBoxOpen,
  FaBitcoin,
} from "react-icons/fa";
import CountUp from "./ui/CountUp";
import Image from "next/image";

const prizes = [
  {
    title: "Winner",
    amount: "₹12,000 cash + Exclusive Swag Kit",
    icon: <FaTrophy size={60} className="text-yellow-500" />,
    border: "border-yellow-500",
    badge: "🥇 Gold",
    badgeColor: "bg-yellow-500 text-black",
    size: "scale-100",
  },
  {
    title: "1st Runner-up",
    amount: "₹8,000 cash + Exclusive Swag Kit",
    icon: <FaMedal size={60} className="text-gray-300" />,
    border: "border-gray-400",
    badge: "🥈 Silver",
    badgeColor: "bg-gray-400 text-black",
    size: "scale-100",
  },
  {
    title: "2nd Runner-up",
    amount: "₹5,000 cash + Exclusive Swag Kit",
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
        className="text-5xl font-extrabold text-gray-300 mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        ₹
        <CountUp from={0} to={1000000} separator="," direction="up" duration={0.25} className="count-up-text" />+
      </motion.div>

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
      
      {/* Blockchain Bounty Challenge */}
      <div className="pt-10 px-6 lg:px-[15%]">
        <motion.div
          whileHover={{ scale: 1.05, rotate: [0, 0] }}
          whileTap={{ scale: 0.95 }}
          className="relative p-10 border-4 border-blue-500 rounded-2xl shadow-lg bg-gray-900 flex flex-col items-center transition-all duration-300"
        >
          <motion.div
            className="absolute top-[-15px] right-[-15px] px-4 py-2 text-sm font-bold rounded-lg bg-blue-500 text-black"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
            <Image src="/images/sponsors/aptos-removebg-preview.png" width={20} height={40} alt="Aptos" />Blockchain Bounty
            </div>
          </motion.div>

          <motion.div
            className="text-white"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex gap-2 text-blue-500">
              <Image src="/images/sponsors/aptos-removebg-preview.png" width={40} height={40} alt="Aptos" />
              <span className="text-3xl font-bold">Aptos</span>
            </div>
          </motion.div>

          <h3 className="text-2xl font-semibold tracking-wide mt-4">
            $25 for each blockchain build on Aptos!
          </h3>
          <p className="text-lg text-gray-400">
            Bring your blockchain skills and win extra rewards!
          </p>
          <p className="text-lg text-gray-400">
            <a href="https://drive.google.com/file/d/1QeYnzdhLfujMXr2w_t6ApYEYmdDvU5Hi/view?usp=drivesdk" target="_blank" className="text-blue-500 underline">Project submission guidlines</a>
          </p>
        </motion.div>
      </div>

      {/* Exclusive Swags for All */}
      <div className="pt-10 px-6 lg:px-[15%]">
        <motion.div
          whileHover={{ scale: 1.05, rotate: [0, 0] }}
          whileTap={{ scale: 0.95 }}
          className="relative p-10 border-4 border-pink-500 rounded-2xl shadow-lg bg-gray-900 flex flex-col items-center transition-all duration-300"
        >
          <motion.div
            className="absolute top-[-15px] right-[-15px] px-4 py-2 text-sm font-bold rounded-lg bg-pink-500 text-black"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex gap-2">
              <FaBoxOpen size={20} /> Swag Kit
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
  )
}
