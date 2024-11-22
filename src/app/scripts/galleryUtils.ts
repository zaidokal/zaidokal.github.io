export const openGallery = (
  screenshots: string[],
  setCurrentScreenshots: (screenshots: string[]) => void,
  setShowModal: (show: boolean) => void,
  setCurrentImageIndex: (index: number) => void,
) => {
  setCurrentScreenshots(screenshots);
  setShowModal(true);
  setCurrentImageIndex(0);
};

export const closeGallery = (setShowModal: (show: boolean) => void) => {
  setShowModal(false);
};

export const nextImage = (
  currentImageIndex: number,
  currentScreenshots: string[],
  setCurrentImageIndex: (index: number) => void,
) => {
  if (currentImageIndex < currentScreenshots.length - 1) {
    setCurrentImageIndex(currentImageIndex + 1);
  }
};

export const prevImage = (
  currentImageIndex: number,
  setCurrentImageIndex: (index: number) => void,
) => {
  if (currentImageIndex > 0) {
    setCurrentImageIndex(currentImageIndex - 1);
  }
};
