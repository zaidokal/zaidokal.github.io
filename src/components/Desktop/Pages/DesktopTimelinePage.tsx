import React, { useEffect, useState } from "react";
import TimelineBox from "@/components/Desktop/TimelineBox";

interface TimelineData {
  id: string;
  year: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

const DesktopTimelinePage: React.FC = () => {
  const [timelineData, setTimelineData] = useState<TimelineData[]>([]);

  useEffect(() => {
    fetch("/data/timeline.json")
      .then((response) => response.json())
      .then((data) => setTimelineData(data));
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center p-10 pb-[40px] pt-[100px]">
      <div className="relative z-10 grid grid-cols-1 gap-10 px-10 py-20 md:grid-cols-2 lg:grid-cols-3">
        {timelineData.map((item) => (
          <TimelineBox
            key={item.id}
            id={item.id}
            year={item.year}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopTimelinePage;
