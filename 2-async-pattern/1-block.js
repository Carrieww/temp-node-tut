const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req); // we will get a giant object which covers a bunch of useful info 
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('Here is our short history') 
        for (let i = 0; i<1000;i++){
            for (let j = 0; j<1000;j++){
                console.log(`${i} ${j}`);
            }
        }
        // res.end()
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    }
})
// here not only the one requesting about page will encounter long processing time.
// once the about page is requested, every other subpage will be waiting for the termination of the for loop.
server.listen(5001)
