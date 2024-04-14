const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  _id: {
    type : String,
    required: true
  },
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
  },
  ongoing: {
    type: Boolean,
    required: true,
  }
});

const Games = mongoose.model("Games", gameSchema);

module.exports = Games;