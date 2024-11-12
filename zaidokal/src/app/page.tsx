"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutText from "@/components/AboutText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePage() {
  return (
    <main
      className="flex flex-col h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/Pictures/BackPic.jpg)" }}
    >
      {/* Header */}
      <Header />

      <div className="flex flex-1 items-center justify-center overflow-auto gap-20">
        <div className="">
          <Image
            src="/Pictures/ProfilePic.jpeg"
            alt="A description of the image"
            width={700}
            height={700}
            className="rounded-[80px]"
          />
        </div>
        {/* About Text */}
        <AboutText />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
