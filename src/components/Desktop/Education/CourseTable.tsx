import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Course {
  code: string;
  description: string;
}

interface CourseTableProps {
  year: string;
  courses: Course[];
}

const CourseTable: React.FC<CourseTableProps> = ({ year, courses }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="mb-16">
      <h3 className="mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-3xl font-bold text-transparent">
        {year}
      </h3>

      <div className="relative flex space-x-6 overflow-x-auto py-4 scrollbar-hide">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            onClick={() => setSelectedCourse(course)}
            whileHover={{ scale: 1.05 }}
            className="group relative flex min-w-[250px] flex-col items-start rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-4 shadow-lg transition-transform hover:cursor-pointer"
          >
            <h4 className="text-lg font-bold text-blue-400">{course.code}</h4>
            <p className="mt-2 line-clamp-2 text-sm text-gray-400 group-hover:text-gray-300">
              {course.description}
            </p>

            <div className="absolute inset-0 z-[-1] rounded-lg bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30"></div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-3/4 max-w-md rounded-lg bg-gray-900 p-6 shadow-lg"
            >
              <h4 className="mb-4 text-2xl font-bold text-blue-400">
                {selectedCourse.code}
              </h4>
              <p className="text-gray-300">{selectedCourse.description}</p>
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute right-2 top-2 text-gray-400 hover:text-gray-200"
              >
                ✖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CourseTable;
