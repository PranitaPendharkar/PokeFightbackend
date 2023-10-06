const express = require("express");
const router = express.Router();
const game=require("../controllers/Game")

// import all the controllers
const {
  getallgames,
  creategame
} = require("../controllers/Game");

// create a new instance or express router
const api = express.Router();

// decide which controllers to execute on the specific actions


api
  .route("/game/leaderboard")
  .get(getallgames);

  api
  .route("/game/save")
  .post(creategame);

module.exports = api;