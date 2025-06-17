import React from "react";
import { skills } from "../data/skillsData"; // You’ll create this next
import SkillCategoryCard from "./SkillsCategoryCard";
import SectionTitle from "./SectionTitle";

const SkillsGrid = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <SectionTitle text="My Skills"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, skillList]) => (
          <SkillCategoryCard
            key={category}
            title={category}
            skills={skillList}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
