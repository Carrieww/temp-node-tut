// this is for learning node js interaction with postman
const http = require("http");

const data = { name: "Peter Pan", email: "peter@email.com", age: 20 };

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "applicationjson" });
    res.write(JSON.stringify(data));
    res.end()
  })
  .listen(4000);
