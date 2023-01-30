import http from 'http';
const port = 6969;
const host = 'localhost';
 
const requestListener = (_req: any, res: any) => {
  res.setHeader("Content-Type", "text/csv") ;
  res.setHeader("Content-Disposition", "attachment; filename=oceanpals.csv") ;
  res.writeHead(200);
  res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`this server is on http://${host}:${port}`);
});