"use client";

import { useState, useEffect } from "react";

export default function AboutText() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const texts = [
      "Zaid Okal",
      "a Software Engineer",
      "a Software Developer",
      "a Software Tester",
    ];
    let currentIndex = 0;
    let currentCharIndex = 0;
    let deleting = false;

    const type = () => {
      if (deleting) {
        if (currentCharIndex > 0) {
          currentCharIndex--;
          setDisplayText(texts[currentIndex].slice(0, currentCharIndex));
          setTimeout(type, 50);
        } else {
          deleting = false;
          currentIndex = (currentIndex + 1) % texts.length;
          setTimeout(type, 500);
        }
      } else {
        if (currentCharIndex < texts[currentIndex].length) {
          currentCharIndex++;
          setDisplayText(texts[currentIndex].slice(0, currentCharIndex));
          setTimeout(type, 100);
        } else {
          deleting = true;
          setTimeout(type, 1500);
        }
      }
    };

    type();
  }, []);

  return (
    <div className="w-[800px] bg-black bg-opacity-40 md:p-4 text-white rounded-[40px]">
      <h1 className="text-xl md:text-5xl mb-1 md:mb-2">
        Hey, I'm <span className="text-red-500">{displayText}</span>
      </h1>
      <ul className="list-none md:space-y-3 text-[20px]">
        <li>
          I am currently in my third year studying software engineering at
          Western University.
        </li>
        <li>
          In my free time, I enjoy staying active by playing soccer and other
          sports. I also have a passion for gaming and can often be found trying
          out the latest releases or revisiting old favorites. Outside of
          academics and hobbies, I am always looking for opportunities to learn
          and grow both personally and professionally.
        </li>
        <li>
          I am excited to see where my studies in software engineering will take
          me in the future and am dedicated to continually improving my skills
          and knowledge in the field.
        </li>
      </ul>
    </div>
  );
}
