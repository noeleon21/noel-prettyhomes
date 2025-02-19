"use client";
import React from "react";

// Define the type for an individual image
interface Image {
  imgelink: string;
}

// Define the props for the component
interface FeaturedImageGalleryProps {
  images: Image[];
}

export default function FeaturedImageGallery({ images }: FeaturedImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative grid gap-4 p-8">
      {/* Active Image with Arrows */}
      <div className="relative">
        <img
          className="w-full h-full max-w-screen-md mx-auto rounded-lg object-contain object-center"
          src={images[currentIndex].imgelink}
          alt={`Gallery Image ${currentIndex + 1}`}
        />
        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-2 -translate-y-1/2 transform bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
          onClick={previousImage}
        >
          ❮
        </button>
        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-2 -translate-y-1/2 transform bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
          onClick={nextImage}
        >
          ❯
        </button>
      </div>
      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setCurrentIndex(index)}
              src={imgelink}
              className={`h-20 w-full cursor-pointer rounded-lg object-cover object-center transition-opacity duration-200 ${
                currentIndex === index ? "opacity-100" : "opacity-60"
              }`}
              alt={`Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
