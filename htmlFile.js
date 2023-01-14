const http = require("http");
const port = 6969;
const host = 'localhost';
const fs = require('fs').promises;

let indexFile;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(indexFile);
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
  .then(contents => {
    indexFile = contents;
    server.listen(port, host, () => {
      console.log(`this server is on http://${host}:${port}`);
    });
  })
  .catch(err => {
    console.log(`You got an ${err} there pardner`);
    process.exit(1);
  })


