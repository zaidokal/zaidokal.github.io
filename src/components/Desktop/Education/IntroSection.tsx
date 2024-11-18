import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => (
  <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900">
    <div className="absolute inset-0 -z-10">
      <motion.div
        className="bg-stars-pattern absolute inset-0"
        animate={{ backgroundPosition: ["0% 0%", "200% 200%"] }}
        transition={{ duration: 60, repeat: Infinity }}
      />
    </div>
    <motion.div
      className="relative flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-2xl blur-xl"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 30, repeat: Infinity }}
    >
      <div className="absolute inset-10 rounded-full bg-gradient-to-b from-purple-500 to-indigo-700 shadow-lg"></div>
    </motion.div>
    <motion.h1
      className="absolute text-center text-6xl font-extrabold text-white drop-shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Embark on My Journey
    </motion.h1>
    <motion.div
      className="absolute bottom-10 text-sm text-gray-300"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      Scroll to Explore ⬇️
    </motion.div>
  </section>
);

export default HeroSection;
