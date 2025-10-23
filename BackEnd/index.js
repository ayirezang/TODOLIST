const express = require("express");
const path = require("path");

const { mongoose } = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");

const server = express();
server.use(
  cors({
    origin: ["http://localhost:5173", "https://todolist-fgyu.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api", todoRoutes);

server.use("/api", userRoutes);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Connected to Mongo "))
  .catch((err) => console.error("MongoDB connection error:", err));
const PORT = process.env.PORT || 4001;
server.listen(PORT, () => console.log(`server is ready on port  ${PORT}`));
