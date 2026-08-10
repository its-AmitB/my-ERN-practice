const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    let headerD = "";

    fs.readFile("./header.html", "utf-8", (err, headerData) => {
      if (err) {
        res.writeHeader(400, { "Content-Type": "text/plain" });
        return res.end("Error at home page");
      }
      console.log(headerData);
      headerD = headerData;
    });

    if (req.url == "/") {
      fs.readFile("./home.html", "utf-8", (err, homeData) => {
        if (err) {
          res.writeHeader(400, { "Content-Type": "text/plain" });
          return res.end("Error at home page");
        }
        res.setHeader("Content-Type", "text/html");
        res.end(headerD + "" + homeData);
      });
    } else if (req.url == "/style.css") {
      fs.readFile("./style.css", "utf-8", (err, cssData) => {
        if (err) {
          res.writeHeader(400, { "Content-Type": "text/plain" });
          return res.end("Error at css page");
        }
        res.setHeader("Content-Type", "text/css");
        res.end(cssData);
      });
    } else if (req.url == "/header.html") {
      fs.readFile("./header.html", "utf-8", (err, headerData) => {
        if (err) {
          res.writeHeader(400, { "Content-Type": "text/plain" });
          return res.end("Error loading Error");
        }
        res.setHeader("Content-Type", "text/html");
        console.log(headerData);
        res.end(headerData);
      });
    }
  })
  .listen(3013, console.log("http://localhost:3013"));
