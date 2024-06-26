const express = require("express")
const router = express.Router();
const Thought = require("../models/ThoughtModel.js")


router.post("/", async (req, res) => {
    try {
        const { message, username } = req.body;
        console.log(message)
        const newMessage = new Thought({ message, username });
        await newMessage.save();
        res.status(201).json({ newMessage: 'Text uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/:thoughtId/replies', async (req, res) => {
    try {
        const message = await Thought.findById(req.params.thoughtId);
        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }
        console.log(req.body)
        message.replies.push({ username: req.body.username, message: req.body.message });
        await message.save();
        res.status(201).json(message);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/', async (req, res) => {
    const messages = await Thought.find().sort({ timestamp: -1 });
    res.json(messages);
});

router.delete('/:thoughtId', async (req, res) => {
    try {
        const message = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.delete('/:thoughtId/replies/:replyId', async (req, res) => {
    try {
        const message = await Thought.findById(req.params.thoughtId);
        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }

        const replyIndex = message.replies.findIndex(reply => reply._id.toString() === req.params.replyId);
        if (replyIndex === -1) {
            return res.status(404).json({ message: 'Reply not found' });
        }

        message.replies.splice(replyIndex, 1);
        await message.save();
        res.status(200).json({ message: 'Reply deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router
