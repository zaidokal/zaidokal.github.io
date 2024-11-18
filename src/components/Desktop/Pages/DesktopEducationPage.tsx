import React from "react";
import IntroSection from "@/components/Desktop/Education/IntroSection";
import EducationSection from "@/components/Desktop/Education/EducationSection";
import TechnologiesSection from "@/components/Desktop/Education/TechnologiesSection";
import technologies from "@/data/technologiesData";
import ExtracurricularsSection from "@/components/Desktop/Education/ExtracurricularsSection";
import Extracurriculars from "@/data/ExtracurricularsData";
import CoursesSection from "@/components/Desktop/Education/CoursesSection";

const DesktopEducationPage: React.FC = () => {
  return (
    <div>
      <IntroSection />
      <EducationSection />
      <TechnologiesSection technologies={technologies} />
      <ExtracurricularsSection Extracurriculars={Extracurriculars} />
      <CoursesSection />
    </div>
  );
};

export default DesktopEducationPage;
