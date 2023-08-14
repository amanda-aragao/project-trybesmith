import { Router } from 'express';
import productsController from '../controllers/productsController';
import loginController from '../controllers/loginController';
import validateToken from '../middlewares/validateToken';

const productsRouter = Router();

productsRouter.post('/products', productsController.addNewProduct);
productsRouter.get('/products', productsController.listAllProduct);
productsRouter.post('/login', validateToken, loginController.userLogin);

export default productsRouter;