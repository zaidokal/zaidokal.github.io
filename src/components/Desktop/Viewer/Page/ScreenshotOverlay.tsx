interface ScreenshotOverlayProps {
  currentScreenshots: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  setShowModal: (show: boolean) => void;
}

const ScreenshotOverlay: React.FC<ScreenshotOverlayProps> = ({
  currentScreenshots,
  currentImageIndex,
  setCurrentImageIndex,
  setShowModal,
}) => {
  const handleCloseGallery = () => {
    setShowModal(false);
  };

  const handleNextImage = () => {
    if (currentImageIndex < currentScreenshots.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleCloseGallery();
      }}
    >
      <div className="relative flex flex-col items-center p-6">
        <img
          src={currentScreenshots[currentImageIndex]}
          alt={`Screenshot ${currentImageIndex + 1}`}
          className="h-[70vh] w-full max-w-4xl rounded-lg object-contain shadow-lg"
        />

        <button
          className="absolute right-4 top-16 rounded-full bg-black p-2 text-white"
          onClick={handleCloseGallery}
        >
          Close
        </button>

        <div className="mt-4 flex space-x-4">
          <button
            disabled={currentImageIndex === 0}
            onClick={handlePrevImage}
            className="text-white disabled:opacity-50"
          >
            Prev
          </button>
          <button
            disabled={currentImageIndex === currentScreenshots.length - 1}
            onClick={handleNextImage}
            className="text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotOverlay;
