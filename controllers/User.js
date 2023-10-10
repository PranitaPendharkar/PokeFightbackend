const User = require("../schemas/UserSchema");

//get user
const getOneUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: id });

    if (user) {
      res.status(200).json(user);
      console.log(user);
    } else {
      res.status(404).json({ msg: "could not find this user" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to find user data" });
    console.log(err);
  }
};
//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users.length) {
      res.status(200).json({ msg: "No users found" });
    } else {
      res.status(200).json({ users });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to find user data" });
    console.log(err);
  }
};
//create user
const createUser = async (req, res) => {
  const { username, game_lost, game_won, score } = req.body;

  try {
    const newUser = new User({
      username,
      game_lost,
      game_won,
      score,
    });
    await newUser.save();

    // res.status(201).json({ msg: `${newUser.username} is created` });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to create new user data" });
  }
};
//update user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { username, game_lost, game_won, score } = req.body;

    const user = await User.findByIdAndUpdate(
      { _id: id },
      {
        username,
        game_lost,
        game_won,
        score,
      },
      { new: true }
    );

    if (user) {
      res.status(200).json({ msg: "User updates successfully", user });
    } else {
      res.status(404).json({ msg: "could not find this user" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to find user data" });
  }
};
//delete user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (user) {
      res.status(200).json({ msg: "User deleted successfully", user });
    } else {
      res.status(404).json({ msg: "could not find this user" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to find user data" });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
  getOneUser,
};
