import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ text }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      {/* Left Line */}
      <motion.div
        className="flex-grow h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      />

      {/* Badge Title with spotlight glow */}
      <div className="relative">
        {/* Glow Behind */}
        <div className="absolute inset-0 -z-10 w-[150%] h-[250%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400 blur-xl opacity-30"></div>

        {/* Badge */}
        <h2 className="px-6 py-2 text-white text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-md uppercase tracking-wider">
          {text}
        </h2>
      </div>

      {/* Right Line */}
      <motion.div
        className="flex-grow h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      />
    </div>
  );
};

export default SectionTitle;
