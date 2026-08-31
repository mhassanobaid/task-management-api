const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Task Management API is running 🚀",
  });
});

const startServer = async ()=>{
  // Connect to MongoDB
  await connectDB(process.env.MONGODB_URI).then(()=>{
    console.log(`Connected to mongodb`);
  });

  app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
  });
}

startServer();
