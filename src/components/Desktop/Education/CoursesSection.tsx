import React from "react";
import SectionHeader from "@/components/Desktop/Education/SectionHeader";
import courses from "@/data/coursesData";
import CourseTable from "@/components/Desktop/Education/CourseTable";

const CoursesSection: React.FC = () => (
  <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 py-24">
    <div className="container mx-auto px-6">
      <SectionHeader title="Courses Timeline" color="text-blue-400" />
      {courses.map((yearData, idx) => (
        <CourseTable
          key={idx}
          year={yearData.year}
          courses={yearData.courses}
        />
      ))}
    </div>
  </section>
);

export default CoursesSection;
