const http = require("http");
const port = 6969;
const host = 'localhost';
 
const requestListener = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "this is a JSON response"}`);
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`this server is on http://${host}:${port}`);
});