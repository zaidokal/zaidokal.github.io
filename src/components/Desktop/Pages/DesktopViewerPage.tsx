import React, { Suspense } from "react";
import Viewer from "@/components/Desktop/Viewer";

const DesktopViewerPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Viewer />
    </Suspense>
  );
};

export default DesktopViewerPage;
