const express = require("express");
const app = express();
const axios = require("axios");
const fs = require("fs");
require("dotenv").config();
app.use(express.json());
require("cors");
const PORT = 8080;
const cors = require("cors");
app.use(cors());
const data = require("./assets/pokedex.json");
const {
  getAllPokes,
  getOnePokemon,
  getAdditionalInfo,
} = require("./controllers/Pokedex");

app.use("/pokemons/info/:id", getAdditionalInfo);

app.use("/pokemons/:id", getOnePokemon);

app.use("/pokemons", getAllPokes);

app.listen(PORT, () => {
  console.log(`connected to localhost:${PORT}`);
});
