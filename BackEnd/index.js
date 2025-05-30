const express = require("express");
const { mongoose } = require("mongoose");
require("dotenv").config();

const server = express();
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Connected to Mongo "))
  .catch((err) => console.error("MongoDB connection error:", err));
server.listen(3000, "127.0.0.1", () => console.log("server is ready"));
