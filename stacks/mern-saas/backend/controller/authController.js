const User = require("../model/User");
const { generateToken } = require("../utils/jwt");

// Register
const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const user = await User.create({
            email,
            password,
        });

        const token = generateToken({
            id: user._id,
            role: user.role,
        });

        res.status(201).json({
            message: "User registered successfully",
            token,
        });
    } catch (error) {
        next(error);
    }
};

// Login
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }

        const token = generateToken({
            id: user._id,
            role: user.role,
        });

        res.status(200).json({
            message: "Login successful",
            token,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { register, login };