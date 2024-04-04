const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const MONGODB_URI = "mongodb+srv://Admin:TechOne2401@multi-media-app.nywmu3r.mongodb.net/?retryWrites=true&w=majority&appName=Multi-Media-App"

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send({message: "Hello"})    
})

mongoose.connect(MONGODB_URI).then(() => {
    app.listen(3000)
})