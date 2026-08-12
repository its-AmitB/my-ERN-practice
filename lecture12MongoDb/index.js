// Import required modules
import express from "express";
import { MongoClient } from "mongodb";

// Database configuration
const DB_NAME = "test1";
const DB_URL = "mongodb://localhost:27017";

// Create a MongoDB client instance
const client = new MongoClient(DB_URL);



// Function to establish database connection
async function connectDB() {
  try {
    // Connect to MongoDB server
    await client.connect();

    // Select the required database
    const db = client.db(DB_NAME);

    // Access the "students" collection
    const students = db.collection("students");

    // Fetch all documents from the collection
    const result = await students.find().toArray();

    console.log("Students:", result);
  } catch (error) {
    // Handle connection or query errors
    console.error("Database Error:", error);
  }
}

// Execute database connection
connectDB();



// Create Express application
const app = express();

// Start the Express server
app.listen(3005, () => {
  console.log("Server running on http://localhost:3005");
}); 