const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  image_path: {
    type: String,
    required: false,
  }
});

const Games = mongoose.model("Games", gameSchema);

module.exports = Games;