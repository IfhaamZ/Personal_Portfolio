import React from "react";
import SectionTitle from "./SectionTitle";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8436d0]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0077b5]/10 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative z-10">
        <SectionTitle
          title="About Me"
          showDecorations={true}
          showBackground={true}
          alignment="center"
          size="medium"
        />

        <div className="mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
          {/* Text Content */}
          <div className="flex-[1.3] w-full max-w-5xl space-y-6">
            <div className="max-w-none w-full backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-[#f34dac]/20 transition-all duration-500 hover:scale-[1.02] group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f34dac]/5 via-[#8436d0]/5 to-[#0077b5]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-md text-gray-100 leading-relaxed relative z-10">
                Hi, I'm{" "}
                <span className="font-semibold bg-gradient-to-r from-[#f34dac] to-[#8436d0] bg-clip-text text-transparent">
                  Ifhaam
                </span>{" "}
                — a developer, designer, and data enthusiast who loves building
                things that matter. I recently wrapped up my BIT degree,
                majoring in Full-Stack Development and Data Science, a combo
                that lets me bridge the gap between how things look, how they
                work, and how data can make them smarter.
              </p>
            </div>

            <div className="max-w-none w-full backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-[#8436d0]/20 transition-all duration-500 hover:scale-[1.02] group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8436d0]/5 via-[#0077b5]/5 to-[#f34dac]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-md text-gray-100 leading-relaxed relative z-10">
                On the development side, I build{" "}
                <span className="font-semibold bg-gradient-to-r from-[#8436d0] to-[#0077b5] bg-clip-text text-transparent">
                  full-stack applications
                </span>{" "}
                from the ground up, frontend, backend, databases, all with an
                eye for clean code and even cleaner UX. I'm big on UI/UX design
                and product thinking, always asking: How does this feel for the
                user? What problem are we solving?
              </p>
            </div>

            <div className="max-w-none w-full backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-[#0077b5]/20 transition-all duration-500 hover:scale-[1.02] group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077b5]/5 via-[#f34dac]/5 to-[#8436d0]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-md text-gray-100 leading-relaxed relative z-10">
                At the same time, I'm just as passionate about{" "}
                <span className="font-semibold bg-gradient-to-r from-[#0077b5] to-[#f34dac] bg-clip-text text-transparent">
                  data
                </span>
                . I love diving into messy datasets, finding patterns, and using
                machine learning to build smart systems that adapt and improve.
                Whether it's predictive models, dashboards, or data-driven
                features in apps, I enjoy turning insights into real-world
                impact.
              </p>
            </div>
          </div>

          {/* Avatar Section */}
          <div className="flex-[0.7] flex justify-center lg:justify-end lg:mr-16">
            <div className="relative group">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f34dac] via-[#8436d0] to-[#0077b5] p-1 animate-spin-slow">
                <div className="rounded-full bg-slate-900 p-4">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#f34dac]/20 via-[#8436d0]/20 to-[#0077b5]/20" />
                </div>
              </div>

              {/* Avatar */}
              <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                  <img
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Brown"
                    alt="Ifhaam - Developer, Designer, Data Enthusiast"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#f34dac] rounded-full animate-bounce opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#8436d0] rounded-full animate-bounce delay-200 opacity-80" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-[#0077b5] rounded-full animate-bounce delay-400 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
