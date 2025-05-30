const express = require("express");
const bodyParser = require("body-parser");
const { mongoose } = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const server = express();

server.use(bodyParser.json());
server.use("/api", userRoutes);

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Connected to Mongo "))
  .catch((err) => console.error("MongoDB connection error:", err));
server.listen(4001, "127.0.0.1", () => console.log("server is ready"));
