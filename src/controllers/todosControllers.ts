import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all ToDos
export const getAllToDos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.toDo.findMany();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching ToDos' });
  }
};

// Create a new ToDo
export const createToDo = async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    const newToDo = await prisma.toDo.create({
      data: { title },
    });
    res.status(201).json(newToDo);
  } catch (error) {
    res.status(500).json({ error: 'Error creating ToDo' });
  }
};

// Update a ToDo
export const updateToDo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const updatedToDo = await prisma.toDo.update({
      where: { id },
      data: { title, completed },
    });
    res.json(updatedToDo);
  } catch (error) {
    res.status(500).json({ error: 'Error updating ToDo' });
  }
};

// Delete a ToDo
export const deleteToDo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.toDo.delete({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting ToDo' });
  }
};
