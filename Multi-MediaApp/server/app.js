const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
// const MONGODB_URI = "mongodb+srv://Admin:TechOne2401@multi-media-app.nywmu3r.mongodb.net/?retryWrites=true&w=majority&appName=Multi-Media-App"
const MONGODB_URI = "mongodb+srv://Admin:TechOne2401@multi-media-app.nywmu3r.mongodb.net/Multi-Media-App?retryWrites=true&w=majority&appName=Multi-Media-App"

// controller imports
const auth = require("./controllers/AuthController.js");
const albums = require("./controllers/AlbumController.js");
const movies = require("./controllers/MoviesController.js");
const gallery = require("./controllers/ImageController.js");
const thought = require("./controllers/ThoughtController.js")


app.use(express.json());
app.use(cors());

//authorization middlewear
app.use(async (req, res, next) => {
    console.log("checking for auth")
    const prefix = 'Bearer ';
    let auth = "";
    if (req.header("Authorization")) {
        auth = req.header('Authorization');
    }
    if (req.header("authorization")) {
        auth = req.header("authorization")
    }
   
    if (!auth) {
        next();
    } else if (auth.startsWith(prefix)) {
        const token = auth.slice(prefix.length);
        try {
            const obj = jwt.verify(token, "secret");
            // console.log(obj)
            req.user = obj
            console.log("added to req.user", req.user)
            next();
        } catch (error) {
            res.status(400).send(error)
        }
    } else {
        res.status(403).send({
            name: 'AuthorizationHeaderError',
            message: `Authorization token must start with ${prefix}`
        });
    }
})

//simple route to check if authorized
app.get("/check-auth", async (req, res) => {
    if(req.user) {
        res.json({message: "You are authorized",
     user: req.user})
    } else {
        res.status(405).json({message: "You are not authorized"})
    }
})

// controllers and their routes
app.use('/auth', auth);
app.use('/albums', albums);
app.use('/movies', movies);
app.use('/gallery', gallery);
app.use('/thought', thought)

app.get("/", (req, res) => {
    res.send({ message: "Hello" });
})

mongoose.connect(MONGODB_URI).then(() => {
    app.listen(3000);
})
