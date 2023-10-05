const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    default: "Stinky Guest",
    minLength: [3, "Username must be not less than 3 characters!"],
    maxLength: 20,
  },
  game_lost: {
    type: Number,
    default: 0,
  },
  game_won: {
    type: Number,
    default: 0,
  },
  score: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
