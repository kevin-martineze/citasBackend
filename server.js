require("dotenv").config();
const router = require("./routes/routes");
const express = require("express");
const app = express();
// const PORT = 3008;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api", router)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


