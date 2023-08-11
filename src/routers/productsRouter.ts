import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.post('/products', productsController.addNewProduct);

export default productsRouter;