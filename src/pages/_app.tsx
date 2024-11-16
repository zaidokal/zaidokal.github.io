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
        userAgent,
      );

    setIsMobileDevice(isMobile);
  }, []);

  const Header = isMobileDevice ? MobileHeader : DesktopHeader;
  const Footer = isMobileDevice ? MobileFooter : DesktopFooter;

  return (
    <div className="relative flex min-h-screen flex-col bg-cover bg-center bg-no-repeat">
      <div className="absolute left-0 top-0 z-50 w-full">
        <Header />
      </div>

      <main className={`relative flex-grow z-10${isMobileDevice ? " " : " "}`}>
        <Component {...pageProps} />
      </main>

      <div className="absolute bottom-0 left-0 z-50 w-full">
        <Footer />
      </div>
    </div>
  );
}
