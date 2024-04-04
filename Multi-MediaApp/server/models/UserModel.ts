import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    id: Number,
    email: String,
    password: String,
    username: String,
})

const User = model('User', userSchema);

export default User;