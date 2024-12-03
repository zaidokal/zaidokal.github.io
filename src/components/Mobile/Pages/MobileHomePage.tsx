"use client";

import Header from "@/components/Mobile/MobileHeader";
import Footer from "@/components/Mobile/MobileFooter";
import AboutText from "@/components/Mobile/AboutText";
import Image from "next/image";

export default function MobileHomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-cover bg-center bg-no-repeat">
      <Header />

      <div className="mt-4 flex justify-center">
        <Image
          src="/Pictures/ProfilePic.webp"
          alt="Profile Picture of Zaid"
          width={330}
          height={330}
          className="neon-shadow-purple w-[300px] rounded-[80px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px]"
        />
      </div>

      <div className="mx-auto mt-6 flex w-[90%] max-w-[90%] flex-grow flex-col items-center">
        <AboutText />
      </div>

      <Footer />
    </main>
  );
}
