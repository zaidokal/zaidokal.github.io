"use client";

import Header from "@/components/Desktop/Header";
import Footer from "@/components/Desktop/Footer";
import TimelineBox from "@/components/Desktop/TimelineBox";
import { useEffect, useState } from "react";

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
    <main
      className="flex flex-col min-h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/Pictures/BackgroundPic.jpg)" }}
    >
      <Header />

      <div className="flex flex-1 flex-wrap justify-center items-center p-10">
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

      <Footer />
    </main>
  );
};

export default DesktopTimelinePage;
