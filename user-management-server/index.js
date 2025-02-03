const express = require("express");
const cors = require("cors");
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Abir", address: "Bogura" },
  { id: 2, name: "Rubu", address: "Bogura" },
  { id: 3, name: "Rubaiyat", address: "Bogura" },
];
app.get("/", (req, res) => {
  res.send("User Management Server is running updated");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;

  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log("Server is running on PORT", port);
});
