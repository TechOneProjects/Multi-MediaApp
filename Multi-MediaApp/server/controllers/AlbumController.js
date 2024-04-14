const express = require('express');
const router = express.Router();
const Album = require("../models/AlbumModel.js");

router.post("/new", async ( req, res ) =>{
        console.log(req);
        if(req.user) {         
                const newAlbum = new Album(req.body);
                await newAlbum.save();
                res.status(200).send(newAlbum);
        } else {
                res.status(405).json({message: "Unauthorized"});
        }
})

router.get("/", async (req, res) => {
        const albums = await Album.find();
        res.send(albums)
})

router.delete("/:id", async (req, res) => {
        if(req.user) {
                const albumToDelete = await Album.deleteOne({_id: req.params.id})
                res.status(200)
        }
        else {
                res.status(405).json({message: "Unauthorized"})
        }
})

module.exports = router;