import React from "react";

const SectionTitle = ({
  title = "Your Amazing Section",
  showDecorations = true,
  showBackground = true,
  size = "large",
  alignment = "center",
}) => {
  const sizeClasses = {
    small: "text-3xl md:text-4xl lg:text-5xl",
    medium: "text-4xl md:text-5xl lg:text40xl",
    large: "text-6xl md:text-7xl lg:text-8xl",
    xl: "text-7xl md:text-8xl lg:text-9xl",
  };

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div
      className={`relative py-12 px-4 ${alignmentClasses[alignment]} overflow-hidden bg-slate-900`}
    >
      {/* Background gradient orbs - much more subtle */}
      {showBackground && (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full opacity-1 blur-3xl"
            style={{ backgroundColor: "#0077b5" }}
          ></div>
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Decorative line */}
        {showDecorations && alignment === "center" && (
          <div className="flex items-center justify-center mb-3">
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
            <div
              className="mx-3 w-1.5 h-1.5 rounded-full opacity-80"
              style={{ backgroundColor: "#f34dac" }}
            ></div>
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          </div>
        )}

        {/* Main title */}
        <h1 className={`${sizeClasses[size]} font-bold mb-4 leading-tight`}>
          <span
            className="bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              // backgroundImage: `linear-gradient(45deg, #f34dac 0%, #8436d0 50%, #0077b5 100%)`,
              backgroundImage: `linear-gradient(45deg,rgb(242, 176, 232) 0%,rgb(142, 191, 240) 50%,rgb(218, 172, 239)100%)`,
            }}
          >
            {title}
          </span>
        </h1>

        {/* Animated underline */}
        {showDecorations && (
          <div
            className={`flex ${
              alignment === "left"
                ? "justify-start"
                : alignment === "right"
                ? "justify-end"
                : "justify-center"
            }`}
          >
            <div className="relative">
              <div
                className="h-0.5 w-24 rounded-full"
                style={{
                  background: `linear-gradient(90deg, #f34dac 0%, #8436d0 50%, #0077b5 100%)`,
                }}
              ></div>
            </div>
          </div>
        )}

        {/* Subtle floating elements */}
        {showDecorations && (
          <>
            <div className="absolute top-16 left-8 md:left-16 lg:left-24 xl:left-32 opacity-20">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#8436d0" }}
              ></div>
            </div>
            <div className="absolute top-20 right-12 md:right-20 lg:right-32 xl:right-48 opacity-15">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#0077b5" }}
              ></div>
            </div>
            <div className="absolute bottom-16 left-16 md:left-24 lg:left-40 xl:left-56 opacity-25">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#f34dac" }}
              ></div>
            </div>
            <div className="absolute top-8 right-20 md:right-32 lg:right-48 xl:right-64 opacity-18">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#f34dac" }}
              ></div>
            </div>
            {/* <div className="absolute top-32 left-24 md:left-40 lg:left-56 xl:left-72 opacity-22">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#0077b5" }}
              ></div>
            </div> */}
            <div className="absolute bottom-24 right-8 md:right-16 lg:right-28 xl:right-40 opacity-17">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#8436d0" }}
              ></div>
            </div>
            <div className="absolute top-12 left-32 md:left-48 lg:left-64 xl:left-80 opacity-15">
              <div
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: "#f34dac" }}
              ></div>
            </div>
            <div className="absolute bottom-8 left-8 md:left-12 lg:left-20 xl:left-28 opacity-20">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#0077b5" }}
              ></div>
            </div>
            <div className="absolute top-24 right-6 md:right-12 lg:right-20 xl:right-32 opacity-12">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#8436d0" }}
              ></div>
            </div>
            <div className="absolute bottom-12 right-24 md:right-40 lg:right-56 xl:right-72 opacity-25">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#f34dac" }}
              ></div>
            </div>
          </>
        )}
      </div>

      {/* Removed the grid pattern overlay for cleaner look */}
    </div>
  );
};

export default SectionTitle;
