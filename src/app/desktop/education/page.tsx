"use client";

import Header from "@/components/Desktop/Header";
import Footer from "@/components/Desktop/Footer";

export default function DesktopEducationPage() {
  return (
    <main
      className="flex flex-col h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/Pictures/BackgroundPic.jpg)" }}
    >
      <Header />

      <div className="flex flex-1 items-center justify-center overflow-auto gap-20 text-[200px]">
        Coming Soon
      </div>

      <Footer />
    </main>
  );
}
