import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import devAnimation from "../assets/Lottie_Hero.json";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen pt-15 md:pt-25 pb-24 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 bg-gray-900 text-white gap-8 md:gap-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Text Section */}
      <div className="max-w-xl md:flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-pink-600">Ifhaam</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-6">
          A Full-Stack Developer passionate about building clean, functional,
          and user-focused web applications.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="https://www.linkedin.com/in/ifhaam-zuhree-8a666a278/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#005f8d] text-white px-6 py-3 rounded-md font-medium transition"
          >
            <FaLinkedin size={25} />
            LinkedIn
          </a>
          <a
            href="https://github.com/IfhaamZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-700 hover:bg-[#6e5494] text-white px-6 py-3 rounded-md font-medium transition"
          >
            <FaGithub size={25} />
            GitHub
          </a>
          <a
            href="#projects"
            className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-md font-medium transition"
          >
            View My Projects
          </a>
        </div>
      </div>

      {/* Lottie Animation */}
      <div className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[525px]">
        <Lottie animationData={devAnimation} loop autoplay />
      </div>
    </motion.section>
  );
};

export default Hero;
