"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const express_1 = require("express");

const todosControllers_1 = require("../controllers/todosControllers");

const router = (0, express_1.Router)();

router.get('/todos', todosControllers_1.getAllToDos);

router.post('/todos', todosControllers_1.createToDo);

router.put('/todos/:id', todosControllers_1.updateToDo);

router.delete('/todos/:id', todosControllers_1.deleteToDo);

exports.default = router;

