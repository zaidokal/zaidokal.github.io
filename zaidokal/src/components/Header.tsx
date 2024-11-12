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
    <header className="flex justify-between items-center mx-auto my-[24px] w-[1200px] max-w-[1200px] p-[20px] text-[40px] bg-white bg-opacity-20 rounded-[45px] font-[var(--font-KodeMono)] min-h-[80px]">
      <a href="/" className="ml-[24px]">
        <div className="hover:text-gray-400">Zaid Okal</div>
      </a>
      <div className="space-x-[16px] flex items-center">
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

      <div className="space-x-[16px] mr-[24px] flex items-center">
        <a
          href="mailto:zaidokal@gmail.com"
          className="hover:text-yellow-400 w-[35px]"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/zaidokal/"
          className="hover:text-blue-400 w-[35px]"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/zaidokal"
          className="hover:text-gray-600 w-[35px]"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </header>
  );
}
