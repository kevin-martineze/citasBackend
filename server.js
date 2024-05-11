// require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3008

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
