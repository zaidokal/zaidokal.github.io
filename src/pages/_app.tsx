import { useEffect, useState } from "react";
import DesktopHeader from "@/components/Desktop/DesktopHeader";
import DesktopFooter from "@/components/Desktop/DesktopFooter";
import MobileHeader from "@/components/Mobile/MobileHeader";
import MobileFooter from "@/components/Mobile/MobileFooter";
import "../app/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

  useEffect(() => {
    const userAgent =
      typeof navigator === "undefined" ? "" : navigator.userAgent;
    const isMobile =
      /Mobile|Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        userAgent
      );

    setIsMobileDevice(isMobile);
  }, []);

  const Header = isMobileDevice ? MobileHeader : DesktopHeader;
  const Footer = isMobileDevice ? MobileFooter : DesktopFooter;

  const backgroundImageUrl = isMobileDevice
    ? "/Pictures/MobileBackgroundPic.jpg"
    : "/Pictures/BackgroundPic.jpg";

  return (
    <div
      className="relative min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      <main className={`flex-grow relative z-10${isMobileDevice ? " " : " "}`}>
        <Component {...pageProps} />
      </main>

      <div className="absolute bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}
