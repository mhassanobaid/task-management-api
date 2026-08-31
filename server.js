const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Task Management API is running 🚀",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
