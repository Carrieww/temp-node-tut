const http = require("http");
const { readFileSync } = require("fs");

// get all files
// 放在这里因为 only request this index.html once
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

// the callback will be invoked everytime the user hits our server
// req is the info comming in

const server = http.createServer((req, res) => {
  const url = req.url; // req.method = "GET"
  if (url === "/") {
    // we are providing headers (最常见的是content-type，告诉server 我们要传输的是json or html or plain ...),
    // metadata about our response
    res.writeHead(200, { "content-type": "text/html" });
    // in every response, we have to have res.end to signal that our communication is over
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    // about page
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    // 404
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(3000);
