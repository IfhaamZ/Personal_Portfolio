import React from "react";
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    role: "Junior Software Developer Intern",
    company: "RevealTek Solutions",
    duration: "Nov 2024 - Feb 2025",
    description: [
      "Built a computer vision pipeline using OpenCV to detect badminton court boundaries with edge detection and preprocessing logic.",
      "Tuned HSV thresholds to improve edge detection accuracy under variable lighting conditions.",
      "Designed flexible JSON configuration files to toggle between singles and doubles court layouts.",
      "Implemented visual overlays in OpenCV to speed up debugging and reduce manual inspection.",
      "Refactored code into modular components, enhancing system maintainability and testability.",
      "Collaborated in code reviews and contributed to alignment between engineering tasks and project goals.",
    ],
    location: "Remote, Singapore",
    iconPath: "/images/WORK.png",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full pb-20 pt-10 px-6">
      <SectionTitle
        title="Work Experience"
        showDecorations={true}
        showBackground={true}
        alignment="center"
        size="medium"
      />
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div
                className="absolute left-6 w-4 h-4 rounded-full border-2 border-slate-700 z-10 "
                style={{
                  background: `linear-gradient(40deg, #f34dac 0%, #8436d0 60%)`,
                }}
              ></div>

              {/* Experience card */}
              <div className="ml-16 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
                {/* Header section */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-medium text-[#8436d0]">
                        @
                      </span>
                      <span
                        className="text-lg font-semibold bg-gradient-to-r bg-clip-text text-transparent"
                        style={{
                          backgroundImage: `linear-gradient(45deg,rgb(1, 134, 205) 0%,rgb(27, 138, 198) 30%, rgb(67, 154, 200) 60%,rgb(90, 171, 214) 100%)`,
                        }}
                      >
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-400">
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {exp.duration}
                      </span>
                      <span className="hidden sm:block text-slate-500">•</span>
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Company icon */}
                  <div
                    className="w-15 p-1 h-12 rounded-xl overflow-hidden shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, #f34dac20 0%, #8436d030 100%)`,
                      border: "1px solid rgba(132, 54, 208, 0.3)",
                    }}
                  >
                    <img
                      src={exp.iconPath}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  {exp.description.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                        style={{ backgroundColor: "#f34dac" }}
                      ></div>
                      <p className="text-slate-300 leading-relaxed group-hover/item:text-slate-200 transition-colors duration-200 text-sm">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Subtle accent line */}
                <div
                  className="mt-6 h-0.5 w-100 rounded-full opacity-60"
                  style={{
                    background: `linear-gradient(90deg, #f34dac 0%, #8436d0 100%)`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
