const express = require("express")
const router = express.Router()
const gamesModel = require('../models/GamesModel.js')

//Routes to fetch all games 
router.get("/games", async (req, res) => {
    try{

        const games = await gamesModel.find()

        console.log(games)

        res.json(games);

    }catch(error){
        console.log('Error while fetching')
        res.status(500).json({ message: error.message });
    }
})

router.get("/all-games", (req,res)=> {
    gamesModel.find()
    .then((result)=> console.log('My fetch result:', result))
    .catch((error)=> {
        console.log(error)
    })
})  
module.exports = router