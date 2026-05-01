const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || username.trim() === "") {
      return res.status(400).json({ message: "Username is required" });
    }

    let user = await User.findOne({ username });

    if (!user) {
      user = await User.create({ username, email });
    }

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    console.error("User route error:", error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;