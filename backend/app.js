const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the CORS package
const postRoutes = require("./routes/postroutes");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// Middleware to enable CORS for all origins
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
