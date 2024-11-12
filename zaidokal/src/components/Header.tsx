"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import RedirectButton from "@/components/RedirectButton";
import {
  faTimeline,
  faGraduationCap,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="flex justify-between items-center mx-auto my-6 w-full max-w-6xl p-5 text-[40px] bg-white bg-opacity-20 rounded-[45px] font-[KodeMono]">
      <a href="/" className="ml-6">
        <div className="hover:text-gray-400">Zaid Okal</div>
      </a>
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
          href="/documents/Zaid Resume.pdf"
          icon={<FontAwesomeIcon icon={faFileInvoice} className="mr-2" />}
          text="Resume"
          download
        />
      </div>

      <div className="space-x-4 mr-6">
        <a href="mailto:zaidokal@gmail.com" className="hover:text-yellow-400">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/zaidokal/"
          className="hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/zaidokal" className="hover:text-gray-600">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </header>
  );
}
