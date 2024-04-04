const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const album = new Schema({
    artist: String,
    cover_image: String,
    title: String,
    year: Number,
    genres: Array,
})

export const Album = model("albums", album);