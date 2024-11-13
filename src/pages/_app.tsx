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
      className="flex flex-col min-h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
