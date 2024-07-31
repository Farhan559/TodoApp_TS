"use strict";
// src/index.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a new ToDo
        const newToDo = yield prisma.toDo.create({
            data: {
                title: 'Buy groceries',
            },
        });
        console.log('New ToDo created:', newToDo);
        // Retrieve all ToDos
        const allToDos = yield prisma.toDo.findMany();
        console.log('All ToDos:', allToDos);
        // Update a ToDo
        const updatedToDo = yield prisma.toDo.update({
            where: { id: newToDo.id },
            data: { completed: true },
        });
        console.log('Updated ToDo:', updatedToDo);
        // Delete a ToDo
        const deletedToDo = yield prisma.toDo.delete({
            where: { id: newToDo.id },
        });
        console.log('Deleted ToDo:', deletedToDo);
    });
}
main()
    .catch(e => {
    console.error(e);
    process.exit(1);
})

    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
