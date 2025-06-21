import React from "react";
import { skills } from "../data/skillsData"; 
import SkillsCategoryCard from "./SkillsCategoryCard"
import SectionTitle from "./SectionTitle";

const SkillsGrid = () => {
  return (
    <section
      id="skills"
      className="relative py-20 bg-slate-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 right-20 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Floating grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative">
        <SectionTitle
          title="My Skills"
          showDecorations={true}
          showBackground={true}
          alignment="center"
          size="medium"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          {Object.entries(skills).map(([category, skillList], index) => (
            <SkillsCategoryCard
              key={category}
              title={category}
              skills={skillList}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
