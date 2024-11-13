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
    <div className="flex flex-wrap justify-center items-center p-10">
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
  );
};

export default DesktopTimelinePage;
