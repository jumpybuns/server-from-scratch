import http from 'http';
const port = 6969;

const requestListener = (_req: any, res: any) => {
  res.writeHead(200);
  res.end("You membered!");
}

const server = http.createServer(requestListener);



server.listen(port, () => {
  console.log(`Big Brother is watching on port ${port}`);
})