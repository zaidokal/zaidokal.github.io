import React from "react";

const DesktopFooter: React.FC = React.memo(() => {
  return (
    <footer className="font-KodeMono flex w-full items-center justify-center py-4 text-white">
      Copyright © 2024 Zaid Okal
    </footer>
  );
});

DesktopFooter.displayName = "DesktopFooter";

export default DesktopFooter;
