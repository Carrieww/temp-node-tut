var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    const text = fs.readFileSync('./content/file.json','js')
    res.end(text) // the size of entire reading stream is very big

    // it will be wiser to read data in chunks
    // const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    // fileStream.on("data", () => {
    //   fileStream.pipe(res); // push the readStream into writeStream in res (write data in chunks)
    // });
    // fileStream.on("error", (err) => {
    //   res.end(err);
    // });
  })
  .listen(3000);
