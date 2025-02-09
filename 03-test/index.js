const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.write("Hello World");
    res.end();
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.write("this is about page");
    res.end();
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.write("this is contact page");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("The server running in port 5000");
});
