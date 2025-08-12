const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require("multer");
const path = require("path");
const User = require('../models/User');
const authMiddleware = require("../middleware/authMiddleware");

const uploads = path.join(__dirname, "../uploads");

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploads);
    },
    filename: (req, file, cb) => {
        cb(null, `${req.user.id}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

// Get User Profile (Protected)
router.get("/profile", authMiddleware, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // ✅ Sort workoutEntry by createdAt (newest first)
      const sortedWorkoutEntries = [...user.workoutEntry].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
  
      res.status(200).json({
        id: user.id,
        name: user.name || "No Name",
        email: user.email || "No Email",
        profilePic: user.profilePic
          ? `http://localhost:5000${user.profilePic}`
          : `http://localhost:5000/uploads/default.jpg`,
        bmr: user.bmr,
        maintenance: user.maintenance,
        gainWeight: user.gainWeight,
        loseWeight: user.loseWeight,
        bmi: user.bmi,
        category: user.category,
        workoutEntry: sortedWorkoutEntries, // ✅ now sorted
        workoutSplit: user.workoutSplit,

      });
    } catch (error) {
      console.error("❌ Profile fetch error:", error.message);
      res.status(500).json({ message: "Server error" });
    }
  });
  

// Upload Profile Picture (Protected)
router.post("/uploadProfilePic", authMiddleware, upload.single("profilePic"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.profilePic = `/uploads/${req.file.filename}`;
        await user.save();

        res.status(200).json({ profilePic: user.profilePic });
    } catch (error) {
        console.error("❌ Upload error:", error.message);
        res.status(500).json({ message: "Failed to upload profile picture" });
    }
});

// Save workout split
router.post("/save-workout-split", authMiddleware, async (req, res) => {
  const { gender, days } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { workoutSplit: { gender, days } },
      { new: true }
    );
    res.json({ success: true, workoutSplit: user.workoutSplit });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


// Update BMR details
router.post("/updateBMR", authMiddleware, async (req, res) => {
    try {
        const { bmr, maintenance, gainWeight, loseWeight } = req.body;
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.bmr = bmr;
        user.maintenance = maintenance;
        user.gainWeight = gainWeight;
        user.loseWeight = loseWeight;
        await user.save();
        res.status(200).json({ message: "BMR updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Update BMI details
router.post("/updateBMI", authMiddleware, async (req, res) => {
    try {
        const { bmi, category } = req.body;
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.bmi = bmi;
        user.category = category;
        await user.save();
        res.status(200).json({ message: "BMI updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Add Workout Entry
router.post("/workoutEntry", authMiddleware, async (req, res) => {
    try {
        const { weight, workout, dietMaintained } = req.body;
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.workoutEntry.push({
            date: new Date(),
            weight,
            workout,
            dietMaintained,
        });
        await user.save();
        res.status(200).json({ message: "Workout entry added successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// DELETE /api/auth/clearWorkoutEntries
router.delete("/clearWorkoutEntries", authMiddleware, async (req, res) => {
    try {
      const userId = req.user.id;
      await User.findByIdAndUpdate(userId, { $set: { workoutEntry: [] } });
      res.status(200).json({ message: "All workout entries cleared." });
    } catch (err) {
      res.status(500).json({ message: "Error clearing entries", error: err.message });
    }
  });
  

// ✅ User Registration (Signup)
router.post('/signin', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const newUser = await User.create({ name, email, password }); // ✅ Just pass password, pre-save hook will hash it

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.status(201).json({ token, user: { id: newUser._id, name: newUser.name, email: newUser.email } });
    } catch (error) {
        console.error('❌ Signin error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// ✅ User Login
router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log("❌ User not found:", email);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("❌ Password mismatch for:", email);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
        console.log("✅ Login successful for:", email);
        res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        console.error("❌ Login error:", error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// ✅ Google Login
router.post('/google', async (req, res) => {
    const { name, email, googleId } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            user = new User({ name, email, googleId });
            await user.save();
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        console.error('❌ Google auth error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;
