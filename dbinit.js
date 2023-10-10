const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 30000,
  });
  console.log(`MongoDB is connected to ${connection.connection.name}`);
};

module.exports = connectDB;
