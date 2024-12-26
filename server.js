import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Temporary storage for reviews
let reviews = [];

// API to handle review submissions (POST /api/reviews)
app.post("/api/reviews", (req, res) => {
  const { name, email, review } = req.body;

  if (!name || !email || !review) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Save review to the storage
  reviews.push({ name, email, review, date: new Date() });
  res.status(200).json({ message: "Review submitted successfully." });
});

// API to fetch all reviews (GET /api/reviews)
app.get("/api/reviews", (req, res) => {
  res.status(200).json(reviews);
});

// Root route (GET /)
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
