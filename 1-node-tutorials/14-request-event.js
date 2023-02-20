const http = require("http");

//以前是用这个方法建立server，每当有人进入our website，我们都会执行这个callback function，我们尝试用EventEmitter的方法去实现
// const server = http.createServer((req,res)=>{
//     res.end("Welcome")
// })

// Using Event Emitter API
const server = http.createServer();
// emits request event
//subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5001);
