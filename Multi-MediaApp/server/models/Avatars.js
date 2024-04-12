const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const avatar = new Schema({
    _id: String,
    name: String,
    img: String,
    description: String,
    date: Date,
    
})

const Avatar = model("avatar", avatar);

module.exports = Avatar;