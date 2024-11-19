"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGraduationCap,
  faBriefcase,
  faLightbulb,
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

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleItemClick = (index: number) => {
    scrollToItem(index);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={timelineContainerRef}
      className="relative h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth pb-[60px] pt-[100px] scrollbar-hide"
    >
      <button
        ref={buttonRef}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        style={{ left: "5%", top: "48%", transform: "translateY(-50%)" }}
        className="w-30 fixed z-40 flex h-[70vh] flex-col items-center"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          style={{
            left: "3%",
            top: "33%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          className="fixed z-40 flex h-[35vh] w-[150px] flex-col items-center overflow-y-scroll rounded-[15px] p-3"
        >
          {filteredData.map((titleItem, index) => (
            <div
              key={titleItem.id}
              ref={(el) => {
                titleItemRefs.current[index] = el;
              }}
              className={`w-[100%] cursor-pointer rounded-[15px] p-2 text-center text-[12px] text-white hover:bg-gray-700 ${
                currentIndex === index ? "bg-blue-500" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {titleItem.title}
            </div>
          ))}
        </div>
      )}

      <div
        className="w-30 fixed z-40 flex h-[70vh] flex-col items-center"
        style={{ right: "2%", top: "47%", transform: "translateY(-50%)" }}
      >
        <div className="mb-4 flex space-x-2 text-[10px]">
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
