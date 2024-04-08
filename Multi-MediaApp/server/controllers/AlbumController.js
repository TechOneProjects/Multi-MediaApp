const express = require('express');
const router = express.Router();
const Album = require("../models/AlbumModel.js");

router.post("/new", async ( req, res ) =>{
        // console.log(req.body)
        const newAlbum = new Album(req.body);
        // console.log(newAlbum)
        await newAlbum.save();
        res.status(200).send(newAlbum);
})

module.exports = router;