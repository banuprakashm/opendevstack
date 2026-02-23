const { generateToken } = require("../utils/jwt");

const register = async (req, res) => {
    const { email, password } = req.body;

    // For now, just simulate user creation
    const user = { id: 1, email };

    const token = generateToken({ id: user.id });

    res.status(201).json({
        message: "User registered successfully",
        token,
    });
};

const login = async (req, res) => {
    const { email } = req.body;

    // Simulated user validation
    const user = { id: 1, email };

    const token = generateToken({ id: user.id });

    res.status(200).json({
        message: "Login successful",
        token,
    });
};

module.exports = { register, login };