"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import FilterButtons from "@/components/Desktop/Viewer/FilterButtons/FilterButtons";
import TitleNavigator from "@/components/Desktop/Viewer/Navigation/TitleNavigator";
import PageContent from "@/components/Desktop/Viewer/Page/PageContent";
import ScreenshotOverlay from "@/components/Desktop/Viewer/Page/ScreenshotOverlay";

import { fetchData } from "@/app/scripts/fetchData";
import { TimelineItem } from "@/app/scripts/types";

const Viewer: React.FC = () => {
  const [data, setData] = useState<TimelineItem[]>([]);
  const [filteredData, setFilteredData] = useState<TimelineItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentScreenshots, setCurrentScreenshots] = useState<string[]>([]);

  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const queryId = searchParams?.get("id") ?? null;

  useEffect(() => {
    fetchData().then((jsonData) => {
      setData(jsonData);
      setFilteredData(jsonData);
    });
  }, []);

  return (
    <div
      ref={timelineContainerRef}
      className="relative h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth pb-[60px] pt-[100px] scrollbar-hide"
    >
      <div
        className="fixed z-40 flex h-[70vh] w-64 flex-col items-center p-4"
        style={{ right: "5%", top: "53%", transform: "translateY(-50%)" }}
      >
        <FilterButtons data={data} setFilteredData={setFilteredData} />

        <TitleNavigator
          filteredData={filteredData}
          queryId={queryId}
          timelineContainerRef={timelineContainerRef}
        />
      </div>

      {filteredData.map((item) => (
        <PageContent
          key={item.id}
          item={item}
          setCurrentScreenshots={setCurrentScreenshots}
          setShowModal={setShowModal}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      ))}

      {showModal && (
        <ScreenshotOverlay
          currentScreenshots={currentScreenshots}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default Viewer;
