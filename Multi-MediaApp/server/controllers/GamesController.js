const express = require("express")
const router = express.Router()
const gamesModel = require('../models/GamesModel.js')


//Route to fetch all games 
router.get("/", async (req, res) => {
    try {

        const games = await gamesModel.find()
        const gamesProcessingObject = {}

        res.json(games);

    } catch (error) {
        console.log('Error while fetching')
        res.status(500).json({ message: error.message });
    }
})
router.post("/create", async (req, res) => {
    try {
        console.log('Body: ')
        console.log(req.body)

        const games = await gamesModel.create(req.body);
        //res.status(200).json(games);
      } catch (error) {
        console.error(error.message);
      }
})
//Route to update a single game
router.put("/:id", async (req, res) => {
    console.log('Update Route Reached')
    try {
        console.log('Req: ')
        console.log(req.body)

        const { id } = req.params
        const {name, description, image_path } = req.body

        if (!id) return res.json({ message: "ID required" })
        console.log(`Captured ID: ${id}`)
        console.log(`name val: ${name}`)
        await gamesModel.findByIdAndUpdate(id, {
            name: name,
            description: description,
            image_path: image_path
        })
        res.status(200)
    } catch (err) {
        console.log(err)
    }
    console.log('End of route method')
})

router.get("/all-games", async (req, res) => {
    gamesModel.find()
        .then((result) => console.log('My fetch result:', result))
        .catch((error) => {
            console.log(error)
        })
})

router.delete("/:id", async (req,res)=> {
    console.log('delete route reached...')
    console.log('ID:')
    const { id } = req.params
    console.log(id)

    await gamesModel.findByIdAndDelete(id)
})
module.exports = router