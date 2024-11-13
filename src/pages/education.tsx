import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DesktopEducationPage = dynamic(
  () => import("@/components/Desktop/DesktopEducationPage")
);
const MobileEducationPage = dynamic(
  () => import("@/components/Mobile/MobileEducationPage")
);

const EducationPage: React.FC = () => {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    setIsMobileDevice(isMobile);
  }, []);

  return isMobileDevice ? <MobileEducationPage /> : <DesktopEducationPage />;
};

export default EducationPage;
