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
    router.push(`/desktop/viewer?id=${id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="w-96 h-64 m-5 rounded-[40px] shadow-md text-white bg-cover bg-center active:bg-violet-700 hover:ring focus:ring-violet-300"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex flex-col justify-center h-full text-center bg-black bg-opacity-75 rounded-[40px]">
        <span className="text-xl font-bold mb-2">{year}</span>
        <h4 className="text-lg mb-2">{title}</h4>
        <p>{description}</p>
      </div>
    </button>
  );
};

export default TimelineBox;
