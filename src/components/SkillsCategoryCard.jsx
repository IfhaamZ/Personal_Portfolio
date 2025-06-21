import React from "react";

const SkillsCategoryCard = ({ title, skills, index }) => {
  const gradients = [
    "from-pink-500/5 to-violet-500/5",
    "from-violet-500/5 to-cyan-500/5",
    "from-cyan-500/5 to-pink-500/5",
  ];

  const borderGradients = [
    "from-pink-400/50 to-violet-400/50",
    "from-violet-400/50 to-cyan-400/50",
    "from-cyan-400/50 to-pink-400/50",
  ];

  const glowColors = [
    "shadow-pink-500/1",
    "shadow-violet-500/1",
    "shadow-cyan-500/1",
  ];

  const currentGradient = gradients[index % gradients.length];
  const currentBorder = borderGradients[index % borderGradients.length];
  const currentGlow = glowColors[index % glowColors.length];

  return (
    <div className="group relative">
      {/* Animated background glow */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${currentBorder} rounded-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm`}
      ></div>

      <div
        className={`relative bg-gradient-to-br ${currentGradient} backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg ${currentGlow} hover:shadow-xl hover:${currentGlow.replace(
          "/20",
          "/40"
        )} transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1`}
      >
        {/* Floating particles effect */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-6 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>

        <h3
          className={`text-xl font-bold mb-6 text-center bg-gradient-to-r ${currentBorder} bg-clip-text text-transparent tracking-wide`}
        >
          {title}
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(({ iconPath, name }, skillIndex) => (
            <div key={skillIndex} className="group/skill relative">
              {/* Skill icon container with hover effects */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 p-3 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:bg-white/20 group-hover/skill:shadow-lg hover:shadow-${
                  currentGlow.split("-")[1]
                }-400/50`}
              >
                <img
                  src={iconPath}
                  alt={name}
                  className="w-8 h-8 object-contain transition-transform duration-300 group-hover/skill:scale-110"
                />
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                {name}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/20 rounded-tl-xl"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/20 rounded-br-xl"></div>
      </div>
    </div>
  );
};

export default SkillsCategoryCard;
