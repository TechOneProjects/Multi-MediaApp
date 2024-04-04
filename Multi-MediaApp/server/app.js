const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
// const MONGODB_URI = "mongodb+srv://Admin:TechOne2401@multi-media-app.nywmu3r.mongodb.net/?retryWrites=true&w=majority&appName=Multi-Media-App"
const MONGODB_URI = "mongodb+srv://Admin:TechOne2401@multi-media-app.nywmu3r.mongodb.net/Multi-Media-App?retryWrites=true&w=majority&appName=Multi-Media-App"

// controller imports
const auth = require("./controllers/authController.js");
const albums = require("./controllers/AlbumController.js");
const movies = require("./controllers/MoviesController.js");

app.use(express.json());
app.use(cors());

// controllers and their routes
app.use('/auth', auth);
app.use('/albums', albums);
app.use('/movies', movies)

app.get("/", (req, res) => {
    res.send({message: "Hello"});
})

mongoose.connect(MONGODB_URI).then(() => {
    app.listen(3000);
})
