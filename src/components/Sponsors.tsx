"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const sponsors = [
  { tier: "Platform Partner", images: ["/images/sponsors/dorahacks.png",] },
  { tier: "Platinum Sponsor", images: ["/images/sponsors/meerutfoundation.png"] },
  { tier: "Gold Sponsor", images: ["/images/sponsors/hackquest.png"] },
  {
    tier: "Silver Sponsor", images: [
      "/images/sponsors/impech.png",
      "/images/sponsors/nextera.png",
      "/images/sponsors/rieka.png",
      "/images/sponsors/p2vak.png",
      "/images/sponsors/commudle.png",
    ]
  },
  { tier: "Bronze Sponsor", images: ["/images/sponsors/interview.png", "/images/sponsors/xyz.png", "/images/sponsors/balsamiq.png"] },
  { tier: "Education Partner", images: ["/images/sponsors/risein.png"] },
  { tier: "Community Partner", images: [] },
];

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
        <h2 className="text-4xl md:text-6xl font-squid-game uppercase font-extrabold text-pink-500 mb-10 pt-20">Sponsors</h2>

        {sponsors.map(({ tier, images }, index) => (
          images.length > 0 && (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-300">{tier}</h3>
              <div className="mt-4 flex flex-wrap justify-center gap-8">
                {images.map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="p-4 bg-white rounded-lg shadow-lg"
                  >
                    {/* <Image src={src} alt={`${tier} sponsor`} width={150} height={80} className="w-24 hover:scale-105 h-24 object-contain" /> */}
                    <Image
                      src={src}
                      alt={`${tier} sponsor`}
                      width={150}
                      height={80}
                      className="w-24 h-24 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />

                  </motion.div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default SponsorSection;
