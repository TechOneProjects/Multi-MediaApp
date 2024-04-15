const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Images = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  }
});

const Image = mongoose.model("Image", Images);

module.exports = Image;