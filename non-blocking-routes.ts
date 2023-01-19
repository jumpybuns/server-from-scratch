import http, { IncomingMessage, ServerResponse} from "http";
import fs from 'fs';
const port = 6969;

// const loop = () => {
//   let count;
//   for(let i = 0; i < 10; i++){
//     count = i + 1;
//     console.log(count);
//   }
// }

const requestListener = (_req: IncomingMessage, res: ServerResponse) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  const d = fs.readFile(__dirname + '/data/authors.json', {'encoding': 'utf-8'},  (err, data) => {
    if(!data) throw err;
    else res.end(JSON.stringify(data));
    console.log('NON-BLOCKING');
  });
  res.end(d);
};


const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Big Brother is watching on port ${port}`);
})