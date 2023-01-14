const http = require("http");
const port = 6969;
const host = 'localhost';
 
const requestListener = (req, res) => {
  res.writeHead(200);
  res.end("Its amazing what you can make from scratch these days.");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`this server is on http://${host}:${port}`);
});