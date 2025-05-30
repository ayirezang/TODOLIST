const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
//authentication
const jwt = require("jsonwebtoken");
require("dotenv").config();

//signup
const signUp = async (req, res) => {
  //data from the req.body
  const { Username, password, email } = req.body;
  try {
    //check ifuser already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
      //hash password
    }

    bcrypt.hash(password, 10).then((hash) => {
      //create a new user and save to the database
      const user = new userModel({
        Username,
        email,
        password: hash,
      });
      //create a token
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });

      user
        .save()
        .then((user) => {
          res
            .cookie("token", token, {
              httpOnly: true,
              secure: false,
              maxAge: 24 * 60 * 60 * 1000, //24hrs
            })
            .status(201)
            .json({
              message: "user created successfully",
              user: {
                Username: user.Username,
                email: user.email,
              },
            });
        })
        .catch((error) => {
          res.status(500).json({ message: "error creating user", error });
        });
    });
  } catch (error) {
    console.error("Signup error:", error);
    res
      .status(500)
      .json({ message: "error creating user", error: error.message });
  }
};
//sign in
const signIn = async (req, res) => {
  try {
    //data from reqbody
    const { email, password } = req.body;

    //if user already exists
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "user not found" });
    }
    //check if password is correct
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    //create a token
    const token = jwt.sign({ id: existingUser._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .status(201)
      .json({
        message: "sign in successful",
        existingUser: {
          Username: existingUser.name,
          email: existingUser.email,
        },
      });
  } catch (error) {
    console.error("SignIN error:", error);
    res
      .status(500)
      .json({ message: "error SIGNING IN user", error: error.message });
  }
};

//signout
const signOut = async (req, res) => {
  try {
    res
      .clearCookie("token")
      .status(201)
      .json({ message: "user signed out successfully" });
  } catch (error) {
    res.status(400).json({ message: "error ", error });
  }
};

module.exports = { signUp, signIn, signOut };
