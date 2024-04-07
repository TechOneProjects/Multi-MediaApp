const express = require("express");
const router = express.Router();
const Image = require("../models/ImageModel.js");

router.get("/", async (req, res) => {
  try {
    const gallery = await Image.find();
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const image = await Image.create(req.body);
    res.status(200).json(image);
  } catch (error) {
    console.error(error.message);
  }
});

// router.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const movie = await movieModel.findByIdAndUpdate(id, req.body);

//     if (!movie) {
//       return res
//         .status(404)
//         .json({ message: `Cannot find movie with ID ${id}` });
//     }

//     const updatedMovie = await movieModel.findById(id);

//     res.status(200).json(updatedMovie);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const movie = await movieModel.findByIdAndDelete(id);

//     if (!movie) {
//       return res
//         .status(404)
//         .json({ message: `Cannot find any movies with ID ${id}.` });
//     }

//     res.status(200).json(movie);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

module.exports = router;
