'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

/**
 * Carousel component for Next.js and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices.
 *
 * @param {Object[]} images - Array of images with src, alt, and id attributes
 * @returns React component
 */
export default function Carousels({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

   // Function to go to the next slide
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  // Function to go to the previous slide
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  // Auto-slide effect using setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 6000); // Adjust the time interval as needed (3000 ms = 3 seconds)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 z-20 m-auto text-5xl text-gray-400 cursor-pointer inset-y-1/2"
        aria-label="Previous slide"
      />
      <Swipe
        onSwipeLeft={handleNextSlide}
        onSwipeRight={handlePrevSlide}
        className="w-full h-[50vh] flex overflow-hidden relative m-auto"
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
          <div className="relative w-screen h-[580px]">
            {index === currentSlide && (
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
              
            )}
            </div>
          </div>
        ))}
      </Swipe>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 z-20 m-auto text-5xl text-gray-400 cursor-pointer inset-y-1/2"
        aria-label="Next slide"
      />
      <div className="flex justify-center gap-2 p-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-4 w-4 rounded-full cursor-pointer ${
              index === currentSlide ? 'bg-gray-700' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
