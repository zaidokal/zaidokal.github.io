import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface FilterButtonProps {
  category: string;
  selectedCategories: string[];
  onClick: (category: string) => void;
  icon: IconDefinition;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  category,
  selectedCategories,
  onClick,
  icon,
}) => {
  const isSelected = selectedCategories.includes(category);

  return (
    <button
      onClick={() => onClick(category)}
      className={`rounded-full p-3 ${
        isSelected ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
      }`}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </button>
  );
};

export default FilterButton;
