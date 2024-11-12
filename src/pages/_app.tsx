import { useEffect, useState } from "react";
import DesktopLayout from "@/layouts/DesktopLayout";
import MobileLayout from "@/layouts/MobileLayout";
import "../app/globals.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
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

  return isMobile ? (
    <MobileLayout>
      <Component {...pageProps} />
    </MobileLayout>
  ) : (
    <DesktopLayout>
      <Component {...pageProps} />
    </DesktopLayout>
  );
}
