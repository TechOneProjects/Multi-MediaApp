const {Schema, model} = require("mongoose")

const album = new Schema({
    artist: String,
    cover_image: String,
    title: String,
    year: Number,
    genres: Array,
    id: Number
})

module.exports = model("albums", album);