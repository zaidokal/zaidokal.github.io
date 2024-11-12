"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutText from "@/components/AboutText";

export default function HomePage() {
  return (
    <main
      className="flex flex-col h-[100vh] w-[100vw] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/Pictures/BackPic.jpg)" }}
    >
      {/* Header */}
      <Header />

      <div className="flex flex-1 items-center justify-center overflow-auto gap-[80px] h-[700px]">
        <div>
          <Image
            src="/Pictures/ProfilePic.jpeg"
            alt="A description of the image"
            width={400}
            height={400}
            priority
            className="rounded-[80px] object-cover"
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
