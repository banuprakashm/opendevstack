const { generateToken } = require("../utils/jwt");

// Register Controller
const register = async (req, res) => {
    const { email, password } = req.body;

    // Simulated user creation (no DB yet)
    const user = {
        id: 1,
        email,
        role: "user", // default role
    };

    const token = generateToken({
        id: user.id,
        role: user.role,
    });

    res.status(201).json({
        message: "User registered successfully",
        token,
    });
};

// Login Controller
const login = async (req, res) => {
    const { email } = req.body;

    // Simulated user validation (no DB yet)
    const user = {
        id: 1,
        email,
        role: "user", // default role
    };

    const token = generateToken({
        id: user.id,
        role: user.role,
    });

    res.status(200).json({
        message: "Login successful",
        token,
    });
};

module.exports = { register, login };