"use client";

import { useState, useEffect } from "react";
import DesktopHomePage from "@/app/desktop/homepage/page";
import MobileHomePage from "@/app/mobile/homepage/page";

export default function ClientHomePage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const userAgent =
      typeof navigator === "undefined" ? "" : navigator.userAgent;

    const isMobileDevice =
      /Mobile|Android|BlackBerry|iPhone|iPad|iPad Pro|iPad Air|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        userAgent
      );

    setIsMobile(isMobileDevice);
  }, []);

  if (isMobile === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return isMobile ? <MobileHomePage /> : <DesktopHomePage />;
}
