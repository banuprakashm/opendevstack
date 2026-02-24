const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.get("/dashboard", protect, (req, res, next) => {
    try {
        res.json({
            message: "Protected route accessed",
            user: req.user,
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;