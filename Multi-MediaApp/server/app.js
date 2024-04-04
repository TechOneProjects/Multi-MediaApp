const express = require("express");
const mongoose = require("mongoose");
const movieModel = require("./schemas/movieSchema");
const cors = require("cors");

const app = express();

const port = 5000;
const uri =
  "mongodb+srv://Admin:TechOne2401@multi-media-app.nywmu3r.mongodb.net/Multi-Media-App?retryWrites=true&w=majority&appName=Multi-Media-App";

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/movies", async (req, res) => {
  try {
    const movie = await movieModel.find();
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieModel.findById(id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/movies", async (req, res) => {
  try {
    const movie = await movieModel.create(req.body);
    res.status(200).json(movie);
  } catch (error) {
    console.error(error.message);
    // res.status(500).json({ message: error.message });
  }
});

app.put("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieModel.findByIdAndUpdate(id, req.body);

    if (!movie) {
      return res
        .status(404)
        .json({ message: `Cannot find movie with ID ${id}` });
    }

    const updatedMovie = await movieModel.findById(id)

    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieModel.findByIdAndDelete(id);

    if (!movie) {
      return res
        .status(404)
        .json({ message: `Cannot find any movies with ID ${id}.` });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const start = async () => {
  try {
    await mongoose.connect(uri);
    app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
