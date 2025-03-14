const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// @route   POST /signup
router.post('/Signin', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        const newUser = await User.create({ name, email, password });

        // Create JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        res.status(201).json({ token, user: { id: newUser._id, name: newUser.name, email: newUser.email } });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /login
router.post('/Login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Create JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /google (Google Login)
router.post('/google', async (req, res) => {
    const { name, email, googleId } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            user = new User({
                name,
                email,
                googleId,
            });
            await user.save();
        }

        // Create JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Google auth error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
