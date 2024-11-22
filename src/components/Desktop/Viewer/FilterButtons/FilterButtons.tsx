import React from "react";
import FilterButton from "./FilterButton";
import { filterByCategory } from "@/app/scripts/filterUtils";
import {
  faGraduationCap,
  faBriefcase,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

interface FilterButtonsProps {
  data: any[];
  setFilteredData: (filteredData: any[]) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  data,
  setFilteredData,
}) => {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    [],
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category];
      setFilteredData(filterByCategory(data, newCategories));
      return newCategories;
    });
  };

  return (
    <div className="mb-4 flex space-x-2">
      <FilterButton
        category="education"
        selectedCategories={selectedCategories}
        onClick={handleCategoryClick}
        icon={faGraduationCap}
      />
      <FilterButton
        category="experience"
        selectedCategories={selectedCategories}
        onClick={handleCategoryClick}
        icon={faBriefcase}
      />
      <FilterButton
        category="project"
        selectedCategories={selectedCategories}
        onClick={handleCategoryClick}
        icon={faLightbulb}
      />
    </div>
  );
};

export default FilterButtons;
