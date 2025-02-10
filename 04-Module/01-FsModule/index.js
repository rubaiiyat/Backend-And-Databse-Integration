const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // work with read file
  /* if (req.url === "/") {
    fs.readFile("index.html", function (error, data) {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });

    const mydata = fs.readFileSync("index.html");
    res.writeHead(200, { "content-type": "text/html" });
    res.write(mydata);
    res.end();
  } */

  // work with write file

  /* if (req.url === "/") {
    fs.writeFile("test.txt", "I will be win", function (error) {
      if (error) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("Failed");
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("This is home page");
        res.end();
      }
    });
  } */

  // Rename File
  /* if (req.url === "/") {
    fs.rename("test.txt", "test2.txt", function (error) {
      if (error) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("Failed");
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("File rename successfull");
        res.end();
      }
    });
  } */

  // Delete File
  /* if (req.url === "/") {
    fs.unlink("test.txt", function (error) {
      if (error) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("Failed");
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("Delete file successfull");
        res.end();
      }
    });
  } */

  // Check file exist or not
  if (req.url === "/") {
    fs.exists("test2.txt", function (error) {
      if (error) {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("Have");
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("Haven't");
        res.end();
      }
    });
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
