import React from "react";

const SkillsCategoryCard = ({ title, skills }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-4 text-center text-white tracking-wide">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(({ iconPath, name }, index) => (
          <div
            key={index}
            className="w-14 h-14 rounded-full flex items-center justify-center bg-white/20 p-2"
            title={name}
          >
            <img src={iconPath} alt={name} className="w-8 h-8 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCategoryCard;
