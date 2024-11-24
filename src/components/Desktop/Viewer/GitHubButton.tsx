import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface GitHubButtonProps {
  link: string;
}

const GitHubButton: React.FC<GitHubButtonProps> = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-full bg-gray-800 px-8 py-3 text-lg font-medium text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-600 hover:shadow-lg"
    >
      <FontAwesomeIcon icon={faGithub} className="text-xl" />
      <span>View on GitHub</span>
    </a>
  );
};

export default GitHubButton;
