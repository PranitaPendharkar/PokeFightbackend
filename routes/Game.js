const express = require("express");
const api = express.Router();

const { getallgames, creategame } = require("../controllers/Game");

api.route("/").post(creategame).get(getallgames);
// api.route("/:id").delete(deleteUser).put(updateUser).get(getOneUser);

module.exports = api;
