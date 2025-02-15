"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PixelTransition from "./ui/PixelTransition";
import { FaLinkedin } from "react-icons/fa";

const organizers = [
  {
    name: "Purvesh Gupta",
    role: "Lead Organizer",
    image: "/images/organizers/purvesh.jpg",
    social: "https://www.linkedin.com/in/purveshgupta/",
  },
  {
    name: "Harshit Goel",
    role: "Lead Organizer",
    image: "/images/organizers/harshit.jpeg",
    social: "http://linkedin.com/in/harshitg0el",
  },
  {
    name: "Avnish",
    role: "Lead Organizer",
    image: "/images/organizers/avnish.png",
    social: "https://www.linkedin.com/in/avnish-gupta-23245a273/",
  },
  {
    name: "Bimlesh",
    role: "Lead Organizer",
    image: "/images/organizers/bimlesh.jpg",
    social: "https://www.linkedin.com/in/bimlesharma/",
  },
];

const OrganisersSection = () => {
  return (
    <section className="py-16 bg-black text-gray-300 px-6 lg:px-24 relative">
      <h2 className="text-4xl font-bold text-center text-pink-500 mb-12">
        Meet The Organizers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {organizers.map((org, index) => (
          <div
            key={index}
            className="w-full h-full rounded-lg overflow-hidden shadow-lg"
          >
            <PixelTransition
              firstContent={
                <img
                  src={org.image}
                  alt="organizer"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  className="w-full h-full flex flex-col items-center justify-center bg-gray-900 p-4 rounded-lg"
                >
                  <p className="text-2xl font-bold text-white">{org.name}</p>
                  <p className="text-lg text-gray-300">{org.role}</p>
                  <a href={org.social} target="_blank" rel="noreferrer" className="mt-2">
                    <FaLinkedin className="text-pink-500 text-3xl hover:text-4xl transition-all" />
                  </a>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.3}
              className="custom-pixel-card"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/organisers"
          className="px-6 py-3 bg-pink-500 text-black text-lg font-bold rounded-md shadow-md hover:bg-pink-600 transition-all"
        >
          View All Organizers
        </Link>
      </div>
    </section>
  );
};

export default OrganisersSection;
