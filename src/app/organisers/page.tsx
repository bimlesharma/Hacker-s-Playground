"use client";
import Link from "next/link";
import PixelTransition from "@/components/ui/PixelTransition";
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
    {
      name: "Kavyanshi Gera",
      role: "Organizer",
      image: "/images/organizers/kavya.jpg",
      social: "https://www.linkedin.com/in/kavya-gera-5b8640291/",
    },
    {
      name: "Palak Singhal",
      role: "Organizer",
      image: "/images/organizers/palak.jpg",
      social: "http://www.linkedin.com/in/palak-singhal-14a78324a",
    },
    {
      name: "Vishesh Jindal",
      role: "Organizer",
      image: "/images/organizers/vishesh.jpg",
      social: "https://www.linkedin.com/in/vishesh-jindal/",
    },
    {
      name: "Himanshu",
      role: "Organizer",
      image: "/images/organizers/himanshu.jpg",
      social: "https://www.linkedin.com/in/himanshukumard/",
    },
    {
      name: "Kunj Agarwal",
      role: "Organizer",
      image: "/images/organizers/kunj.jpg",
      social: "https://www.linkedin.com/in/kunj-agarwal",
    },
    {
      name: "Ashi Verma",
      role: "Organizer",
      image: "/images/organizers/ashi.png",
      social: "https://www.linkedin.com/in/ashi-verma-234646215/",
    },
    {
      name: "Tanishq Taliyan",
      role: "Organizer",
      image: "/images/organizers/tanishq.jpeg",
      social: "https://www.linkedin.com/in/tanishq-taliyan",
    },
    {
      name: "Vansh Gautam",
      role: "Organizer",
      image: "/images/organizers/vansh.jpeg",
      social: "https://www.linkedin.com/in/vansh-gautam-a17a52305",
    },
    {
      name: "Harshit Rana",
      role: "Organizer",
      image: "/images/organizers/harshit-rana.jpeg",
      social: "https://www.linkedin.com/in/harshit-rana-041ab5284",
    },
    {
      name: "Akshat Chauhan",
      role: "Organizer",
      image: "/images/organizers/akshat.jpg",
      social: "https://www.linkedin.com/in/akshat-chauhan-088793343",
    },
    {
      name: "Kumar Ashutosh",
      role: "Organizer",
      image: "/images/organizers/ashutosh.jpg",
      social: "https://www.linkedin.com/in/kumar--ashutosh",
    },
    
    
  ];

const OrganisersPage = () => {
  return (
    <section className="min-h-screen mt-10 py-16 bg-black text-gray-300 px-6 lg:px-24 relative">
      <h1 className="text-4xl md:text-6xl py-5 uppercase font-squid-game font-bold text-center text-pink-500 mb-12">
        <span className="text-white">Meet The</span> Organizers
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {organizers.map((org, index) => (
          <PixelTransition
            key={index}
            firstContent={
              <img
                src={org.image}
                alt={org.name}
                className="w-full h-full object-cover rounded-lg"
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
            gridSize={10}
            pixelColor="#ffffff"
            animationStepDuration={0.3}
            className="custom-pixel-card cursor-pointer"
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link href="/" className="px-6 py-3 bg-pink-500 text-black text-lg font-bold rounded-md shadow-md hover:bg-pink-600 transition-all">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default OrganisersPage;
