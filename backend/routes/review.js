const express = require("express");
const Review = require("../models/Review");
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const userId = req.user.id
        const { toiletId, rating, commentText } = req.body;
        const newReview = new Review({ toiletId, userId, rating, commentText });
        await newReview.save();
        res.status(201).json({ message: "Review added", review: newReview });
    } catch (error) {
        res.status(500).json({ error: "Review submission failed", details: error.message });
    }
});


router.get("/:toiletId", async (req, res) => {
    try {
        const reviews = await Review.find({ toiletId: req.params.toiletId }).populate("userId", "username");
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Error fetching reviews" });
    }
});

module.exports = router;
