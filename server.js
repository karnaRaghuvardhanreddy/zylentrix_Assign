const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const { errorHandler } = require("./middlewares/errorHandler");
const cors = require("cors");

dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use(errorHandler);


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));