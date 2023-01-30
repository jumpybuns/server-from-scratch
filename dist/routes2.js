"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const port = 6969;
const requestListener = (_req, res) => {
    res.writeHead(200);
    res.end("You membered!");
};
const server = http_1.default.createServer(requestListener);
server.listen(port, () => {
    console.log(`Big Brother is watching on port ${port}`);
});
//# sourceMappingURL=routes2.js.map