"use client"
import { FaTrain, FaBus, FaCar } from "react-icons/fa";
import { motion } from "framer-motion";

const travelOptions = [
  {
    id: "metro",
    icon: <FaTrain className="text-4xl text-blue-500" />, 
    title: "By RRTS Metro",
    details: "Board from Anand Vihar → Exit at Meerut South → Take a shared auto to MIET.",
    color: "bg-blue-800",
  },
  {
    id: "bus",
    icon: <FaBus className="text-4xl text-green-500" />, 
    title: "By Bus",
    details: "Take a private bus from Anand Vihar to Meerut. It will drop you near MIET.",
    color: "bg-green-800",
  },
  {
    id: "cab",
    icon: <FaCar className="text-4xl text-yellow-500" />, 
    title: "By Cab",
    details: "Book a cab from Delhi, costing around ₹900-₹1000, directly to MIET.",
    color: "bg-yellow-800",
  }
];

const HowToReach = () => {
  return (
    <section className="py-16 bg-gray-900 text-white px-6 lg:px-24 text-center">
      <h2 className="text-4xl font-bold text-pink-500 mb-12">How to Reach MIET, Meerut</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {travelOptions.map((option) => (
          <motion.div
            key={option.id}
            className={`p-6 rounded-lg shadow-lg ${option.color} cursor-pointer hover:scale-105 transition-transform`}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex justify-center mb-4">{option.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
            <p className="text-gray-200">{option.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowToReach;
