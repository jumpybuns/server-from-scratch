const http = require("http");
const port = 6969;
const host = 'localhost';
const books = require('./data/books.json');
const authors = require('./data/authors.json');
const requestListener = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/books":
            res.writeHead(200);
            res.end(JSON.stringify(books));
            break;
        case "/authors":
            res.writeHead(200);
            res.end(JSON.stringify(authors));
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'not found' }));
    }
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`this server is on http://${host}:${port}`);
});
//# sourceMappingURL=routes.js.map