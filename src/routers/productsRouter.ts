import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.post('/products', productsController.addNewProduct);
productsRouter.get('/products', productsController.listAllProduct);

export default productsRouter;