import React, { useEffect, useState } from "react";
import TimelineBox from "@/components/Desktop/TimelineBox";
import TimelineData from "@/data/TimelineData";
interface TimelineDataType {
  id: string;
  year: string;
  title: string;
  description: string;
  category: string;
  image: string;
  favourites: boolean;
}

const DesktopTimelinePage: React.FC = () => {
  const [timelineData, setTimelineData] = useState<TimelineDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimelineData(TimelineData);
    };

    fetchData();
  }, []);

  const favouriteTimelineData = timelineData.filter((item) => item.favourites);

  return (
    <div className="flex flex-wrap items-center justify-center p-10 pb-[40px] pt-[100px]">
      <div className="relative z-10 grid grid-cols-1 gap-10 px-10 py-20 md:grid-cols-2 lg:grid-cols-3">
        {favouriteTimelineData.map((item) => (
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
