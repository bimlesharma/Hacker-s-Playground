"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const sponsors = {
  platinum: ["/images/sponsors/meerutfoundation.png",],
  gold: [],
  silver: [],
  community: []
};

const SponsorSection = () => {
  return (
    <section id="sponsors" className="relative bg-black py-16 px-6 lg:px-24 text-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-10 left-12 h-32 w-32 bg-yellow-400 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-16 h-24 w-24 bg-blue-400 rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto">
        <h2 className="text-3xl md:text-4xl font-squid-game font-extrabold text-pink-500 mb-10">Sponsors</h2>
        
        {Object.entries(sponsors).map(([tier, images], index) => (
          <div key={tier} className="mb-12">
            <h3 className={`text-2xl font-semibold ${tier === 'title' ? 'text-yellow-400' : tier === 'platinum' ? 'text-gray-300' : tier === 'gold' ? 'text-yellow-500' : tier === 'silver' ? 'text-gray-400' : 'text-blue-400'}`}>{tier.toUpperCase()} Sponsors</h3>
            <div className="mt-4 flex flex-wrap justify-center gap-8">
              {images.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="p-4 bg-gray-800 rounded-lg shadow-lg"
                >
                  <Image src={src} alt={`${tier} sponsor`} width={150} height={80} className="object-contain" />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorSection;
