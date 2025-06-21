import React from "react";
import Navbar from "./components/navbar";
import HorizontalProjectScroll from "./components/ProjectScrollBanner";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SkillsGrid from "./components/SkillsGrid";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <HorizontalProjectScroll />
      <SkillsGrid />
      <Experience/> 
    </div>
  );
}

export default App;
