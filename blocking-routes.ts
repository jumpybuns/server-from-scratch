import express, { Request, Response } from 'express';
import authors from './data/authors.json';
const port = 6969;


const app = express();

const loop = () => {
  for(let i = 0; i < 50; i++) {
    console.log('CONSOLE', i);
  }
}

app.get('/authors', (_req: Request, res: Response) => {
  loop();
  res.send(JSON.stringify(authors));
})


app.listen(port, () => {
  console.log(`Big Brother is watching on port ${port}`);
})