import { useState } from "react";

/**
 * Custom hook for managing image carousel state
 * @param {Array} images - Array of image URLs
 * @returns {Object} Carousel state and handlers
 */
export function useImageCarousel(images = []) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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
