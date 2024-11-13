// app/desktop/viewer/page.tsx
import React, { Suspense } from "react";
import Viewer from "@/components/Desktop/Viewer";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Viewer />
    </Suspense>
  );
};

export default Page;
