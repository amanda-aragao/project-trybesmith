import { Request, Response } from 'express';
import productsService from '../services/productsService';

async function addNewProduct(req: Request, res: Response): Promise<Response> {
  const response = await productsService.addNewProduct(req.body);
 
  return res.status(201).json(response);
}

export default {
  addNewProduct,
};
