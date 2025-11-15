import { useState } from "react";

/**
 * Custom hook for managing image carousel state
 * @param {number} totalImages - Total number of images in the carousel
 * @returns {Object} Carousel state and handlers
 */
export function useImageCarousel(totalImages = 0) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    handlePrev,
    handleNext,
    goToIndex,
    setCurrentIndex,
  };
}
