"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface TimelineBoxProps {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
}

const TimelineBox: React.FC<TimelineBoxProps> = ({
  id,
  year,
  title,
  description,
  image,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/viewer?id=${id}`);
  };

  return (
    <div
      className="group relative h-[350px] transform cursor-pointer overflow-hidden rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
      onClick={handleClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-75"></div>

      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
        <h2 className="neon-shadow text-2xl font-bold">{title}</h2>
        <h3 className="text-lg font-semibold"> {year}</h3>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default TimelineBox;
