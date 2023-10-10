const Game = require("../schemas/GameSchema");

const getallgames = async (req, res) => {
  try {
    const games = await Game.find();
    if (!games.length) {
      res.status(200).json({ msg: "No games in the DB" });
    } else {
      res.status(200).json({ games });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const creategame = async (req, res) => {
  try {
    // We grab exactly the keys that we have in the blueprint (Schema)
    const { pokemon1, pokemon2, winner, looser } = req.body;
    const game = await Game.create({
      pokemon1,
      pokemon2,
      winner,
      looser,
    });
    await game.save();
    res.status(201).json({ msg: `Game is created` });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getallgames,
  creategame,
};
