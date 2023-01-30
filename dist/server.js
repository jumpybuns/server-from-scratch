"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const port = 6969;
const host = 'localhost';
const requestListener = (_req, res) => {
    res.writeHead(200);
    res.end("Its amazing what you can make from scratch these days.");
};
const server = http_1.default.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`this server is on http://${host}:${port}`);
});
//# sourceMappingURL=server.js.map