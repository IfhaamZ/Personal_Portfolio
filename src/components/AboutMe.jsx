import React from "react";
import SectionTitle from "./SectionTitle";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900">
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
            Hey! I'm Ifhaam, a developer, designer, and data storyteller driven
            by curiosity and a love for creating things that matter. My journey
            blends code with creativity. From building sleek UIs that feel alive
            to crafting smart full-stack apps that solve real problems, I care
            deeply about the details and the bigger picture.
            <br />
            <br />
            I'm currently studying a unique combo of Business and IT, which
            helps me think not just like a developer, but also like a
            strategist, a user, and a product thinker. Whether it's optimizing
            performance, creating intuitive UX, or presenting insights that
            drive action, I'm all in. Outside of tech, I'm constantly learning,
            building side projects, teaching myself new frameworks, or reading
            up on product design. I believe great work comes from staying
            curious, staying human, and never settling.
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
