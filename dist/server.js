"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });

const express_1 = __importDefault(require("express"));

const body_parser_1 = __importDefault(require("body-parser"));

const dotenv_1 = __importDefault(require("dotenv"));

const todosRoutes_1 = __importDefault(require("./routes/todosRoutes"));

dotenv_1.default.config();

const app = (0, express_1.default)();

const port = process.env.PORT || 3000;

app.use(body_parser_1.default.json());

app.use('/api', todosRoutes_1.default);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
