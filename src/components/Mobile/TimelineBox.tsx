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
      className="m-5 h-[100px] w-[150px] rounded-[20px] bg-cover bg-center text-white shadow-md hover:ring focus:ring-violet-300 active:bg-violet-700"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex h-full flex-col justify-center rounded-[20px] bg-black bg-opacity-65 text-center">
        <h4 className="mb-2 text-[12px]">{title}</h4>
      </div>
    </button>
  );
};

export default TimelineBox;
