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

const TimelineBox: React.FC<TimelineBoxProps> = ({ id, title, image }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/viewer?id=${id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="w-[150px] h-[100px] m-5 rounded-[20px] shadow-md text-white bg-cover bg-center active:bg-violet-700 hover:ring focus:ring-violet-300"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex flex-col justify-center h-full text-center bg-black bg-opacity-65 rounded-[20px]">
        <h4 className="text-[12px] mb-2">{title}</h4>
      </div>
    </button>
  );
};

export default TimelineBox;
