import express from "express";
import cors from "cors";
import likeRoutes from "./src/routes/like.routes.js";
import { connectDB, disconnectDB } from "./src/utils/db.js";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create Express server
const app = express();

// Set port
const PORT = process.env.PORT || 8080;

// Express configuration
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/likes", likeRoutes);

// Connect to MongoDB
(async () => {
  await connectDB();
})();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle graceful shutdown
process.on("SIGINT", async () => {
  console.log("Shutting down gracefully...");
  await disconnectDB();
  process.exit(0);
});