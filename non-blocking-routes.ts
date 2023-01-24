import express, { Request, Response } from 'express';
const port = 6969;
import books from './data/books.json';

const app = express();

app.get('/', (_req:Request, res:Response) => {
  console.log('CONSOLE');
  res.send(JSON.stringify(books));
});

app.listen(port, () => {
  console.log(`Big Brother is watching on port ${port}`);
})