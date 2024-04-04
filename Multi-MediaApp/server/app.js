const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const MONGODB_URI = "mongodb+srv://Admin:TechOne2401@multi-media-app.nywmu3r.mongodb.net/?retryWrites=true&w=majority&appName=Multi-Media-App"

// controller imports
const auth = require("./controllers/authController.js");
const albums = require("./controllers/AlbumController.js");

app.use(express.json());
app.use(cors());

// controllers and their routes
app.use('/auth', auth);
app.use('/albums', auth);

app.get("/", (req, res) => {
    res.send({message: "Hello"});
})

mongoose.connect(MONGODB_URI).then(() => {
    app.listen(3000);
})
