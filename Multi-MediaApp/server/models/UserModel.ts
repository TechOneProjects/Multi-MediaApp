const mongoose = require("mongoose");
// import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String,
    username: String,
})

const User = model('User', userSchema);

module.exports = User;