const express = require("express");
const Toilet = require("../models/Toilet");
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        // const submittedBy = req.user.id
        const { title, address, description, images } = req.body;
        const newToilet = new Toilet({ title, address, description, images });
        // const newToilet = new Toilet({ title, address, description, submittedBy, images });
        await newToilet.save();
        res.status(201).json({ message: "Toilet submitted successfully", toilet: newToilet });
    } catch (error) {
        res.status(500).json({ error: "Submission failed", details: error.message });
    }
});


router.get("/", async (req, res) => {
    try {
        const toilets = await Toilet.find().populate("submittedBy", "username");
        res.json(toilets);
    } catch (error) {
        res.status(500).json({ error: "Error fetching toilets" });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const toilet = await Toilet.findById(req.params.id).populate("submittedBy", "username");
        if (!toilet) return res.status(404).json({ error: "Toilet not found" });

        res.json(toilet);
    } catch (error) {
        res.status(500).json({ error: "Error fetching toilet", details: error.message });
    }
});


router.put("/:id", async (req, res) => {
    try {
        const updatedToilet = await Toilet.findByIdAndUpdate(
            req.params.id,
            req.body,  
            { new: true, runValidators: true } 
        ).populate("submittedBy", "username");

        if (!updatedToilet) return res.status(404).json({ error: "Toilet not found" });

        res.json({ message: "Toilet updated successfully", toilet: updatedToilet });
    } catch (error) {
        res.status(500).json({ error: "Error updating toilet", details: error.message });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const deletedToilet = await Toilet.findByIdAndDelete(req.params.id);

        if (!deletedToilet) return res.status(404).json({ error: "Toilet not found" });

        res.json({ message: "Toilet deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting toilet", details: error.message });
    }
});

module.exports = router;
