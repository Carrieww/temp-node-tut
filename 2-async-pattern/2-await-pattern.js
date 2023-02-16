const { readFile, writeFile } = require("fs");

// ==============Version Two====================

const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
// 上面四行可以被代替成 const { readFile, writeFile } = require("fs").promises; 如果这样做，async function中的await后面应该跟的是readFile or writeFile

const start = async () => {
  // every time we have the ascyn block, wrap our code in the try catch block
  try {
    const first = await readFilePromise("./content/first.txt",'utf8');
    const second = await readFilePromise("./content/second.txt",'utf8');
    await writeFilePromise("./content/result-mind-grenade.txt",`This is awesome: ${first} ${second}`,{flag:'a'}) // flag = a means append, we can remove it for rewrite
    console.log(first, second);
  } catch {
    console.log(error);
  }
};

start()

// ==============Version One====================
// the following wrap-up function can be replcaed by the above promisify in util
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         // console.log(err);
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const start = async () => {
//   // every time we have the ascyn block, wrap our code in the try catch block
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first, second);
//   } catch {
//     console.log(error);
//   }
// };

// start();
// ==============================================
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
