"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }

    return new (P || (P = Promise))(function (resolve, reject) {

        function fulfilled(value) 
        { try { 
            step(generator.next(value)); 
        }
         catch (e) { reject(e); } }
        function rejected(value) 
        { try {
             step(generator["throw"](value)); 
            }
             catch (e) { reject(e); } }
        function step(result) 
        { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToDo = exports.updateToDo = exports.createToDo = exports.getAllToDos = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();

// Get all TODOs

const getAllToDos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield prisma.toDo.findMany();
        res.json(todos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching ToDos' });
    }
});
exports.getAllToDos = getAllToDos;

// Create a new TODO

const createToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.body;
    try {
        const newToDo = yield prisma.toDo.create({
            data: { title },
        });
        res.status(201).json(newToDo);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating ToDo' });
    }
});
exports.createToDo = createToDo;

// Update a TODO

const updateToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, completed } = req.body;
    try {
        const updatedToDo = yield prisma.toDo.update({
            where: { id },
            data: { title, completed },
        });
        res.json(updatedToDo);
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating ToDo' });
    }
});
exports.updateToDo = updateToDo;

// Delete a TODO

const deleteToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.toDo.delete({
            where: { id },
        });
        res.status(204).end();
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting ToDo' });
    }
});
exports.deleteToDo = deleteToDo;
