const express = require("express");
const router = express.Router();
const avatar = require("../models/Avatars");

router.get("/read", async (req, res) => {
   
  try {
    const character = await avatar.find();
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const character = await avatar.findById(id);
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/add", async (req, res) => {
    
  try {
    const character = await avatar.create(req.body);
    console.log(character);
    res.status(200).json(character);
   
  } catch (error) {
    console.error(error.message);
  }
});

router.put("/:id/update", async (req, res) => {
   
  try {
    const { id } = req.params;
    const character = await avatar.findByIdAndUpdate(id, req.body);

    if (!character) {
      return res
        .status(404)
        .json({ message: `Cannot find Avatar with ID ${id}` });
    }

    const updatedcharacter = await avatar.findById(id);

    res.status(200).json(updatedcharacter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id/delete", async (req, res) => {
    
  try {
    const { id } = req.params;
    const character = await avatar.findByIdAndDelete(id);

    if (!character) {
      return res
        .status(404)
        .json({ message: `Cannot find any Avatar with ID ${id}.` });
    }

    res.status(200).json(character);   
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;