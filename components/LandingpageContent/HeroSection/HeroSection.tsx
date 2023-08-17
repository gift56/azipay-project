import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="container">
        <div className="w-full flex items-center justify-center h-[90vh] flex-col tab:flex-row">
          <div className="w-full tab:flex-1 flex flex-col items-start justify-start gap-8">
            <h2 className="text-2xl font-bold text-dark md:text-4xl tab:text-6xl font-play">
              Run your <span className="text-primary">payroll</span>{" "}
              <span className="text-army">easily</span> in{" "}
              <span className="text-danger">seconds</span>
            </h2>
          </div>
          <div className="w-full tab:flex-1"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
