"use client";

import Header from "@/components/Desktop/Header";
import Footer from "@/components/Desktop/Footer";
import AboutText from "@/components/Desktop/AboutText";
import Image from "next/image";

export default function DesktopHomePage() {
  return (
    <main
      className="flex flex-col h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/Pictures/BackgroundPic.jpg)" }}
    >
      <Header />

      <div className="flex flex-1 items-center justify-center overflow-auto gap-20">
        <div className="">
          <Image
            src="/Pictures/ProfilePic.jpeg"
            alt="Profile Picture of Zaid"
            width={700}
            height={700}
            className="rounded-[80px]"
          />
        </div>
        <AboutText />
      </div>

      <Footer />
    </main>
  );
}
