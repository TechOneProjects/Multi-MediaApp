const express = require("express")
const router = express.Router();
const Thought = require("../models/ThoughtModel.js")


router.post("/", async (req, res) => {
    try {
        const { message } = req.body;
        const newMessage = new Thought({ message });
        await newMessage.save();
        res.status(201).json({ newMessage: 'Text uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {
    const messages = await Thought.find().sort({ timestamp: -1 });
    res.json(messages);
});

module.exports = router
