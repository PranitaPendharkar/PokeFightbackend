const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(
    process.env.MONGO_URI,
    options,
    (err) => {
      if (err) console.log(err);
      else console.log("mongdb is connected");
    }
  );
  console.log(`MongoDB is connected to ${connection.connection.name}`);
};

module.exports = connectDB;
