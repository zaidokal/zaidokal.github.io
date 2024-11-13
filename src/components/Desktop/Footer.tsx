// components/Footer.tsx
import React from "react";

interface FooterProps {
  isMobile: boolean;
}

const DesktopFooter: React.FC = React.memo(() => {
  // Footer content
  return (
    <footer className="w-full flex justify-center items-center py-4 text-white">
      Copyright © 2024 Zaid Okal
    </footer>
  );
});

export default DesktopFooter;
