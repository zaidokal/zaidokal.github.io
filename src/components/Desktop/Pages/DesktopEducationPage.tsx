import React from "react";
import IntroSection from "@/components/Desktop/Education/IntroSection";
import EducationSection from "@/components/Desktop/Education/EducationSection";
import TechnologiesSection from "@/components/Desktop/Education/TechnologiesSection";
import technologies from "@/data/technologiesData";

const DesktopEducationPage: React.FC = () => {
  return (
    <div>
      <IntroSection />
      <EducationSection />
      <TechnologiesSection technologies={technologies} />
    </div>
  );
};

export default DesktopEducationPage;
