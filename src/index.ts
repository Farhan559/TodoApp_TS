// src/index.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a new ToDo
  const newToDo = await prisma.toDo.create({
    data: {
      title: 'Buy groceries',
    },
  });
  console.log('New ToDo created:', newToDo);

  // Retrieve all ToDos
  const allToDos = await prisma.toDo.findMany();
  console.log('All ToDos:', allToDos);


  // Update a ToDo
  const updatedToDo = await prisma.toDo.update({
    where: { id: newToDo.id },
    data: { completed: true },
  });
  console.log('Updated ToDo:', updatedToDo);

  // Delete a ToDo
  const deletedToDo = await prisma.toDo.delete({
    where: { id: newToDo.id },
  });
  console.log('Deleted ToDo:', deletedToDo);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
