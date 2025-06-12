import React from "react";


const Navbar = () => {

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
      </ul>
    </nav>
  );
};

export default Navbar;
