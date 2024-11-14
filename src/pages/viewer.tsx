import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DesktopViewerPage = dynamic(
  () => import("@/components/Desktop/Pages/DesktopViewerPage")
);
const MobileViewerPage = dynamic(
  () => import("@/components/Mobile/Pages/MobileViewerPage")
);

const ViewerPage: React.FC = () => {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    setIsMobileDevice(isMobile);
  }, []);

  return isMobileDevice ? <MobileViewerPage /> : <DesktopViewerPage />;
};

export default ViewerPage;
