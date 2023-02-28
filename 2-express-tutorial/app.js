// middleware are functions that execute during the request to the server.
// express apps are nothing but a bunch of middleware functions.

const express = require("express");
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')

//req => middleware => res

// 除非这个middleware自己带有res.send()去send back response， 否则一定要加next为argument 并 call next()
// const logger = (req,res,next) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(method, url, time);
//   next();
// };
// Best practice is to put this logger in a seperate file logger.js!

// instead of manually adding logger middleware to all routes
// we can add the following line of code without the first argument
// app.use will invoke logger for every route BELOW it!!! ORDER MATTERS!!!

// 除了位置，我们也可以add the first path argument, logger will be applied to every route startWith your path
// e.g. /api will apply logger to both /api/products and /api/items
app.use([logger,authorize]) // the execution of middleware funtions will follow the order


app.get("/",(req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
