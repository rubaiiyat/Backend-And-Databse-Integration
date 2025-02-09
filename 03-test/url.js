const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const myurl = "https://www.w3schools.com/nodejs/";
  const myurlObj = url.parse(myurl, true);

  res.write(myurlObj.host);
  res.write(myurlObj.pathname);
  res.end();
});

server.listen(5000, () => {
  console.log("Server is running in port 5000");
});
