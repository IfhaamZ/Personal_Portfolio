import React from "react";
import SectionTitle from "./SectionTitle";

const AboutMe = () => {
  return (
    <section id="about" className="py-11 px-6 bg-slate-900">
      <SectionTitle
        title="About Me"
        showDecorations={true}
        showBackground={true}
        alignment="center"
        size="medium"
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 rounded-xl shadow-2xl px-8 py-10 transition-all duration-300">
        {/* Text */}
        <div className="text-center md:text-left flex-1">
          <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            Hi, I'm Ifhaam — a developer, designer, and data enthusiast who
            loves building things that matter. I recently wrapped up my BIT
            degree, majoring in Full-Stack Development and Data Science, a
            combo that lets me bridge the gap between how things look, how they
            work, and how data can make them smarter.
            <br />
            <br />
            On the development side, I build full-stack applications from the
            ground up, frontend, backend, databases, all with an eye for
            clean code and even cleaner UX. I'm big on UI/UX design and product
            thinking, always asking: How does this feel for the user? What
            problem are we solving?
            <br />
            <br />
            At the same time, I'm just as passionate
            about data. I love diving into messy datasets, finding patterns, and
            using machine learning to build smart systems that adapt and
            improve. Whether it's predictive models, dashboards, or data-driven
            features in apps, I enjoy turning insights into real-world impact.
          </p>
        </div>

        {/* Avatar */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Brown"
            alt="AboutMe"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
