import React from "react";
import { motion } from "framer-motion";

interface Course {
  code: string;
  description: string;
}

interface CourseTableProps {
  year: string;
  courses: Course[];
}

const CourseTable: React.FC<CourseTableProps> = ({ year, courses }) => {
  return (
    <div className="mb-16">
      <h3 className="mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-3xl font-bold text-transparent">
        {year}
      </h3>

      <div className="relative -ml-6 flex space-x-6 overflow-x-auto py-4 pl-6 scrollbar-hide">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            className="group relative flex min-w-[250px] flex-col items-start rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-4 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 150,
              delay: idx * 0.1,
            }}
          >
            <h4 className="text-lg font-bold text-blue-400">{course.code}</h4>
            <p className="mt-2 line-clamp-2 text-sm text-gray-400 group-hover:text-gray-300">
              {course.description}
            </p>

            <div className="absolute inset-0 z-[-1] rounded-lg bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CourseTable;
