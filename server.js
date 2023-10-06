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
const connectDB = require("./dbinit");
connectDB();
const users = require("./routes/User");
const game=require("./routes/Game")
const {
  getallgames,
  creategame
} = require("./controllers/Game");

// const pokemon = require("./routes/Pokedex");
app.use(express.urlencoded({ extended: true }));

app.use("/pokemons/info/:id", getAdditionalInfo);

app.use("/pokemons/:id", getOnePokemon);

app.use("/pokemons", getAllPokes);

app.use("/users", users);

app.use("/game/save", creategame);
app.use("/game/leaderboard", getallgames);

app.listen(PORT, () => {
  console.log(`connected to localhost:${PORT}`);
});
