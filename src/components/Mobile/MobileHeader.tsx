"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faTimeline,
  faGraduationCap,
  faFileInvoice,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

import React from "react";

const MobileHeader: React.FC = React.memo(() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="mx-auto my-3 flex w-[90%] max-w-6xl items-center justify-between rounded-[55px] bg-white bg-opacity-20 p-3 font-[KodeMono] text-[24px]">
      <Link href="/" className="ml-6 text-left">
        <div className="hover:text-gray-400">Zaid Okal</div>
      </Link>

      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="mr-3 text-xl focus:outline-none"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-5 top-16 flex w-[170px] flex-col space-y-4 rounded-[20px] bg-black bg-opacity-90 p-5 text-[14px] shadow-lg">
          <div className="rounded-lg py-2 pl-2 pr-4 transition duration-200 hover:bg-gray-500">
            <Link
              href="/timeline"
              onClick={handleOptionClick}
              className="flex items-center text-white"
            >
              <FontAwesomeIcon icon={faTimeline} className="mr-2" /> Timeline
            </Link>
          </div>
          <div className="rounded-lg py-2 pl-2 pr-4 transition duration-200 hover:bg-gray-500">
            <Link
              href="/education"
              onClick={handleOptionClick}
              className="flex items-center text-white"
            >
              <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />{" "}
              Education
            </Link>
          </div>
          <div className="rounded-lg py-2 pl-2 pr-4 transition duration-200 hover:bg-gray-500">
            <Link
              href="/PDFs/Zaid Resume.pdf"
              download
              onClick={handleOptionClick}
              className="flex items-center text-white"
            >
              <FontAwesomeIcon icon={faFileInvoice} className="mr-2" /> Resume
            </Link>
          </div>
          <div className="rounded-lg py-2 pl-2 pr-4 transition duration-200 hover:bg-gray-500">
            <a
              href="mailto:zaidokal@gmail.com"
              onClick={handleOptionClick}
              className="flex items-center text-white"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email
            </a>
          </div>
          <div className="rounded-lg py-2 pl-2 pr-4 transition duration-200 hover:bg-gray-500">
            <a
              href="https://www.linkedin.com/in/zaidokal/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOptionClick}
              className="flex items-center text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn
            </a>
          </div>
          <div className="rounded-lg py-2 pl-2 pr-4 transition duration-200 hover:bg-gray-500">
            <a
              href="https://github.com/zaidokal"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOptionClick}
              className="flex items-center text-white"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
});

MobileHeader.displayName = "MobileHeader";

export default MobileHeader;
