const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Simple crud is running on server");
});

app.listen(port, () => {
  console.log("The Server is running on port 5000");
});