const { readFile, writeFile } = require('fs')

console.log('start');
// callback: run callback when we are done some functions eg click
// 异步方法：因为JavaScript的单线程模型，执行IO操作时，JavaScript代码无需等待，而是传入回调函数后，继续执行后续JavaScript代码
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log();
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log('done');
            })
    })
})

console.log('start next task'); // this log will first appear after start
// async function readFile will be offloaded first. The following code will be ran first

// later we will learn async await, which is handy and easy to replace this way of async.


// Note: without utf enoding in the middle argument, we dont get text, but get <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>

// Buffer -> String
// var text = result.toString('utf-8'); here result is 二进制


// String -> Buffer
// var buf = Buffer.from(text, 'utf-8');