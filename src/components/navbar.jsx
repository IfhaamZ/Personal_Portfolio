import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "projects", "skills"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div className="fixed top-4 right-20 z-[20]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`absolute w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 
          ${
            isOpen
              ? "bg-gradient-to-br from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
              : "bg-white/20 hover:bg-white/30"
          } 
          backdrop-blur-lg text-white shadow-lg z-50`}
      >
        <motion.div
          key={isOpen ? "x" : "bars"}
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </motion.div>
      </button>

      {/* Expanding Navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ width: 50, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-5 h-14 flex items-center bg-gradient-to-r from-purple-900/40 to-rose-900/40 backdrop-blur-lg border border-white/30 rounded-full shadow-xl overflow-hidden"
          >
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-1 sm:gap-3 px-4"
            >
              {sections.map((section) => (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  spy={isMounted} // Only enable spy after mount
                  offset={-80} // Adjust this based on your header height
                  duration={500}
                  activeClass="active-nav-item"
                  onClick={() => setTimeout(() => setIsOpen(false), 400)}
                  className="text-white/90 hover:text-white font-medium uppercase tracking-wider text-sm sm:text-base px-4 py-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-white/20 hover:shadow-inner"
                  ignoreCancelEvents={true}
                >
                  {section}
                </ScrollLink>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
