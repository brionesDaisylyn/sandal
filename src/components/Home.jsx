import React, { useState } from "react";

const Home = () => {
  // State to manage the current background image
  const [currentImage, setCurrentImage] = useState(0);

  // Array of background images
  const images = ["background.jpg", "background2.jpg", "background3.jpg"];

  // Function to handle next and previous buttons
  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-between relative"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Prev
      </button>

      {/* Message on the Right */}
      <div className="text-right text-white pr-10 max-w-lg">
        <h2 className="text-5xl font-bold">Welcome to Heel Yeah!</h2>
        <p className="mt-4 text-xl">
          Find Your Perfect Pair of Statement Heels.
        </p>
        <button className="mt-6 px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700">
          Shop Now
        </button>
      </div>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Next
      </button>
    </section>
  );
};

export default Home;
