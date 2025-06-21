import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "projects", "skills", "experience"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Desktop Navigation (Your Original Design - Unchanged) */}
      {!isMobile && (
        <div className="fixed top-4 right-20 z-[20] h-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`absolute w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 
              bg-gradient-to-br from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700
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
                      spy={true}
                      offset={75}
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
      )}

      {/* Mobile Navigation*/}
      {isMobile && (
        <div className="fixed top-4 right-4 z-[20]">
          {/* Same Hamburger Button as Desktop */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 
              bg-gradient-to-br from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700
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

          {/* Same Dropdown Menu as Desktop */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ width: 50, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 top-full mt-2 h-auto py-2 flex items-center bg-gradient-to-r from-purple-900/40 to-rose-900/40 backdrop-blur-lg border border-white/30 rounded-lg shadow-xl overflow-hidden"
              >
                <motion.nav
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col w-full px-2"
                >
                  {sections.map((section) => (
                    <ScrollLink
                      key={section}
                      to={section}
                      smooth={true}
                      spy={true}
                      offset={75}
                      duration={500}
                      activeClass="active-nav-item"
                      onClick={() => setTimeout(() => setIsOpen(false), 400)}
                      className="text-white/90 hover:text-white font-medium uppercase tracking-wider text-sm sm:text-base px-4 py-3 rounded transition-all duration-300 cursor-pointer hover:bg-white/20 hover:shadow-inner text-right"
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
      )}
    </>
  );
};

export default Navbar;
