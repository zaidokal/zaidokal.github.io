import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DesktopTimelinePage = dynamic(
  () => import("@/components/Desktop/Pages/DesktopTimelinePage"),
);
const MobileTimelinePage = dynamic(
  () => import("@/components/Mobile/Pages/MobileTimelinePage"),
);

const TimelinePage: React.FC = () => {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    setIsMobileDevice(isMobile);
  }, []);

  return isMobileDevice ? <MobileTimelinePage /> : <DesktopTimelinePage />;
};

export default TimelinePage;
