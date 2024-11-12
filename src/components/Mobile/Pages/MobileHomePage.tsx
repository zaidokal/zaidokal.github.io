"use client";

import Header from "@/components/Mobile/MobileComponents/Header";
import Footer from "@/components/Mobile/MobileComponents/Footer";
import AboutText from "@/components/Mobile/MobileComponents/AboutText";
import Image from "next/image";

export default function MobileHomePage() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-cover bg-no-repeat bg-center">
      <Header />

      <div className="flex justify-center mt-4">
        <Image
          src="/Pictures/ProfilePic.jpeg"
          alt="Profile Picture of Zaid"
          width={330}
          height={330}
          className="rounded-[80px] w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px]"
        />
      </div>

      <div className="flex flex-col items-center mt-6 w-[90%] max-w-[90%] mx-auto flex-grow">
        <AboutText />
      </div>

      <Footer />
    </main>
  );
}
