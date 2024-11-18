import React from "react";
import { motion, MotionProps } from "framer-motion";

interface CardProps {
  title?: string;
  content: React.ReactNode;
  bgGradient: string;
  motionProps?: MotionProps;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  bgGradient,
  motionProps,
}) => (
  <motion.div
    className={`flex flex-col items-start justify-center rounded-lg p-8 shadow-lg ${bgGradient}`}
    {...motionProps}
  >
    {title && (
      <h2 className="mb-4 text-center text-4xl font-bold text-white">
        {title}
      </h2>
    )}
    <div className="text-lg leading-relaxed text-gray-200">{content}</div>
  </motion.div>
);

export default Card;
