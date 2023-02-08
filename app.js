// npm - global command, comes with node
// npm --version: to check version of npm

// local dependency - use it only in this particular project
// npm i <packageName>
// this is more commonly used
// all local dependencies will be clearly indicated in package.json
// all local dependencies will be downloaded in node_modules folder

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


// the usual way of importing this expernal dependency is to use _ as a variable name
const _ = require('lodash') 

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);
