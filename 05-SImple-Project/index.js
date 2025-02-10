const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("home.html", (error, data) => {
      res.end(data);
    });
  } else if (req.url === "/list") {
    fs.readFile("productDetails.html", (error, data) => {
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (error, data) => {
      res.end(data);
    });
  } else if (req.url === "/contact") {
    fs.readFile("contact.html", (error, data) => {
      res.end(data);
    });
  } else {
    res.end("Page Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
