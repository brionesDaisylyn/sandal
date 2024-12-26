import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-maroon flex items-center justify-center px-8"
      style={{ backgroundColor: "#800000" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="about.jpg"
            alt="About Sandals"
            className="w-3/4 md:w-40% h-auto rounded shadow-lg"
          />
        </div>
        
        {/* Text Section */}
        <div className="md:w-1/2 w-full text-white text-center md:text-left md:pl-8 mt-8 md:mt-0">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">The Sandal Store</span>, we are passionate about crafting high-quality sandals that seamlessly blend comfort, durability, and style. 
            Whether you’re heading to a casual outing or a formal event, our sandals are designed to suit every occasion and personality.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Experience a unique combination of modern design, premium materials, and ergonomic craftsmanship. Let us help you walk through life with confidence and elegance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
