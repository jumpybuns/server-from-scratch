"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const port = 6969;
const host = 'localhost';
const requestListener = (_req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end("<html><body><h1 style='display: flex; justify-content: center;  align-content: center; height: 50vh'>Now this is what I call HTML</h1><body><html>");
};
const server = http_1.default.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`this server is on http://${host}:${port}`);
});
//# sourceMappingURL=html.js.map