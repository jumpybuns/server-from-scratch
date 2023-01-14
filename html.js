const http = require("http");
const port = 6969;
const host = 'localhost';
 
const requestListener = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end("<html><body><h1 style='display: flex; justify-content: center;  align-content: center; height: 50vh'>Now this is what I call HTML</h1><body><html>");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`this server is on http://${host}:${port}`);
});