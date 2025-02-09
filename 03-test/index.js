const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
});

server.listen(5000, () => {
  console.log("The server running in port 5000");
});
