import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "projects", "skills"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed top-4 right-4 z-[60]">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 
            ${
              isOpen
                ? "bg-rose-500 hover:bg-rose-600"
                : "bg-white/20 hover:bg-white/30"
            } 
            backdrop-blur-md text-white shadow-md`}
        >
          <motion.div
            key={isOpen ? "x" : "bars"}
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {isOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </motion.div>
        </button>
      </div>

      {/* Slide-out Navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="fixed top-4 right-4 z-50 h-14 px-6 flex items-center gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-xl pr-20 overflow-hidden"
          >
            {/* Nav Links */}
            <nav className="flex gap-4 text-sm sm:text-base">
              {sections.map((section) => (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  spy={false}
                  offset={-100}
                  duration={500}
                  activeClass="active"
                  onClick={() => {
                    setTimeout(() => setIsOpen(false), 400); // ✅ Delay fixes spyCallbacks error
                  }}
                  className="text-white capitalize px-5 py-1 rounded-full hover:bg-purple-600 transition-all duration-300 cursor-pointer"
                >
                  {section}
                </ScrollLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
