    const express = require('express');
    const connectDB = require('./config/db');
    const dotenv = require('dotenv');
    const cors = require('cors');
    const authroutes = require("./routes/auth")
    dotenv.config(); // ✅ Load env variables
    connectDB(); // ✅ Connect to DB

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/api/auth', authroutes);
    app.use("/uploads", express.static("uploads"));


    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
