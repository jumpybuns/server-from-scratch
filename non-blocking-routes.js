const http = require("http");
const port = 6969;
const books = require('./data/books.json');
const authors = require('./data/authors.json');
const fs = require('fs');

const loop = () => {
  let count;
  for(let i = 0; i < 10; i++){
    count = i + 1;
    console.log(count);
  }
}

const requestListener = (req, res) => {
  res.writeHead(200);
  fs.readFile(__dirname + '/data/books.json', (err, data) => {
    if(err) throw err;
    console.log(books);
  })
  loop();
  res.end(JSON.stringify(books));
}


const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Big Brother is watching on port ${port}`);
})