import React from "react";
import Navbar from "./components/navbar";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <div className="p-6 text-center" id="home">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-gray-600">
          A showcase of my work, skills, and journey in tech.
        </p>
      </div>
      <Projects />
    </div>
  );
}

export default App;
