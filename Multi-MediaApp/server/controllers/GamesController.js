const express = require("express")
const router = express.Router()
const gamesModel = require('../models/GamesModel.js')


//Route to fetch all games 
router.get("/", async (req, res) => {
    try{

        const games = await gamesModel.find()
        const gamesProcessingObject = {}

        res.json(games);

    }catch(error){
        console.log('Error while fetching')
        res.status(500).json({ message: error.message });
    }
})

//Route to update a single game
router.put("/:id", async (req, res) => {
    console.log('Update Route Reached')
    const newGameData = req.body

    const {_id} = req.body

    if(!_id) return res.json({message: "ID required"})
    console.log(`Captured ID: ${_id}`)

    for (const key in newGameData) {
        if (Object.prototype.hasOwnProperty.call(newGameData, key)) {
          const value = newGameData[key];
          console.log(`Key: ${key}, Value: ${value}`);
        }
      }
    await gamesModel.findByIdAndUpdate(_id, {
        name: 'any name'
     })

    console.log('End of route method')
    //const updatedGame = await gamesModel.findById(id);
    //console.log(`New Game Name: ${updatedGame.name}`)
    //res.status(200)
})

router.get("/all-games",async (req,res)=> {
    gamesModel.find()
    .then((result)=> console.log('My fetch result:', result))
    .catch((error)=> {
        console.log(error)
    })
})  
module.exports = router