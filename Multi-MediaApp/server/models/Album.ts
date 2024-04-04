import { Model, Schema, model } from "mongoose";

const album = new Schema({
    artist: String,
    cover_image: String,
    title: String,
    year: Number,
    genres: Array,
    id: Number
})

export const Album = model("albums", album);