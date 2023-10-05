const express = require("express");

const {
  getAllPokes,
  getOnePokemon,
  getAdditionalInfo,
} = require("../controllers/Pokedex");

const api = express.Router();

api.route("/pokemons").get(getAllPokes);
api.route("/pokemons/:id").get(getOnePokemon);
api.route("/pokemons/info/:id").get(getAdditionalInfo);

module.exports = api;
