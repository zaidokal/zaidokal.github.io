import React from "react";
import { motion } from "framer-motion";

interface GridItemProps {
  name: string;
  color: string;
  index: number;
}

const GridItem: React.FC<GridItemProps> = ({ name, color, index }) => (
  <motion.div
    className={`group relative flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br p-6 shadow-lg ${color}`}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 150,
      delay: index * 0.1,
    }}
  >
    <p className="text-lg font-semibold text-white">{name}</p>
  </motion.div>
);

export default GridItem;
