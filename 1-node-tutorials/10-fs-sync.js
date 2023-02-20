// when it comes to file module,
// we can do it asynchronously which is non-blocking 
// we can do it synchronously which is blocking 

const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8') // default encoding is utf8
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first,second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)// if the file does not exist, the code will generate one
// if the file does exist, then the code will overwrite all content
// if we add one more argument {flag:'a'}, then node will append the content to the file

console.log('done with this task \nstarting the next one');