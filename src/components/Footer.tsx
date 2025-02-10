"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";
import VisitorCounter from "./VisitorCounter";

const FooterSection = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 lg:px-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-10 left-12 h-32 w-32 bg-pink-500 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-16 h-24 w-24 bg-purple-500 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Hackathon Logo */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          {/* <div className=" border p-2 rounded-lg border-pink-500 flex items-center justify-center ">
          <img
            src="/images/logo.png" // Replace with your logo path
            alt="Hackers' Playground Logo"
            className=" w-[80%]"
            />
          </div> */}
          <h1 className="text-3xl font-squid-game mg:text-4xl  font-extrabold tracking-wide text-pink-500">
          HACKER&apos;S <span className="text-gray-300">PLAYGROUND</span>
        </h1>
          <p className="text-sm text-gray-400">
          Hackers&apos; Playground – The Ultimate 30-Hour Offline Showdown, organized by TechNexus Community in collaboration with GDG on Campus MIET, is where creativity meets technology.
          </p>
        </div>

        {/* Venue Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Venue</h4>
          <div className="flex items-center space-x-3">
            <MdLocationPin className="text-pink-500 text-2xl" />
            <div>
              <p>MIET Campus</p>
              <p>Meerut, Uttar Pradesh, India</p>
            </div>
          </div>
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74359.41434391927!2d77.62922367903987!3d28.935939943929476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c668fdea4d87f%3A0x8795def814a486e7!2sMeerut%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1738066621507!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg md:h-[100px]"
          ></iframe>
          <a
            href="https://goo.gl/maps/example" // Replace with the actual Google Maps link
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-sm hover:underline"
          >
            View on Google Maps
          </a>
        </div>

        {/* Resources Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://drive.google.com/file/d/1qrQ-ixCObHIEl8AXHU-EEInBMqsZfZYo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-300 hover:text-pink-500 "
              >
                Sponsorship Brochure
              </a>
            </li>
            {/* <li>
              <Link
                href="/" // Replace with the actual link
                // target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-300 hover:text-pink-500 "
              >
                Hackathon Guidelines
              </Link>
            </li> */}
            <li>
              <Link
                href="#faqs" // Replace with the actual link
                // target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-300 hover:text-pink-500 "
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Contact Us</h4>
          <div className="flex flex-col space-y-2">
            <a
              href="https://www.instagram.com/tech_nexus_community/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:underline text-sm text-gray-300 hover:text-pink-500"
            >
              <FaInstagram className=" text-2xl" />
              <span>@Tech_Nexus_Community</span>
            </a>
            <a
              href="https://www.linkedin.com/company/technexus-community/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:underline text-sm text-gray-300 hover:text-pink-500"
            >
              <FaLinkedin className="text-2xl" />
              <span>TechNexus Community</span>
            </a>
            <a
              href="mailto:technexus.community2024@gmail.com"
              className="flex items-center space-x-2 hover:underline text-sm text-gray-300 hover:text-pink-500"
            >
              <HiOutlineMail className=" text-2xl" />
              <span>technexus.community2024@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mt-12 border-none border-gray-700 pt-6 text-center">
        <VisitorCounter />
        <motion.div
          className="absolute inset-x-0 mx-auto top-0 h-[1px] w-auto bg-pink-500 rounded-full"
          animate={{ scaleX: [.8, 1, .8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div className="relative mt-6 border-none border-gray-700 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} TechNexus Community. All rights reserved.
        </p>
        <motion.div
          className="absolute inset-x-0 mx-auto top-0 h-[1px] w-auto bg-pink-500 rounded-full"
          animate={{ scaleX: [.8, 1, .8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </footer>
  );
};

export default FooterSection;
