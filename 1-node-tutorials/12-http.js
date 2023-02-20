const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req); // we will get a giant object which covers a bunch of useful info 
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('Here is our short history') // 也可以直接res.end('Welcome to xxx')
        // res.end()
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    }
})
// http.createServer is looking for a callback
// req is the incoming request from clients
// res is what we are sending back

console.log('hello');
server.listen(5001)
// when we are running it using node app.js, usually we will exit from the file,
// but this time, we are waiting. Since we have a web server, which keeps listening for requests
// so we need our web server to be up 