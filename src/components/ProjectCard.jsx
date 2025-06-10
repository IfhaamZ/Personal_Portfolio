import React from "react";

const ProjectCard = ({ title, description, tech, github, demo }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <h3 className="text-2xl font-semibold text-purple-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="text-green-600 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
