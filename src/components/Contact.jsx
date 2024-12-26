import React from "react";

const Contact = () => (
  <section
    id="contact"
    className="py-16 text-white"
    style={{ backgroundColor: "#800000" }} // Maroon background
  >
    <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Form Section */}
      <div>
        <h2 className="text-3xl font-bold mb-4">CONTACT US!</h2>
        <p className="text-gray-200 mb-8">
          We can't solve your problem if you don't tell us about it!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded bg-white text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded bg-white text-black"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded bg-white text-black"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded font-semibold"
          >
            SEND
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="flex flex-col justify-center space-y-4">
        <p>
          <strong>📍 Greenville, SCC</strong>
        </p>
        <p>
          <strong>📍Near centermall , SCC</strong>
        </p>
        <p>
          <strong>📞 0912 345 6789</strong>
        </p>
        <p>
          <strong>✉️ heelsyeah@gmail.com</strong>
        </p>
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
