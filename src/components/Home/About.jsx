import React from "react";

const About = () => {
  return (
    <section className="bg-[#0A0B16] text-white w-full">
      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Image */}
        <div className="w-full h-full">
          <img
            src="/side.avif"
            alt="Gym interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Text */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 py-12">
          <h2 className="text-4xl font-bold mb-2">About</h2>
          <h3 className="text-5xl font-extrabold mb-6 leading-tight">
            PROGRESS <br /> WORKS GYM
          </h3>

          <p className="text-base text-gray-300 mb-6 leading-relaxed">
            We were founded back in 2016 with the mission to be a place where
            anyone can come, get fit and feel healthy. Our holistic approach to
            fitness sets us apart from any other Gym based in the Leicester
            area.
          </p>

          <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
            We look at the big picture and combine the best aspects of all
            types of fitness facilities to embody this approach and redefine
            what a state-of-the-art Gym can be. Since showing up can be the
            hardest part, we strive to make sure that everything else is taken
            care of by us.
          </p>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Visit us and you will see for yourself.
          </p>
        </div>
      </div>

      {/* ✅ Full-width SIGN UP section centered */}
      <div className="text-center py-10 px-4">
        <p className="text-sm sm:text-base font-semibold mb-2">
          - SIGN UP TODAY VIA DIRECT DEBIT -
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-6">
          MEMBERSHIPS STARTING FROM £39
        </h2>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-6 py-2">
          SIGN UP
        </button>
      </div>
    </section>
  );
};

export default About;
