const neo4j = require("neo4j-driver");

const driver = neo4j.driver(
  "neo4j://localhost:7687",
  neo4j.auth.basic("neo4j", "12345678")
);
const myFunc1 = async () => {
  try {
    await driver.verifyConnectivity();
    console.log("Driver created");
  } catch (error) {
    console.log(`connectivity verification failed. ${error}`);
  }
};

const session = driver.session();

const myFunc = async () => {
  try {
    await session.run("CREATE (i:Item)");

    // const singleRecord = result.records[0]
    // const greeting = singleRecord.get(0)

    // console.log(greeting)
  } catch (error) {
    console.log(`unable to execute query. ${error}`);
  } finally {
    await session.close();
  }
  // on application exit:
  await driver.close();
};
myFunc1();
myFunc();
// var express = require("express");
// var path = require("path");
// var logger = require("morgan");
// var bodyParser = require("body-parser");
// var neo4j = require("neo4j-driver");

// var app = express();

// //view engine
// app.set("views", path.join(__dirname, "views"));
// app.set("view engion", "ejs");

// app.use(logger("dev"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// var driver = neo4j.driver(
//   "bolt://localhost:7687",
//   neo4j.auth.basic("neo4j", "Wy0715Wy")
// );
// var session = driver.session();

// app.get("/", (req, res) => {
//   session
//     .run("MATCH(n:Movie) RETURN n LIMIT 25")
//     .then(function (result) {
//       result.records.forEach((record) => {
//         console.log(record);
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   res.send("it works");
// });

// app.listen(3000);
// console.log("server started on port 3000");

// module.exports = app;
