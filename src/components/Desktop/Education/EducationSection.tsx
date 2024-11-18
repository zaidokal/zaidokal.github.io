import React from "react";
import Card from "../Education/Card";

const EducationSection: React.FC = () => (
  <section className="relative bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900 py-24">
    <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2">
      <Card
        title="🎓 Western University"
        content={
          <p className="text-center text-lg font-semibold text-gray-300">
            Sep 2020 - April 2025
          </p>
        }
        bgGradient="bg-gradient-to-br from-indigo-800 to-indigo-900 shadow-[0_0_20px_5px_rgba(93,81,207,0.7)]"
        motionProps={{
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 1 },
        }}
      />
      <Card
        content={
          <>
            <p>
              My university experience began in September 2020 when I embarked
              on my journey into Engineering at Western University.
            </p>
            <p className="mt-4">
              After my first year, I discovered a passion for software and chose
              to pursue a career in the Software discipline.
            </p>
            <p className="mt-4">
              I have recently completed a Co-op position at{" "}
              <span className="text-indigo-300">J.D Power</span> for a 16-month
              term. My expected graduation date is{" "}
              <span className="text-indigo-300">April 2025</span>.
            </p>
          </>
        }
        bgGradient="bg-gradient-to-br from-purple-800 to-gray-800 shadow-[0_0_20px_5px_rgba(136,84,208,0.7)]"
        motionProps={{
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 1 },
        }}
      />
    </div>
  </section>
);

export default EducationSection;
