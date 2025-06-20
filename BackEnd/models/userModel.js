const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
