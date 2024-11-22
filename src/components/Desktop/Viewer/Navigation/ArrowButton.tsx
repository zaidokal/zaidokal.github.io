import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ArrowButtonProps {
  isDisabled: boolean;
  onClick: () => void;
  icon: IconDefinition;
  className?: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  isDisabled,
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      className={`text-2xl text-white ${isDisabled ? "cursor-not-allowed opacity-50" : "hover:text-blue-500"} ${
        className || ""
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default ArrowButton;
