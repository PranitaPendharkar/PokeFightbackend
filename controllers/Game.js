const Game = require("../Schemas/Game");


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
      const { myPokemonName, enemyPokemonName,winner,last_updated } = req.body;
      const game = await Game.create({ myPokemonName, enemyPokemonName,winner,last_updated });
      res.status(201).json({ msg: `Game is created` });
      
    } catch (error) {
      res.status(500).json(error);
    }
  };


  
module.exports = {
    getallgames,
    creategame
  };