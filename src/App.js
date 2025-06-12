import React from "react";
import Navbar from "./components/navbar";
import HorizontalProjectScroll from "./components/ProjectScrollBanner";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <HorizontalProjectScroll />
    </div>
  );
}

export default App;
