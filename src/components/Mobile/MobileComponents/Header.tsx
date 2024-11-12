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

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="flex justify-between items-center mx-auto my-3 w-[90%] max-w-6xl p-3 text-[24px] bg-white bg-opacity-20 rounded-[55px] font-[KodeMono]">
      <Link href="/" className="text-left ml-6">
        <div className="hover:text-gray-400">Zaid Okal</div>
      </Link>

      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-xl focus:outline-none mr-3"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-5 top-16 bg-black bg-opacity-90 rounded-[20px] shadow-lg p-5 flex flex-col space-y-4 text-[14px] w-[170px]">
          <div className="py-2 pl-2 pr-4 rounded-lg hover:bg-gray-500 transition duration-200">
            <Link
              href="/timeline"
              className="block text-white flex items-center"
            >
              <FontAwesomeIcon icon={faTimeline} className="mr-2" /> Timeline
            </Link>
          </div>
          <div className="py-2 pl-2 pr-4 rounded-lg hover:bg-gray-500 transition duration-200">
            <Link
              href="/education"
              className="block text-white flex items-center"
            >
              <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />{" "}
              Education
            </Link>
          </div>
          <div className="py-2 pl-2 pr-4 rounded-lg hover:bg-gray-500 transition duration-200">
            <Link
              href="./PDFs/Zaid Resume.pdf"
              className="block text-white flex items-center"
            >
              <FontAwesomeIcon icon={faFileInvoice} className="mr-2" /> Resume
            </Link>
          </div>
          <div className="py-2 pl-2 pr-4 rounded-lg hover:bg-gray-500 transition duration-200">
            <a
              href="mailto:zaidokal@gmail.com"
              className="block text-white flex items-center"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email
            </a>
          </div>
          <div className="py-2 pl-2 pr-4 rounded-lg hover:bg-gray-500 transition duration-200">
            <a
              href="https://www.linkedin.com/in/zaidokal/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white flex items-center"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn
            </a>
          </div>
          <div className="py-2 pl-2 pr-4 rounded-lg hover:bg-gray-500 transition duration-200">
            <a
              href="https://github.com/zaidokal"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white flex items-center"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
