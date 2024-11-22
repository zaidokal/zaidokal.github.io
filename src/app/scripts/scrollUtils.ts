import { RefObject } from "react";

export const scrollToNext = (
  currentIndex: number,
  filteredData: any[],
  timelineContainerRef: RefObject<HTMLDivElement>,
  setCurrentIndex: (index: number) => void,
) => {
  if (currentIndex < filteredData.length - 1) {
    scrollToItem(
      currentIndex + 1,
      filteredData,
      timelineContainerRef,
      setCurrentIndex,
    );
  }
};

export const scrollToPrevious = (
  currentIndex: number,
  filteredData: any[],
  timelineContainerRef: RefObject<HTMLDivElement>,
  setCurrentIndex: (index: number) => void,
) => {
  if (currentIndex > 0) {
    scrollToItem(
      currentIndex - 1,
      filteredData,
      timelineContainerRef,
      setCurrentIndex,
    );
  }
};

export const scrollToItem = (
  index: number,
  filteredData: any[],
  timelineContainerRef: RefObject<HTMLDivElement>,
  setCurrentIndex: (index: number) => void,
) => {
  const item = filteredData[index];
  if (item) {
    const element = document.getElementById(`item-${item.id}`);
    if (element && timelineContainerRef.current) {
      const container = timelineContainerRef.current;
      const elementRect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const scrollPosition =
        container.scrollTop +
        (elementRect.top - containerRect.top) -
        container.clientHeight / 2 +
        elementRect.height / 2;

      container.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });

      setTimeout(() => setCurrentIndex(index), 300);
    }
  }
};

export const handleScrollDetection = (
  filteredData: any[],
  timelineContainerRef: RefObject<HTMLDivElement>,
  setCurrentIndex: (index: number) => void,
  isScrolling: boolean,
  setIsScrolling: (value: boolean) => void,
) => {
  if (isScrolling) return;

  setIsScrolling(true);

  setTimeout(() => {
    if (timelineContainerRef.current) {
      const container = timelineContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      filteredData.forEach((item, index) => {
        const element = document.getElementById(`item-${item.id}`);
        if (element) {
          const elementRect = element.getBoundingClientRect();
          const elementCenter = elementRect.top + elementRect.height / 2;
          const distance = Math.abs(containerCenter - elementCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setCurrentIndex(closestIndex);
    }
    setIsScrolling(false);
  }, 200);
};
