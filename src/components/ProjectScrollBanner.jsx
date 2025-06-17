import React, { useState } from "react";
import { useEffect } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const HorizontalProjectScroll = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [ignoreHover, setIgnoreHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIgnoreHover(true);
      setTimeout(() => setIgnoreHover(false), 500); // Ignore hover for 1 second
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="py-12 bg-slate-900">
      <SectionTitle
        title="Projects"
        showDecorations={true}
        showBackground={true}
        alignment="center"
        size="medium"
      />

      <div
        className="relative w-screen max-w-full overflow-hidden px-4"
        onMouseEnter={() => {
          if (!ignoreHover) setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Scroll track */}
        <div className="relative w-full overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:dark:bg-white/5 before:backdrop-blur-xl before:z-0 before:rounded-none before:border-y before:border-white/10 pt-3 pb-3">
          <div
            className="relative z-10 flex gap-6 py-6 w-fit animate-scrollX"
            style={{ animationPlayState: isHovered ? "paused" : "running" }}
          >
            {[...projects, ...projects, ...projects, ...projects].map(
              (project, index) => (
                <ProjectCard key={index} project={project} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalProjectScroll;
