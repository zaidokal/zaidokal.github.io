import React from "react";
import { motion } from "framer-motion";

interface GridItemProps {
  name: string;
  color: string;
  index: number;
}

const colorMap: { [key: string]: string } = {
  green: "bg-gradient-to-br from-green-400 to-green-600",
  blue: "bg-gradient-to-br from-blue-400 to-blue-600",
  purple: "bg-gradient-to-br from-purple-400 to-purple-600",
  yellow: "bg-gradient-to-br from-yellow-400 to-yellow-600",
};

const GridItem: React.FC<GridItemProps> = ({ name, color, index }) => {
  const colorClass = colorMap[color] || "bg-gray-200";

  return (
    <motion.div
      className={`group relative flex items-center justify-center overflow-hidden rounded-lg p-6 shadow-lg ${colorClass}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: "spring",
        stiffness: 150,
        delay: index * 0.1,
      }}
    >
      <p className="text-lg font-semibold text-white">{name}</p>
    </motion.div>
  );
};

export default GridItem;
