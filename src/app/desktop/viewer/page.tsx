"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Desktop/Header";
import Footer from "@/components/Desktop/Footer";
import { useRouter, useSearchParams } from "next/navigation";
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
  const categories = ["education", "experience", "project"];

  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const titlesListRef = useRef<HTMLDivElement>(null);
  const titleItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const searchParams = useSearchParams();
  const queryId = searchParams.get("id");

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
        data.filter((item) => selectedCategories.includes(item.category))
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

  const scrollToItem = (index: number) => {
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
  };

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
    if (timelineContainerRef.current) {
      const container = timelineContainerRef.current;
      const scrollPosition = container.scrollTop + container.clientHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      filteredData.forEach((item, index) => {
        const element = document.getElementById(`item-${item.id}`);
        if (element) {
          const elementTop = element.offsetTop - container.offsetTop;
          const elementCenter = elementTop + element.clientHeight / 2;
          const distance = Math.abs(scrollPosition - elementCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setCurrentIndex(closestIndex);
    }
  }, [filteredData]);

  useEffect(() => {
    const container = timelineContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  // Scroll to the initial item when data is ready
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
  }, [filteredData, queryId]);

  // Scroll the titles list to keep the highlighted item in view
  useEffect(() => {
    if (titlesListRef.current && titleItemRefs.current[currentIndex]) {
      const container = titlesListRef.current;
      const item = titleItemRefs.current[currentIndex];

      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      if (itemRect.top < containerRect.top) {
        // Item is above the visible area
        container.scrollBy({
          top: itemRect.top - containerRect.top,
          behavior: "smooth",
        });
      } else if (itemRect.bottom > containerRect.bottom) {
        // Item is below the visible area
        container.scrollBy({
          top: itemRect.bottom - containerRect.bottom,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  return (
    <div
      ref={timelineContainerRef}
      className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide pt-[100px] pb-[60px]"
    >
      {/* Header Overlay */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Footer Overlay */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </div>

      {/* Overlay for buttons and titles */}
      <div
        className="fixed h-[70vh] w-64 p-4 flex flex-col items-center z-40"
        style={{ right: "20%", top: "50%", transform: "translateY(-50%)" }}
      >
        {/* Filter Buttons */}
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => handleCategoryClick("education")}
            className={`p-3 rounded-full ${
              selectedCategories.includes("education")
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={faGraduationCap} size="lg" />
          </button>
          <button
            onClick={() => handleCategoryClick("experience")}
            className={`p-3 rounded-full ${
              selectedCategories.includes("experience")
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={faBriefcase} size="lg" />
          </button>
          <button
            onClick={() => handleCategoryClick("project")}
            className={`p-3 rounded-full ${
              selectedCategories.includes("project")
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={faLightbulb} size="lg" />
          </button>
        </div>

        {/* Up Arrow */}
        <button
          className={`text-white text-2xl mb-2 ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:text-blue-500"
          }`}
          onClick={scrollToPrevious}
          disabled={currentIndex === 0}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>

        {/* Titles List */}
        <div
          className="flex-1 overflow-y-auto scrollbar-hide w-full"
          ref={titlesListRef}
        >
          {filteredData.map((titleItem, index) => (
            <div
              key={titleItem.id}
              ref={(el) => (titleItemRefs.current[index] = el)} // Assign ref
              className={`p-2 hover:bg-gray-700 cursor-pointer text-center text-white ${
                currentIndex === index ? "bg-gray-700" : ""
              }`}
              onClick={() => scrollToItem(index)}
            >
              {titleItem.title}
            </div>
          ))}
        </div>

        {/* Down Arrow */}
        <button
          className={`text-white text-2xl mt-2 ${
            currentIndex === filteredData.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:text-blue-500"
          }`}
          onClick={scrollToNext}
          disabled={currentIndex === filteredData.length - 1}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>

      {/* Timeline Items */}
      {filteredData.map((item) => (
        <div
          key={item.id}
          id={`item-${item.id}`}
          className="relative h-screen w-full snap-start bg-cover bg-center pt-[100px] pb-[60px]"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-4xl font-bold mb-2">{item.year}</h2>
            <h3 className="text-2xl mb-4">{item.title}</h3>
            <p className="max-w-xl">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Viewer;
