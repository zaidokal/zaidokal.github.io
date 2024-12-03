"use client";

import Header from "@/components/Desktop/DesktopHeader";
import Footer from "@/components/Desktop/DesktopFooter";
import AboutText from "@/components/Desktop/AboutText";
import Image from "next/image";

export default function DesktopHomePage() {
  return (
    <main className="flex h-screen w-full flex-col bg-cover bg-center bg-no-repeat">
      <Header />

      <div className="flex flex-1 items-center justify-center gap-20 overflow-auto">
        <div className="">
          <Image
            src="/Pictures/ProfilePic.webp"
            alt="Profile Picture of Zaid"
            width={700}
            height={700}
            className="neon-shadow-purple rounded-[80px]"
          />
        </div>
        <AboutText />
      </div>

      <Footer />
    </main>
  );
}
