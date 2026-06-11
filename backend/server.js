const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const nurseRoutes = require("./routes/nurseRoutes");
const hospitalRoutes = require("./routes/hospitalRoutes");
const hireRequestRoutes = require("./routes/hireRequestRoutes");

dotenv.config();

connectDB();

const app = express();

// CORS
app.use(cors());

// JSON Parser
app.use(express.json());

// Uploads Folder Access
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/nurses", nurseRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/hire-requests", hireRequestRoutes);

app.get("/", (req, res) => {
  res.send("MedHire Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});