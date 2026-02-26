const mongoose = require("mongoose");
const { mongoUri } = require("./env");
const { logInfo, logError } = require("../utils/logger");

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri);
        logInfo("MongoDB connected successfully");
    } catch (error) {
        logError("MongoDB connection failed");
        process.exit(1);
    }
};

module.exports = connectDB;