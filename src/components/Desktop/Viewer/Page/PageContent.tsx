import React from "react";
import ScreenshotPreview from "./ScreenshotPreview";
import { TimelineItem } from "@/app/scripts/TimelineItem";

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
      className={`relative h-screen w-full snap-start bg-cover bg-center pb-[60px] pt-[100px] ${
        item.image ? "" : ""
      }`}
      style={item.image ? { backgroundImage: `url(${item.image})` } : {}}
    >
      <div
        className="absolute inset-0 bg-black/60"
        style={{ opacity: item.image ? 1 : 0 }}
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
        <h2 className="mb-4 text-4xl font-extrabold">{item.year}</h2>
        <h3 className="mb-6 text-2xl font-semibold">{item.title}</h3>
        <p className="mb-8 max-w-xl text-lg leading-relaxed">
          {item.description}
        </p>

        {item.accomplishments && (
          <p className="mb-4 max-w-xl text-lg font-medium">
            <strong>Accomplishments: </strong>
            {item.accomplishments}
          </p>
        )}

        <div className="mb-8 max-w-xl text-left">
          {item.technologies.programmingLanguages.length > 0 && (
            <div className="mb-2">
              <strong>Programming Languages: </strong>
              {item.technologies.programmingLanguages.join(", ")}
            </div>
          )}
          {item.technologies.frameworks.length > 0 && (
            <div className="mb-2">
              <strong>Frameworks: </strong>
              {item.technologies.frameworks.join(", ")}
            </div>
          )}
          {item.technologies.databases.length > 0 && (
            <div className="mb-2">
              <strong>Databases: </strong>
              {item.technologies.databases.join(", ")}
            </div>
          )}
          {item.technologies.tools.length > 0 && (
            <div className="mb-2">
              <strong>Tools: </strong>
              {item.technologies.tools.join(", ")}
            </div>
          )}
        </div>

        <ScreenshotPreview
          screenshots={item.screenshots}
          openGallery={handleOpenGallery}
          githubLink={item.github}
        />
      </div>
    </div>
  );
};

export default PageContent;
