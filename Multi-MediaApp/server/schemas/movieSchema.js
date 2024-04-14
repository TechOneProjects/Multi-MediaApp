const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  poster_path: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("Movies", movieSchema);

module.exports = Movie;
