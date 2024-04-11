const express = require("express")
const router = express.Router()
const gamesModel = require('../models/GamesModel')


//Routes to api 
router.get("/games", async (req, res) => {
    try{
        const games = await gamesModel.find()
        res.status(200).json(games);

    }catch(error){
        res.status(500).json({ message: error.message });
    }
})

module.exports = router