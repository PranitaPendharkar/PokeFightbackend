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
    const found = data.find((item) => (item.id = id));
    res.status(200).json(found);
  } catch (err) {
    res.status(500).json(":((((");
  }
};
