const data = require("../assets/pokedex.json");

const getAllPokes = (req, res) => {
  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(":((((");
  }
};

const getOnePokemon = (req, res) => {
  try {
    const { id } = req.params;
    const found = data.find((item) => item.id == id);
    res.status(200).json(found);
    console.log(found);
  } catch (err) {
    res.status(500).json(":((((");
  }
};

const getAdditionalInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const found = data.find((item) => item.id == id);
    const foundName = found.name.english.toLowerCase();

    const raw = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${foundName}`
    ).then((data) => data.json());

    res.send(raw);
  } catch (err) {
    res.status(500).json(":((((");
  }
};

module.exports = { getAllPokes, getOnePokemon, getAdditionalInfo };
