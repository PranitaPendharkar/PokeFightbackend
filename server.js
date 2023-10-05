const express = require("express");
const app = express();
const axios = require("axios");
const fs = require("fs");
require("dotenv").config();
app.use(express.json());
require("cors");
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`connected to localhost:${PORT}`);
});
