import React, { useEffect, useRef } from "react";
import {
  scrollToNext,
  scrollToPrevious,
  handleScrollDetection,
  scrollToItem,
} from "@/app/scripts/scrollUtils";
import ArrowButton from "./ArrowButton";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface TitleNavigatorProps {
  filteredData: any[];
  queryId: string | null;
  timelineContainerRef: React.RefObject<HTMLDivElement>;
}

const TitleNavigator: React.FC<TitleNavigatorProps> = ({
  filteredData,
  queryId,
  timelineContainerRef,
}) => {
  const titlesListRef = useRef<HTMLDivElement>(null);
  const titleItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isScrolling, setIsScrolling] = React.useState(false);

  useEffect(() => {
    if (filteredData.length > 0 && queryId) {
      const initialIndex = filteredData.findIndex(
        (item) => item.id === queryId,
      );
      if (initialIndex !== -1) {
        scrollToItem(
          initialIndex,
          filteredData,
          timelineContainerRef,
          setCurrentIndex,
        );
      }
    }
  }, [filteredData, queryId, timelineContainerRef]);

  const handleScroll = () => {
    handleScrollDetection(
      filteredData,
      timelineContainerRef,
      setCurrentIndex,
      isScrolling,
      setIsScrolling,
    );
  };

  useEffect(() => {
    const container = timelineContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <>
      <ArrowButton
        isDisabled={currentIndex === 0}
        onClick={() =>
          scrollToPrevious(
            currentIndex,
            filteredData,
            timelineContainerRef,
            setCurrentIndex,
          )
        }
        icon={faArrowUp}
        className="mb-2"
      />

      <div
        className="w-full flex-1 overflow-y-auto scrollbar-hide"
        ref={titlesListRef}
      >
        {filteredData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              if (titleItemRefs.current) titleItemRefs.current[index] = el;
            }}
            className={`cursor-pointer rounded-[20px] p-2 text-center text-white hover:bg-gray-700 ${
              currentIndex === index ? "bg-gray-700" : ""
            }`}
            onClick={() =>
              scrollToNext(
                index,
                filteredData,
                timelineContainerRef,
                setCurrentIndex,
              )
            }
          >
            {item.title}
          </div>
        ))}
      </div>

      <ArrowButton
        isDisabled={currentIndex === filteredData.length - 1}
        onClick={() =>
          scrollToNext(
            currentIndex,
            filteredData,
            timelineContainerRef,
            setCurrentIndex,
          )
        }
        icon={faArrowDown}
        className="mt-2"
      />
    </>
  );
};

export default TitleNavigator;
