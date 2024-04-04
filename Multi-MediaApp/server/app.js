const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Album = require("./models/Album")

const app = express();
const MONGODB_URI = "mongodb+srv://Admin:TechOne2401@multi-media-app.nywmu3r.mongodb.net/?retryWrites=true&w=majority&appName=Multi-Media-App"

app.use(express.json());
// app.use(express.urlencoded({extended: true}))
app.use(cors());

app.get("/", (req, res) => {
    res.send({message: "Hello"})    
})

app.post("/albums", async (req, res) => {
    // console.log(req.body)
    const newAlbum = new Album(req.body);
    // console.log(newAlbum)
    await newAlbum.save();
})

mongoose.connect(MONGODB_URI).then(() => {
    app.listen(3000)
})