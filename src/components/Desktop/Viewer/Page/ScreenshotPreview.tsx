import React from "react";

interface ScreenshotPreviewProps {
  screenshots: string[];
  openGallery: (screenshots: string[]) => void;
}

const ScreenshotPreview: React.FC<ScreenshotPreviewProps> = ({
  screenshots,
  openGallery,
}) => {
  return screenshots.length > 0 ? (
    <div className="absolute left-4 top-1/2 flex w-[400px] -translate-y-1/2 flex-col items-center gap-4 rounded-lg">
      <h3 className="mb-2 text-lg font-semibold text-white">Screenshots</h3>
      <div
        className="grid cursor-pointer grid-cols-2 gap-2"
        onClick={() => openGallery(screenshots)}
      >
        {screenshots.slice(0, 4).map((screenshot, index) => (
          <div
            key={index}
            className="relative h-[150px] w-[150px] overflow-hidden rounded-lg bg-gray-800 shadow-md transition-transform duration-300 hover:scale-105"
          >
            <img
              src={screenshot}
              alt={`Preview ${index + 1}`}
              className="h-full w-full object-cover"
            />
            {index === 3 && screenshots.length > 4 && (
              <div className="absolute bottom-0 right-0 flex h-full w-full items-center justify-center bg-black/60 text-white">
                +{screenshots.length - 4} more
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="absolute left-4 top-1/2 flex w-[400px] -translate-y-1/2 items-center justify-center">
      <div className="text-center text-lg italic text-gray-400">
        No Screenshots Yet
      </div>
    </div>
  );
};

export default ScreenshotPreview;
