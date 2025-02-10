const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.write("Working");
  res.end();
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
