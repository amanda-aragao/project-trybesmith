import express from 'express';
import productsRouter from './routers/productsRouter';

const app = express();

app.use(express.json());
app.use(productsRouter);

app.get('/', (_req, res) => {
  res.status(200).send('testando aplicação');
});


export default app;
