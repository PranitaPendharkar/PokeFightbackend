const express = require("express");
const app = express();
const axios = require("axios");
const fs = require("fs");
require("dotenv").config();
app.use(express.json());
require("cors");
const PORT = 8080;
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
const data = require("./assets/pokedex.json");
const {
  getAllPokes,
  getOnePokemon,
  getAdditionalInfo,
} = require("./controllers/Pokedex");
const connectDB = require("./dbinit");
connectDB();
const users = require("./routes/User");
const games = require("./routes/Game");

// const pokemon = require("./routes/Pokedex");
app.use(express.urlencoded({ extended: true }));

app.use("/pokemons/info/:id", getAdditionalInfo);

app.use("/pokemons/:id", getOnePokemon);

app.use("/pokemons", getAllPokes);

app.use("/leaderboard/users", users);
app.use("/leaderboard/games", games);

app.listen(PORT, () => {
  console.log(`connected to localhost:${PORT}`);
});
