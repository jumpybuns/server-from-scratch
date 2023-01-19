import http, { IncomingMessage, ServerResponse} from "http";
import fs from 'fs';
const port = 6969;

const loop = () => {
  let count;
  for(let i = 0; i < 10; i++){
    count = i + 1;
    console.log(count);
  }
}

const requestListener = (_req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200);
  fs.readFile(__dirname + '/data/books.json', (_err, data) => {
    try {
      res.end(JSON.stringify(data))
    } catch (err){
      console.error(err);
    }
  })
  loop();
}


const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Big Brother is watching on port ${port}`);
})