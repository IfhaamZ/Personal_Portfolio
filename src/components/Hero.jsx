import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import devAnimation from "../assets/Lottie_Hero.json";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen pt-20 pb-24 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-center gap-10 text-white overflow-hidden bg-gray-900"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background animated dots */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff30_1px,transparent_1px)] bg-[size:22px_22px] animate-pulseGrid pointer-events-none" />

      {/* Soft Glow Left */}
      <div className="absolute -top-20 -left-24 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-2xl opacity-30 pointer-events-none z-0 animate-fadeBlob" />

      {/* Soft Glow Right */}
      <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-pink-500/20 rounded-full blur-2xl opacity-25 pointer-events-none z-0 animate-fadeBlob delay-300" />

      {/* Text Section */}
      <div className="z-10 max-w-xl md:flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-pink-500 drop-shadow-lg">Ifhaam</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-6">
          A Full-Stack Developer passionate about building clean, functional,
          and user-focused web applications.
        </p>
        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
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
      <div className="z-10 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[500px] mx-auto md:mx-0">
        <Lottie animationData={devAnimation} loop autoplay />
      </div>
    </motion.section>
  );
};

export default Hero;
