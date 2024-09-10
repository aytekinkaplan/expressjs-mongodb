const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const fs = require("fs");

const homepage = fs.readFileSync("index.html");
const aboutpage = fs.readFileSync("about.html");
const contactpage = fs.readFileSync("contact.html");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(homepage);
      break;
    case "/about":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(aboutpage);
      break;
    case "/contact":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(contactpage);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end("Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
