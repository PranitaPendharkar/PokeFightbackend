const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  pokemon1: {
    type: String,
    required: true,
  },
  pokemon2: {
    type: String,
    required: true,
  },
  winner: {
    type: String,
    required: true,
  },
  looser: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Game", gameSchema);
