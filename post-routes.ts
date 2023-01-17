import http from "http";
const port = 6969;
const host = 'localhost';
import books from './data/books.json';
import authors from'./data/authors.json';
 
const requestListener = (_req: any, res: any) => {
  res.setHeader("Content-Type", "application/json");
  switch(_req.url){
    case "/books":
      res.writeHead(200);
      res.end(JSON.stringify(books));
      break
    case "/authors":
      res.writeHead(200);
      res.end(JSON.stringify(authors));
      break
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'not found' }));
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`this server is on http://${host}:${port}`);
});