import React from "react";

const MobileFooter: React.FC = React.memo(() => {
  return (
    <footer className="w-full flex justify-center items-center py-4 text-white">
      Copyright © 2024 Zaid Okal
    </footer>
  );
});

MobileFooter.displayName = "MobileFooter";

export default MobileFooter;
