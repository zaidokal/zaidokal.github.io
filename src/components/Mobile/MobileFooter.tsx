import React from "react";

const MobileFooter: React.FC = React.memo(() => {
  return (
    <footer className="relative z-50 flex w-full items-center justify-center py-4 text-white">
      Copyright © 2024 Zaid Okal
    </footer>
  );
});

MobileFooter.displayName = "MobileFooter";

export default MobileFooter;
