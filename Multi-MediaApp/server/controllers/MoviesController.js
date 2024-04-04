const express = require('express');
const router = express.Router();
const movieModel = require("../models/MoviesModel.js")

router.get("/", async (req, res) => {
    try {
      const movie = await movieModel.find();
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const movie = await movieModel.findById(id);
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.post("/", async (req, res) => {
    try {
      const movie = await movieModel.create(req.body);
      res.status(200).json(movie);
    } catch (error) {
      console.error(error.message);
    }
  });

module.exports = router;
