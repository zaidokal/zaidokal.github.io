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
    <button
      onClick={handleClick}
      className="m-5 h-64 w-96 rounded-[40px] bg-cover bg-center text-white shadow-md hover:ring focus:ring-violet-300 active:bg-violet-700"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="neon-shadow-purple flex h-full flex-col justify-center rounded-[40px] bg-black bg-opacity-75 text-center">
        <span className="mb-2 text-xl font-bold">{year}</span>
        <h4 className="mb-2 text-lg">{title}</h4>
        <p>{description}</p>
      </div>
    </button>
  );
};

export default TimelineBox;
