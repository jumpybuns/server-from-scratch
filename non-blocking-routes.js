const http = require("http");
const port = 6969;
const books = require('./data/books.json');
const authors = require('./data/authors.json');
const fs = require('fs');

const loop = () => {
  for(let i = 0; i < 10; i++){
    i = i + 1;
    console.log(i);
  }
}

fs.readFile(__dirname + '/data/books.json', async (err, data) => {
  if(err) throw err;
  await loop;
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