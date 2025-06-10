import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Personal Finance Tracker",
      description:
        "A full-stack budgeting app using .NET, SQL, and Azure DevOps CI/CD.",
      tech: ["C#", ".NET", "SQL", "Azure"],
      github: "https://github.com/ifhaamz/finance-tracker",
      demo: "https://ifhaamz-finance.netlify.app",
    },
    {
      title: "Data Dashboard",
      description: "Interactive dashboard with Power BI and SQL insights.",
      tech: ["Power BI", "SQL", "Excel"],
      github: "https://github.com/ifhaamz/data-dashboard",
    },
    {
      title: "Portfolio Website",
      description:
        "This website! Built using React, Tailwind CSS, and hosted on Netlify.",
      tech: ["React", "Tailwind CSS", "Netlify"],
      github: "https://github.com/ifhaamz/portfolio",
      demo: "https://ifhaamz.netlify.app",
    },
  ];

  return (
    <div
      className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen"
      id="projects"
    >
      <h2 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-400 mb-8">
        Projects
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
