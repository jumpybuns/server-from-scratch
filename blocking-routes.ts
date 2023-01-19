import http, { IncomingMessage, ServerResponse} from "http";
import fs from 'fs';
import { __String } from 'typescript';
const port = 6969;


// const loop = () => {
//   let count;
//   for(let i = 0; i < 100; i++){
//     count = i + 1;
//     console.log(count);
//   }
// }
const requestListener = (_req: IncomingMessage, res: ServerResponse) => {
  fs.promises.readFile(__dirname + '/data/books.json', {'encoding': 'utf-8'})
    .then((data: any) => {
      res.end(JSON.stringify(data));
    })
    .catch((err: any) => {
      console.error(err);
    })
}

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Big Brother is watching on port ${port}`);
})