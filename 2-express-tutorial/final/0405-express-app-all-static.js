const express = require("express");
const path = require('path')
const app = express();

// setup static and middleware
// all static resources shall be in this folder
// we can use 
app.use(express.static('./public'))


// we can add index.html to ./public rather than manually sendFile it as follows
// second method is SSR server side rendering
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
//   // sending status code ia good practice to control what is sent back to the broswer
// });

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found!</h1>");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
