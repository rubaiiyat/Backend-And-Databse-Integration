const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    /* fs.readFile("index.html", function (error, data) {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    }); */

    const mydata = fs.readFileSync("index.html");
    res.writeHead(200, { "content-type": "text/html" });
    res.write(mydata);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
