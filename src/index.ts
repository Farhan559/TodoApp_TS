// src/index.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  // Create a new TODO

  const newToDo = await prisma.toDo.create({
    data: {
      title: 'Buy Items',
    },
  });
  console.log('New ToDo created:', newToDo);

  // Retrieve all TODOs

  const allToDos = await prisma.toDo.findMany();
  console.log('All ToDos:', allToDos);


  // Update a TODO

  const updatedToDo = await prisma.toDo.update({
    where: { id: newToDo.id },
    data: { completed: true },
  });
  console.log('Updated ToDo:', updatedToDo);

  // Delete a TODO
  
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




  