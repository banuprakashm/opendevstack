const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/env");

const protect = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Not authorized" });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = { protect };