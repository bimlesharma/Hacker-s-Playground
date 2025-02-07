"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

const events = [
  {
    title: "Clash of Code v1.0",
    images: [
      "/images/cocv1/image0.png",
      "/images/cocv1/image1.png",
      "/images/cocv1/image2.png",
      "/images/cocv1/image3.png",
      "/images/cocv1/image4.png",
    ],
    description:
      "Clash of Code v1.0 was a groundbreaking hackathon that brought together top developers from across the country, hosted at Microsoft Office, Gurugram.",
  },
  {
    title: "Clash of Code v2.0",
    images: [
      "/images/cocv2/image0.jpg",
      "/images/cocv2/image1.jpg",
      "/images/cocv2/image2.jpg",
      "/images/cocv2/image3.jpg",
      "/images/cocv2/image4.jpg",
    ],
    description:
      "Clash of Code v2.0 leveled up with more intense challenges, a bigger venue, and even greater innovation. The event was hosted at the Sovereign capital, Noida",
  },
];

const PastEvents = () => {
  interface Event {
    title: string;
    images: string[];
    description: string;
  }
  
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <section className="relative w-full flex px-5 flex-col items-center justify-center overflow-hidden">
      <motion.h2
        className="text-3xl lg:text-4xl font-bold text-white text-center mb-12 font-squid-game uppercase"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Past <span className="text-pink-500">Events</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            onClick={() => setSelectedEvent(event)}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={event.images[0]}
              alt={event.title}
              className="w-full h-64 object-contain group-hover:opacity-80 transition"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
            >
              <span className="text-white text-lg font-semibold bg-pink-600 px-4 py-2 rounded-lg">
                Explore
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {selectedEvent && (
        <Dialog
          open={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
        >
          <motion.div
            className="bg-gray-900 p-6 rounded-lg max-w-3xl w-full relative h-full overflow-y-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              className="absolute top-4 right-4 text-white bg-pink-600 px-3 py-1 rounded-lg"
              onClick={() => setSelectedEvent(null)}
            >
             X
            </button>
            <h3 className="text-2xl font-bold text-pink-500 mb-4">
              {selectedEvent.title}
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {selectedEvent.images.map((img, idx) => idx>0&&(
                <img
                  key={idx}
                  src={img}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>
            <p className="text-gray-300">{selectedEvent.description}</p>
          </motion.div>
        </Dialog>
      )}
    </section>
  );
};

export default PastEvents;
