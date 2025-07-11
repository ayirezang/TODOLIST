const express = require("express");
const path = require("path");

const { mongoose } = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api", todoRoutes);

server.use("/api", userRoutes);

if (process.env.NODE_ENV === "production") {
  server.use(express.static(path.join(__dirname, "/frontend/dist")));
  server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Connected to Mongo "))
  .catch((err) => console.error("MongoDB connection error:", err));
const PORT = process.env.PORT || 4001;
server.listen(PORT, () => console.log(`server is ready on port  ${PORT}`));
