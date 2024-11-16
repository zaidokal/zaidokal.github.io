"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import RedirectButton from "./RedirectButton";
import {
  faTimeline,
  faGraduationCap,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import React from "react";

const DesktopHeader: React.FC = React.memo(() => {
  return (
    <header className="mx-auto my-6 flex w-full max-w-6xl items-center justify-between rounded-[45px] bg-white bg-opacity-20 p-5 font-[KodeMono] text-[40px]">
      <Link href="/" className="ml-6">
        <div className="hover:text-gray-400">Zaid Okal</div>
      </Link>
      <div className="space-x-4">
        <RedirectButton
          href="/timeline"
          icon={<FontAwesomeIcon icon={faTimeline} className="mr-2" />}
          text="Timeline"
        />

        <RedirectButton
          href="/education"
          icon={<FontAwesomeIcon icon={faGraduationCap} className="mr-2" />}
          text="Education"
        />

        <RedirectButton
          href="/PDFs/Zaid Resume.pdf"
          icon={<FontAwesomeIcon icon={faFileInvoice} className="mr-2" />}
          text="Resume"
          download
        />
      </div>

      <div className="mr-6 space-x-4">
        <Link
          href="mailto:zaidokal@gmail.com"
          className="hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/zaidokal/"
          className="hover:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link
          href="https://github.com/zaidokal"
          className="hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
    </header>
  );
});

DesktopHeader.displayName = "DesktopHeader";

export default DesktopHeader;
