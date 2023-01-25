import express, { Request, Response } from 'express';
import fs from 'fs';
const port = 6969;
import books from './data/books.json';

const app = express();

function bookBlocking(_req: Request, res: Response) {
  const file = fs.readFileSync('./data/books.json', {'encoding': 'utf-8'});
  res.json(file);
};

function bookNonBlocking(_req: Request, res:Response){
  fs.readFile('./data/books.json', 'utf-8', (err, data) => {
    console.log(err);
    if(err) throw err;    
    res.send(data);
  });

};

async function bookPromise(_req:Request, res:Response){
  const fsPromises = fs.promises;
  // try {
  //   const file = await fsPromises.readFile('./data/books.json', 'utf-8');
  //   res.send(file); 
  // } catch(err){
  //   console.error(err);
  // }

    fsPromises.readFile('./data/books.json', 'utf-8')
    .then(data => res.send(data))
    .catch(err => console.error(err))
}

app.get('/books-blocking', bookBlocking);

app.get('/books/non-blocking', bookNonBlocking);

app.get('/books/promise', bookPromise);

app.get('/books', (_req:Request, res:Response) => {
  console.log('CONSOLE');
  res.send(JSON.stringify(books));
});



app.listen(port, () => {
  console.log(`Big Brother is watching on port ${port}`);
});