import React from "react";
import SectionHeader from "./SectionHeader";
import GridItem from "./GridItem";

interface Achievement {
  title: string;
  color: string;
}

const ExtracurricularsSection: React.FC<{
  Extracurriculars: Achievement[];
}> = ({ Extracurriculars }) => (
  <section className="relative bg-gradient-to-tl from-indigo-900 to-purple-800 py-24">
    <div className="container mx-auto px-6">
      <SectionHeader title="Extracurriculars" color="text-yellow-400" />
    </div>

    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {Extracurriculars.map((Extracurriculars, idx) => (
          <GridItem
            key={idx}
            name={Extracurriculars.title}
            color={Extracurriculars.color}
            index={idx}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ExtracurricularsSection;
