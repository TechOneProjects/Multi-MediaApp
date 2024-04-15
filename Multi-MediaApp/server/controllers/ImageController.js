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

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findByIdAndUpdate(id, req.body);

    if (!image) {
      return res
        .status(404)
        .json({ message: `Cannot find image with ID ${id}` });
    }

    const updatedImage = await Image.findById(id);

    res.status(200).json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findByIdAndDelete(id);

    if (!image) {
      return res
        .status(404)
        .json({ message: `Whoops! No Images with ID of ${id}.` });
    }

    res.status(200).json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
