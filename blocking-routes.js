const http = require("http");
const port = 6969;
const books = require('./data/books.json');
const authors = require('./data/authors.json');
const fs = require('fs');

fs.readFile(__dirname + '/data/books.json', (err, data) => {
  if(err) throw err;
  for(let i = 0; i < 100000; i++){
    i = i + 1;
    console.log(i);
  }
  console.log(books);
})
 
const requestListener = (_req, res) => {
  res.writeHead(200);
  res.end(JSON.stringify(books));
}

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Big Brother is watching on port ${port}`);
})