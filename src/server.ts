import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import todoRoutes from './routes/todosRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', todoRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
