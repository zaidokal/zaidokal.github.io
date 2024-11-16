"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Desktop/DesktopHeader";
import Footer from "@/components/Desktop/DesktopFooter";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faLightbulb,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

const Viewer: React.FC = () => {
  const [data, setData] = useState<TimelineItem[]>([]);
  const [filteredData, setFilteredData] = useState<TimelineItem[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const titlesListRef = useRef<HTMLDivElement>(null);
  const titleItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const searchParams = useSearchParams();
  const queryId = searchParams?.get("id");

  useEffect(() => {
    fetch("/data/timeline.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setFilteredData(jsonData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) => selectedCategories.includes(item.category)),
      );
    }
  }, [selectedCategories, data]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const scrollToItem = useCallback(
    (index: number) => {
      const item = filteredData[index];
      if (item) {
        const element = document.getElementById(`item-${item.id}`);
        if (element && timelineContainerRef.current) {
          timelineContainerRef.current.scrollTo({
            top: element.offsetTop - timelineContainerRef.current.offsetTop,
            behavior: "smooth",
          });
          setCurrentIndex(index);
        }
      }
    },
    [filteredData],
  );

  const scrollToNext = () => {
    if (currentIndex < filteredData.length - 1) {
      scrollToItem(currentIndex + 1);
    }
  };

  const scrollToPrevious = () => {
    if (currentIndex > 0) {
      scrollToItem(currentIndex - 1);
    }
  };

  const handleScroll = useCallback(() => {
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
    }, 150);
  }, [filteredData, isScrolling]);

  useEffect(() => {
    const container = timelineContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  useEffect(() => {
    if (filteredData.length > 0) {
      let initialIndex = 0;
      if (queryId) {
        const index = filteredData.findIndex((item) => item.id === queryId);
        if (index !== -1) {
          initialIndex = index;
        }
      }
      scrollToItem(initialIndex);
    } else {
      setCurrentIndex(0);
    }
  }, [filteredData, queryId, scrollToItem]);

  useEffect(() => {
    const selectedTitleItem = titleItemRefs.current[currentIndex];
    if (selectedTitleItem && titlesListRef.current) {
      selectedTitleItem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex]);

  return (
    <div
      ref={timelineContainerRef}
      className="relative h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth pb-[60px] pt-[100px] scrollbar-hide"
    >
      <div className="fixed left-0 top-0 z-50 w-full">
        <Header />
      </div>

      <div className="fixed bottom-0 left-0 z-50 w-full">
        <Footer />
      </div>

      <div
        className="fixed z-40 flex h-[70vh] w-64 flex-col items-center p-4"
        style={{ right: "5%", top: "53%", transform: "translateY(-50%)" }}
      >
        <div className="mb-4 flex space-x-2">
          <button
            onClick={() => handleCategoryClick("education")}
            className={`rounded-full p-3 ${
              selectedCategories.includes("education")
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={faGraduationCap} size="lg" />
          </button>
          <button
            onClick={() => handleCategoryClick("experience")}
            className={`rounded-full p-3 ${
              selectedCategories.includes("experience")
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={faBriefcase} size="lg" />
          </button>
          <button
            onClick={() => handleCategoryClick("project")}
            className={`rounded-full p-3 ${
              selectedCategories.includes("project")
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={faLightbulb} size="lg" />
          </button>
        </div>

        <button
          className={`mb-2 text-2xl text-white ${
            currentIndex === 0
              ? "cursor-not-allowed opacity-50"
              : "hover:text-blue-500"
          }`}
          onClick={scrollToPrevious}
          disabled={currentIndex === 0}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>

        <div
          className="w-full flex-1 overflow-y-auto scrollbar-hide"
          ref={titlesListRef}
        >
          {filteredData.map((titleItem, index) => (
            <div
              key={titleItem.id}
              ref={(el) => {
                titleItemRefs.current[index] = el;
              }}
              className={`cursor-pointer rounded-[20px] p-2 text-center text-white hover:bg-gray-700 ${
                currentIndex === index ? "bg-gray-700" : ""
              }`}
              onClick={() => scrollToItem(index)}
            >
              {titleItem.title}
            </div>
          ))}
        </div>

        <button
          className={`mt-2 text-2xl text-white ${
            currentIndex === filteredData.length - 1
              ? "cursor-not-allowed opacity-50"
              : "hover:text-blue-500"
          }`}
          onClick={scrollToNext}
          disabled={currentIndex === filteredData.length - 1}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>

      {filteredData.map((item) => (
        <div
          key={item.id}
          id={`item-${item.id}`}
          className="relative h-screen w-full snap-start bg-cover bg-center pb-[60px] pt-[100px]"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
            <h2 className="mb-2 text-4xl font-bold">{item.year}</h2>
            <h3 className="mb-4 text-2xl">{item.title}</h3>
            <p className="max-w-xl">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Viewer;
