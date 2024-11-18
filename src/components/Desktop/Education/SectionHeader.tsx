import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  color: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, color }) => (
  <motion.h2
    className={`mb-16 text-center text-6xl font-bold ${color}`}
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {title}
  </motion.h2>
);

export default SectionHeader;
