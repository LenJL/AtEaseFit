const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    try {
        // ✅ Extract token correctly
        const authHeader = req.header("Authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided" });
        }
        
        const token = authHeader.split(" ")[1]; // Extract token part
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(401).json({ message: "User not found" });
        }

        next(); // Move to the next function
    } catch (error) {
        console.error("❌ Authentication error:", error.message);
        res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = authMiddleware;
