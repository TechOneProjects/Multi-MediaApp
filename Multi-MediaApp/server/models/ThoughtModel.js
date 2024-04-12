const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Thoughts = new Schema({
    message: String,
    timestamp: { type: Date, default: Date.now },
    replies: [{
        message: String,
        timestamp: { type: Date, default: Date.now }
    }]
})

const Thought = mongoose.model("Thought", Thoughts)

module.exports = Thought