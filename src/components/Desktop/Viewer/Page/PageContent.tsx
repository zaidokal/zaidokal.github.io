import React from "react";
import ScreenshotPreview from "./ScreenshotPreview";
import { TimelineItem } from "@/app/scripts/types";

interface PageContentProps {
  item: TimelineItem;
  setCurrentScreenshots: (screenshots: string[]) => void;
  setShowModal: (show: boolean) => void;
  setCurrentImageIndex: (index: number) => void;
}

const PageContent: React.FC<PageContentProps> = ({
  item,
  setCurrentScreenshots,
  setShowModal,
  setCurrentImageIndex,
}) => {
  const handleOpenGallery = () => {
    setCurrentScreenshots(item.screenshots);
    setShowModal(true);
    setCurrentImageIndex(0);
  };

  return (
    <div
      id={`item-${item.id}`}
      className="relative h-screen w-full snap-start bg-cover bg-center pb-[60px] pt-[100px]"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
        <h2 className="mb-2 text-4xl font-bold">{item.year}</h2>
        <h3 className="mb-4 text-2xl">{item.title}</h3>
        <p className="max-w-xl">{item.description}</p>

        <ScreenshotPreview
          screenshots={item.screenshots}
          openGallery={handleOpenGallery}
        />
      </div>
    </div>
  );
};

export default PageContent;
