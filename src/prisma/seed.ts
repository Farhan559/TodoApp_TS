import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const existingToDo = await prisma.toDo.findFirst();

  if (!existingToDo) {
    console.log('Creating initial ToDo data...');
    await prisma.toDo.createMany({
      data: [
        { title: 'Buy groceries' },
        { title: 'Do laundry' },
        { title: 'Read a book' },
      ],
    });
    console.log('Initial ToDo data created.');
  } else {
    console.log('Initial ToDo data already exists.');
  }
}

main()
  .catch(e => {
    console.error('Error during Prisma seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
