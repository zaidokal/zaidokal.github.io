"use client";

import { useState, useEffect } from "react";
import DesktopHomePage from "@/components/Desktop/Pages/DesktopHomePage";
import MobileHomePage from "@/components/Mobile/Pages/MobileHomePage";

const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  return Promise.all(
    imageUrls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }),
    ),
  );
};

export default function ClientHomePage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userAgent =
      typeof navigator === "undefined" ? "" : navigator.userAgent;
    const isMobileDevice =
      /Mobile|Android|BlackBerry|iPhone|iPad|iPad Pro|iPad Air|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        userAgent,
      );
    setIsMobile(isMobileDevice);

    const criticalImages = ["/Pictures/ProfilePic.webp"];

    preloadImages(criticalImages).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (isMobile === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return isMobile ? <MobileHomePage /> : <DesktopHomePage />;
}
