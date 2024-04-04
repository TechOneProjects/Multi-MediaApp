const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const MONGODB_URI = "mongodb+srv://Admin:TechOne2401@multi-media-app.nywmu3r.mongodb.net/?retryWrites=true&w=majority&appName=Multi-Media-App"
const auth = require("./controllers/authController.js");

app.use(express.json());
app.use(cors());

app.use('/auth', auth);

app.get("/", (req, res) => {
    res.send({message: "Hello"});
})

mongoose.connect(MONGODB_URI).then(() => {
    app.listen(3000);
})

/*
mongodb+srv://Admin:TechOne2401@multi-media-app.nywmu3r.mongodb.net/?retryWrites=true&w=majority&appName=Multi-Media-App
mongodb+srv://Admin:TechOne2401@multi-media-app.nywmu3r.mongodb.net/?retryWrites=true&w=majority&appName=Multi-Media-App
mongodb+srv://Admin:TechOne2401@multi-media-app.nywmu3r.mongodb.net/Multi-Media-App?retryWrites=true&w=majority&appName=Multi-Media-App
*/