import { Router } from 'express';
import { getAllToDos, createToDo, updateToDo, deleteToDo } from '../controllers/todosControllers';





const router = Router();

router.get('/todos', getAllToDos);


router.post('/todos', createToDo);


router.put('/todos/:id', updateToDo);


router.delete('/todos/:id', deleteToDo);


export default router;
