import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiGooglecolab, SiStreamlit } from "react-icons/si";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="min-w-[400px] max-w-[400px] min-h-[400px] max-h-[525px] mx-4 relative rounded-xl overflow-hidden
      shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl
      bg-gradient-to-br from-white/60 via-white/40 to-white/30 dark:from-gray-800/60 dark:via-gray-700/40 dark:to-gray-600/30
      border border-white/20 backdrop-blur-xl hover:backdrop-blur-2xl"
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="h-44.5 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {project.description}
        </p>

        {/* Tech + Links */}
        <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-sky-600 text-white rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 text-3xl">
            {/* Main Repo/Colab */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition ${
                project.linkType === "colab"
                  ? "text-[#F9AB00] hover:text-yellow-400"
                  : "text-purple-500 hover:text-purple-400"
              }`}
              title={`View on ${
                project.linkType === "colab" ? "Google Colab" : "GitHub"
              }`}
            >
              {project.linkType === "colab" ? <SiGooglecolab /> : <FaGithub />}
            </a>

            {/* Deployed App Link (optional) */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF4B4B] hover:opacity-80 text-3xl"
                title="View Live"
              >
                <SiStreamlit />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
