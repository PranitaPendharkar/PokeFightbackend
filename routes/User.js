const express = require("express");
const api = express.Router();

const {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
  getOneUser,
} = require("../controllers/User");

api.route("/").post(createUser).get(getAllUsers);
api.route("/:id").delete(deleteUser).put(updateUser).get(getOneUser);

module.exports = api;
