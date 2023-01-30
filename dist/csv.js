"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const port = 6969;
const host = 'localhost';
const requestListener = (_req, res) => {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=oceanpals.csv");
    res.writeHead(200);
    res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
};
const server = http_1.default.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`this server is on http://${host}:${port}`);
});
//# sourceMappingURL=csv.js.map