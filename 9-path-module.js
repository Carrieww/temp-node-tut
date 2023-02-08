const path = require('path');

console.log(path.sep)
const filePath = path.join('/content/', 'subfolder', 'test.txt')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// as our script will run in various scripts, we'd better fins a way to generate absolute path in some senarios
console.log(absolute);