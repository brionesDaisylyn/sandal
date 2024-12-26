import React, { useState } from "react";

const Features = () => {
  // Array of image filenames
  const images = [
    "pic1.jpeg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg",
    "pic6.jpg",
    "pic7.jpg",
  ];

  // State to track the current starting index
  const [startIndex, setStartIndex] = useState(0);

  // Function to handle Next button
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      (prevIndex + 6) % images.length
    );
  };

  // Function to handle Prev button
  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - 6 + images.length) % images.length
    );
  };

  // Slice the images array to show 6 images at a time
  const visibleImages = images.slice(startIndex, startIndex + 6);

  return (
    <section
      id="features"
      className="h-screen w-full bg-maroon text-white relative"
      style={{ backgroundColor: "#800000" }}
    >
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-center mb-4">Features</h2>
        <p className="text-gray-200 text-center mb-10">
          Why choose our sandals?
        </p>

        {/* Image Carousel */}
        <div className="relative flex items-center justify-center w-full">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-5 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Prev
          </button>

          {/* Image Row */}
          <div className="grid grid-cols-6 gap-4">
            {visibleImages.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Feature ${index + 1}`}
                  className="h-70 w-70 object-cover rounded-lg border border-gray-300"
                />
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-5 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
