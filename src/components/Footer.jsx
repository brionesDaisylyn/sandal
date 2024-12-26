import React from "react";

const Footer = () => (
  <footer
    className="bg-gray-900 text-gray-300 py-8"
    style={{ backgroundColor: "#800000" }} // Maroon background
  >
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <p className="text-sm">
            We are dedicated to creating high-quality sandals that combine
            comfort, durability, and style. Explore our collection for all your
            footwear needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-gray-100">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-gray-100">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-100">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-100">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">&copy; 2024 Heels Yeah!. All Rights Reserved.</p>
        <p className="text-xs">
          Designed with ❤️ by [Daisylyn].
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
