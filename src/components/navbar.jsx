import React from "react";
import { useEffect, useState } from "react";


const Navbar = () => {

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);


  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-purple-600">
        Ifhaam's Portfolio
      </div>

      <ul className="flex space-x-4 text-gray-700 font-medium">
        <li>
          <a href="#home" className="hover:text-purple-600">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-purple-600">
            Projects
          </a>
        </li>
        <li>
          <a href="#resume" className="hover:text-purple-600">
            Resume
          </a>
        </li>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-sm border px-3 py-1 rounded-md text-gray-700 dark:text-gray-200 dark:border-gray-600"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
