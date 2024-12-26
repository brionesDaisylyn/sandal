import React, { useState, useEffect } from "react";

const Review = () => {
  const [formData, setFormData] = useState({ name: "", email: "", review: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [reviews, setReviews] = useState([]);

  // Fetch reviews on component mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/reviews");
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        } else {
          console.log("Failed to fetch reviews");
        }
      } catch (error) {
        console.log("Error fetching reviews", error);
      }
    };

    fetchReviews();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Thank you for your review!");
        setFormData({ name: "", email: "", review: "" });
        const newReview = await response.json();
        setReviews((prevReviews) => [...prevReviews, newReview]); // Update review list
      } else {
        setResponseMessage("Failed to submit the review. Please try again.");
      }
    } catch (error) {
      console.log("Error occurred:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="review" className="bg-red-700 py-16 px-8 text-center min-h-screen">
      <h2 className="text-3xl font-bold text-white">Leave a Review</h2>
      
      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border rounded mb-4"
          required
        />
        <textarea
          name="review"
          value={formData.review}
          onChange={handleChange}
          placeholder="Your Review"
          className="w-full p-2 border rounded mb-4"
          required
        ></textarea>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">Submit</button>
      </form>
      
      {/* Response Message */}
      {responseMessage && <p className="mt-4 text-green-500">{responseMessage}</p>}

      {/* Reviews Section */}
      <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-red-600">REVIEWS</h3>
        <div className="mt-4 space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
              <p className="font-bold text-red-600">{review.name}</p>
              <p>{review.review}</p>
              <p className="text-sm text-gray-500">{new Date(review.date).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
