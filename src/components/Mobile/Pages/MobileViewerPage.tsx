import React, { Suspense } from "react";
import Viewer from "@/components/Mobile/Viewer";

const MobileViewerPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Viewer />
    </Suspense>
  );
};

export default MobileViewerPage;
