const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  image_path: {
    type: String,
    required: true,
  },
});

const Games = mongoose.model("Games", gameSchema);

module.exports = Games;