import React from "react";
import SectionHeader from "../Education/SectionHeader";
import GridItem from "../Education/GridItem";

interface Technology {
  category: string;
  items: string[];
  color: string;
}

const colorMap: { [key: string]: string } = {
  green: "bg-gradient-to-br from-green-400 to-green-600",
  blue: "bg-gradient-to-br from-blue-400 to-blue-600",
  purple: "bg-gradient-to-br from-purple-400 to-purple-600",
  yellow: "bg-gradient-to-br from-yellow-400 to-yellow-600",
};

const TechnologiesSection: React.FC<{ technologies: Technology[] }> = ({
  technologies,
}) => (
  <section className="relative overflow-hidden bg-gray-900 py-48 text-gray-100">
    <div className="container mx-auto px-6">
      <SectionHeader title="My Programming Galaxy" color="text-purple-400" />
    </div>

    <div className="space-y-24">
      {technologies.map((tech, idx) => (
        <div key={idx} className="container mx-auto px-6">
          <h3
            className={`bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent ${
              colorMap[tech.color] ||
              "bg-gradient-to-r from-gray-400 to-gray-600"
            } mb-12`}
          >
            {tech.category}
          </h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {tech.items.map((item, i) => (
              <GridItem key={i} name={item} color={tech.color} index={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TechnologiesSection;
